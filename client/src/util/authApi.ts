import axios from "axios";

axios.defaults.baseURL = 'https://us-central1-user-management-system-2020.cloudfunctions.net/app/';

export default {


    /* Gets all users
    getUsers: function() {
        return axios.get("/users");
    },*/

    // Gets the user based on the id
    findUser: function(id: string) {
        return axios.get("/user/" + id);
    },

    // Saves a user to the database
    createUser: function(userData: object) {
        return axios.post("/user", userData);
    }
    };
