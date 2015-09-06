using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OrderStatusWebService.Startup))]
namespace OrderStatusWebService
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
