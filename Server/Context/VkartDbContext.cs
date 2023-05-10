using Ecommerce_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce_backend.Context
{
    public class VkartDbContext : DbContext
    {
        public VkartDbContext(DbContextOptions<VkartDbContext> options) : base(options)
        {

        }
        public DbSet<Users> users { get; set; }
        public DbSet<Product> products { get; set; }



    }
}



