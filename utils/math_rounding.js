function round_up_positive(positive_number, round_up_number = 5)
{
    if (positive_number < 0)
    {
        throw new Error('Number must be positive.');
    }
    return Math.ceil(positive_number / round_up_number) * round_up_number;
}

module.exports = {
    round_up_positive: round_up_positive,
};
