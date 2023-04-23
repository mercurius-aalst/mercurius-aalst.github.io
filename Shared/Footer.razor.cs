using Microsoft.JSInterop;

namespace MercuriusStatic.Shared
{
    public partial class Footer
    {
        private string link = "https://www.tiktok.com/@mercurius.aalst?is_from_webapp=1&sender_device=pc";
        private async Task BackToTop()
        {
            await JS.InvokeVoidAsync("backToTop");
        }
    }
}