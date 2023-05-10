using Ecommerce_backend.Context;
using Ecommerce_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace Ecommerce_backend.Controllers
{
   
    [ApiController]
    public class UserController : ControllerBase
    {
        private VkartDbContext _db;

        public UserController(VkartDbContext db)
        {
            _db = db;
        }

        [HttpPost("/login")]
        public async Task<IActionResult> UserLogin([FromBody] UserLogin req)
        {
            try
            {
                var password = ComputeMd5Hash(req.password);
                var user = await _db.users.FirstOrDefaultAsync(u => u.username == req.username && u.password == password);

                if (user != null)
                {
                    return StatusCode(200, "User is Valid");
                }

                return StatusCode(401,"Invalid Credentials");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error occured in userlogin" + ex.Message);
                return StatusCode(500, "Internal Server Error occured in userlogin");
            }
        }

        [HttpPost("/signup")]
        public async Task<IActionResult> UserSignUp([FromBody] Users req)
        {
            try
            {
                Users newuser = new Users();
                newuser.firstname = req.firstname;
                newuser.lastname = req.lastname;
                newuser.email = req.email;  
                string passwordHash = ComputeMd5Hash(req.password);
                newuser.password = passwordHash;
                newuser.username = req.username;
                newuser.phone = req.phone;    
                newuser.address= req.address;
                
                var user = _db.users.FirstOrDefault(u => u.email == req.email);

                if (user != null)
                {
                    return StatusCode(401, "User Already Exists");
                }

                _db.users.Add(newuser);
                _db.SaveChanges();

                return StatusCode(200, "User Added Successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        [HttpPost("/signInWithOrder")]
        public async Task<IActionResult> signInWithOrder([FromBody] Users req)
        {
            try
            {
                var password = ComputeMd5Hash(req.password);
                var user = await _db.users.FirstOrDefaultAsync(u => u.username == req.username && u.password == password);

                if (user != null)
                {
                    if(user.address == null)
                    {
                        user.address = req.address;
                        _db.SaveChanges(true);
                    }
                }
                UserSignUp(req);
                return StatusCode(200, "User Added Successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
        public static string ComputeMd5Hash(string password)
        {

            MD5 md = MD5.Create();
            byte[] data = md.ComputeHash(Encoding.UTF8.GetBytes(password));
            StringBuilder res = new StringBuilder();
            for (int i = 0; i < data.Length; i++)
            {
                res.Append(data[i].ToString("x2"));
            }
            return res.ToString();
        }
    }
}
