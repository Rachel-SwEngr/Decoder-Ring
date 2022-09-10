// Write your tests here!
const { expect } = require("chai");
const substitution_module = require("../src/substitution");

describe("substitution()", () => {
  it("should be a function", () => {
    expect(substitution_module.substitution).to.be.a("function");
  });

  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      let alphabet = undefined;
      let input = "thinkful";
      let actual = substitution_module.substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      let alphabet = "short";
      let input = "thinkful";
      let actual = substitution_module.substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      let alphabet = "aaabbbcccdddeeefffggghhhii";
      let input = "thinkful";
      let actual = substitution_module.substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      let alphabet = "mnopqrstuvwxyzabcdefghijkl";
      let input = "thinkful";
      let actual = substitution_module.substitution(input, alphabet);
      expect(actual).to.equal("ftuzwrgx");
    });
    it("should work with any kind of key with unique characters", () => {
      let alphabet = "mnopqrstuvw*y#abcde@ghijkl";
      let input = "thinkful";
      let actual = substitution_module.substitution(input, alphabet);
      expect(actual).to.equal("@tu#wrg*");
    });
    it("should preserve spaces", () => {
      let alphabet = "mnopqrstuvwxyzabcdefghijkl";
      let input = "Rachel A";
      let actual = substitution_module.substitution(input, alphabet);
      expect(actual).to.equal("dmotqx m");
    });
    it("should ignore capital letters", () => {
      let alphabet = "mnopqrstuvwxyzabcdefghijkl";
      let input = "Rachel A";
      let actual = substitution_module.substitution(input, alphabet);
      expect(actual).to.equal("dmotqx m");
    });
  });

  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      let alphabet = "mnopqrstuvwxyzabcdefghijkl";
      let input = "ftuzwrgx";
      let actual = substitution_module.substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
    it("should work with any kind of key with unique characters", () => {
      let alphabet = "mnopqrstuvw*y#abcde@ghijkl";
      let input = "@tu#wrg*";
      let actual = substitution_module.substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
    it("should preserve spaces", () => {
      let alphabet = "mnopqrstuvwxyzabcdefghijkl";
      let input = "dmotqx m";
      let actual = substitution_module.substitution(input, alphabet, false);
      expect(actual).to.equal("rachel a");
    });
    it("should ignore capital letters", () => {
      let alphabet = "mnopqrstuvwxyzabcdefghijkl";
      let input = "dmotqx m";
      let actual = substitution_module.substitution(input, alphabet, false);
      expect(actual).to.equal("rachel a");
    });
  });
});