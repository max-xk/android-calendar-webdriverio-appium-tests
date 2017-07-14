function get_loc_obj(obj_locator)
{
    let loc_obj = browser.getLocation(obj_locator);
    let size_obj = browser.getElementSize(obj_locator);

    return {
        left_top_x: loc_obj.x,
        left_top_y: loc_obj.y,
        width: size_obj.width,
        height: size_obj.height,
    };

}
module.exports = {
    get_loc_obj: get_loc_obj
};
