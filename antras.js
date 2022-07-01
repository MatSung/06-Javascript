

// 
document.getElementById("uzd2sudetis").addEventListener("click", sudetis);
document.getElementById("uzd2atimtis").addEventListener("click", atimtis);
document.getElementById("uzd2daugyba").addEventListener("click", daugyba);
document.getElementById("uzd2dalyba").addEventListener("click", dalyba);



function sudetis(){
    // var x = parseFloat.document.getElementById("uzd2input1").value; 
    // var y = parseFloat.document.getElementById("uzd2input2").value; 
    document.getElementById("uzd2output").innerHTML =
        parseFloat(document.getElementById("uzd2input1").value) +
        parseFloat(document.getElementById("uzd2input2").value);
}

function atimtis(){
    document.getElementById("uzd2output").innerHTML =
    parseFloat(document.getElementById("uzd2input1").value) -
    parseFloat(document.getElementById("uzd2input2").value);
}

function daugyba(){
    document.getElementById("uzd2output").innerHTML =
        parseFloat(document.getElementById("uzd2input1").value) *
        parseFloat(document.getElementById("uzd2input2").value);
}

function dalyba(){
    document.getElementById("uzd2output").innerHTML =
        parseFloat(document.getElementById("uzd2input1").value) /
        parseFloat(document.getElementById("uzd2input2").value);
}

//done