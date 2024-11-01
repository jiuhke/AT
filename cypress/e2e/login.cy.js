describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        });

    it('Проверка на позитивный кейс авторизации', function () {
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

     it('Проверка логики восстановления пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('Проверка на негативный кейс авторизации (неправильный пароль)', function () {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   });

   it('Проверка на негативный кейс авторизации (неправильный логин)', function () {
         cy.get('#mail').type('man@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('Проверка на негативный кейс авторизации ( Емайл без @)', function () {
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('Проверка на приведение к строчным буквам в логине', function () {
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

 }) 