using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ConsultDB.Core.Migrations
{
    public partial class ConsultantImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ConsultantImageId",
                table: "Consultants",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ConsultantImages",
                columns: table => new
                {
                    ConsultantImageId = table.Column<int>(nullable: false),
                    Data = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConsultantImages", x => x.ConsultantImageId);
                    table.ForeignKey(
                        name: "FK_ConsultantImages_Consultants_ConsultantImageId",
                        column: x => x.ConsultantImageId,
                        principalTable: "Consultants",
                        principalColumn: "ConsultantId",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConsultantImages");

            migrationBuilder.DropColumn(
                name: "ConsultantImageId",
                table: "Consultants");
        }
    }
}
