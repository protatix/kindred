const express = require("express")
const router = express.Router()

const addressBookController = require("../controllers/addressBookController.js")

router
  .get("/all", addressBookController.getAllRecords)
  .get("/filter", addressBookController.filterRecords)
  .post("/create", addressBookController.createRecord)

module.exports = router
