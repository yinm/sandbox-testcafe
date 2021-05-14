fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`;

test("My First Test", async (t) => {
  await t.typeText("#developer-name", "John Smith").click("#submit-button");
});
