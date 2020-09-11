import * as React from 'react';
import { useParams } from 'react-router';
import { Spinner } from '../Common/Spinner';
import { ConsultantDetailViewForm } from './ConsultantDetailViewForm';
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
            }
        );
    }, []);

    const submitConsultant = (data: IConsultant) => {

    }

    return (
        <>
            <Spinner isLoading={consultant == null}>
                <ConsultantDetailViewForm consultant={consultant} onSubmit={submitConsultant} />
            </Spinner>
        </>
    );
}