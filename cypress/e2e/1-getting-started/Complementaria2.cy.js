describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividadcomplementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#user').type(`francisco${numero}`);
        cy.get('[name^=pa]').type('123456!');//prefijo sub-string matches
        cy.get('[value=Male]').check({force:true});//este es por atributo
        cy.get('select#day').select("31"); // valor 31
        cy.get('[id$=nth]').select(10);//sufijo sub-string matches & array 10
        cy.get('#year').select('1998');
        cy.get('#submitForm').click();
    });
});