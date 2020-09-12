import * as React from 'react';
import { useHistory } from 'react-router';
import { CONSULTANTS, CONSULTANT_DETAIL } from '../../../routing/WebRouting';
import { ConsultantsApi } from './../ConsultantsApi';
import { ConsultantsTable } from './ConsultantsTable';
import { IConsultantListItem } from './IConsultantListItem';

export const Consultants: React.FunctionComponent = () => {

    const api = new ConsultantsApi();
    const history = useHistory();

    const [consultants, setConsultants] = React.useState<IConsultantListItem[]>([]);

    React.useEffect(() => {
        populateTable();
    }, []);

    const populateTable = () => {
        api.getList(
            (data: IConsultantListItem[]) => {
                setConsultants(data);
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

    return (
        <>
            <h1>Consultants</h1>
            <button type="button" className="btn btn-success float-right" onClick={() => onAddClick()}>Lägg till</button>
            <ConsultantsTable consultants={consultants} onRowClick={onRowClick} onRowDelete={onRowDelete} />
        </>
    );
}