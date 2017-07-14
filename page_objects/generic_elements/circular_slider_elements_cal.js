class Circular_sliders_elements_cal
{
    constructor()
    {
        this.minutes_button_in_timepicker = `//android.widget.Button[contains(@resource-id,'minutes')]`;

        this.circular_slider_container = `//android.widget.FrameLayout[contains(@content-desc,'circular slider')]`;

        this.done_button = `//android.widget.Button[contains(@resource-id,'done_button')]`;
    }
}

module.exports = {
    Circular_sliders_elements_cal: Circular_sliders_elements_cal,
};
