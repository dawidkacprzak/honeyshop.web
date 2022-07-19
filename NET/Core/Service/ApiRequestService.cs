using System.Net;
using System.Net.Http.Json;
using honeyshop.web.Model.Request;
using honeyshop.web.model.Response;
using Newtonsoft.Json;
using RestSharp;

namespace honeyshop.web.Core.Service;

public class ApiRequestService
{
    private readonly RestClient restClient;
    public ApiRequestService(RestClient restClient)
    {
        this.restClient = restClient;
    }

    public async Task<ResponseBase<GetOrCreateSessionResponse>> GetOrCreateSessionAsync(
        GetOrCreateSessionRequest getOrCreateSessionRequest, CancellationToken cancellationToken, bool retry = false)
    {

        try
        {
            return await PostAsync<ResponseBase<GetOrCreateSessionResponse>>(cancellationToken, "/GetOrCreateSession",
                getOrCreateSessionRequest, retry);
        }
        catch (HttpRequestException ex)
        {
            throw new Exception("Cannot process api request. " + JsonConvert.SerializeObject(ex) + JsonConvert.SerializeObject(ex.InnerException), ex);
        }
    }

    private async Task<T> PostAsync<T>(CancellationToken cancellationToken, string path, object? requestContent = null, bool retry = false) where T : ResponseBase
    {
        RestRequest request;
        if (requestContent is null)
        {
            request = new RestRequest(path, Method.Post);
        }
        else
        {
            request = new RestRequest(path, Method.Post).AddBody(requestContent, contentType: "application/json");
        }
        RestResponse responseMessage;

        int retryCounter = 0;
        bool finished = false;
        do
        {
            try
            {
                responseMessage = await restClient.PostAsync(request, cancellationToken);
                finished = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message); //todo logger
            }finally
            {
                retryCounter++;
            }
        } while (!finished && retryCounter < 3);
        responseMessage = await restClient.PostAsync(request, cancellationToken);

        if (responseMessage.IsSuccessful)
        {
            return SerializeApiResponse<T>(responseMessage.Content ?? String.Empty);
        }
        else
        {
            throw new Exception("Cannot handle api request. Try again later."); //todo logger
        }
    }

    private T SerializeApiResponse<T>(string content) where T : ResponseBase
    {
        var response = JsonConvert.DeserializeObject<T>(content);
        if (response is null)
        {
            throw new Exception("Api response is success but content is empty");
        }
        return response;
    }
}