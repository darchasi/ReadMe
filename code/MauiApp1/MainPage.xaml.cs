namespace MauiApp1
{
    public partial class MainPage : ContentPage
    {

        public MainPage()
        {
            InitializeComponent();
        }
        private async void BtnBook(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new InfoBooks());
        }

    }

}
