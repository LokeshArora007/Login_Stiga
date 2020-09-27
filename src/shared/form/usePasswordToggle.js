import React, { useState } from 'react';
const usePasswordToggle = () => {
    const [visible, setVisiblity] = useState(false);
    const Icon = (
        <i
            className={'fas ' + (visible ? 'fa-eye-slash' : 'fa-eye')}
            onClick={() => setVisiblity((visiblity) => !visiblity)}
        ></i>
    );
    const InputType = visible ? 'text' : 'password';
    return [InputType, Icon];
};
export default usePasswordToggle;
