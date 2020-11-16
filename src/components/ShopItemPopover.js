import React from 'react';

const ShopItemPopover = ({ buttonTitle, content}) => {

    return (
        <button 
            type="button" 
            className="btn btn-secondary" 
            data-container="body" 
            data-toggle="popover" 
            data-placement="bottom" 
            data-content={content}>
                {buttonTitle}
        </button>
    );
}

export default ShopItemPopover;