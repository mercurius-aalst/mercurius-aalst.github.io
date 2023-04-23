using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using static MercuriusStatic.Pages.Praesidium.Praesidium ;

namespace MercuriusStatic.Pages.Praesidium
{
    public partial class Member
    {
        [Parameter]
        public PrLid PrLid { get; set; } = default !;
        [Inject]
        public IJSRuntime JS { get; set; } = default !;
        private bool toggled = false;
        private async void ToggleDialog()
        {
            toggled = !toggled;
            if (toggled)
            {
                await JS.InvokeVoidAsync("disableScroll");
            }
            else
            {
                await JS.InvokeVoidAsync("enableScroll");
            }
        }
    }
}