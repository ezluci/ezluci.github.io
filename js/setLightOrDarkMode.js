if (document.cookie == "")
    document.cookie = "dark-mode=false; expires=Wed, 18 Dec 2026 12:00:00 GMT; path=/";
var linkElem = document.createElement("link");
var textRef = document.getElementById("textSwitchDarkMode");
linkElem.rel = "stylesheet";
if (document.cookie == "dark-mode=true")
{
    linkElem.id = "darkMode";
    linkElem.href = "/css/darkMode.css";
    textRef.innerHTML = "Schimbă pe modul luminat";
}
else
{
    linkElem.id = "lightMode";
    linkElem.href = "/css/lightMode.css";
    textRef.innerHTML = "Schimbă pe modul întunecat";
}
document.head.appendChild(linkElem);