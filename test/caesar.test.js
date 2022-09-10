// Write your tests here!
const caesar_module = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
  let input = "Rachel A.";
  let shift = 5;

  it("is a function", () => {
    expect(caesar_module.caesar).to.be.a("function");
  });

  it("returns false for all invalid shift values", () => {
    const shiftValues = [0, -26, 26, 99, null, undefined];
    const actual = shiftValues.every((shift) => {
      return !caesar_module.caesar(input, shift);
    });
    expect(actual).to.be.false;
  });

  it("returns a result for all valid shift numbers", () => {
    const shiftValues = [-25, -1, 1, 10, 25];
    const actual = shiftValues.every((shift) => {
      return caesar_module.caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  describe("encoding a message", () => {
    it("returns a string", () => {
      const expected = "string";
      const actual = typeof caesar_module.caesar(input, shift);
      expect(actual).to.equal(expected);
    });

    it("returns correct length", () => {
      const expected = input.length;
      const actual = caesar_module.caesar(input, shift).length;
      expect(actual).to.equal(expected);
    });

    it("encodes '*Rachel A.!' shift+1 correctly", () => {
      input = "*Rachel A.!";
      shift = 1;
      const expected = "*sbdifm b.!";
      const actual = caesar_module.caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("encodes '*Rachel A.!' shift-1 correctly", () => {
      input = "*Rachel A.!";
      shift = -1;
      const expected = "*qzbgdk z.!";
      const actual = caesar_module.caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("decodes '*rachel a.!' shift-1 correctly", () => {
      input = "*sbdifm b.!";
      shift = -1;
      const expected = "*rachel a.!";
      const actual = caesar_module.caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("decodes '*rachel a.!' shift+1 correctly", () => {
      input = "*qzbgdk z.!";
      shift = 1;
      const expected = "*rachel a.!";
      const actual = caesar_module.caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });
});