using System.Net.Http.Json;

namespace MercuriusStatic.Pages.Geschiedenis
{
    public partial class Geschiedenis
    {
        private TimelinePoint[]? timelinePoints;
        private Prosenior[]? proseniors;
        protected override async Task OnInitializedAsync()
        {
            timelinePoints = await Http.GetFromJsonAsync<TimelinePoint[]>("sample-data/timeline.json");
            proseniors = await Http.GetFromJsonAsync<Prosenior[]>("sample-data/proseniors.json");
        }

        public class TimelinePoint
        {
            public string Date { get; set; } = default !;
            public string Text { get; set; } = default !;
            public string Link { get; set; } = default !;
        }

        public class Prosenior
        {
            public string Year { get; set; } = default !;
            public string Name { get; set; } = default !;
            public string Nickname { get; set; } = default !;
        }
    }
}