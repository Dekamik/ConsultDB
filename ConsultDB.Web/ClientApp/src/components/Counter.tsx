import * as React from 'react';

export const Counter: React.FunctionComponent = () => {

    const [currentCount, setCurrentCount] = React.useState<number>(0);

    const incrementCounter = () => {
        setCurrentCount(currentCount + 1);
    }

    return (
        <>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>
            <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
        </>
    );
}
