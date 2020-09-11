export interface IConsultant {
    consultantId: number;
    fullName: string;
    age: number;
    emailAddress: string;
    homeAddress: string;
    competencies: string[];
    isOnAssignment: boolean;
}