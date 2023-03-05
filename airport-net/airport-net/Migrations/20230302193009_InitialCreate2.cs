using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace airport_net.Migrations
{
    public partial class InitialCreate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AirplaneId",
                table: "Flights",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Flights_AirplaneId",
                table: "Flights",
                column: "AirplaneId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Flights_Airplanes_AirplaneId",
                table: "Flights",
                column: "AirplaneId",
                principalTable: "Airplanes",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flights_Airplanes_AirplaneId",
                table: "Flights");

            migrationBuilder.DropIndex(
                name: "IX_Flights_AirplaneId",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "AirplaneId",
                table: "Flights");
        }
    }
}
