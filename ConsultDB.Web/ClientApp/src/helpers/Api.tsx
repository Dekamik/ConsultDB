import { API_URL } from './../routing/ApiRouting'

export class Api {
    get(url: string, success: (data: any) => void, error?: (message: string) => void, final?: () => void) {
        fetch(`${API_URL}${url}`)
            .then(async response => {
                if (response.ok) {
                    success(await response.json());
                }
                else {
                    console.log(response.status, response.statusText);
                }
            })
            .catch((message: string) => {
                if (error) {
                    error(message);
                }
                else {
                    throw new Error(message);
                }
            })
            .finally(() => {
                if (final) {
                    final();
                }
            });
    }
}