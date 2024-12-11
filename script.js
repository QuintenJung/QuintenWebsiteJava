function load() {
    console.info("script loaded")
    if (getCookie("cookie") == "true") {
        if (getCookie("darkmode") == "true") {
            dark_mode(true)
        } else {
            dark_mode(false)
        }
    }
}
function cookies_deny() {
    let cookiesMelding = document.getElementById("cookies")
    console.info("cookies: deny")
    cookiesMelding.style.display = "none"
}
function cookies_accept() {
    let cookiesMelding = document.getElementById("cookies")
    console.info("cookies: accept")
    cookiesMelding.style.display = "none"
    setCookie("cookie", "true")
}
function cookie_melding() {
    if (getCookie("cookie") == "true") {
        cookies_accept()
    }
}
//voor button in inlog
function myFunction() {
    var checkBox = document.getElementById("terms");
    var submit = document.getElementById("submit");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    console.info("checkBox;" + checkBox.checked)
    if (checkBox.checked == true && firstname.value != "" && lastname.value != "") {
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
    let time = new Date().getHours()
    console.info("time;" + time)
    if (time < 6) {
        document.getElementById("naam").innerHTML = "Goedenacht, "
    } else if (time < 12) {
        document.getElementById("naam").innerHTML = "Goedemorgen, "
    } else if (time < 18) {
        document.getElementById("naam").innerHTML = "Goedemiddag, "
    } else {
        document.getElementById("naam").innerHTML = "Goedenavond, "
    }
    document.getElementById("naam").innerHTML += firstname + " " + lastname + "."
}
function getCookie(cname) {
    let name = cname + "=";
    let splitCookie = document.cookie.split(';')
    for (let i = 0; i < splitCookie.length; i++) {
        let x = splitCookie[i]
        while (x.charAt(0) == ' ') {
            x = x.substring(1)
        }
        if (x.indexOf(name) == 0) {
            return x.substring(name.length, x.length)
        }
    }
}
function setCookie(name, value) {
    if (getCookie("cookie") == "true") {
        document.cookie = name + "=" + value
    }
}
function dark_mode(toggle) {
    if (toggle == undefined) {
        toggle = (document.documentElement.style.getPropertyValue("--html") == "white")
    }
    if (toggle == false) {
        document.documentElement.style.setProperty('--html', 'white');
        document.documentElement.style.setProperty('--background', '#AFBEC5');
        setCookie("darkmode", "false")
        console.info("dark mode off")
    } else {
        //dark mode
        document.documentElement.style.setProperty('--html', '#3A4A64');
        document.documentElement.style.setProperty('--background', '#7A8C94');
        setCookie("darkmode", "true")
        console.info("dark mode on")
    }
}

function menu() {
    let nav = document.getElementById("menu_nav")
    if (nav.style.display == "none") {
        nav.style.display = "grid"
    } else {
        nav.style.display = "none"
    }
}
var countDownDate = new Date("Jan 5, 2025 00:00:00").getTime()

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (distance = 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "happy new year";
    }
  }, 1000);






