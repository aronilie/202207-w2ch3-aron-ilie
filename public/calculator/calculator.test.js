import { calculator } from "./calculator";

describe("Given a function", () => {
  describe("When it's called and it receives 4 and 2", () => {
    test("Then it should return 6", () => {
      // Arrange
      const number1 = 4;
      const number2 = 2;
      const expectedTotal = 6;

      // Act
      const total = sum(number1, number2);

      // Assert
      expect(total).toBe(expectedTotal);
    });
  });
});
