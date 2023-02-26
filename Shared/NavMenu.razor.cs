using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using System.Net.Http;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.Web.Virtualization;
using Microsoft.AspNetCore.Components.WebAssembly.Http;
using Microsoft.JSInterop;
using MercuriusStatic;
using MercuriusStatic.Shared;
using MudBlazor;

namespace MercuriusStatic.Shared
{
    public partial class NavMenu
    {
        private bool _open = false;
        private string[][] _links = new string[][]{new string[]{"", "Home", ""}, new string[]{"praesidium", "Praesidium", ""}, new string[]{"media", "Media", ""}, new string[]{"geschiedenis", "Geschiedenis", ""}, new string[]{"clublied", "Clublied", ""}, new string[]{"kalender", "Kalender", ""}, };
        protected override void OnInitialized()
        {
            // Add classes for active links
            LocationChanged(null, null);
            nm.LocationChanged += LocationChanged;
        }

        void LocationChanged(object sender, LocationChangedEventArgs e)
        {
            for (int i = 0; i < _links.Length; i++)
            {
                if (!nm.Uri.Equals(nm.BaseUri + _links[i][0]))
                {
                    _links[i][2] = "";
                }
                else
                {
                    _links[i][2] = "active-link";
                }
            }

            StateHasChanged();
        }
    }
}