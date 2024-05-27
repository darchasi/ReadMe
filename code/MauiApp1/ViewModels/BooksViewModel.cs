using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MauiApp1.Models;
using MauiApp1.Services;



namespace MauiApp1.ViewModels
{
    public sealed partial class BooksViewModel : ObservableObject
    {
        [ObservableProperty]
        private ObservableCollection<object> wishes = new();

    }
}
