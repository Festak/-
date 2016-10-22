namespace zadanie3next.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class userLogin : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Notes", "UserLogin", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Notes", "UserLogin");
        }
    }
}
