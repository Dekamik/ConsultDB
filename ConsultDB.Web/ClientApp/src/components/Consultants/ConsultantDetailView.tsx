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
    const [isReadonly, setIsReadonly] = React.useState<boolean>(true);

    React.useEffect(() => {
        api.getConsultant(params.id,
            (data: IConsultant) => {
                setConsultant(data);
            }
        );
    }, []);

    const handleSubmit = (data: IConsultant) => {
        api.saveConsultant(data,
            (response: IConsultant) => {
                setConsultant(response);
                setIsReadonly(true);
            }
        );
    }

    const onEdit = () => {
        setIsReadonly(false);
    }

    const onAbort = () => {
        setIsReadonly(true);
    }

    return (
        <>
            <Spinner isLoading={consultant == null}>
                <ConsultantDetailViewForm
                    consultant={consultant}
                    onSubmitForm={handleSubmit}
                    isReadonly={isReadonly}
                    onEdit={onEdit}
                    onAbort={onAbort}
                />
            </Spinner>
        </>
    );
}