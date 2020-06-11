import axios from "axios";


export class Api {
  
  constructor() {}

  getAssignments = () => {
    return axios.get("/api/assignments");
  }

  submitAssignment = (submittedAssignment: object) => {
    return axios.post("/api/assignments/submit", submittedAssignment)
  }

}