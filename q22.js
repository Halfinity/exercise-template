function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

var array_first = [1, 2, 3, 4];
var array_second = [3, 4, 5, 6];

var concat_array = array_first.concat(array_second);

var set_ob = new Set(concat_array);

var array_union = [];


for(var element of set_ob) {    
    array_union.push(element); 
}

out = (array_union);

output.innerText = out;
}