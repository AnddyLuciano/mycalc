let inp_out_box = document.querySelector(".inp-out-box");
let pointed = document.querySelector(".pointed");
function btn_add(val) {
    inp_out_box.querySelector("#inp-out").value+=val;
    // setTimeout(document.querySelector(div).classList.add("pointed"),1000);
}
function op_add(val) {
    inp_out_box.querySelector("#inp-out").value+=val;
}

function proc_result() {
    let string = document.querySelector("#inp-out").value;
    let op = string.charAt(string.search(/(\+|\-|\*|\/)/g));
    let val = string.split(op);

    // while (op) {
    //     val.reduce(function(a, b) {
    //         return a
    //     })
        
    // }
    inp_out_box.querySelector("#inp-out").value = detect_op(op,parseInt(val[0]),parseInt(val[1]));
    
}
function detect_op(operator, a, b){
    let result;
    switch (operator) {
        case operator = "+":
            result = a + b;
            break;
        case operator = "-":
            result = a - b;
            break;
        case operator = "*":
            result = a * b;
            break;
        case operator = "/":
            result = a / b;
            break;
    
        default:
            alert("ERROR: "+ console.debug());
            break;
    }
    return result;
}

function btn_clean(){
    inp_out_box.querySelector("#inp-out").value="";
}