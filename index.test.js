const { test } = require("./script.js");

describe("test", () => {
    it("a returns 1a", () => {
        expect(test("a")).toBe("1a");
    });

    it("b returns 1b", () => {
        expect(test("b")).toBe("1b");
    });

    it("ab returns 1a1b", () => {
        expect(test("ab")).toBe("1a1b");
    });

    it("111 returns 31", () => {
        expect(test("111")).toBe("31");
    });
});
