import axios from "axios";

const corsProxy = "https://cors-anywhere.herokuapp.com/";
const BASEURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
const APIKEY = "&key=AIzaSyDnVJhwYTSufOkwShaAz8LQPvKrfA0z1m0";

export default {
  googleSearch: function(query) {
    return axios.get(corsProxy + BASEURL + query + APIKEY);
  },

  findUser: function() {
    return axios.get("/api/users");
  },
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  createUser: function(userInfo) {
    return axios.post("/api/users", userInfo);
  },

  getPosts: function() {
    return axios.get("/api/posts");
  },
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  createPost: function(postData) {
    return axios.post("/api/posts", postData);
  },

  getPortfolios: function() {
    return axios.get("/api/portfolios");
  },
  // Gets the work order with the given id
  getPortfolio: function(id) {
    return axios.get("/api/portfolios/" + id);
  },
  // Deletes the work order with the given id
  deletePortfolio: function(id) {
    return axios.delete("/api/portfolios/" + id);
  },
  // Saves a work order to the database
  savePortfolio: function(portfolioData) {
    return axios.post("/api/portfolios", portfolioData);
  }
};
