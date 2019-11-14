const request = require("supertest");

const server = require("./server");

describe("server", function() {
  describe("GET /", function() {
    test("should return 200 OK", function() {
      return request(server)
        .get("/")
        .then(res => expect(res.status).toBe(200));
    });
    test("should return json", function() {
      return request(server)
        .get("/")
        .then(res => expect(res.type).toMatch(/json/i));
    });
    test("should return 'api is go' inside the body of the api", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "is go" });
        });
    });
  });
  describe("POST /", function() {
    test("should return 201 Created", function() {
      // return request(server)
      // .post("/")
      // .send({ name: "morgan" })
      // .then(res => expect(res.status).toBe(201));
    });
  });
  describe("PUT /", function() {});
  describe("DELETE /", function() {
    test("should return 200 OK", function() {
      return request(server)
        .delete("/")
        .then(res => expect(res.status).toBe(200));
    });
  });
});
