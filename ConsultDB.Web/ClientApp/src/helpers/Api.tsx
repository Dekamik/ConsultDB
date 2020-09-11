import { API_URL } from './../routing/ApiRouting'

export class Api {
    get(url: string, success: (data: any) => void, error?: (message: string) => void, final?: () => void) {
        fetch(`${API_URL}${url}`, { method: 'get' })
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
            }
        );
    }

    post(url: string, data: any, success: () => void, error?: (message: string) => void, final?: () => void) {
        fetch(`${API_URL}${url}`, { method: 'post', body: JSON.stringify(data) })
            .then(response => {
                if (response.ok) {
                    success();
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
            }
        );
    }

    delete(url: string, success: () => void, error?: (message: string) => void, final?: () => void) {
        fetch(`${API_URL}${url}`, { method: 'delete' })
            .then(response => {
                if (response.ok) {
                    success();
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
            }
        );
    }
}