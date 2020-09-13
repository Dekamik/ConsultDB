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
            ? <div className="form-group">
                <label className="form-control-label" htmlFor={props.name}>{props.label}</label>
                <p className="form-control-plaintext">
                    {
                        props.isChecked ? "Ja" : "Nej"
                    }
                </p>
            </div>
            : <div className="form-check">
                <input className="form-check-input" type="checkbox" id={props.name} name={props.name} defaultChecked={props.isChecked} ref={context.register()} />
                <label className="form-control-label form-check-label" htmlFor={props.name}>{props.label}</label>
            </div>
    );
}