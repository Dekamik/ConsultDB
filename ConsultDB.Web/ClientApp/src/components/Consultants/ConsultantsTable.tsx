import * as React from 'react';
import { Spinner } from '../Common/Spinner';
import { IConsultantListItem } from './IConsultantListItem';

interface IConsultantTable {
    consultants: IConsultantListItem[];
    onRowClick: (id: number) => void;
}

export const ConsultantsTable: React.FunctionComponent<IConsultantTable> = ({ consultants, onRowClick }) => {
    return (
        <Spinner isLoading={consultants.length === 0}>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Namn</th>
                            <th>Är på uppdrag</th>
                        </tr>
                    </thead>
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
                </table>
            </div>
        </Spinner>
    );
}