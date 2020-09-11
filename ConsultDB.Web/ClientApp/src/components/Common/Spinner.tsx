import * as React from 'react';

interface ISpinner {
    isLoading: boolean;
}

export const Spinner: React.FunctionComponent<ISpinner> = (props) => {
    return (
        <>
            {
                props.isLoading
                    ? <div className="text-center">
                        <div className="spinner-border spinner-large" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    : props.children
            }
        </>
    );
}