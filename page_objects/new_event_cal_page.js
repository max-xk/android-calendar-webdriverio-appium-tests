let Generic_page = require(`./generic_page`).Generic_page;

class New_event_cal_page extends Generic_page
{
    constructor()
    {
        super();
        this.done_button = `//android.widget.LinearLayout[contains(@resource-id,'action_done')]`;

        this.event_name_input = `//android.widget.EditText[contains(@resource-id,'title')]`;

    }
}

module.exports = {
    New_event_cal_page: New_event_cal_page,
};
