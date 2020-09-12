import * as React from 'react';
import { TextInput } from '../../Common/TextInput';

interface IConsultantsFilter {
    searchInputId: string;
    onApply: () => void;
    onClear: () => void;
}

export const ConsultantsFilter: React.FunctionComponent<IConsultantsFilter> = (props) => {
    return (
        <div className="col-12">
            <div className="form-group">
                <label htmlFor={props.searchInputId}>Sök konsult</label>
                <input type="text" id={props.searchInputId} className="form-control" />
            </div>
            <div className="btn-group float-right">
                <button type="button" className="btn btn-secondary" onClick={() => props.onClear()}>Rensa</button>
                <button type="button" className="btn btn-primary" onClick={() => props.onApply()}>Sök</button>
            </div>
        </div>
    );
}