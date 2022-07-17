namespace honeyshop.web.Model.Request;

public class GetOrCreateSessionRequest
{
    public Guid? SessionId { get; set; }

    public GetOrCreateSessionRequest(Guid session)
    {
        this.SessionId = session;
    }

    public GetOrCreateSessionRequest()
    {
        SessionId = null;
    }
}