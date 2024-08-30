const initialPassword =  document.querySelector("input[name='password']");
const confirmPassword =  document.querySelector("input[name='confirm_password']");
const errorEle = document.querySelector(".invalid_password")

function checkPassword() {
    if (initialPassword.value == confirmPassword.value) {
        errorEle.classList.remove("active")
    } else {
        errorEle.classList.add("active")
    }
    
}

initialPassword.addEventListener("input",checkPassword)
confirmPassword.addEventListener("input",checkPassword)