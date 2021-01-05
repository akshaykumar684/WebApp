using Microsoft.EntityFrameworkCore.Migrations;

namespace Web_Api.Migrations
{
    public partial class topictable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserTopics_Topic_TopicId",
                table: "UserTopics");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topic",
                table: "Topic");

            migrationBuilder.RenameTable(
                name: "Topic",
                newName: "Topics");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topics",
                table: "Topics",
                column: "TopicId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserTopics_Topics_TopicId",
                table: "UserTopics",
                column: "TopicId",
                principalTable: "Topics",
                principalColumn: "TopicId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserTopics_Topics_TopicId",
                table: "UserTopics");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topics",
                table: "Topics");

            migrationBuilder.RenameTable(
                name: "Topics",
                newName: "Topic");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topic",
                table: "Topic",
                column: "TopicId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserTopics_Topic_TopicId",
                table: "UserTopics",
                column: "TopicId",
                principalTable: "Topic",
                principalColumn: "TopicId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
