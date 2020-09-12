using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ConsultDB.Core.Migrations
{
    public partial class Add_ConsultantImage_Name : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Data",
                table: "ConsultantImages",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "ConsultantImages",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "ConsultantImages");

            migrationBuilder.AlterColumn<byte[]>(
                name: "Data",
                table: "ConsultantImages",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]));
        }
    }
}
