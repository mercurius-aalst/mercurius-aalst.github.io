using Microsoft.AspNetCore.Components.Routing;
using Microsoft.JSInterop;

namespace MercuriusStatic.Shared
{
    public partial class NavMenu
    {
        private bool _open = false;
        private string[][] _links = new string[][]{
            new string[]{"", "Home", "", ""}, 
            new string[]{"praesidium", "Praesidium", "", ""}, 
            new string[]{"media", "Media", "", ""}, 
            new string[]{"geschiedenis", "Geschiedenis", "", ""}, 
            new string[]{"clublied", "Clublied", "", ""}, 
            new string[]{"kalender", "Kalender", "", ""}, 
        };
        protected override void OnInitialized()
		{
			// Add classes for active links
			LocationChanged(null, null);
			NM.LocationChanged += LocationChanged;
        }

        void LocationChanged(object sender, LocationChangedEventArgs e)
        {
            for (int i = 0; i < _links.Length; i++)
            {
                if (!NM.Uri.Equals(NM.BaseUri + _links[i][0]))
				{
					_links[i][2] = "";
					_links[i][3] = "";
				}
                else
				{
					_links[i][2] = "active-link";
					_links[i][3] = "active-drawer-link";
				}
            }
            StateHasChanged();
        }

        private async void CloseDrawer() 
        {
            _open = false;
			await JS.InvokeVoidAsync("enableScroll");
		}

        private async void OpenDrawer()
        {
            _open = true;
			await JS.InvokeVoidAsync("disableScroll");
		}

        private void ClickLink(string to)
        {
            CloseDrawer();
            NM.NavigateTo(to);
        }

	}
}