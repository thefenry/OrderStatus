using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderStatus.Models
{
    public class OrderDetail
    {
        public int ID { get; set; }
        public string Description { get; set; }
        [Required]
        public string ClientName { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Address { get; set; }
        public byte Image { get; set; }
        [Required]
        public virtual ApplicationUser CreatedBy { get; set; }
    }
}
