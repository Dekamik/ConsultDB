import * as React from 'react';
import { Spinner } from '../Common/Spinner';
import { IConsultantListItem } from './IConsultantListItem';

interface IConsultantTable {
    consultants: IConsultantListItem[];
    onRowClick: (id: number) => void;
}

export const ConsultantsTable: React.FunctionComponent<IConsultantTable> = ({ consultants, onRowClick }) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Namn</th>
                        <th>Är på uppdrag</th>
                    </tr>
                </thead>
                <Spinner isLoading={consultants.length === 0}>
                    <tbody>
                        {
                            consultants.map(consultant =>
                                <tr key={consultant.consultantId} onClick={() => onRowClick(consultant.consultantId)}>
                                    <td>{consultant.fullName}</td>
                                    <td>{consultant.isOnAssignment ? "Ja" : "Nej"}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Spinner>
            </table>
        </div>
    );
}