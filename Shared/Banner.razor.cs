using Microsoft.AspNetCore.Components;

namespace MercuriusStatic.Shared
{
    public partial class Banner
    {
        [Parameter]
        public string? Title { get; set; }

        [Inject]
        public NavigationManager NM { get; set; }

        private string Logo404Style = "display: none;";
        private string Banner404Style = "height: 14rem";
        private bool style404 = false;
        protected override void OnInitialized()
        {
            if (NM.Uri.Contains("404"))
            {
                style404 = true;
            }
        }
    }
}