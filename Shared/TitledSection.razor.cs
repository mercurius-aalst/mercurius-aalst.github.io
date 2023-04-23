using Microsoft.AspNetCore.Components;
using MudBlazor;

namespace MercuriusStatic.Shared
{
    public partial class TitledSection
    {
        [Parameter]
        public RenderFragment? ChildContent { get; set; }

        [Parameter]
        public string Title { get; set; } = default !;
        [Parameter]
        public Align Alignment { get; set; } = Align.Center;
        [Parameter]
        public string Style { get; set; } = "";
    }
}