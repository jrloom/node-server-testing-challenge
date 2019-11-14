const db = require("../data/dbConfig");

const { getAll, findById, insert, update, remove } = require("./muppetModel");

describe("muppets model", function() {
  describe("insert()", function() {
    beforeEach(async () => await db("muppets").truncate());
    test("should insert a muppet", async function() {
      let muppet = await insert({ name: "gonzo" });

      expect(muppet.name).toBe("gonzo");
      expect(muppet.id).toBeDefined();
    });
  });
  describe("update()", function() {});
  describe("remove()", function() {
    test("should remove a muppet", async function() {
      let muppet = await remove({ id: 1 });

      expect(muppet.name).toBeUndefined();
      expect(muppet.id).toBeUndefined();
    });
  });
});
