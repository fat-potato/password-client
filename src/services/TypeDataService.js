import http from "../http-common";
class TypeDataService {
  getAll() {
    return http.get("/clients/types");
  }
  create(data) {
    return http.post("/clients/types", data);
  }
  update(id, data) {
    return http.put(`/types/${id}`, data);
  }
  delete(id) {
    return http.delete(`/types/${id}`);
  }
}
export default new TypeDataService();
