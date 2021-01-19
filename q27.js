function run() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = eval(input1);
    let prop = input2;
    let propArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        propArr.push(arr[i][input2]);
    }

    out = propArr;
    output.innerText = out;