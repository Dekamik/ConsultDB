import * as React from 'react';
import { IConsultantListItem } from './IConsultantListItem';

interface IConsultantTable {
    consultants: IConsultantListItem[];
}

export const ConsultantsTable: React.FunctionComponent<IConsultantTable> = ({ consultants }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Namn</td>
                    <td>Är på uppdrag</td>
                </tr>
            </thead>
            <tbody>
                {
                    consultants.map(consultant => 
                        <tr key={consultant.consultantId}>
                            <td>{consultant.fullName}</td>
                            <td>{consultant.isOnAssignment ? "Ja" : "Nej"}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}