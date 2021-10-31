 export const  signUpPage = `
<div class="wrapper">
    <header>
        <h1>Tasks 2</h1>
    </header>
    <main class="container">
        <aside class="sign-bar">
            <div class="sign-bar__container">
                <div class="sign-bar__form-container">
                    <form action="#" class="sign-bar__form">
                        <label class="sign-form__name">Sign Up</label>
                        <div>
                            <input class="sign-bar__input sign-form__input_name-icon sign-form__input_icon-position"
                                   type="input" placeholder="First Name">
                            <p class = "sign-form__validation">Name must be at least 2 characters</p>
                        </div>
                        
                        <div>
                            <input class="sign-bar__input sign-form__input_name-icon sign-form__input_icon-position"
                                   type="input" placeholder="Last Name">
                            <div class="sign-form__validation">Name must be at least 2 characters</div>
                        </div>
                        
                        <input class="sign-bar__input sign-form__input_email-icon sign-form__input_icon-position"
                               type="email" placeholder="Email">
                        <div class="sign-form__validation">Email not found. Please check the spelling</div>
                        
                        <div class="signForm_password password-block">
                            <input class="sign-bar__input sign-form__input_password-icon sign-form__input_icon-position"
                                   type="password"
                                   placeholder="Password">
                            <div class="sign-form__validation">Password contain unsupported characters</div>
                            <button class="password-block__eye-button"></button>
                        </div>


                        <div class="password-block">
                            <input class="sign-bar__input sign-form__input_confirm-password-icon sign-form__input_icon-position"
                                   type="password"
                                   placeholder="Confirm Password">
                            <div class="sign-form__validation">Password contain unsupported characters</div>
                            <button class="password-block__eye-button"></button>
                        </div>

                        <button class="sign-button sign-button_style">Sign Up</button>

                    </form>
                </div>
                <div class="sign-bar__have-account">Already have an account?
                    <a class="sign-bar__have-account_link" href="/sign-in" data-link>Sign in</a>
                </div>
            </div>

        </aside>
        <div class="container">
            You see main container
        </div>
    </main>
</div>
`