import { Api } from "../../helpers/Api";
import { API_CONSULTANTS } from "../../routing/ApiRouting";
import { IConsultant } from "./Detail/IConsultant";
import { IConsultantListItem } from "./List/IConsultantListItem";

export class ConsultantsApi extends Api {

    getList(success: (data: IConsultantListItem[]) => void, error?: (message: string) => void, final?: () => void) {
        this.get(`${API_CONSULTANTS}/list`, success, error, final);
    }

    getConsultant(id: string, success: (data: IConsultant) => void, error?: (message: string) => void, final?: () => void) {
        this.get(`${API_CONSULTANTS}/${id}`, success, error, final);
    }

    createConsultant(data: IConsultant, success: (data: IConsultant) => void, error?: (message: string) => void, final?: () => void) {
        this.postWithResponse(`${API_CONSULTANTS}/new`, data, success, error, final);
    }

    updateConsultant(data: IConsultant, success: (data: IConsultant) => void, error?: (message: string) => void, final?: () => void) {
        this.postWithResponse(`${API_CONSULTANTS}`, data, success, error, final);
    }

    deleteConsultant(id: string, success: () => void, error?: (message: string) => void, final?: () => void) {
        this.delete(`${API_CONSULTANTS}/${id}`, success, error, final);
    }
}