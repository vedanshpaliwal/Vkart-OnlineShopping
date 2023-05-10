
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ecommerce_backend.Models
{
    [Keyless]
    public class Product
    {
        public string id { get; set; }

        public string? url { get; set; }

        public string? detailurl { get; set; }

        public string? shorttitle { get; set; }

        public string? longtitle { get; set; }

        public int? mrp { get; set; }

        public int? cost { get; set; }

        public string? discount { get; set; }

        public string? description { get; set; }

        public string? discount2 { get; set; }    

        public string? tagline { get; set; }

        public string? offer { get; set; }
    }

    [Keyless]
    public class product
    {
        public string id { get; set; }

        public string url { get; set; }

        public string detailurl { get; set; }

        public Title title { get; set; }

        public Price price { get; set; }

        public string description { get; set; }

        public string discount { get; set; }

        public string tagline { get; set; }

        public string offer { get; set; }
    }
    [Keyless]
    [NotMapped]
    public class Title
    {
        public string shortTitle { get; set; }

        public string longTitle { get; set; }   
    }

    [Keyless]
    [NotMapped]
    public class Price
    {
        public int mrp { get; set; }

        public int cost { get; set; }

        public string discount { get; set; }
    }


}

//const productschema = pkg.Schema({
//    id: String,
//    url: String,
//    detailUrl: String,
//    title: Object,
//    price: Object,
//    description: Object,
//    discount: String,
//    tagline: String

//})