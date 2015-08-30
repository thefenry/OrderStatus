namespace OrderStatus.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IntialMigration : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.OrderDetails", "CreatedBy_Id", "dbo.AspNetUsers");
            DropIndex("dbo.OrderDetails", new[] { "CreatedBy_Id" });
            AlterColumn("dbo.OrderDetails", "CreatedBy_Id", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.OrderDetails", "CreatedBy_Id");
            AddForeignKey("dbo.OrderDetails", "CreatedBy_Id", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.OrderDetails", "CreatedBy_Id", "dbo.AspNetUsers");
            DropIndex("dbo.OrderDetails", new[] { "CreatedBy_Id" });
            AlterColumn("dbo.OrderDetails", "CreatedBy_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.OrderDetails", "CreatedBy_Id");
            AddForeignKey("dbo.OrderDetails", "CreatedBy_Id", "dbo.AspNetUsers", "Id");
        }
    }
}
