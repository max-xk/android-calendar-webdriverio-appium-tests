class Common_elements_cal
{
    constructor()
    {
        this.item_in_list = (item_text) => `//android.widget.TextView[@text='${item_text}']/ancestor::android.widget.LinearLayout`;

        this.input_with_text = (input_text) => `//android.widget.EditText[@text='${input_text}']`;

        this.spinner_with_label = (label_text) => `//android.widget.TextView[@text='${label_text}']/preceding-sibling::*//android.widget.Spinner`;

        this.option_checkable = (option_text) => `//android.widget.CheckedTextView[@text='${option_text}']`;

        this.timepicker_with_label = (label_text) => `//android.widget.TextView[@text='${label_text}']/preceding-sibling::*//*[contains(@resource-id,'time')]`;

        this.text_element = (text) => `//android.widget.TextView[@text='${text}']`;

        this.button_with_text = (button_text) => `//android.widget.Button[@text='${button_text}']`;
    }
}

module.exports = {
    Common_elements_cal: Common_elements_cal,
};
