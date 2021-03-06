
import { request } from './request';

const URL = '/gardens';

export default {
    getAll() {
        return request.get(URL);
    },

    get(id) {
        return request.get(`${URL}/${id}`);
    },

    add(garden) {
        return request.post(URL, garden);
    },

    updateGarden(garden){
        return request.put(`${URL}/${garden._id}`);
    },

    updatePlot(id, plot) {
        return request.put(`${URL}/${id}/plot`, plot);
    },

    delete(garden) {
        return request.delete(`${URL}/${garden._id}`);
    }
};