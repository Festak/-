using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(zadanie3next.Startup))]
namespace zadanie3next
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
