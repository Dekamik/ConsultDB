import { Api } from "../../helpers/Api";
import { API_CONSULTANTS } from "../../routing/ApiRouting";
import { IConsultant } from "./IConsultant";
import { IConsultantListItem } from "./IConsultantListItem";

export class ConsultantsApi extends Api {

    getList(success: (data: IConsultantListItem[]) => void, error?: (message: string) => void, final?: () => void) {
        this.get(`${API_CONSULTANTS}/list`, success, error, final);
    }

    getConsultant(id: string, success: (data: IConsultant) => void, error?: (message: string) => void, final?: () => void) {
        this.get(`${API_CONSULTANTS}/${id}`, success, error, final);
    }
}