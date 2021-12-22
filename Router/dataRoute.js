const route=require('express').Router();
const service = require("../services/data.services")

route.post("/history",service.history)
route.get("/searchhistory",service.searchHistory)

module.exports = route;