document.getElementById("repetitionform").addEventListener("submit", submitform);

function submitform(e) {
    var userweight = document.getElementById("weight").value;
    var userrepetition = document.getElementById("repetition").value;
    e.preventDefault();
    console.log(userweight + " " + userrepetition)
    var result = userweight * (1 + userrepetition / 30);
    var n = result.toFixed(2);
    document.getElementById("userperfectrep").style.display= "block";

    document.getElementById("userperfectrep").innerHTML = "Your max weight per rep is:" + '<span id="myspan">'+ n+"</span>";

}