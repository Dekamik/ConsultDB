import * as React from 'react';
import { useHistory } from 'react-router';
import { CONSULTANT_DETAIL } from '../../../routing/WebRouting';
import { ConsultantsApi } from './../ConsultantsApi';
import { ConsultantsTable } from './ConsultantsTable';
import { IConsultantListItem } from './IConsultantListItem';
import { ConsultantsFilter } from './ConsultantsFilter';

export const Consultants: React.FunctionComponent = () => {

    const api = new ConsultantsApi();
    const history = useHistory();
    const searchInputId = "nameSearch";

    const [consultants, setConsultants] = React.useState<IConsultantListItem[]>([]);
    const [filteredConsultants, setFilteredConsultants] = React.useState<IConsultantListItem[]>([]);

    React.useEffect(() => {
        populateTable();
    }, []);

    const populateTable = () => {
        api.getList(
            (data: IConsultantListItem[]) => {
                setConsultants(data);
                setFilteredConsultants(data);
            }
        );
    }

    const onRowClick = (id: number) => {
        history.push(`${CONSULTANT_DETAIL}/${id}`);
    };

    const onAddClick = () => {
        history.push(CONSULTANT_DETAIL);
    }

    const onRowDelete = (id: number) => {
        api.deleteConsultant(id.toString(),
            () => {
                populateTable();
            }
        );
    }

    const onSearch = () => {
        let query = (document.getElementById(searchInputId) as HTMLInputElement).value;
        let results = consultants.filter(c => c.fullName.indexOf(query) !== -1);
        setFilteredConsultants(results);
    }

    const onClear = () => {
        let input = document.getElementById(searchInputId) as HTMLInputElement;
        if (input) {
            input.value = "";
        }
        setFilteredConsultants(consultants);
    }

    return (
        <>
            <h1>Consultants</h1>
            <div className="row">
                <ConsultantsFilter searchInputId={searchInputId} onApply={onSearch} onClear={onClear} />
            </div>
            <hr/>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-success float-right" onClick={() => onAddClick()}>Lägg till</button>
                </div>
            </div>
            <div className="row">
                <ConsultantsTable consultants={filteredConsultants} onRowClick={onRowClick} onRowDelete={onRowDelete} />
            </div>
        </>
    );
}