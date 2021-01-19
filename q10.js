function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    let arrInput = JSON.parse(input);
    let newArr = [];

    for (let i = 0; i < arrInput.length; i++) {
        newArr.push('row ' + i);
      
        for (let j = 0; j < arrInput[i].length; j++) {
            newArr.push(arrInput[i][j]);
        }
    }
    out = newArr;
    
    output.innerText = out;
}