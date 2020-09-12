import * as React from 'react';
import { useHistory, useParams } from 'react-router';
import { CONSULTANTS, CONSULTANT_DETAIL } from '../../routing/WebRouting';
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
    const history = useHistory();

    const [consultant, setConsultant] = React.useState<IConsultant | undefined>();
    const [isReadonly, setIsReadonly] = React.useState<boolean>(true);
    const [isNew, setIsNew] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (params.id == null) {
            setIsNew(true);
        }
        else {
            api.getConsultant(params.id,
                (data: IConsultant) => {
                    setConsultant(data);
                }
            );
        }
    }, []);

    const handleSubmit = (data: IConsultant) => {
        if (isNew) {
            api.createConsultant(data,
                (response: IConsultant) => {
                    history.push(CONSULTANTS);
                }
            );
        }
        else {
            api.updateConsultant(data,
                (response: IConsultant) => {
                    setConsultant(response);
                    setIsReadonly(true);
                }
            );
        }
    }

    const onEdit = () => {
        setIsReadonly(false);
    }

    const onAbort = () => {
        if (isNew) {
            history.goBack();
        }
        else {
            setIsReadonly(true);
        }
    }

    return (
        <>
            <Spinner isLoading={isNew ? false : consultant == null}>
                <ConsultantDetailViewForm
                    consultant={consultant}
                    onSubmitForm={handleSubmit}
                    isReadonly={isNew ? false : isReadonly}
                    onEdit={onEdit}
                    onAbort={onAbort}
                />
            </Spinner>
        </>
    );
}