namespace OrderStatusAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddStatus : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Status",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        OrderStatus = c.String(nullable: false, maxLength: 450),
                    })
                .PrimaryKey(t => t.ID)
                .Index(t => t.OrderStatus, unique: true);
            // Create  a OrderStatus for Orders to point to.
            Sql("INSERT INTO dbo.Status (OrderStatus) VALUES ('New')");
            AddColumn("dbo.Orders", "StatusId", c => c.Int(nullable: false, defaultValue: 1));
            CreateIndex("dbo.Orders", "StatusId");
            AddForeignKey("dbo.Orders", "StatusId", "dbo.Status", "ID", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "StatusId", "dbo.Status");
            DropIndex("dbo.Status", new[] { "OrderStatus" });
            DropIndex("dbo.Orders", new[] { "StatusId" });
            DropColumn("dbo.Orders", "StatusId");
            DropTable("dbo.Status");
        }
    }
}
