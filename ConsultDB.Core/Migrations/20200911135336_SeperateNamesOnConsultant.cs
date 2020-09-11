using Microsoft.EntityFrameworkCore.Migrations;

namespace ConsultDB.Core.Migrations
{
    public partial class SeperateNamesOnConsultant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Consultants");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Consultants",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Consultants",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Consultants");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Consultants");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Consultants",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
