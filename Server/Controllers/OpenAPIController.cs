using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Extensions;
using Newtonsoft.Json;
using OpenAPISummary.Model;
using System.Text;
using Microsoft.Office.Interop.Excel;
using OpenAPISummary.Services.Interfaces;

namespace OpenAPISummary.Controllers
{
    [ApiController]
    public class OpenAPIController : ControllerBase
    {
       

        [Route("api/summaryExtract")]
        [HttpPost]
        public string SummaryExtract([FromBody] SummaryRequestJson summaryRequestJson)
        {
            var API_KEY = "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";
            var endpoint = "https://api.openai.com/v1/engines/text-davinci-003/completions";
            var payload = new
            {
                prompt = summaryRequestJson.prompt,
                max_tokens = summaryRequestJson.maxTokens,
                temperature = summaryRequestJson.temperature
            };
            var json = JsonConvert.SerializeObject(payload);
            var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {API_KEY}");
            var response = client.PostAsync(endpoint, new StringContent(json, Encoding.UTF8, "application/json")).Result;
            var responseJson = response.Content.ReadAsStringAsync().Result;
            Console.WriteLine(responseJson.GetType());
            return responseJson;
           
        }

        [HttpPost("api/ReadOutput")]
        public string ReadOutput([FromBody] Suggestion content)
        {

            var API_KEY = "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";
            var endpoint = "https://api.openai.com/v1/engines/text-davinci-003/completions";

            Dictionary<String, String> OutputData = new Dictionary<String, String>();

            //reading excel data
           //to openai
           var payload = new
           {
                    prompt = content.text,
                    max_tokens = 200,
                    temperature = 0.7
            };
            var json = JsonConvert.SerializeObject(payload);
            var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {API_KEY}");
            var response = client.PostAsync(endpoint, new StringContent(json, Encoding.UTF8, "application/json")).Result;
            var responseJson = response.Content.ReadAsStringAsync().Result;
            var text = JsonConvert.DeserializeObject<GptResponse>(responseJson);
            var data = text.choices;
            string finalSuggestions = "";
            StringBuilder sb = new StringBuilder();

            foreach (var item in data ) {
                sb.AppendLine(item.text.ToString());
            }
            finalSuggestions = sb.ToString();

            return finalSuggestions;

            
            
         }
         
    }
    public class Suggestion
    {
        public string text { get; set; }
    }
}
