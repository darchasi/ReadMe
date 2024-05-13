namespace MauiApp1;

public partial class BooksPage : ContentPage
{
	public BooksPage()
	{
		InitializeComponent();
	}
    private async void BtnBook(object sender, EventArgs e)
    {
        await Navigation.PushAsync(new InfoBooks());
    }
}