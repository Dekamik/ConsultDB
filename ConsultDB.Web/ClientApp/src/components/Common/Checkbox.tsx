import * as React from 'react';

interface ICheckbox {
    name: string;
    label: string;
    isChecked: boolean;
    readonly: boolean;
}

export const Checkbox: React.FunctionComponent<ICheckbox> = (props) => {
    return (
        props.readonly
            ? <>
                <label className="form-check-label" htmlFor={props.name}>{props.label}</label>
                <p>
                    {
                        props.isChecked ? "Ja" : "Nej"
                    }
                </p>
            </>
            : <div className="form-check">
                <input className="form-check-input" type="checkbox" id={props.name} name={props.name} checked={props.isChecked} />
                <label className="form-check-label" htmlFor={props.name}>{props.label}</label>
            </div>
    );
}