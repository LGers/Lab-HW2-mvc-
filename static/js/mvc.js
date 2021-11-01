import Controller from "./controller.js"
import View from "./view.js"
import Model from "./model.js"
import {validation} from "./utils/validation.js";
import regex from "./utils/regex.js";
console.log('mvc loaded')
const app = new Controller(new Model(), new View())



//----router
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    const routes = [
        {path: "/", view: () => {
                // console.log("main")
                app.handleClickLink2('signUpPage')
            }},
        {path: "/sign-in", view: () => app.handleClickLink2('signInPage')},
        {path: "/sign-up", view: () => app.handleClickLink2('signUpPage')},
        {path: "/restore-password", view: () => app.handleClickLink2("restorePasswordPage")},
        {path: "/restore-password-sent", view: () => app.handleClickLink2("restorePasswordSentPage")},
    ]

    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    // console.log(potentialMatches)
//
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
//     if (!match) match = {route: {path: "/page404", view: Page404}, isMatch: true}
    if (!match) match = {route: routes[0], isMatch: true}//404page must be

    // console.log(match)
    // console.log(match.route)
    console.log(match.route.view())


        const firstNameInput = document.querySelector('#firstName')
        const lastNameInput = document.querySelector('#lastName')
        const emailInput = document.querySelector('#email')
        const passwordInput = document.querySelector('#password')
        const confirmPasswordInput = document.querySelector('#confirm_password')
    // debugger
        validation(firstNameInput, regex.name)
        validation(lastNameInput, regex.name)
        validation(emailInput, regex.email)
        validation(passwordInput, regex.password)
        validation(confirmPasswordInput, regex.password)

    document.addEventListener('submit', event =>{
        event.preventDefault()
        console.log('bindAddTodo')
    })
}


window.addEventListener("popstate", router)
//
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e=>{
        if (e.target.matches("[data-link]")) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})

document.body.addEventListener('blur',()=>{
    console.log('blur')
})
