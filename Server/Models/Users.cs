using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Ecommerce_backend.Models
{
   
    public class Users
    {
      
        public string firstname { get; set; }
      
        public string lastname { get; set; }

        [Key]
        public string username { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public string phone { get; set; }

        public string address { get; set; }
    }
}
