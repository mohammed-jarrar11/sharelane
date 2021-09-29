Feature: The sharelane

  I want to open sharelane page

  Scenario: make database queries
    Given I open sharelane page
    When  I click on Test Portal
    Then "Helpers" should be shown
    When I click on Account Creator
    Then "Account Creator" should be shown
    When I click on Create new user account
    Then "Here is your test user account*" should be shown
    When I click on user account
    When I open sharelane page
    When I fill in valid Email
    And I fill in valid password
    And I click on Login
    Then "Hello" should be shown
    When enter expectations into text box "Search"
    And I click on Search
    Then "Charles Dickens" should be shown
    When I click on add to cart
    Then "Book was added to the Shopping Cart" should be shown
    When I click on Test Portal
    Then "Helpers" should be shown
    When I click on Credit Card Generator
    Then "Credit Card Generator" should be shown
    When select  Visa
    And I click on Generate Credit Card
    Then "Here is your test card*" should be shown
    When I copy card number
    When I open main_sharelane page
    Then "Hello" should be shown
    When I click on Shopping Cart
    Then "Shopping Cart" should be shown
    When I click on Proceed to Checkout
    Then "Checkout" should be shown
    When  select  Visa from drop down menu "card type"
    And   paste card number into text box "card number "
    And   I click on  Make Payment
    Then "Thank you for your order!!!" should be shown
    When copy order id
    When I click on Test Portal
    Then "Helpers" should be shown
    When I click on DB Connect Utility
    Then "DB Connect Utility" should be shown
    When enter orderId
    And I click on Query DB
    Then "10" should be shown
    