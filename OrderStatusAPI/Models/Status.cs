using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace OrderStatusAPI.Models
{
    public class Status
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(450)]
        [Index(IsUnique = true)]
        public string OrderStatus { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}