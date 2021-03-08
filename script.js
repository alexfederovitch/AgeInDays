document.getElementById("button").onclick = function () {checker()};
document.getElementById("reset").onclick = function () {reset()};

function checker() {
    let birthday = new Date(document.getElementById("text").value);
    let currentDate = new Date();
    let differenceInTime = currentDate.getTime() - birthday.getTime();
    let differenceInDays = "Your age in days is: " + Math.floor(differenceInTime/(1000*3600*24));
    if(isNaN(differenceInTime) === true){
        differenceInDays = "Please enter a valid date in the format mm/dd/yyy";
    }
    document.getElementById("result").innerHTML = differenceInDays;
    console.log(differenceInDays);
}

function reset() {
    document.getElementById("text").value = "";
    document.getElementById("result").innerHTML = "";
}