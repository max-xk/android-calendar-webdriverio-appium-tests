class Header_main_cal
{
    constructor()
    {
        this.more_options_button = `//android.widget.ImageButton[@content-desc='More options']`;

        this.delete_button = `//android.widget.TextView[contains(@resource-id,'delete')]`;

        this.search_input = `//android.widget.EditText[contains(@resource-id,'search_src_text')]`;

        this.clear_search_input_button = `//android.widget.ImageView[@content-desc='Clear query']`;

    }

}

module.exports = {
    Header_main_cal: Header_main_cal,
};
