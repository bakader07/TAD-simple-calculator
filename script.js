var operation = document.getElementById("operation");

function add(value) {
    operation.value += value.value;
}

function clr() {
    operation.value = "";
}

function back() {
    if (operation.value != "")
        operation.value = operation.value.slice(0, -1);
}

function result() {
    var text = operation.value;
    var valid = false;
    for (var i=0; i<text.length; i++){
        switch (text[i]) {
            case '+':
            case '-':
            case 'x':
            case '/':
                valid = true;
                break;
            /*case '%':
                console.log("prcnt");
                var number
                break;*/
        }
        if (valid === true)
            break;
    }
    var number1 = Number(text.slice(0, i));
    var number2 = Number(text.slice(i+1, text.length));
    var result;
    if (!isNaN(number1) && !isNaN(number2)){
        switch (text[i]) {
            case '+':
                operation.value = number1 + number2;
                break;
            case '-':
                operation.value = number1 - number2;
                break;
            case 'x':
                operation.value = number1 * number2;
                break;
            case '/':
                if (number2 != 0){
                    operation.value = number1 / number2;
                }
                else {
                    alert("Division by zero!!");
                }
                break;
        }
    }
    else {
        clr();
        alert("Error !");
    }
}