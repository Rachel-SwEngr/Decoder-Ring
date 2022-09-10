// Write your tests here!
const polybius_module = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius_module.polybius("ij")).to.equal("4242");
    });

    it("should encode 'rachel' to 241131325113 ", () => {
      expect(polybius_module.polybius("rachel")).to.equal("241131325113");
    });

    it("should maintain spaces", () => {
      expect(polybius_module.polybius("rachel a")).to.equal("241131325113 11");
    });
    it("should ignore capital letters", () => {
      expect(polybius_module.polybius("Rachel")).to.equal("241131325113");
    });
  });
  describe("decoding", () => {
    it("should decode 241131325113 to rachel", () => {
      expect(polybius_module.polybius("241131325113", false)).to.eql("rachel");
    });

    it("should translate 42 to (i/j)", () => {
      expect(polybius_module.polybius("42", false)).to.eql("(i/j)");
    });

    it("should ignore capital letters", () => {
      expect(polybius_module.polybius("241131325113", false)).to.eql(
        "rachel"
      );
    });
    it("should maintain spaces", () => {
      expect(polybius_module.polybius("241131325113 11", false)).to.eql("rachel a");
    });
    it("should return false if the length of all numbers is odd", () => {
      expect(polybius_module.polybius("123", false)).to.be.false;
    });
  });
});