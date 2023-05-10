using Microsoft.AspNetCore.Mvc;
using Paytm;
using Paytm.Checksum;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;

namespace Ecommerce_backend.Controllers
{
   
    [ApiController]
    public class PaymentController : ControllerBase
    {
        string MID= "DIY12386817555501617";
        string Merchant_key = "bKMfNxPPf_QdZppa";
        string WEBSITE = "DIYtestingweb";
        string Channel_id= "WEB";
        string Industry_type_id = "Retail";
        string customer_id = "iPonEF85832472192671";
        string ORDERID = Guid.NewGuid().ToString();

        [HttpPost("/payment")]
        public IActionResult InitiateTransaction()
        {
            Dictionary<string, string> paytmParams = new Dictionary<string, string>();
            paytmParams.Add("MID", MID);
            paytmParams.Add("ORDER_ID", ORDERID);
            paytmParams.Add("CUST_ID", customer_id);
            paytmParams.Add("INDUSTRY_TYPE_ID", Industry_type_id);
            paytmParams.Add("CHANNEL_ID", Channel_id);
            paytmParams.Add("TXN_AMOUNT", "100");
            paytmParams.Add("WEBSITE", WEBSITE);
            paytmParams.Add("CALLBACK_URL", "http://localhost:3000/");
            paytmParams.Add("EMAIL", "CUSTOMER_EMAIL_HERE");
            paytmParams.Add("MOBILE_NO", "CUSTOMER_MOBILE_NUMBER_HERE");
            string checksum = CheckSum.GenerateCheckSum(Merchant_key, paytmParams);
            string paytmURL = "https://securegw-stage.paytm.in/order/process";
            string formHTML = "<form method='post' action='" + paytmURL + "' name='paytm'>" + "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "'>";
            foreach (string key in paytmParams.Keys)
            {
                formHTML += "<input type='hidden' name='" + key + "' value='" + paytmParams[key] + "'>";
            }
            formHTML += "<input type='submit' value='Proceed to Pay'>" + "</form>";

            return Ok(formHTML);
        }

        [HttpPost("/callback")]
        public IActionResult TransactionResponse()
        {
            string paytmChecksum = "";
            Dictionary<string, string> paytmParams = new Dictionary<string, string>();
            foreach (string key in Request.Form.Keys)
            {
                paytmParams.Add(key.Trim(), Request.Form[key].FirstOrDefault()?.Trim());
            }

            if (paytmParams.ContainsKey("CHECKSUMHASH"))
            {
                paytmChecksum = paytmParams["CHECKSUMHASH"];
                paytmParams.Remove("CHECKSUMHASH");
            }

            bool isValidChecksum = CheckSum.VerifyCheckSum(Merchant_key, paytmParams, paytmChecksum);

            if (isValidChecksum)
            {
                // process your transaction response here
                // update your system according to the transaction status
                return Ok("Transaction successful.");
            }
            else
            {
                return Ok("Transaction failed. Invalid checksum.");
            }
        }
    }
}
