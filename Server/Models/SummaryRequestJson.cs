namespace OpenAPISummary.Model
{
    public class SummaryRequestJson
    {
        public string model { get; set; }
        public string prompt { get; set; }
        public double temperature { get; set; }
        public int maxTokens { get; set; }

    }
}
