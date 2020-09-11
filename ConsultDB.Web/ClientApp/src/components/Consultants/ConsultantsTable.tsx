import * as React from 'react';
import { IConsultantListItem } from './IConsultantListItem';

export const ConsultantsTable: React.FunctionComponent = () => {

    const [consultants, setConsultants] = React.useState<IConsultantListItem[]>([]);

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