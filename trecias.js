document.getElementById("uzd3button").addEventListener("click", biggest);


function biggest(){



    // console.log("button clickend");

    // console.log(isNan(parseInt(document.getElementById("uzd3input2").value)))


    if(isNaN(parseInt(document.getElementById("uzd3input1").value)) ||
     isNaN(parseInt(document.getElementById("uzd3input2").value)) ||
     isNaN(parseInt(document.getElementById("uzd3input3").value))){
        alert("vienas is skaiciu nera skaicius");
        return 0;
    }

    if(parseInt(document.getElementById("uzd3input1").value) > 
    parseInt(document.getElementById("uzd3input2").value) &
    parseInt(document.getElementById("uzd3input1").value) >
    parseInt(document.getElementById("uzd3input3").value)
    ){
        // console.log("one");
        document.getElementById("uzd3output").value =
         parseInt(document.getElementById("uzd3input1").value);
    } else if(parseInt(document.getElementById("uzd3input2").value) > parseInt(document.getElementById("uzd3input3").value)){
        // console.log("two");
        document.getElementById("uzd3output").value =
         parseInt(document.getElementById("uzd3input2").value);
    } else{
        // console.log("three");
        document.getElementById("uzd3output").value =
         parseInt(document.getElementById("uzd3input3").value);
    }
}