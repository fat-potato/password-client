import http from "../http-common";
class ClientDataService {
  getAll() {
    return http.get("/manager/clients");
  }
  get(id) {
    return http.get(`/manager/clients/${id}`);
  }
  create(data) {
    return http.post("/manager/clients", data);
  }
  update(id, data) {
    return http.put(`/manager/clients/${id}`, data);
  }
  delete(id) {
    return http.delete(`/manager/clients/${id}`);
  }
  deleteAll() {
    return http.delete(`/manager/clients`);
  }
  findByName(name) {
    return http.get(`/manager/clients?name=${name}`);
  }
}
export default new ClientDataService();
