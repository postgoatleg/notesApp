import PropTypes from "prop-types";

export const noteType = PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
})