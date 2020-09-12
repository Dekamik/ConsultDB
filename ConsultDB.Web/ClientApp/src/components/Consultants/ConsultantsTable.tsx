import * as React from 'react';
import { Spinner } from '../Common/Spinner';
import { IConsultantListItem } from './IConsultantListItem';

interface IConsultantTable {
    consultants: IConsultantListItem[];
    onRowClick: (id: number) => void;
    onRowDelete: (id: number) => void;
}

export const ConsultantsTable: React.FunctionComponent<IConsultantTable> = ({ consultants, onRowClick, onRowDelete }) => {
    return (
        <Spinner isLoading={consultants.length === 0}>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Namn</th>
                            <th>Är på uppdrag</th>
                            <th>Åtgärder</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            consultants.map(consultant =>
                                <tr key={consultant.consultantId}>
                                    <td onClick={() => onRowClick(consultant.consultantId)}>{consultant.fullName}</td>
                                    <td onClick={() => onRowClick(consultant.consultantId)}>{consultant.isOnAssignment ? "Ja" : "Nej"}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => onRowDelete(consultant.consultantId)}>Ta bort</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Spinner>
    );
}