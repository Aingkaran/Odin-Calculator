
//Add, Subtract , multiple and divide functions created using  .reduce method that takes in an array
// that will perform the function in the order the number is

const add = function(numbers) {
    return numbers.reduce((total, current) => total+current);

};

const subtract = function(numbers) {
	return numbers.reduce((total, current) => total-current);
};


const multiply = function(numbers) {
  return numbers.reduce((multiple1, multiple2) => multiple1*multiple2);
};


const divide = function(numbers) {
    return numbers.reduce((divide1, divide2) => divide1/divide2);
  };

const remainder = function(numbers) {
    return numbers.reduce((remainder1, remainder2) => remainder1%remainder2);
  };



//Combine above mathemtaical equations into on function 
//that can call all functions depending on operator input

const operate= function(operator, a, b){
    if (operator== "addition"){
        return add([a,b])

    }
    else if (operator== "subtraction"){
        return subtract([a,b])

    }
    else if (operator== "multiplication"){
        return multiply([a,b])

    }
    else if (operator=="division"){
        return divide([a,b])

    }

    else if (operator=="remainder"){
        return remainder([a,b])

    }
    
    else {
        return "Something Went Wrong"
    }
}


