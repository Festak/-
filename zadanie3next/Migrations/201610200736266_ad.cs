namespace zadanie3next.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ad : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Notes", "ImageType", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Notes", "ImageType", c => c.Int(nullable: false));
        }
    }
}
