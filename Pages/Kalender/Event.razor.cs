using Microsoft.AspNetCore.Components;
using MudBlazor;
using static MercuriusStatic.Pages.Kalender.Kalender ;

namespace MercuriusStatic.Pages.Kalender
{
    public partial class Event
    {
        [Parameter]
        public Activiteit EventIndex { get; set; } = default!;
        public void OnClick()
        {
            Console.WriteLine("here");
            Snackbar.Add("Oeps, deze activiteit heeft nog geen facebook-event", Severity.Error);
        }
    }
}