// DARK/LIGHT MODE --------------------- //

const changeThemeBtn = document.querySelector("#change-theme")

function toggleMode() {
    document.body.classList.toggle("light")
}

function loadTheme(){
    const lightMode = localStorage.getItem("light")

    if (lightMode){
        toggleMode()
    }
}

loadTheme()

changeThemeBtn.addEventListener("change", function () {
    toggleMode()

    localStorage.removeItem("light")

    if (document.body.classList.contains("light")) {
        localStorage.setItem("light", 1)
    }
})