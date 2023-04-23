using System.Net.Http.Json;

namespace MercuriusStatic.Pages.Media
{
    public partial class Media
    {
        private Album[]? albums;
        protected override async Task OnInitializedAsync()
        {
            albums = await Http.GetFromJsonAsync<Album[]>("sample-data/albums.json");
        }

        public class Album
        {
            public string Name { get; set; } = default !;
            public DateTime Date { get; set; } = default !;
            public string Link { get; set; } = default !;
            public string CoverUrl { get; set; } = default !;
        }
    }
}