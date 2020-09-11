export interface IConsultant {
    consultantId: number;
    fullName: string;
    dateOfBirth: Date;
    emailAddress: string;
    homeAddress: string;
    skills: string[];
    isOnAssignment: boolean;
}