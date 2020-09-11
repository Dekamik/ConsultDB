import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../Common/Checkbox';
import { TextInput } from '../Common/TextInput';
import { ConsultantsApi } from './ConsultantsApi';
import { IConsultant } from './IConsultant';

interface IConsultantDetailViewForm {
    consultant?: IConsultant;
}

export const ConsultantDetailViewForm: React.FunctionComponent<IConsultantDetailViewForm> = ({ consultant }) => {

    const api = new ConsultantsApi();
    const methods = useForm({});

    const [isReadonly, setIsReadonly] = React.useState<boolean>(true);

    const onSave = (data: IConsultant) => {

    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {
                        isReadonly
                            ? <button className="btn btn-primary float-right" onClick={() => setIsReadonly(false)} >Edit</button>
                            : null
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <TextInput name="fullName" label="Namn" defaultValue={consultant?.fullName} readonly={isReadonly} />
                        <TextInput name="dateOfBirth" label="Födelsedatum" defaultValue={consultant?.dateOfBirth} readonly={isReadonly} />
                        <TextInput name="emailAddress" label="E-postadress" type="email" defaultValue={consultant?.emailAddress} readonly={isReadonly} />
                        <TextInput name="streetAddress" label="Gatuadress" defaultValue={consultant?.streetAddress} readonly={isReadonly} />
                        <TextInput name="zipCode" label="Postnummer" defaultValue={consultant?.zipCode} readonly={isReadonly} />
                        <TextInput name="city" label="Ort" defaultValue={consultant?.city} readonly={isReadonly} />
                        <Checkbox name="isOnAssignment" label="Är på uppdrag" isChecked={consultant?.isOnAssignment ?? false} readonly={isReadonly} />
                        {
                            isReadonly
                                ? null
                                : <div className="btn-group float-right" role="group">
                                    <button type="button" className="btn btn-danger" onClick={() => setIsReadonly(true)}>Avbryt</button>
                                    <button type="submit" className="btn btn-success">Spara</button>
                                </div>
                        }
                    </form>
                </div>
            </div>
        </>
    );
}