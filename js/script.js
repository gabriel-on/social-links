// DARK/LIGHT MODE --------------------- //

const changeThemeBtn = document.querySelector("change-theme")

function toggleMode(){
    document.body.classList.toggle("dark")
}

function loadTheme(){
    const darkMode = localStorage.getItem("dark")

    if (darkMode){
        toggleMode()
    }
}

loadTheme()

changeThemeBtn;addEventListener("change", function() {
    toggleMode()

    localStorage.removeItem("dark")

    if (this.document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})