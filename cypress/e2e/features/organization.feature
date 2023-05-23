Feature: Organization

    Create and Edit and Deletion of Organization

    Scenario: Create an organization
        Given Login to vtiger
        And Navigate to organization tab
        Then Create an organization
        And Verify the organization details

    Scenario: Edit the organization
        And Edit the organization details
        And Verify the edited organization details
    
    Scenario: Delete the created organization
        Then Delete the organization
        And sign out of the application