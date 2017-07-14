Feature: E1. Event creation, update, delete

  Scenario Outline: Creating new simple event

    When user taps more options button in header
    When user taps "New event" item in list
    When user enters "<initial_event_name>"
    When user uses home button
    When user taps on timepicker with label "From"
    When user memorizes current mobile device time
    When user memorizes hours, minutes in adjusted current mobile device time to get notification in 5 minutes or less
    When user taps on current hours in circular time picker, where hours are received from mobile device
    When user taps on current minutes rounded to five in circular time picker, where minutes are received from mobile device
    When user taps on done button in circular slider
    When user taps on done button in new event page
    Examples:
      | initial_event_name | updated_event_name |
      | A                  | Up A event         |
      | B                  | Up B event         |
      | C                  | Up C event         |
      | D                  | Up D event         |
      | E                  | Up E event         |
# AND
  Scenario Outline: Open notifications and update event

    When user opens notifications
    When user waits notification with name "<initial_event_name>" is displayed for 10 minutes in notifications
    When user taps on calendar event item with name "<initial_event_name>" in notifications
    When user taps more options button in header
    When user taps "Edit" item in list
    When user taps event name input
    When user uses backspace in keyboard amount of times equal to length of "<initial_event_name>"
    When user enters "<updated_event_name>"
    When user uses home button
    When user taps on done button in new event page
    Examples:
      | initial_event_name | updated_event_name |
      | A                  | Up A event         |
      | B                  | Up B event         |
      | C                  | Up C event         |
      | D                  | Up D event         |
      | E                  | Up E event         |
# AND
  Scenario Outline: Find updated event
    When user opens calendar application
    When user taps more options button in header
    When user taps "Search" item in list
    When user taps clear search input button if present
    When user enters "<updated_event_name>"
    When user uses enter button in keyboard
    Then user views calendar event item with name "<updated_event_name>" in search results
    Examples:
      | initial_event_name | updated_event_name |
      | A                  | Up A event         |
      | B                  | Up B event         |
      | C                  | Up C event         |
      | D                  | Up D event         |
      | E                  | Up E event         |
# AND
  Scenario Outline: Delete event
    When user taps on search input
    When user taps clear search input button if present
    When user enters "<updated_event_name>"
    When user uses enter button in keyboard
    When user taps on calendar event item with name "<updated_event_name>" in search results
    When user taps more options button in header
    When user taps "Delete" item in list
    When user taps on button with text "OK"
    Then user views "No event." text in search results
    Examples:
      | initial_event_name | updated_event_name |
      | A                  | Up A event         |
      | B                  | Up B event         |
      | C                  | Up C event         |
      | D                  | Up D event         |
      | E                  | Up E event         |

# EXPECTED CASE AND CHECKS:
# Test steps:
# 1 Open the Calendar app
# 2 Create a new event
# a. set the current date and time to get the notification
# b. get a name for event from an external file
# 3 Open the event through tapping the received notification
# 4 Edit the name of the event and save it
# 5 Search for the event
# 6 Delete the event