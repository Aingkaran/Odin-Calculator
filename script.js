
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

const percentage = function(numbers) {
    return numbers.reduce((remainder1, remainder2) => (remainder2/remainder1)*100);
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

    else if (operator=="percentage"){
        return percentage([a,b])

    }


    
    else {
        return "Something Went Wrong"
    }
}


//function allows user to click on buttons and actually have it appear on the calcualtor display
const calcDisplay = document.querySelector('.display');
const calcText = document.createElement('div');
calcText.classList.add('display1');
let displayCont= ""

let numOne="";
let numTwo="";
let numResult= ""

const btn = document.querySelectorAll('button');


btn.forEach((button)=>{
   
    button.addEventListener('click', (e)=>{
        // first "if" statement is to allow for only the numbers and period to display on the calcualtor
        if (e.target.value<10||e.target.value=="."){
            if (numOne==""){
                displayCont+= e.target.value
                console.log(e.target.value)
                calcText.textContent= displayCont ;
                calcDisplay.appendChild(calcText);
                
            }
            else {
                calcText.textContent="";
                displayCont=""
                displayCont+= e.target.value

                numTwo=displayCont;

                calcText.textContent= displayCont ;
                calcDisplay.appendChild(calcText);
                numResult=operate(chosenOp,parseFloat(numOne),parseFloat(numTwo))
                
            }
        }

        //now when the user clicks the operator it first stores the initial chosen numbers by the users in numOne and then clears the displayCont variable 
        //and calc display

        else if (e.target.value=="addition"||e.target.value=="subtraction"||e.target.value=="multiplication"||e.target.value=="division"||e.target.value=="percentage"){
            chosenOp= e.target.value
            if (numResult==""){
                
                numOne= displayCont;
                calcText.textContent="";
                displayCont=""
                calcDisplay.appendChild(calcText);
                
            }

            else{
                numOne=numResult
                calcText.textContent= numOne ;
                calcDisplay.appendChild(calcText);
                
                
            }
            
        }

        // This if statement will first the last number that was displayed to a variable numTWO then trigger the "operate()" function 
        else if (e.target.value=="equals"){
            
            numTwo=displayCont;

            displayCont=operate(chosenOp,parseFloat(numOne),parseFloat(numTwo))
            calcText.textContent= displayCont;
            calcDisplay.appendChild(calcText);
            numOne=numTwo
        
            
        }

        //clears the display and resets calcualtor function

        else if (e.target.value=="AC"){
            
            calcText.textContent="";
            displayCont=""
            calcDisplay.appendChild(calcText);
            numOne=""
            numTwo=""
            numResult=""

        }

        //backspace button clears the last digit displayed

        else if (e.target.value=="C"){
           displayCont = displayCont.slice(0, -1)
           calcText.textContent= displayCont;
           calcDisplay.appendChild(calcText);
        }

       


    
});
        

});



