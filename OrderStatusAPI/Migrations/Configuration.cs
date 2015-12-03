namespace OrderStatusAPI.Migrations
{
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<OrderStatusAPI.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(OrderStatusAPI.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var statuses = new List<Status> { new Status { OrderStatus = "New" }, new Status { OrderStatus = "Active" }, new Status { OrderStatus = "Complete" } };
            statuses.ForEach(status => context.Status.AddOrUpdate(x =>x.OrderStatus, status));

            context.SaveChanges();
           
            context.Orders.AddOrUpdate(
                p => p.Address,
                new Order { Address = "Test Address", Description = "Test Description", Phone = "555-555-5555", ClientName = "Test name", StatusId = 1 }
                );

        }
    }
}
