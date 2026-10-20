@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    Background:
        Given user is on the enrollment page

    @sep10-1
    Scenario: Personal detail fields have the expected input types and validation
        Then the first name, last name, and email fields are present with expected types
        And the phone field accepts numbers only

    @sep10-2
    Scenario: Referral source is available as a dropdown
        Then the referral source dropdown displays standard options

    @sep10-3
    Scenario: Next is disabled when required personal details are missing or invalid
        Then the Next button is disabled when required personal details are missing
