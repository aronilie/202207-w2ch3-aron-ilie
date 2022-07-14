import { calculator } from "./calculator";

describe("Given a function", () => {
  describe("When it's called and it receives 40 and 2", () => {
    test("Then it should return 42, 38, 80 and 20", () => {
      // Arrange
      const number1 = 40;
      const number2 = 2;
      const expectedTotal = [42, 38, 80, 20];

      // Act
      const total = calculator(number1, number2);

      // Assert
      expect(total).toBe(expectedTotal);
    });
  });
});
