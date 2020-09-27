import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => {
    return (
        <button
            className={props.btnClassname}
            type={props.btnType ? props.btnType : 'button'}
            onClick={props.action}
            disabled={props.btnDisabled}
        >
            {props.children}
            <span
                className="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
                hidden={!props.loading}
            />
            {props.title}
        </button>
    );
};

Button.propTypes = {
    btnClassname: PropTypes.string.isRequired,
    btnType: PropTypes.string,
    loading: PropTypes.bool,
    title: PropTypes.string.isRequired,
    action: PropTypes.func,
    btnDisabled: PropTypes.string,
    children: PropTypes.object,
};

export default Button;
