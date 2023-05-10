using System.ComponentModel.DataAnnotations;

namespace Ecommerce_backend.Models
{
    public class UserLogin
    {

        [Key]
        public string username { get; set; }
        public string password { get; set; }
    }
}
