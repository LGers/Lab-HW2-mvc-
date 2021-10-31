import {signUpPage} from "../templates/sign-up.js";
export default class Model {
    constructor() {
        this.currentPage=signUpPage
    }

    reloadPage(currentPage) {
        this.currentPage = currentPage
        this.onClickLink(this.currentPage)
    }

    bindClickLink(callback) {
        this.onClickLink = callback
    }


}