import api from "./api"

class MyAsyncRequest {
    async get(uri, done) {
        try {
            const response = await api.get(uri);
            if (typeof done == 'function') {
                done(response);
                return;
            }
            return response.data;
        } catch (error) {
            const response = error.response;

            if (typeof done == 'function') {
                done(response);
                return;
            }
            // return error;
            return response.data;
        }
    }
    async post(uri, data, done) {
        try {
            const response = await api.post(uri, typeof data == 'undefined' ? {} : data)
            if (typeof done == 'function') {
                done(response);
                return;
            }
            return response.data;
        } catch (error) {
            const response = error.response;
            if (typeof done == 'function') {
                done(response);
                return;
            }

            return error.response.data;
        }
    }
}

export default new MyAsyncRequest
