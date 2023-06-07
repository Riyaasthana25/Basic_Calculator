let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let array = Array.from(buttons);
array.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string
        }
        else if(e.target.innerHTML == "x2"){
            string = Math.pow(input.value, 2);
        }
        else if(e.target.innerHTML == "√x"){
            string = Math.sqrt(input.value, 2);
        }
        else if(e.target.innerHTML == "1/x"){
            string = 1/input.value;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

