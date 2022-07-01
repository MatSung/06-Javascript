document.getElementById("uzd4button").addEventListener("click", trikampis);


function trikampis(){


    
    console.log("button clickend");

    // console.log(isNan(parseInt(document.getElementById("uzd3input2").value)))


    if(isNaN(parseInt(document.getElementById("uzd4input1").value)) ||
     isNaN(parseInt(document.getElementById("uzd4input2").value)) ||
     isNaN(parseInt(document.getElementById("uzd4input3").value))){
        alert("vienas is skaiciu nera skaicius");
        return 0;
    }

    var a = parseInt(document.getElementById("uzd4input1").value);
    var b = parseInt(document.getElementById("uzd4input2").value);
    var c = parseInt(document.getElementById("uzd4input3").value);

    var atsakymas = "";

    //ar galima sudaryti trikampi
    if( (a + b) > c & (a + c) > b & (b + c) > a)
    {
        atsakymas = document.getElementById("uzd4output").innerHTML = "Galima";
    }
    else
    {
        atsakymas =  "neGalima";
        document.getElementById("uzd4output").innerHTML = atsakymas;
        return 0;
    }

    if(a == b && b == c)
    {
        atsakymas += ", Lygiakrastis";
    }
    else if (a == b || b == c || a == c)
    {
        atsakymas += ", Lygiasonis";
    }
    else
    {
        atsakymas += ", ivairiakrastis";
    }

    if((a * a + b * b) > (c * c))
    {
        atsakymas += ", smailas";
    }
    else if ((a * a + b * b) < (c * c))
    {
        atsakymas += ", bukas";
    }
    else {
        atsakymas += ", status";
    }

    document.getElementById("uzd4output").innerHTML = atsakymas;
}