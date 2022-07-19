using System;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using Blazored.LocalStorage;
using Blazored.SessionStorage;
using honeyshop.web.Dicts;
using honeyshop.web.Model.Request;
using honeyshop.web.model.Response;
using Newtonsoft.Json;

namespace honeyshop.web.Core.Service
{
    public class UserStateService
    {
        private readonly ApiRequestService apiRequestService;
        private readonly ILocalStorageService localStorageService;
        private Guid x; 
        public UserStateService(ApiRequestService apiRequestService, ILocalStorageService localStorageService)
        {
            this.apiRequestService = apiRequestService;
            this.localStorageService = localStorageService;
            x = Guid.NewGuid();
        }

        public async Task InitializeSession(CancellationToken cancellationToken)
        {
            Console.WriteLine(x);
            string? sessionValue = await localStorageService.GetItemAsync<string>(SessionKeyDictionary.SESSION, cancellationToken: cancellationToken);
            bool isValidGuid = Guid.TryParse(sessionValue, out var parsedGuid);
            if (isValidGuid)
            {
                ResponseBase<GetOrCreateSessionResponse> response = await apiRequestService.GetOrCreateSessionAsync(
                    new GetOrCreateSessionRequest(parsedGuid),cancellationToken);
                if (!response.Success)
                {
                    if (response.ErrorCode == ErrorCode.SessionNotFound)
                    {
                        ResponseBase<GetOrCreateSessionResponse> fixSessionResponse = await CreateNewSession(cancellationToken);
                        if (fixSessionResponse.Success)
                            await localStorageService.SetItemAsStringAsync(SessionKeyDictionary.SESSION,
                                fixSessionResponse.Value.SessionId.ToString(), cancellationToken: cancellationToken);
                        else
                        {
                            throw new Exception("Cannot initialize session."); //todo logger
                        }
                    }
                }
            }
            else
            {
                ResponseBase<GetOrCreateSessionResponse> newSession = await CreateNewSession(cancellationToken);
                if (newSession.Success)
                    await localStorageService.SetItemAsStringAsync(SessionKeyDictionary.SESSION,
                        newSession.Value.SessionId.ToString(), cancellationToken: cancellationToken);
                else
                {
                    throw new Exception("Cannot initialize new session."); //todo logger
                }
            }
        }

        private async Task<ResponseBase<GetOrCreateSessionResponse>> CreateNewSession(CancellationToken cancellationToken)
        {
            return await apiRequestService.GetOrCreateSessionAsync(
                new GetOrCreateSessionRequest(), cancellationToken);
        }
    }
}

