export const  signUpPage = `
<div class="wrapper">
    <aside class="sign-bar">
        <div class="sign-bar__container">
            <div class="sign-bar__form-container">
                <form action="#" class="sign-bar__form">
                    <label class="sign-form__name">Sign Up</label>

                    <div>
                        <input id="firstName"
                               class="sign-bar__input sign-form__input_name-icon sign-form__input_icon-position"
                               type="input" placeholder="First Name">
                        <p id="firstNameErrorMsg" class="sign-form__validation displayNone">Name must be at least 2 characters</p>
                    </div>

                    <div>
                        <input id="lastName"
                               class="sign-bar__input sign-form__input_name-icon sign-form__input_icon-position"
                               type="input" placeholder="Last Name">
                        <p id="lastNameErrorMsg" class="sign-form__validation displayNone">Name must be at least 2 characters</p>
                    </div>

                    <div>
                        <input id="email"
                               class="sign-bar__input sign-form__input_email-icon sign-form__input_icon-position"
                               type="email" placeholder="Email">
                        <p id="emailErrorMsg" class="sign-form__validation displayNone">Email not found. Please check the spelling</p>
                    </div>

                    <div>
                        <div class="signForm_password password-block">
                            <input class="sign-bar__input sign-form__input_password-icon sign-form__input_icon-position"
                                   type="password"
                                   placeholder="Password"
                                   id="password">
                            <button onclick="toggleShowPassword('password')"
                                    class="password-block__eye-button"></button>
                        </div>
                        <p  id="passwordErrorMsg" class="sign-form__validation displayNone">Password contain unsupported characters</p>
                    </div>

                    <div>
                        <div class="password-block">
                            <input class="sign-bar__input sign-form__input_confirm-password-icon sign-form__input_icon-position"
                                   type="password"
                                   placeholder="Confirm Password"
                                   id="confirm_password">
                            <button onclick="toggleShowPassword('confirm_password')"
                                    class="password-block__eye-button"></button>
                        </div>
                        <p  id="confirmPasswordErrorMsg" class="sign-form__validation displayNone">Password contain unsupported characters</p>
                    </div>
                    <a href="/sign-up" data-link>
                        <button class="sign-button sign-button_style">Sign Up</button>
                    </a>
                </form>
            </div>
            <div class="sign-bar__have-account">Already have an account?
                <a class="sign-bar__have-account_link" href="/sign-in" data-link>Sign in</a>
            </div>
        </div>

    </aside>
</div>
`