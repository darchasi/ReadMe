using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MauiApp1.Models;

namespace MauiApp1.Services
{
    internal class BookContext : DbContext
    {
        public DbSet<Book> Books { get; set; }

        public BookContext()
        {
            this.Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            string dbPath = Path.Combine(FileSystem.AppDataDirectory, "Books.sqlite");
            options.UseSqlite($"Filename={dbPath}");
        }
    }
}
