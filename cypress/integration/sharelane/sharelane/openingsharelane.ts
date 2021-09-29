import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const url = "https://main.sharelane.com/cgi-bin/main.py";
var emailAddress = " ";

var number_card = "";
var orderId = "";




Given(`I open sharelane page`, () => {
  cy.visit(url);
});
When('I click on Test Portal', () => {
    cy.contains('Test Porta').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});
When('I click on Account Creator', () => {
    cy.contains('Account Creator').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});
When('I click on Create new user account', () => {
    cy.contains('Create new user account').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('I click on user account', () => {
    var index = 2
    cy.get('table >tbody >tr td:nth-child(3)').each(($el, index, $list) => {
        emailAddress = $el.text()
    })

});

When('I open sharelane page', () => {
   
    cy.visit(url);
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('I fill in valid Email', () => {

    cy.get('input[name="email"]').type(emailAddress)
});
When('I fill in valid password', () => {
    cy.get('input[type = "password"]').type('1111')
});
When('I click on Login', () => {
    cy.contains('Login').click()
});

Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('enter expectations into text box "Search"', () => {
    cy.get('input[name="keyword"]').type('expectations')
});
When('I click on Search', () => {
    cy.contains('Search').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});


When('I click on add to cart', () => {
    cy.get('img[src="../images/add_to_cart.gif"]').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('I click on Test Portal', () => {
    cy.contains('Test Porta').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});


When('I click on Credit Card Generator', () => {
    cy.contains('Credit Card Generator').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('select  Visa', () => {
    cy.get('select').select('Visa').should('have.value', '1')
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});


When('I click on Generate Credit Card', () => {
    cy.contains('Generate Credit Card').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('I copy card number', () => {
    var index = 2
    cy.get('table >tbody >tr td:nth-child(2)').each(($el, index, $list) => {
       
        number_card = $el.text()
        
    })

});


When('I open main_sharelane page', () => {
    cy.visit(url);
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('I click on Shopping Cart', () => {
    cy.contains('Shopping Cart').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('I click on Proceed to Checkout', () => {
    cy.contains('Proceed to Checkout').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});

When('select  Visa from drop down menu "card type"', () => {
    cy.get('select[name="card_type_id"]').select('Visa').should('have.value', '1')
});
When('paste card number into text box "card number "', () => {

    cy.get('table').contains('tr', 'Card Number:').find('input').type(number_card);

});
When('I click on  Make Payment', () => {

    cy.get('table tbody tr td').eq(45).click();


});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});
When('copy order id', () => {
    var index = 2
    cy.get('table').contains('tr', 'Order id:').find('b').each(($el, index, $list) => {
        orderId = $el.text()

    }) 
   

});
When('I click on Test Portal', () => {
    cy.contains('Test Porta').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});
When('I click on DB Connect Utility', () => {
    cy.contains('DB Connect Utility').click()
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});
When('enter orderId', () => {
    cy.get('input[type="text"]').type(orderId)
});

When('I click on Query DB', () => {
    cy.get('input[type="submit"]').type('1111')
});
Then('{string} should be shown', (content) => {
    cy.contains(content, { timeout: 10000 }).should('be.visible')
});