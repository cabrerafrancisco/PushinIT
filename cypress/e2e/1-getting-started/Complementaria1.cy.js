 /// <reference types="cypress" />
 describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividadcomplementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#user').type(`francisco${numero}`);
        cy.get('#pass').type('123456!');
        cy.get('[value=Male]').check({force:true});
        cy.get('#day').select('31');
        cy.get('#month').select(7);
        cy.get('#year').select('1997');
        cy.get('#submitForm').click();
    });
});