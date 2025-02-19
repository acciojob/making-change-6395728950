const makeChange = (c) => {
    let result = {};
    
    result["q"] = Math.floor(c/25);
    c %= 25;
    
    result["d"] = Math.floor(c/10);
    c %= 10;
    
    result["n"] = Math.floor(c/5);
    c %= 5;
    
    result["p"] = Math.floor(c/1);
    
    return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
