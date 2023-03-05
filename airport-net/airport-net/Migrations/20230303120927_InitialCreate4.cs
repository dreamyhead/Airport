using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace airport_net.Migrations
{
    public partial class InitialCreate4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndDate",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "EndPoint",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "StartDate",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "StartPoint",
                table: "Tickets");

            migrationBuilder.AddColumn<bool>(
                name: "isBusy",
                table: "Tickets",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isBusy",
                table: "Tickets");

            migrationBuilder.AddColumn<DateTime>(
                name: "EndDate",
                table: "Tickets",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "EndPoint",
                table: "Tickets",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "StartDate",
                table: "Tickets",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "StartPoint",
                table: "Tickets",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
