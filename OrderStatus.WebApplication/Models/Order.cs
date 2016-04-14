using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderStatus.WebApplication.Models
{
    public class Order
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public string ClientName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public byte Image { get; set; }
    }
}
