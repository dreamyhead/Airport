using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace airport_net.Migrations
{
    public partial class IsMarriedToUserAdded1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Tickets");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Tickets",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
