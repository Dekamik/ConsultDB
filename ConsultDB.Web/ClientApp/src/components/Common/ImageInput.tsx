import * as React from 'react';

interface IImageInput {
    name: string;
    defaultValue?: File;
    label?: string;
    readonly?: boolean;
}

export const ImageInput: React.FunctionComponent<IImageInput> = (props) => {

    const [objectURL, setObjectURL] = React.useState<string | undefined>();

    React.useEffect(() => {
        if (props.defaultValue != null) {
            let url = URL.createObjectURL(props.defaultValue);
            setObjectURL(url);
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
                    ? <label htmlFor={props.name}>{props.label}</label>
                    : null
            }
            {
                props.readonly
                    ? objectURL ? <img className="profile-img" src={objectURL} /> : null
                    : <input className="form-control-plaintext" type="file" id={props.name} name={props.name} accept="image/*" onChange={handleImageChange} />
            }
        </div>
    );
}