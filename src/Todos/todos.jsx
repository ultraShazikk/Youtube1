import React from 'react';

function Todo({ children}) {
    return (
        <p className='textt'> 
            <span className='text_span'>{children}</span>
        </p>
    );
}

export default Todo;