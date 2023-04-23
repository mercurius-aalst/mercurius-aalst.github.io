using System.Net.Http.Json;

namespace MercuriusStatic.Pages.Praesidium
{
    public partial class Praesidium
    {
        private PrLid[]? leden;
        protected override async Task OnInitializedAsync()
        {
            leden = await Http.GetFromJsonAsync<PrLid[]>("sample-data/praesidium.json");
        }

        public class PrLid
        {
            public string FirstName { get; set; } = default !;
            public string LastName { get; set; } = default !;
            public string NickName { get; set; } = default !;
            public string Function { get; set; } = default !;
            public string ImageUrl { get; set; } = default !;
            public string Study { get; set; } = default !;
            public string BaptiseYear { get; set; } = default !;
            public string PetMet { get; set; } = default !;
            public string Quote { get; set; } = default !;
            public string QuoteBy { get; set; } = default !;
            public string Song { get; set; } = default !;
        }
    }
}