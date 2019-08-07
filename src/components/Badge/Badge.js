import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BadgeStyled from './BadgeStyled';

const propTypes = {
    /**
     * @default null
     * children passed within badge
     */
    children: PropTypes.node,
    /**
     * @default ''
     * children passed along with the badge
     */
    className: PropTypes.string,
    /**
     * @default false
     * className passed for badge.
     */
    primary: PropTypes.bool,
    /**
     * @default false
     * badge is primary
     */
    secondary: PropTypes.bool,
    /**
     * @default false
     * badge is success
     */
    success: PropTypes.bool,
    /**
     * @default false
     * badge is for warning
     */
    warning: PropTypes.bool,
    /**
     * @default false
     * light for badge
     */
    light: PropTypes.bool,
    /**
     * @default false
     * badge is for info
     */
    info: PropTypes.bool,
    /**
     * @default false
     * badge is for error
     */
    error: PropTypes.bool,

};

const defaultProps = {
    children: undefined,
    className: '',
    primary: false,
    secondary: false,
    success: false,
    warning: false,
    light: false,
    info: false,
    error: false,
};

const Badge = ({children, className, primary, secondary, success, warning, light, info, error, label}) => {
    const classes = classNames({
        primary, secondary, success, warning, light, info, error,
    }, className);
    return (
        <Fragment>
            <BadgeStyled className={classes}>
                <span>{label}</span>
                {children}
            </BadgeStyled>
        </Fragment>
    );
};

Badge.propTypes = propTypes;

Badge.defaultProps = defaultProps;

export default Badge;
