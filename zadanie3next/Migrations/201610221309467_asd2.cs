namespace zadanie3next.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class asd2 : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Notes", name: "User_Id", newName: "ApplicationUser_Id");
            RenameIndex(table: "dbo.Notes", name: "IX_User_Id", newName: "IX_ApplicationUser_Id");
            CreateTable(
                "dbo.ImageNotes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ImageType = c.String(),
                        ImagePath = c.String(),
                        X = c.Int(nullable: false),
                        Y = c.Int(nullable: false),
                        UserLogin = c.String(),
                        ApplicationUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id)
                .Index(t => t.ApplicationUser_Id);
            
            DropColumn("dbo.Notes", "ImageType");
            DropColumn("dbo.Notes", "ImagePath");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Notes", "ImagePath", c => c.String());
            AddColumn("dbo.Notes", "ImageType", c => c.String());
            DropForeignKey("dbo.ImageNotes", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.ImageNotes", new[] { "ApplicationUser_Id" });
            DropTable("dbo.ImageNotes");
            RenameIndex(table: "dbo.Notes", name: "IX_ApplicationUser_Id", newName: "IX_User_Id");
            RenameColumn(table: "dbo.Notes", name: "ApplicationUser_Id", newName: "User_Id");
        }
    }
}
