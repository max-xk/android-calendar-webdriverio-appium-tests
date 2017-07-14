let _ = require('lodash');

const circular_slider_margin_ratio_to_frame_width = 0.076755;
const circular_slider_margin_ratio_to_frame_height = circular_slider_margin_ratio_to_frame_width;

// left_right_top_bottom_borders_ratio_to_h_and_w_in_circ_picker
const borders_ratio_in_circ_minutes_picker = 0.02591;
const borders_ratio_in_circ_2nd_line_hours_picker = 0.20207;

// x_dist_ratio_for_top_bottom_circ_picker_points_and_near_points
const x_dist_ratio_for_top_bottom_circ_minutes_picker_points = 0.233161;
const x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points = 0.15026;

// y_dist_ratio_for_top_bottom_circ_picker_points_and_near_points
const y_dist_ratio_for_top_bottom_circ_minutes_picker_points = 0.080311;
const y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points = 0.0349741;

let circ_minutes_picker_points_val_to_nums_kv_arr = [
    [0, {
        point_number: 1,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [5, {
        point_number: 2,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [10, {
        point_number: 3,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [15, {
        point_number: 4,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [20, {
        point_number: 5,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [25, {
        point_number: 6,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [30, {
        point_number: 7,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [35, {
        point_number: 8,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [40, {
        point_number: 9,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [45, {
        point_number: 10,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [50, {
        point_number: 11,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [55, {
        point_number: 12,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
];
let circ_minutes_picker_points_val_to_nums_map = new Map(circ_minutes_picker_points_val_to_nums_kv_arr);

let circ_hour_picker_points_val_to_nums_kv_arr = [
    [0, {
        point_number: 1,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [13, {
        point_number: 2,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [14, {
        point_number: 3,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [15, {
        point_number: 4,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [16, {
        point_number: 5,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [17, {
        point_number: 6,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [18, {
        point_number: 7,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [19, {
        point_number: 8,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [20, {
        point_number: 9,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [21, {
        point_number: 10,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [22, {
        point_number: 11,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],
    [23, {
        point_number: 12,
        borders_ratio: borders_ratio_in_circ_minutes_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_minutes_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_minutes_picker_points
    }],

    [12, {
        point_number: 1,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [1, {
        point_number: 2,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [2, {
        point_number: 3,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [3, {
        point_number: 4,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [4, {
        point_number: 5,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [5, {
        point_number: 6,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [6, {
        point_number: 7,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [7, {
        point_number: 8,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [8, {
        point_number: 9,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [9, {
        point_number: 10,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [10, {
        point_number: 11,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
    [11, {
        point_number: 12,
        borders_ratio: borders_ratio_in_circ_2nd_line_hours_picker,
        x_dist_ratio: x_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points,
        y_dist_ratio: y_dist_ratio_for_top_bottom_circ_2nd_line_hours_picker_points
    }],
];
let circ_hour_picker_points_val_to_nums_map = new Map(circ_hour_picker_points_val_to_nums_kv_arr);

function calc_right_bottom_x_y_by_left_top_x_y_and_h_w(location_object)
{
    let {left_top_x, left_top_y, width, height} = location_object;

    location_object.right_bottom_x = left_top_x + width;
    location_object.right_bottom_y = left_top_y + height;

    return location_object;
}

function calc_center_x_y_by_left_top_and_right_bottom_x_y(location_object)
{
    let {left_top_x, left_top_y, right_bottom_x, right_bottom_y} = location_object;

    location_object.center_x = Math.round((left_top_x + right_bottom_x) / 2);
    location_object.center_y = Math.round((left_top_y + right_bottom_y) / 2);

    return location_object;
}

function calc_internal_centered_location_obj_by_margins(location_object, left_and_right_margin, top_and_bottom_margin)
{
    let {left_top_x, left_top_y, right_bottom_x, right_bottom_y, width, height} = location_object;

    let location_obj_by_margin = _.cloneDeep(location_object);

    location_obj_by_margin.left_top_x = left_top_x + left_and_right_margin;
    location_obj_by_margin.left_top_y = left_top_y + top_and_bottom_margin;
    location_obj_by_margin.right_bottom_x = right_bottom_x - left_and_right_margin;
    location_obj_by_margin.right_bottom_y = right_bottom_y - top_and_bottom_margin;

    location_obj_by_margin.width = width - 2 * left_and_right_margin;
    location_obj_by_margin.height = height - 2 * top_and_bottom_margin;

    return location_obj_by_margin;
}

function calc_circ_slider_loc_obj(location_object)
{
    calc_right_bottom_x_y_by_left_top_x_y_and_h_w(location_object);
    calc_center_x_y_by_left_top_and_right_bottom_x_y(location_object);

    let circular_slider_left_and_right_margin_to_frame = Math.round(location_object.width * circular_slider_margin_ratio_to_frame_width);
    let circular_slider_top_and_bottom_margin_to_frame = Math.round(location_object.height * circular_slider_margin_ratio_to_frame_height);

    return calc_internal_centered_location_obj_by_margins(location_object, circular_slider_left_and_right_margin_to_frame, circular_slider_top_and_bottom_margin_to_frame);
}

function calc_left_right_top_bottom_borders(location_object, borders_ratio)
{
    return Math.round(location_object.width * borders_ratio);
}

function calc_x_dist_for_top_bottom_circ_time_picker_points(location_object, x_dist_ratio)
{
    return Math.round(location_object.width * x_dist_ratio);
}

function calc_y_dist_for_top_bottom_circ_time_picker_points(location_object, y_dist_ratio)
{
    return Math.round(location_object.width * y_dist_ratio);
}

let circ_picker_points_nums_to_coords_calc_funcs_kv_arr = [
    [1, ({center_x, left_top_y, left_right_top_bottom_borders}) =>
    {
        return {x: center_x, y: left_top_y + left_right_top_bottom_borders};
    }],
    [2, ({center_x, left_top_y, left_right_top_bottom_borders, x_dist_for_top_bottom_points_and_near_points, y_dist_for_top_bottom_points_and_near_points}) =>
    {
        return {
            x: center_x + x_dist_for_top_bottom_points_and_near_points,
            y: left_top_y + left_right_top_bottom_borders + y_dist_for_top_bottom_points_and_near_points
        };
    }],
    [12, ({center_x, left_top_y, left_right_top_bottom_borders, x_dist_for_top_bottom_points_and_near_points, y_dist_for_top_bottom_points_and_near_points}) =>
    {
        return {
            x: center_x - x_dist_for_top_bottom_points_and_near_points,
            y: left_top_y + left_right_top_bottom_borders + y_dist_for_top_bottom_points_and_near_points
        };
    }],

    [4, ({right_bottom_x, left_right_top_bottom_borders, center_y}) =>
    {
        return {x: right_bottom_x - left_right_top_bottom_borders, y: center_y};
    }],
    [3, ({right_bottom_x, left_right_top_bottom_borders, center_y, x_dist_for_top_bottom_points_and_near_points, y_dist_for_top_bottom_points_and_near_points}) =>
    {
        return {
            x: right_bottom_x - left_right_top_bottom_borders - y_dist_for_top_bottom_points_and_near_points,
            y: center_y - x_dist_for_top_bottom_points_and_near_points
        };
    }],
    [5, ({right_bottom_x, left_right_top_bottom_borders, center_y, x_dist_for_top_bottom_points_and_near_points, y_dist_for_top_bottom_points_and_near_points}) =>
    {
        return {
            x: right_bottom_x - left_right_top_bottom_borders - y_dist_for_top_bottom_points_and_near_points,
            y: center_y + x_dist_for_top_bottom_points_and_near_points
        };
    }],

    [7, ({center_x, right_bottom_y, left_right_top_bottom_borders}) =>
    {
        return {x: center_x, y: right_bottom_y - left_right_top_bottom_borders};
    }],
    [6, ({center_x, right_bottom_y, left_right_top_bottom_borders, x_dist_for_top_bottom_points_and_near_points, y_dist_for_top_bottom_points_and_near_points}) =>
    {
        return {
            x: center_x + x_dist_for_top_bottom_points_and_near_points,
            y: right_bottom_y - left_right_top_bottom_borders - y_dist_for_top_bottom_points_and_near_points
        };
    }],
    [8, ({center_x, right_bottom_y, left_right_top_bottom_borders, x_dist_for_top_bottom_points_and_near_points, y_dist_for_top_bottom_points_and_near_points}) =>
    {
        return {
            x: center_x - x_dist_for_top_bottom_points_and_near_points,
            y: right_bottom_y - left_right_top_bottom_borders - y_dist_for_top_bottom_points_and_near_points
        };
    }],

    [10, ({left_top_x, left_right_top_bottom_borders, center_y}) =>
    {
        return {x: left_top_x + left_right_top_bottom_borders, y: center_y};
    }],
    [9, ({left_top_x, left_right_top_bottom_borders, center_y, x_dist_for_top_bottom_points_and_near_points, y_dist_for_top_bottom_points_and_near_points}) =>
    {
        return {
            x: left_top_x + left_right_top_bottom_borders + y_dist_for_top_bottom_points_and_near_points,
            y: center_y + x_dist_for_top_bottom_points_and_near_points
        };
    }],
    [11, ({left_top_x, left_right_top_bottom_borders, center_y, x_dist_for_top_bottom_points_and_near_points, y_dist_for_top_bottom_points_and_near_points}) =>
    {
        return {
            x: left_top_x + left_right_top_bottom_borders + y_dist_for_top_bottom_points_and_near_points,
            y: center_y - x_dist_for_top_bottom_points_and_near_points
        };
    }],
];
let circ_picker_points_nums_to_coords_calc_funcs_map = new Map(circ_picker_points_nums_to_coords_calc_funcs_kv_arr);

function get_coords_of_point_in_circ_picker(circ_picker_loc_and_point_obj, point_number)
{
    let func_to_get_coords = circ_picker_points_nums_to_coords_calc_funcs_map.get(point_number);

    return func_to_get_coords(circ_picker_loc_and_point_obj);
}

//helper function
function get_coords_of_point_in_circ_picker_by_point_obj(point_obj, circ_picker_loc_obj)
{
    let {borders_ratio, x_dist_ratio, y_dist_ratio} = point_obj;

    let point_loc_helpers_obj = {
        left_right_top_bottom_borders: calc_left_right_top_bottom_borders(circ_picker_loc_obj, borders_ratio),
        x_dist_for_top_bottom_points_and_near_points: calc_x_dist_for_top_bottom_circ_time_picker_points(circ_picker_loc_obj, x_dist_ratio),
        y_dist_for_top_bottom_points_and_near_points: calc_y_dist_for_top_bottom_circ_time_picker_points(circ_picker_loc_obj, y_dist_ratio),
    };

    let loc_obj_and_point_props = Object.assign({}, circ_picker_loc_obj, point_loc_helpers_obj);
    return get_coords_of_point_in_circ_picker(loc_obj_and_point_props, point_obj.point_number);
}

function get_coords_of_point_in_circ_minutes_picker(circ_picker_loc_obj, minutes_num)
{
    let point_obj = circ_minutes_picker_points_val_to_nums_map.get(minutes_num);

    return get_coords_of_point_in_circ_picker_by_point_obj(point_obj, circ_picker_loc_obj);
}

function get_coords_of_point_in_circ_hours_picker(circ_picker_loc_obj, hours_num)
{
    let point_obj = circ_hour_picker_points_val_to_nums_map.get(hours_num);

    return get_coords_of_point_in_circ_picker_by_point_obj(point_obj, circ_picker_loc_obj);
}

function get_coords_of_point_in_circ_hours_picker_by_its_container(circ_container_loc_obj, hours_num)
{
    let circ_slider_loc_obj = calc_circ_slider_loc_obj(circ_container_loc_obj);
    return get_coords_of_point_in_circ_hours_picker(circ_slider_loc_obj, hours_num);
}

function get_coords_of_point_in_circ_minutes_picker_by_its_container(circ_container_loc_obj, minutes_num)
{
    let circ_slider_loc_obj = calc_circ_slider_loc_obj(circ_container_loc_obj);
    return get_coords_of_point_in_circ_minutes_picker(circ_slider_loc_obj, minutes_num);
}

module.exports = {
    get_coords_of_point_in_circ_hours_picker_by_its_container: get_coords_of_point_in_circ_hours_picker_by_its_container,
    get_coords_of_point_in_circ_minutes_picker_by_its_container: get_coords_of_point_in_circ_minutes_picker_by_its_container,
    get_coords_of_point_in_circ_hours_picker: get_coords_of_point_in_circ_hours_picker,
    get_coords_of_point_in_circ_minutes_picker: get_coords_of_point_in_circ_minutes_picker
};