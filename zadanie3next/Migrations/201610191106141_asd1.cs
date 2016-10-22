namespace zadanie3next.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class asd1 : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Notes", new[] { "user_Id" });
            AddColumn("dbo.Notes", "X", c => c.Int(nullable: false));
            AddColumn("dbo.Notes", "Y", c => c.Int(nullable: false));
            CreateIndex("dbo.Notes", "User_Id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Notes", new[] { "User_Id" });
            DropColumn("dbo.Notes", "Y");
            DropColumn("dbo.Notes", "X");
            CreateIndex("dbo.Notes", "user_Id");
        }
    }
}
