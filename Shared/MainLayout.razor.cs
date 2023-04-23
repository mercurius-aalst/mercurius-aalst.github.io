using MudBlazor;

namespace MercuriusStatic.Shared
{
    public partial class MainLayout
    {
        MudTheme MyCustomTheme = new MudTheme()
        {
            Palette = new Palette()
            {
                Primary = "#217226", Secondary = "#EEEEEE", TextPrimary = "#000000"
            }, 
            Typography = new Typography()
            {
                Default = new Default()
                {
                    FontFamily = new[]{"DM Sans", "Gotham", "Helvetica", "Arial", "sans-serif"}
                }
            }
        };
    }
}