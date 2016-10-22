namespace zadanie3next.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _as : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Notes", "Color", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Notes", "Color", c => c.Int(nullable: false));
        }
    }
}
