// It is good practice to put tests in a __tests__ folder.

// This will allow you to reference the script from the folder
const returnMascot = require('../script.js');

//The syntax for tests:
// start with test
// followed by the error message,
// followed by an anonymous function call, 
// followed by an expect with a "matcher" (see https://jestjs.io/docs/expect)

// This test will demonstrate a passing test, the Mets mascot loaded as is Mr. Met
test("Test 1: Mets should return Mr. Met", 
     () => {
        // We expect the result of the function to be Mr. Met when given argument of Mets
        expect(returnMascot("Mets")).toBe("Mr. Met");
     }
    );

// This test will demonstrate another type of passing test
// This will check that it does NOT return Unknown 
test("Test 2: Mets should NOT return Unknown", 
     () => {
        // We expect the result of the function to NOT be Unknown when given argument of Mets
        expect(returnMascot("Mets")).not.toBe("Unknown");
     }
    );


// This test will demonstrate a failure, the Twins mascot has not been loaded
test("Test 3: Twins should return T.C. Bear", 
     () => {
        // We expect the result of the function to be T.C. Bear when passed Twins
        // In this case, it will fail
        expect(returnMascot("Twins")).toBe("T.C. Bear");
     }
    );

// This test will demonstrate checking the length of an array
// The Blue Jays technically have two mascots
test("Test 4: Blue Jays should return two mascots", 
     () => {
        // We expect the result of the function to be two values (an array of length 2)
        expect(returnMascot("Blue Jays")).toHaveLength(2);
     }
    );

