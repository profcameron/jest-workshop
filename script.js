// Code we want to test will appear in this file
// ..

function returnMascot(team){
    if (team=="Mets"){
        return "Mr. Met";
    }
    else if (team == "Nationals"){
        return "Screech"
    }
    else if (team == "Phillies"){
        return "Phillie Phanatic"
    }
    else if (team == "Blue Jays"){
        // The Blue Jays have two mascots
        return ["Ace","Junior"];
    }
    else{
        return "Unknown"
    }
}

// There are a few different ways to make functions available outside this file
// similar to making something public in Java
// Without this, the test file could not access this method
module.exports = returnMascot;