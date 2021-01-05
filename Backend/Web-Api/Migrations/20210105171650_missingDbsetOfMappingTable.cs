using Microsoft.EntityFrameworkCore.Migrations;

namespace Web_Api.Migrations
{
    public partial class missingDbsetOfMappingTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserFunction_Functions_FunctionId",
                table: "UserFunction");

            migrationBuilder.DropForeignKey(
                name: "FK_UserFunction_Users_UserId",
                table: "UserFunction");

            migrationBuilder.DropForeignKey(
                name: "FK_UserIndustry_Industries_IndustryId",
                table: "UserIndustry");

            migrationBuilder.DropForeignKey(
                name: "FK_UserIndustry_Users_UserId",
                table: "UserIndustry");

            migrationBuilder.DropForeignKey(
                name: "FK_UserTopic_Topics_TopicId",
                table: "UserTopic");

            migrationBuilder.DropForeignKey(
                name: "FK_UserTopic_Users_UserId",
                table: "UserTopic");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserTopic",
                table: "UserTopic");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserIndustry",
                table: "UserIndustry");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserFunction",
                table: "UserFunction");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topics",
                table: "Topics");

            migrationBuilder.RenameTable(
                name: "UserTopic",
                newName: "UserTopics");

            migrationBuilder.RenameTable(
                name: "UserIndustry",
                newName: "UserIndustries");

            migrationBuilder.RenameTable(
                name: "UserFunction",
                newName: "UserFunctions");

            migrationBuilder.RenameTable(
                name: "Topics",
                newName: "Topic");

            migrationBuilder.RenameIndex(
                name: "IX_UserTopic_TopicId",
                table: "UserTopics",
                newName: "IX_UserTopics_TopicId");

            migrationBuilder.RenameIndex(
                name: "IX_UserIndustry_IndustryId",
                table: "UserIndustries",
                newName: "IX_UserIndustries_IndustryId");

            migrationBuilder.RenameIndex(
                name: "IX_UserFunction_FunctionId",
                table: "UserFunctions",
                newName: "IX_UserFunctions_FunctionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserTopics",
                table: "UserTopics",
                columns: new[] { "UserId", "TopicId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserIndustries",
                table: "UserIndustries",
                columns: new[] { "UserId", "IndustryId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserFunctions",
                table: "UserFunctions",
                columns: new[] { "UserId", "FunctionId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topic",
                table: "Topic",
                column: "TopicId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserFunctions_Functions_FunctionId",
                table: "UserFunctions",
                column: "FunctionId",
                principalTable: "Functions",
                principalColumn: "FunctionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserFunctions_Users_UserId",
                table: "UserFunctions",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserIndustries_Industries_IndustryId",
                table: "UserIndustries",
                column: "IndustryId",
                principalTable: "Industries",
                principalColumn: "IndustryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserIndustries_Users_UserId",
                table: "UserIndustries",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserTopics_Topic_TopicId",
                table: "UserTopics",
                column: "TopicId",
                principalTable: "Topic",
                principalColumn: "TopicId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserTopics_Users_UserId",
                table: "UserTopics",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserFunctions_Functions_FunctionId",
                table: "UserFunctions");

            migrationBuilder.DropForeignKey(
                name: "FK_UserFunctions_Users_UserId",
                table: "UserFunctions");

            migrationBuilder.DropForeignKey(
                name: "FK_UserIndustries_Industries_IndustryId",
                table: "UserIndustries");

            migrationBuilder.DropForeignKey(
                name: "FK_UserIndustries_Users_UserId",
                table: "UserIndustries");

            migrationBuilder.DropForeignKey(
                name: "FK_UserTopics_Topic_TopicId",
                table: "UserTopics");

            migrationBuilder.DropForeignKey(
                name: "FK_UserTopics_Users_UserId",
                table: "UserTopics");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserTopics",
                table: "UserTopics");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserIndustries",
                table: "UserIndustries");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserFunctions",
                table: "UserFunctions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topic",
                table: "Topic");

            migrationBuilder.RenameTable(
                name: "UserTopics",
                newName: "UserTopic");

            migrationBuilder.RenameTable(
                name: "UserIndustries",
                newName: "UserIndustry");

            migrationBuilder.RenameTable(
                name: "UserFunctions",
                newName: "UserFunction");

            migrationBuilder.RenameTable(
                name: "Topic",
                newName: "Topics");

            migrationBuilder.RenameIndex(
                name: "IX_UserTopics_TopicId",
                table: "UserTopic",
                newName: "IX_UserTopic_TopicId");

            migrationBuilder.RenameIndex(
                name: "IX_UserIndustries_IndustryId",
                table: "UserIndustry",
                newName: "IX_UserIndustry_IndustryId");

            migrationBuilder.RenameIndex(
                name: "IX_UserFunctions_FunctionId",
                table: "UserFunction",
                newName: "IX_UserFunction_FunctionId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserTopic",
                table: "UserTopic",
                columns: new[] { "UserId", "TopicId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserIndustry",
                table: "UserIndustry",
                columns: new[] { "UserId", "IndustryId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserFunction",
                table: "UserFunction",
                columns: new[] { "UserId", "FunctionId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topics",
                table: "Topics",
                column: "TopicId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserFunction_Functions_FunctionId",
                table: "UserFunction",
                column: "FunctionId",
                principalTable: "Functions",
                principalColumn: "FunctionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserFunction_Users_UserId",
                table: "UserFunction",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserIndustry_Industries_IndustryId",
                table: "UserIndustry",
                column: "IndustryId",
                principalTable: "Industries",
                principalColumn: "IndustryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserIndustry_Users_UserId",
                table: "UserIndustry",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserTopic_Topics_TopicId",
                table: "UserTopic",
                column: "TopicId",
                principalTable: "Topics",
                principalColumn: "TopicId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserTopic_Users_UserId",
                table: "UserTopic",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
