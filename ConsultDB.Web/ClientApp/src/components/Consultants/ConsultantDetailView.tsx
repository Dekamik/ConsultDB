import * as React from 'react';
import { useParams } from 'react-router';
import { Spinner } from '../Common/Spinner';
import { ConsultantsApi } from './ConsultantsApi';
import { IConsultant } from './IConsultant';

interface ConsultantDetailViewParams {
    id: string;
}

export const ConsultantDetailView: React.FunctionComponent = () => {

    const api = new ConsultantsApi();
    const params = useParams<ConsultantDetailViewParams>();

    const [consultant, setConsultant] = React.useState<IConsultant | undefined>();

    React.useEffect(() => {
        api.getConsultant(params.id,
            (data: IConsultant) => {
                setConsultant(data);
            });
    }, []);

    return (
        <>
            <Spinner isLoading={consultant == null}>
                <h2>{consultant?.fullName}</h2>
            </Spinner>
        </>
    );
}