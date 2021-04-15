import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
//sets styles for certian buttons
const STYLES = ['btn--primary', 'btn--outline'];
// sets sizes for the buttons
const SIZES =['btn--medium', 'btn--large'];
// sets button varibles 
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // basically makes the button always have a style, if it does not than the button apllies the primary button
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
// same thing if nothing defaults to button medium, or first button style in array
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to='/sign-up' className='btn-mobile'>
          {/* makes it easier to make buttons on the webpage. */}
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
              {/* contains what the button will say. */}
                {children}
            </button>
        </Link>
    )
};
