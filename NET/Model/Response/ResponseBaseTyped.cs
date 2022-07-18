using JetBrains.Annotations;

namespace honeyshop.web.model.Response;

public class ResponseBase<T> : ResponseBase
{
    [UsedImplicitly]
    public T Value { get; set; }
    
    public ResponseBase(T value) : base()
    {
        TimeUtc = DateTime.UtcNow;
        Success = true;
        Errors = new List<string>();
        Value = value;
    }

    public ResponseBase()
    {
        
    }
    
    public ResponseBase(string? errorMessage = null, ErrorCode errorCode = ErrorCode.NoInfo)
    {
        TimeUtc = DateTime.UtcNow;
        Errors = errorMessage is null ? new List<string>() : new List<string>() { errorMessage };
        ErrorCode = errorCode;
        Success = false;
    }
    public ResponseBase(string errorMessage) : base(errorMessage)
    {
        TimeUtc = DateTime.UtcNow;
        Success = false;
        Errors = new List<string>() { errorMessage };
    }
    
    public ResponseBase(List<string> errorMessages) : base(errorMessages)
    {
        TimeUtc = DateTime.UtcNow;
        Success = false;
        Errors = errorMessages;
    }
}