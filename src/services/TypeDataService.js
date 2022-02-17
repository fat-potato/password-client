import http from "../http-common";
class TypeDataService {
  getAll() {
    return http.get("/manager/types");
  }
  create(data) {
    return http.post("/manager/types", data);
  }
  update(id, data) {
    return http.put(`/types/${id}`, data);
  }
  delete(id) {
    return http.delete(`/types/${id}`);
  }
}
export default new TypeDataService();
