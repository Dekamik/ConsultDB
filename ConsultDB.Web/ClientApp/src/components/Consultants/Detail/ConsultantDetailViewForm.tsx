﻿import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Checkbox } from '../../Common/Checkbox';
import { TextInput } from '../../Common/TextInput';
import { HiddenInput } from '../../Common/HiddenInput';
import { ImageInput } from '../../Common/ImageInput';
import { IConsultant } from './IConsultant';

interface IConsultantDetailViewForm {
    consultant?: IConsultant;
    isReadonly: boolean;
    onSubmitForm: (data: IConsultant) => void;
    onEdit: () => void;
    onAbort: () => void;
}

export const ConsultantDetailViewForm: React.FunctionComponent<IConsultantDetailViewForm> = (props) => {

    const methods = useForm({});

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {
                        props.isReadonly
                            ? <button className="btn btn-primary float-right" onClick={() => props.onEdit()} >Edit</button>
                            : null
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(props.onSubmitForm)}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <HiddenInput name="consultantId" value={props.consultant?.consultantId} />
                                    <TextInput name="fullName" label="Namn" defaultValue={props.consultant?.fullName} readonly={props.isReadonly} />
                                    <TextInput name="dateOfBirth" label="Födelsedatum" defaultValue={props.consultant?.dateOfBirth} readonly={props.isReadonly} readonlySuffix={` (${props.consultant?.age} år)`} />
                                    <TextInput name="emailAddress" label="E-postadress" type="email" defaultValue={props.consultant?.emailAddress} readonly={props.isReadonly} />
                                </div>
                                <div className="col-sm-6">
                                    <ImageInput name="profileImage" label="Profilbild" defaultValue={props.consultant?.profileImage} readonly={props.isReadonly} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <TextInput name="streetAddress" label="Gatuadress" defaultValue={props.consultant?.streetAddress} readonly={props.isReadonly} />
                                    <TextInput name="zipCode" label="Postnummer" defaultValue={props.consultant?.zipCode} readonly={props.isReadonly} />
                                    <TextInput name="city" label="Ort" defaultValue={props.consultant?.city} readonly={props.isReadonly} />
                                </div>
                                <div className="col-sm-6">
                                    <TextInput name="skills" label="Kompetenser" defaultValue={props.consultant?.skills} readonly={props.isReadonly} />
                                    <Checkbox name="isOnAssignment" label="Är på uppdrag" isChecked={props.consultant?.isOnAssignment ?? false} readonly={props.isReadonly} />
                                </div>
                            </div>
                            {
                                props.isReadonly // TODO: Fix loading spinner on submit buttons
                                    ? null
                                    : <div className="btn-group float-right" role="group">
                                        <button type="button" className="btn btn-danger" onClick={() => props.onAbort()}>Avbryt</button>
                                        <button type="submit" className="btn btn-success">Spara</button>
                                    </div>
                            }
                        </form>
                    </FormProvider>
                </div>
            </div>
        </>
    );
}