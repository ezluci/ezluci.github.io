function SwitchDarkMode()
{
    var linkRef;
    var textRef = document.getElementById("textSwitchDarkMode");
    if (linkRef = document.getElementById("darkMode"))
    {
        linkRef.id = "lightMode";
        linkRef.href = "/css/lightMode.css";
        textRef.innerHTML = "Schimbă pe modul întunecat";
        document.cookie = "dark-mode=false; expires=Wed, 18 Dec 2026 12:00:00 GMT; path=/";
    }
    else
    {
        linkRef = document.getElementById("lightMode");
        linkRef.id = "darkMode";
        linkRef.href = "/css/darkMode.css";
        textRef.innerHTML = "Schimbă pe modul luminat";
        document.cookie = "dark-mode=true; expires=Wed, 18 Dec 2026 12:00:00 GMT; path=/";
    }
}