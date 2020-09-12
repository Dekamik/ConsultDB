import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface IHiddenInput {
    name: string;
    value: any;
}

export const HiddenInput: React.FunctionComponent<IHiddenInput> = (props) => {

    const { register } = useFormContext();

    return (
        <input type="hidden" id={props.name} name={props.name} value={props.value} ref={register} />
    );
}