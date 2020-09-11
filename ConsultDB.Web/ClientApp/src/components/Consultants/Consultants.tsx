import * as React from 'react';
import { ConsultantsApi } from './ConsultantsApi';
import { ConsultantsTable } from './ConsultantsTable';
import { IConsultantListItem } from './IConsultantListItem';

export const Consultants: React.FunctionComponent = () => {

    const api = new ConsultantsApi();

    const [consultants, setConsultants] = React.useState<IConsultantListItem[]>([]);

    React.useEffect(() => {
        api.getList(
            (data: IConsultantListItem[]) => {
                setConsultants(data);
            });
    }, [api]);

    return (
        <>
            <h1>Consultants</h1>
            <ConsultantsTable consultants={consultants} />
        </>
    );
}