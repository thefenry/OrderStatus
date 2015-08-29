using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderStatus.Models
{
    class OrderDetail
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public string ClientName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public byte Image { get; set; }
        public virtual ApplicationUser CreatedBy { get; set; }
    }
}
