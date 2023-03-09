console.log("Hello, welcome to the brain of the Nirculator!")
function add_numbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    console.log("number 1", num1)
    console.log("number 2", num2)
    var sum = num1 + num2;
    console.log("sum  equals to", sum)
    document.getElementById("output").innerHTML = `Addition of ${num1} and ${num2} =  ${sum}`
}
function subtract_numbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    console.log("number 1", num1)
    console.log("number 2", num2)
    var difference = num1 - num2;
    console.log("difference  equals to", difference)
    document.getElementById("output").innerHTML = `Subtraction of ${num1} and ${num2} =  ${difference}`
}
function multiply_numbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    console.log("number 1", num1)
    console.log("number 2", num2)
    var product = num1 * num2;
    console.log("product  equals to", product)
    document.getElementById("output").innerHTML = `Multiplication of ${num1} and ${num2} =  ${product}`
}
function divide_numbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    console.log("number 1", num1)
    console.log("number 2", num2)
    var quotient = num1 / num2;
    console.log("quotient  equals to", quotient)
    document.getElementById("output").innerHTML = `Division of ${num1} and ${num2} =  ${quotient}`
}

