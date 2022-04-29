describe("Onboaridng App", () =>{
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    const firstNameInput = () => cy.get("input[name=firstName]");
    const lastNameInput = () => cy.get("input[name=lastName]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const registerBtn = () => cy.get("button");
    const termsCheckBox = () => cy.get("input[type='checkbox']");

    it("The proper elements are showing", () => {
        firstNameInput().should("exist");
        lastNameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        registerBtn().should("exist");
        termsCheckBox().should("exist");
    })

    describe("Filling out the inputs and reseting the form", () => {
        it("Can navigate to the site", () => {
            cy.url().should("include", "localhost")
        })

        it("Register button starts out disabled", () => {
            registerBtn().should("be.disabled");
        })

        it("Can type in the inputs and select the checkbox", () => {
            firstNameInput()
              .should("have.value", "")
              .type("Jane")
              .should("have.value", "Jane");
            lastNameInput()
              .should("have.value", "")
              .type("Doe")
              .should("have.value", "Doe");
            emailInput()
              .should("have.value", "")
              .type("johndoe@gmail.com")
              .should("have.value", "johndoe@gmail.com");
            passwordInput()
              .should("have.value", "")
              .type("tyweirt")
              .should("have.value", "tyweirt");
            termsCheckBox()
              .should("have.value", "on")
              .type("on")
              .should("have.value", "on");
        })

        it("The register button enables when all inputs and checkbox are filled out", () => {
            firstNameInput().type("John");
            lastNameInput().type("Doe");
            emailInput().type("johndoe@gmail.com");
            passwordInput().type("tyweirt");
            termsCheckBox().type("on");
            registerBtn().should("not.be.disabled");
        })

        it("The register button can reset the inputs and checkbox then become disabled", () => {
            firstNameInput().type("John");
            lastNameInput().type("Doe");
            emailInput().type("johndoe@gmail.com");
            passwordInput().type("tyweirt");
            termsCheckBox().type("on");
            registerBtn().click();
            firstNameInput().should("have.value", "");
            lastNameInput().should("have.value", "");
            emailInput().should("have.value", "");
            passwordInput().should("have.value", "");
            termsCheckBox().should("have.value", "on");
        })   
    })

    describe("Onboarding a new User", () =>{
        it("Can submit and display a new user", () => {
            firstNameInput().type("John");
            lastNameInput().type("Doe");
            emailInput().type("johndoe@gmail.com");
            passwordInput().type("tyweirt");
            termsCheckBox().type("on");
            registerBtn().click();
        })
    })
})