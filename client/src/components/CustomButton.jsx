import React from 'react';

const CustomButton = ({btnType, styles, handleClick, title}) => {
    return (
        <button
            type={btnType}
            className={`font-epilogue font-semibold 
            text-[16px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
            onClick={handleClick}>
            {title}
        </button>
    );
};

export default CustomButton;
