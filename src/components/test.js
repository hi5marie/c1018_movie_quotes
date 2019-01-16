import React from 'react';
import logger from '../hoc/logger';

const Test = props => {
    console.log('Test Props:', props);

    props.log('Hello from the test component!');

    return (
        <div>
            <h1 className="center">Test Component</h1>
        </div>
    )
};

export default logger (Test, 'Test Says:');