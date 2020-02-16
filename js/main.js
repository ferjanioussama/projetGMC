document.getElementById("repetitionform").addEventListener("submit", submitform);

function submitform(e) {
    var userweight = document.getElementById("weight").value;
    var userrepetition = document.getElementById("repetition").value;
    e.preventDefault();
    console.log(userweight + " " + userrepetition)
    var result = userweight * (1 + userrepetition / 30);
    document.getElementById("userperfectrep").innerHTML = "Your max weight per rep is:" + result;
    var n = result.toFixed(2)
    document.getElementById("userperfectrep").innerHTML = "Your max weight per rep is:" + n;

}