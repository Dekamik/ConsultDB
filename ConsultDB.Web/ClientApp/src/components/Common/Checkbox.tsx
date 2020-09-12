import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface ICheckbox {
    name: string;
    label: string;
    isChecked: boolean;
    readonly: boolean;
}

export const Checkbox: React.FunctionComponent<ICheckbox> = (props) => {

    const context = useFormContext();

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
                <input className="form-check-input" type="checkbox" id={props.name} name={props.name} defaultChecked={props.isChecked} ref={context.register()} />
                <label className="form-check-label" htmlFor={props.name}>{props.label}</label>
            </div>
    );
}