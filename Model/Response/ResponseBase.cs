using JetBrains.Annotations;

namespace honeyshop.web.model.Response;

public class ResponseBase
{
    [UsedImplicitly] public DateTime TimeUtc { get; set; }

    [UsedImplicitly] public bool Success { get; set; }

    [UsedImplicitly] public List<string> Errors { get; set; }

    [UsedImplicitly] public ErrorCode ErrorCode { get; set; }
    [UsedImplicitly] public string ErrorCodeText
    {
        get => ErrorCode.ToString();
    }

    public ResponseBase()
    {
        TimeUtc = DateTime.UtcNow;
        Success = true;
        Errors = new List<string>();
    }

    public ResponseBase(string? errorMessage = null, ErrorCode errorCode = ErrorCode.NoInfo)
    {
        TimeUtc = DateTime.UtcNow;
        Errors = errorMessage is null ? new List<string>() : new List<string>() { errorMessage };
        ErrorCode = errorCode;
        Success = false;
    }


    public ResponseBase(List<string>? errorMessages = null, ErrorCode errorCode = ErrorCode.NoInfo)
    {
        TimeUtc = DateTime.UtcNow;
        Errors = errorMessages ?? new List<string>();
        ErrorCode = errorCode;
        Success = false;
    }
}