describe("This is a integer test!", function() {

    it("Is integer", function() {

        expect(true).toEqual(isInteger(20));

        expect(false).toEqual(isInteger("dddd"))

        expect(false).toEqual(isInteger("dddfadsf"));

    })

});