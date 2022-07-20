using System.Net;
using System.Net.Http.Json;
using honeyshop.web.Model.Request;
using honeyshop.web.model.Response;
using Newtonsoft.Json;

namespace honeyshop.web.Core.Service;

public class ApiRequestService
{
    private readonly HttpClient httpClient;
    public ApiRequestService(HttpClient httpClient)
    {
        this.httpClient = httpClient;
    }

    public async Task<ResponseBase<GetOrCreateSessionResponse>> GetOrCreateSessionAsync(
        GetOrCreateSessionRequest getOrCreateSessionRequest, CancellationToken cancellationToken)
    {

        try
        {
            return await PostAsync<ResponseBase<GetOrCreateSessionResponse>>(cancellationToken, "/GetOrCreateSession",
                getOrCreateSessionRequest);
        }
        catch (HttpRequestException ex)
        {
            throw new Exception("Cannot process api request. " + JsonConvert.SerializeObject(ex) + JsonConvert.SerializeObject(ex.InnerException), ex);
        }
    }

    private async Task<T> PostAsync<T>(CancellationToken cancellationToken, string path, object? requestContent = null) where T : ResponseBase
    {
        var jsonBody = requestContent is not null ? JsonContent.Create(requestContent) : null;
        HttpResponseMessage responseMessage = await httpClient.PostAsync(path,jsonBody,cancellationToken);

        if (responseMessage.IsSuccessStatusCode)
        {
            return await SerializeApiResponseAsync<T>(responseMessage.Content, cancellationToken);
        }
        else
        {
            throw new Exception("Cannot handle api request. Try again later."); //todo logger
        }
    }

    private async Task<T> SerializeApiResponseAsync<T>(HttpContent content,CancellationToken cancellationToken) where T : ResponseBase
    {
        var response = await content.ReadFromJsonAsync<T>(cancellationToken: cancellationToken);
        if (response is null)
        {
            throw new Exception("Api response is success but content is empty");
        }
        return response;
    }
}