﻿import * as React from 'react';

interface ITextInput {
    name: string;
    label?: string;
    defaultValue?: string;
    readonly: boolean;
    type?: "text" | "email"
}

export const TextInput: React.FunctionComponent<ITextInput> = (props) => {
    return (
        <div className="form-group">
            {
                props.label
                    ? <label htmlFor={props.name}>{props.label}</label>
                    : null
            }
            {
                props.readonly
                    ? <p id={props.name} >{props.defaultValue}</p>
                    : <input className="form-control" type={props.type ?? "text"} id={props.name} name={props.name} defaultValue={props.defaultValue} />
            }
        </div>
    );
}