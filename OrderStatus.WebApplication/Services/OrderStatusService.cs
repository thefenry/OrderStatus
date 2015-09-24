using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace OrderStatus.WebApplication.Services
{
    class OrderStatusService
    {
        public void GetAllOrders()
        {
            string url = "http://orderdetailapi.azurewebsites.net/api/Orders";
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(url);

            //Accept header for JSON format
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = client.GetAsync(url).Result;
            if (response.IsSuccessStatusCode)
            {
                //Parse the response body
                var dataObjects = response.Content.ReadAsStringAsync().Result;
            }
            else
            {
                string Error = string.Format("{0}: {1}", response.StatusCode, response.ReasonPhrase);
                //throw Exception(response.StatusCode, response.ReasonPhrase);
            }
        }
    }
}
