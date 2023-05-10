using System.Net;

namespace OpenAPISummary.Model
{
    public class JsonResponse
    {
        public bool Success { get; set; }
        public HttpStatusCode ResponseCode { get; set; }
        public string Message { get; set; }
        public dynamic Body { get; set; }
    }
}
