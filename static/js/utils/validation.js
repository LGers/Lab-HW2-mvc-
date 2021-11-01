export const validation =(input,regex) =>{


    const toggleErrorInput = (isError, eTarget, idTag) => {
        console.log('toggle')

        if (isError) {
            eTarget.classList.add('sign-form__validation_error')
            document.getElementById(idTag).classList.remove("displayNone")
        } else {
            eTarget.classList.remove('sign-form__validation_error')
            document.getElementById(idTag).classList.add("displayNone")
        }
    }


    const firstName = document.getElementById('firstName')
    if (firstName) {
        firstName.addEventListener("blur", (e) => {
            toggleErrorInput((e.target.value.length < 2), e.target, 'firstNameErrorMsg')
        })
    }

    const lastName = document.getElementById('lastName')
    if (lastName) {
        lastName.addEventListener("blur", (e) => {
            toggleErrorInput((e.target.value.length < 2), e.target, 'lastNameErrorMsg')
        })
    }

    const email = document.getElementById('email')
    if (email) {
        email.addEventListener("blur", (e) => {
            const Regex = /.+@.+\..+/i
            toggleErrorInput(!Regex.exec(e.target.value), e.target, 'emailErrorMsg')
        })
    }

    const password = document.getElementById('password')
    if (password) {
        password.addEventListener("blur", (e) => {
            const Regex = /^[A-Za-z0-9]\w{6,}$/
            toggleErrorInput(!Regex.exec(e.target.value), e.target, 'passwordErrorMsg')
        })
    }
    const confirmPassword = document.getElementById('confirm_password')
    if (confirmPassword) {
        confirmPassword.addEventListener("blur", (e) => {
            const Regex = /^[A-Za-z0-9]\w{6,}$/
            toggleErrorInput(!Regex.exec(e.target.value), e.target, 'confirmPasswordErrorMsg')
        })
    }
}