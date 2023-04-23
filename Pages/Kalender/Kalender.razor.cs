using System.Net.Http.Json;

namespace MercuriusStatic.Pages.Kalender
{
    public partial class Kalender
    {
        private Activiteit[]? events;
        protected override async Task OnInitializedAsync()
        {
            events = await Http.GetFromJsonAsync<Activiteit[]>("sample-data/events.json");
        }

        public class Activiteit
        {
            public string Name { get; set; } = default !;
            public string Location { get; set; } = default !;
            public DateTime Start { get; set; } = default !;
            public bool Open { get; set; }

            public string ImageUrl { get; set; } = default !;
            public string LinkUrl { get; set; } = default !;
        }
    }
}