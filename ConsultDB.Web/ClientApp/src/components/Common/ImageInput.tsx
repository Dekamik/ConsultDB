import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface IImageInput {
    name: string;
    defaultValue?: string;
    defaultValueType?: string;
    label?: string;
    readonly?: boolean;
}

export const ImageInput: React.FunctionComponent<IImageInput> = (props) => {

    const { register } = useFormContext();

    const [objectURL, setObjectURL] = React.useState<string | undefined>();

    React.useEffect(() => {
        if (props.defaultValue != null) {
            setObjectURL(`data:;base64,${props.defaultValue}`);
        }
    }, [])

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let url = URL.createObjectURL(event.target.files![0]);
        setObjectURL(url);
    }

    return (
        <div className="form-group">
            {
                props.label
                    ? <label className="form-control-label" htmlFor={props.name}>{props.label}</label>
                    : null
            }
            {
                props.readonly
                    ? <img className="form-control-plaintext profile-img" src={objectURL} />
                    : <input className="form-control-plaintext" type="file" id={props.name} name={props.name} accept="image/*" onChange={handleImageChange} ref={register()} />
            }
        </div>
    );
}