let data = []

const Utils = require("../utils")
const {
  blankQueryResponse,
  createLimitationError,
  getAllRecordsSuccess,
  createPeopleSuccess,
  createPeopleError,
  createPeopleExist,
} = require("../resources")

const createRecord = (req, res, next) => {
  if (!req.body.people || !Array.isArray(req.body.people)) {
    return res.status(400).send("Your request should be array")
  }

  if (req.body.people.length > 50) {
    return res.json(createLimitationError(50))
  }

  if (data.length + req.body.people.length > 300) {
    return res.json(createLimitationError(300))
  }

  const isUserExistOneNumber = data.filter((record) =>
    Utils.checkExistNumberByName(record, req.body.people)
  )

  if (isUserExistOneNumber.length > 0) {
    return res.json(createPeopleExist())
  }

  const filteredData = req.body.people.filter((item, index) => {
    if (
      !Utils.hasOnlyLetter(item.name) ||
      !Utils.isPhoneNumberValid(item.number)
    ) {
      Object.assign(item, { index })
      return { ...item, index }
    }
  })

  if (filteredData.length === 0) {
    data = [...data, ...req.body.people]
    return res.json(createPeopleSuccess())
  }

  return res.json(createPeopleError({ data: filteredData }))
}

const getAllRecords = (req, res, next) => {
  const responseData = data.sort(Utils.phoneBookSorter)
  return res.json(getAllRecordsSuccess({ responseData }))
}

const filterRecords = (req, res, next) => {
  const { search } = req.query

  if (search.trim() === "") {
    return res.json(blankQueryResponse())
  }

  return res.json({
    data: data.filter((record) => Utils.filterPhoneBook(record, search)),
    isError: false,
  })
}

module.exports = { createRecord, getAllRecords, filterRecords }
