@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    Background:
        Given user is on the enrollment page

    @sep09-1
    Scenario: Product name is displayed on the information card
        Then the product name is displayed on the information card

    @sep09-2
    Scenario: Product name on the information card matches the left-side product name
        Then the product name on the information card matches the left-side product name

    @sep09-3
    Scenario: Product price is displayed
        Then the displayed product price matches catalog data

    @sep09-4
    Scenario: Flexible payment plan text is displayed
        Then the flexible payment plan text is displayed

    @sep09-5
    Scenario: Program start date is displayed
        Then the program start date is displayed
        And the displayed start date for the program is correct

    @sep09-6
    Scenario: Return policy and final return date are displayed
        Then the return policy is displayed
        And the program refund date is displayed
        And the displayed refund date for the program is correct
