let {When, Then} = require('cucumber');

let {
    get_coords_of_point_in_circ_hours_picker_by_its_container,
    get_coords_of_point_in_circ_minutes_picker_by_its_container
} = require('../../utils/circ_slider_coords_dynamic_calc');

let {get_loc_obj} = require('../../utils/loc_obj_management');

let {round_up_positive} = require('../../utils/math_rounding');

let Common_elements_cal = require('../../page_objects/generic_elements/comon_elements_cal').Common_elements_cal;
let common_elements_cal = new Common_elements_cal();

let Header_main_cal = require('../../page_objects/headers/header_main_cal').Header_main_cal;
let header_main_cal = new Header_main_cal();

let Circular_sliders_elements_cal = require('../../page_objects/generic_elements/circular_slider_elements_cal').Circular_sliders_elements_cal;
let circular_sliders_elements_cal = new Circular_sliders_elements_cal();

let New_event_cal_page = require('../../page_objects/new_event_cal_page').New_event_cal_page;
let new_event_cal_page = new New_event_cal_page();

When('user taps more options button in header', function ()
{
    browser.click(header_main_cal.more_options_button);
});

When('user taps "{item_text}" item in list', function (item_text)
{
    browser.click(common_elements_cal.item_in_list(item_text));
});

When('user enters "{text}"', function (text)
{
    browser.keys(text);
});

When('user uses home button', function ()
{
    browser.deviceKeyEvent(4);
});

When('user taps on timepicker with label "{label_text}"', function (label_text)
{
    browser.click(common_elements_cal.timepicker_with_label(label_text));
});

When('user memorizes current mobile device time', function ()
{
    cucumberThis.dataStorage.mobile_date_time = browser.getDeviceTime().value;
});

When('user memorizes hours, minutes in adjusted current mobile device time to get notification in {minutes_from_notification} minutes or less', function (minutes_from_notification)
{
    let mobile_date_time_moment_obj = moment(cucumberThis.dataStorage.mobile_date_time, "ddd MMM DD HH:mm:ss YYYY");
    let parsed_mobile_date_time_obj = mobile_date_time_moment_obj.toObject();

    let minutes_were_added_to_get_notification = false;
// rounding minutes with 5 and 0 at the end to view notification
    if (parsed_mobile_date_time_obj.minutes % 5 === 0
        || parsed_mobile_date_time_obj.minutes === 0)
    {
        mobile_date_time_moment_obj.add(5, 'm');
        minutes_were_added_to_get_notification = true;
    }

    let parsed_and_adjusted_mobile_date_time_obj = mobile_date_time_moment_obj.toObject();
    let {
        minutes: mobile_parsed_minutes_with_notification_adjustment,
        hours: mobile_parsed_hours_with_notification_adjustment
    } = parsed_and_adjusted_mobile_date_time_obj;

    cucumberThis.dataStorage.hours_num_from_mobile = mobile_parsed_hours_with_notification_adjustment;

    let minutes_to_choose;
    //adjusted minutes ended with 0 and 5 are already rounded to 5
    if (!minutes_were_added_to_get_notification)
    {
        minutes_to_choose = round_up_positive(mobile_parsed_minutes_with_notification_adjustment);
    }
    else
    {
        minutes_to_choose = mobile_parsed_minutes_with_notification_adjustment;
    }

    cucumberThis.dataStorage.minutes_num_from_mobile = minutes_to_choose;
});

When('user taps on current hours in circular time picker, where hours are received from mobile device', function ()
{
    if (cucumberThis.dataStorage.circ_slider_container_loc_obj == null)
    {
            cucumberThis.dataStorage.circ_slider_container_loc_obj = get_loc_obj(
                circular_sliders_elements_cal.circular_slider_container
            );
    }

    let {x: hours_x, y: hours_y} =
        get_coords_of_point_in_circ_hours_picker_by_its_container(
            cucumberThis.dataStorage.circ_slider_container_loc_obj,
            cucumberThis.dataStorage.hours_num_from_mobile
        );

    browser.touchAction({action: 'tap', x: hours_x, y: hours_y});
});

When('user taps on current minutes rounded to five in circular time picker, where minutes are received from mobile device', function ()
{
    if (cucumberThis.dataStorage.circ_slider_container_loc_obj == null)
    {
        cucumberThis.dataStorage.circ_slider_container_loc_obj = get_loc_obj(
            circular_sliders_elements_cal.circular_slider_container
        );
    }

    let {x: minutes_x, y: minutes_y} =
        get_coords_of_point_in_circ_minutes_picker_by_its_container(
            cucumberThis.dataStorage.circ_slider_container_loc_obj,
            cucumberThis.dataStorage.minutes_num_from_mobile
        );

    browser.touchAction({action: 'tap', x: minutes_x, y: minutes_y});
});

When('user taps on done button in circular slider', function ()
{
    browser.click(circular_sliders_elements_cal.done_button);
});

When('user taps on done button in new event page', function ()
{
    browser.click(new_event_cal_page.done_button);
});

When('user opens notifications', function ()
{
    browser.openNotifications();
});

When('user waits notification with name "{notification_name}" is displayed for {time_minutes} minutes in notifications', function (notification_name, time_minutes)
{
    browser.waitForVisible(common_elements_cal.text_element(notification_name), time_minutes * 60 * 1000);
});

When('user taps on calendar event item with name "{item_text}" in notifications', function (item_text)
{
    browser.click(common_elements_cal.text_element(item_text));
});

When('user taps event name input', function ()
{
    browser.click(new_event_cal_page.event_name_input);
});

When('user uses enter button in keyboard', function ()
{
    browser.deviceKeyEvent(66);
});

Then('user views calendar event item with name "{event_name}" in search results', function (event_name)
{
    let event_name_is_visible = browser.isVisible(common_elements_cal.text_element(event_name));
    expect(event_name_is_visible).to.be.true;
});

When('user taps on calendar event item with name "{event_name}" in search results', function (event_name)
{
    browser.click(common_elements_cal.text_element(event_name));
});

When('user taps delete button in header', function ()
{
    browser.click(header_main_cal.delete_button);
});

When('user taps on button with text "{button_text}"', function (button_text)
{
    browser.click(common_elements_cal.button_with_text(button_text));
});

Then('user views "{text}" text in search results', function (text)
{
    let text_is_visible = browser.isVisible(common_elements_cal.text_element(text));
    expect(text_is_visible).to.be.true;
});

When('user taps on search input', function ()
{
    browser.click(header_main_cal.search_input);
});

When('user opens calendar application', function ()
{
    browser.startActivity('com.android.calendar', 'com.android.calendar.AllInOneActivity');
});

When('user taps clear search input button if present', function ()
{
    let clear_search_is_visible = browser.isVisible(header_main_cal.clear_search_input_button);
    if (clear_search_is_visible)
    {
        browser.click(header_main_cal.clear_search_input_button);
    }
});

When('user uses backspace in keyboard amount of times equal to length of "{text}"', function (text)
{
    let text_length = text.length;

    for (i = 0; i < text_length; i++)
    {
        browser.deviceKeyEvent(67);
    }
});