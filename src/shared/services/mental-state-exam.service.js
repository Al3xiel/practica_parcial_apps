import http from "../../shared/services/http-common.js";

export class MentalStateExamService {
    resourceEndpoint = '/mental-state-exams';

    getAll() {
        return http.get(this.resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }
}