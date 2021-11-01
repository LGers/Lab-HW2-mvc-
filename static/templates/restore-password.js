export const restorePasswordPage = `
<div class="wrapper">
    <aside class="sign-bar">
        <div class="sign-bar__container">
            <div class="sign-bar__form-container">
                <form action="/sign-restore-password-sent" class="sign-bar__form">
                    <label class="sign-form__name"><span>
                            <a class="sign-bar_back-link"
                               href="/sign-in/" data-link>< </a></span>Restore Password
                    </label>
                    <p>Please use your email address, and we'll send you the link to reset your password</p>

                    <div>
                        <input id="email"
                               class="sign-bar__input sign-form__input_email-icon sign-form__input_icon-position"
                               type="email" placeholder="Email">
                        <p id="emailErrorMsg" class="sign-form__validation displayNone">Email not found. Please check the spelling</p>
                    </div>

                    <a href="/restore-password-sent" data-link>
                        <button class="sign-button sign-button_style">Send Reset Link</button>
                    </a>
                </form>
            </div>
        </div>
    </aside>
</div>

`