class loginPage {

    elements = {
        launchLoginPage: () => cy.visit("/login.html"),
        inUserName: () => cy.get("#user_login"),
        inPassword: () => cy.get("#user_password"),
        submitBtn: () => cy.get("input[name='submit']"),
        profileName: () => cy.get("#settingsBox").find(".dropdown-toggle"),
        errorMessage: () => cy.get("#login_form").find(".alert-error"),
        rememberMe: () => cy.get("#user_remember_me"),
        email: () => cy.get("#user_email"),
        emailMsg: () => cy.get(".offset3"),
        forgotPass: () => cy.get(".offset3").find('a'),
        getFooterLinks: () => cy.get('.span4').find('span'),
        logoutBtn: () => cy.get("#logout_link")
    };

    launchZeroBankApp() {
        this.elements.launchLoginPage()
    }

    fillUsernameAndPassord(username, password) {
        this.elements.inUserName().type(username)
        this.elements.inPassword().type(password)
    }

    clickSignIn() {
        this.elements.submitBtn().click()
    }

    profileName() {
        return this.elements.profileName()
    }

    loginError() {
        return this.elements.errorMessage()
    }
    ForgotPasslink() {
        return this.elements.forgotPass()
    }

    emailMessage() {
        return this.elements.emailMsg()
    }


}

module.exports = new loginPage();