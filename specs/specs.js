describe ("breakDown", function() {
  it("breaks a number into its component parts", function(){
    expect(breakDown(15)).to.equal[10, 5];
  });

  it("converts numbers into roman numeral equivalents", function() {
    expect(breakDown(500)).to.equal("D");
  });

  it("converts edge cases into roman numerals", function() {
    expect(breakDown(4)).to.equal("IV");
  })
});
