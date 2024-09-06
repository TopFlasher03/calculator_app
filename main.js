let output = "";
let firstNumber = 0;
let secondNumber = 0;
var operation = null;
let paragraph1 = "";
function clickNine(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 9;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickEight(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 8;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickSeven(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 7;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickSix(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 6;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickFive(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 5;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickFour(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 4;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickThree(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 3;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickTwo(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 2;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickOne(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 1;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickZero(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + 0;
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickComa(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = output + ".";
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function clickC(){
    const audio = new Audio('click.mp3');
    audio.play();
    output = "";
    // console.log(output);
    pole.innerHTML = output;

    return 0;
}
function addition(){
    const audio = new Audio('click.mp3');
    audio.play();
    var firstNumberString = output;
    firstNumber = parseFloat(firstNumberString);
    output = "";
    operation = "+";

    return 0;
}
function subtraction(){
    const audio = new Audio('click.mp3');
    audio.play();
    var firstNumberString = output;
    firstNumber = parseFloat(firstNumberString);
    output = "";
    operation = "-";
}
function multiplication(){
    const audio = new Audio('click.mp3');
    audio.play();
    var firstNumberString = output;
    firstNumber = parseFloat(firstNumberString);
    output = "";
    operation = "×";
}
function division(){
    const audio = new Audio('click.mp3');
    audio.play();
    var firstNumberString = output;
    firstNumber = parseFloat(firstNumberString);
    output = "";
    operation = "/";
}
function power(){
    const audio = new Audio('click.mp3');
    audio.play();
    var firstNumberString = output;
    firstNumber = parseFloat(firstNumberString);
    output = "";
    operation = "^";
}
function root(){
    const audio = new Audio('click.mp3');
    audio.play();
    var firstNumberString = output;
    firstNumber = parseFloat(firstNumberString);
    output = "";
    operation = "root";
}
function result(){
    const audio = new Audio('click.mp3');
    audio.play();
    var secondNumberString = output;
    secondNumber = parseFloat(secondNumberString);
    if(operation == "+")
    {
         equation = firstNumber + secondNumber;
    }
    else if(operation == "-")
    {
         equation = firstNumber - secondNumber;
    }
    else if(operation == "×")
    {
         equation = firstNumber * secondNumber;
    }
    else if(operation == "/")
    {
         equation = firstNumber / secondNumber;
    }
    else if(operation == "^")
    {
         equation = Math.pow(firstNumber,secondNumber);
    }
    else
    {
        equation = Math.pow(firstNumber, 1/secondNumber);
    }
    const equationFixed = Math.round(equation * 100000) / 100000;
    if (equationFixed > 9999999999)
    {
        pole.innerHTML = "TOO BIG!"
    }
    else
    pole.innerHTML = equationFixed;
    if(operation == "root")
    {
        paragraph1 = `<sup>${secondNumber}</sup>√${firstNumber} = ${equationFixed}`;
    }
    else if(operation == "^")
    {
        paragraph1 = `${firstNumber}<sup>${secondNumber}</sup> = ${equationFixed}`;
    }
    else
    paragraph1 = `${firstNumber} ${operation} ${secondNumber} = ${equationFixed}`;
    output = equationFixed;
    p1.innerHTML = paragraph1;
    return 0;
}
