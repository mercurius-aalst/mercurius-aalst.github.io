using Microsoft.AspNetCore.Components;
using static MercuriusStatic.Pages.Praesidium.Praesidium ;

namespace MercuriusStatic.Pages.Praesidium
{
    public partial class MemberDialog
    {
        [Parameter]
        public PrLid Member { get; set; } = default !;
        [Parameter]
        public Action ToggleDialog { get; set; } = default !;
    }
}