@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    Background:
        Given user is on the enrollment page

    @sep19-1
    Scenario Outline: Valid personal details navigate to the payment plan step
        When user submits valid personal details with "<field set>"
        Then the payment plan step is displayed

        Examples:
            | field set           |
            | all fields          |
            | required fields only |
