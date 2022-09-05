import PropTypes from 'prop-types';

import { Box } from "components/Box";
import { Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <Box p={3}
    display="flex" justifyContent="space-evenly" >{options.map(value => {
        return <Btn onClick={() => onLeaveFeedback(value)} key={value}>{value}</Btn>
    })}
    </Box>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};