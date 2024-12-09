function load() {
    console.info("script loaded")
    if (getCookie("cookie") == "true") {
        if (getCookie("darkmode") == "true") {
            dark_mode(false)
        } else {
            dark_mode(true)
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
    console.info(checkBox.checked)
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
    document.cookie = name + "=" + value
}
function dark_mode(toggle) {
    if (toggle == undefined) {
        // console.info((document.documentElement.style.getPropertyValue("--html") == "white"))
        toggle = (document.documentElement.style.getPropertyValue("--html") == "#5a5a5a")
    }
    if (toggle == true) {
        document.documentElement.style.setProperty('--html', 'white');
        document.documentElement.style.setProperty('--background', '#AFBEC5');
        if (getCookie("cookie") == "true") {
            setCookie("darkmode", "false")
        }
        console.info("dark mode off")
    } else {
        //dark mode
        document.documentElement.style.setProperty('--html', '#3A4A64');
        document.documentElement.style.setProperty('--background', '#7A8C94');
        if (getCookie("cookie") == "true") {
            setCookie("darkmode", "true")
        }
        console.info("dark mode on")
    }
}
