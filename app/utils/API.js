import axios from "axios";
const API = {
  // Retrieves all gitusers from the db
  getGitUsers: function() {
    return axios.get("/api/gituser");
  },
  // Saves a new gituser to the db
  saveGitUser: function(data) {
    return axios.post("/api/gituser", { data });
  }
};
export default API;
