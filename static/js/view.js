export default class View {
    constructor() {
        this.app = this.getElement('#root')
        this.currentPage = this.createElement('div')
        this.app.append(this.currentPage)

    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        return document.querySelector(selector)
    }

    displayContent(content) {

        // Delete all nodes
        while (this.currentPage.firstChild) {
            this.currentPage.removeChild(this.currentPage.firstChild)
        }

        if (!content) {
            const p = this.createElement('p')
            p.textContent = 'Nothing to show'
            this.currentPage.append(p)

        } else {
            const div = this.createElement('div')
            div.innerHTML = content
            this.currentPage.append(div)
        }
    }

    bindClickLink2(handler) {
        this.currentPage.addEventListener('click', event => {
            switch (event.target.textContent) {
                case 'Sign in': {
                    handler('signInPage')
                    break
                }
                case 'Sign Up': {
                    handler('signUpPage')
                    break
                }
                case 'Forgot Password?': {
                    handler('restorePasswordPage')
                    break
                }
                case 'Send Reset Link': handler('restorePasswordSentPage');
            }
        })
    }
}

