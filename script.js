
function cookies_deny() {
    let cookiesMelding = document.getElementById("cookies")
    console.info("cookies: deny")
    cookiesMelding.style.display = "none"
}
function cookies_accept() {
    let cookiesMelding = document.getElementById("cookies")
    console.info("cookies: accept")
    cookiesMelding.style.display = "none"
}
function myFunction() {
    var checkBox = document.getElementById("terms");
    var submit = document.getElementById("submit");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    console.info(checkBox.checked)
    if (checkBox.checked == true & firstname.value != "" & lastname.value != "") {
        submit.style.backgroundColor = "rgb(0, 255, 0)";
    } else {
        submit.style.backgroundColor = "rgb(128, 128, 128)";
    }
}
function load_melding() {
    let text = window.location.href
    let split = text.split("?")[1].split("&")
    let firstname = split[0].split("=")[1]
    let lastname = split[1].split("=")[1]
    var button = document.getElementById("button")
    document.getElementById("naam").innerHTML = "Bedankt voor het inloggen, " + firstname + " " + lastname + ".";
}
