describe("Complementaria 3", () => {
    it('ToDo Lists', () => {
        cy.visit("");
        cy.xpath("//div//form//p//span").dblclick();
        cy.xpath("//input[@id='user']").type("pushingit");
        cy.xpath("//div//form//div//input[@name='pass']").type('123456!');
        cy.xpath("//div//form//button[@type='submit']").click();
        cy.wait(1000);
        cy.xpath("//div//p//a[@id='todolistlink']").click();
        cy.xpath("//ancestor::div//descendant::input[@id='task']").type("tarea 1")
        cy.wait(1000);
        cy.xpath("//*[@id='sendTask']").click()
        cy.xpath("/html/body/div[1]/div/div[2]/ul/div/div[1]/li/div").click()
    });
})