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

namespace MercuriusStatic.Pages.Home
{
    public partial class Home
    {
        private Blog? blogItem;
        private string year = "";
        protected override async Task OnInitializedAsync()
        {
            DateTime tempDate = DateTime.Today;
            while (tempDate.Month != 9)
            {
                tempDate = tempDate.AddMonths(-1);
            }

            year = $"’{tempDate.Year - 2000} - ’{tempDate.Year - 1999}";
            blogItem = await Http.GetFromJsonAsync<Blog>("sample-data/blog.json");
        }

        public class Blog
        {
            public string Title { get; set; } = default !;
            public string[] Paragraphs { get; set; } = default !;
            public string? Link { get; set; } = default !;
            public string? LinkText { get; set; } = default !;
            public string? Image { get; set; } = default !;
        }
    }
}