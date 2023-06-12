import React from 'react';
// import proptypes
import PropTypes, {checkPropTypes} from 'prop-types';
import { Button } from 'antd';

function MyButton(props) {
    const { loading, onClick, type, className, children, } = props;

    return (
        <Button
            type={type}
            onClick={onClick}
            className={` ${className}`}
            loading={loading}
        >
            {children}
        </Button>
    );
}


export default MyButton;

// Set react prop types
MyButton.propTypes = {
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,

}
