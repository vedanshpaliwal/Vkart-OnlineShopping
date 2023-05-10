using Ecommerce_backend.Context;
using Ecommerce_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace Ecommerce_backend.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public readonly VkartDbContext _db;
        public ProductController(VkartDbContext db)
        {
            _db = db;
        }

        [HttpGet("/products")]
        public IActionResult GetProducts()
        {
            try
            {
                var products = _db.products;
                if (products == null)
                {
                    return NotFound("No Products Found");
                }
                return Content(JsonConvert.SerializeObject(products), "application/json");

            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while retrieving products: {ex.Message}");
                return StatusCode(500, "An error occurred while retrieving products");
            }
        }

        [HttpGet("/product/{id}")]
        public async Task<IActionResult> GetProduct(string id)
        {
            try
            {
                var productItem = await _db.products.FirstOrDefaultAsync(p => p.id == id);
                if(productItem == null)
                {
                    return NotFound("Product Not Found!!");
                }
                //return Ok(productItem);
                return Content(JsonConvert.SerializeObject(productItem), "application/json");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Product Not found {ex.Message}");
                return StatusCode(500, "Product Not Found");
            }
        }

    }
}
