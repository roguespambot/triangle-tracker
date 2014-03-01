describe("Triangle", function() {
  describe("type", function() {
    it("returns equilateral for all sides being equal", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = "4";
      testTriangle.side2 = "4";
      testTriangle.side3 = "4";
      testTriangle.type().should.equal("equilateral");
    });
     it("returns isosceles for two equal sides", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = "4";
      testTriangle.side2 = "4";
      testTriangle.side3 = "8";
      testTriangle.type().should.equal("isosceles");
    });
     it("returns scalene for no sides being equal", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = "4";
      testTriangle.side2 = "6";
      testTriangle.side3 = "8";
      testTriangle.type().should.equal("scalene");
    });
  });
});
