export const signInPage = `
<div class="wrapper">
        <aside class="sign-bar">
            <div class="sign-bar__container">
                <div class="sign-bar__form-container">
                    <form action="/sign-in" class="sign-bar__form">
                        <label class="sign-form__name">
                            <a class="sign-bar_back-link"
                               href="/sign-up" data-link>< </a></span>Sign In
                        </label>
                        <div>
                            <input id="email"
                                   class="sign-bar__input sign-form__input_email-icon sign-form__input_icon-position"
                                   type="email" placeholder="Email">
                            <p id="emailErrorMsg" class="sign-form__validation displayNone">Email not found. Please check the spelling</p>
                        </div>

                        <div>
                            <div class="signForm_password password-block">
                                <input id="password" class="sign-bar__input sign-form__input_password-icon sign-form__input_icon-position"
                                       type="password"
                                       placeholder="Password">
                                <button class="password-block__eye-button"></button>
                            </div>
                            <p  id="passwordErrorMsg" class="sign-form__validation displayNone">Password contain unsupported characters</p>
                        </div>
                        
                        <a href="/sign-in" data-link>
                            <button class="sign-button sign-button_style">Sign In</button>
                        </a>
                        <a class="sign-bar__have-account_link" href="/restore-password" data-link>Forgot Password?</a>

                    </form>
                </div>
                <div class="sign-bar__have-account">Don't have an account?
                    <a class="sign-bar__have-account_link" href="/sign-up" data-link>Sign Up</a>
                </div>
            </div>
        </aside>
</div>
`