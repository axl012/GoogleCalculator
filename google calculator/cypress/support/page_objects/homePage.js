export class HomePage{
    typeInSearchBar(searchValue){
        cy.get('textarea').first().type(searchValue).type('{enter}')
    }
    

}
export const onHomePage = new HomePage()