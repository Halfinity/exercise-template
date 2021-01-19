function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];
 
var filtered = arr.filter(Boolean);
out = (filtered);

output.innerText = out;
}