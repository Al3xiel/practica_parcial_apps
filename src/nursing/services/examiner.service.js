import http from "../../shared/services/http-common.js";

export class ExaminerService {
    resourceEndpoint = '/examiners';

    getAll() {
        return http.get(this.resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }
}