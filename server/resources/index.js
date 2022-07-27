const blankQueryResponse = () => ({
  message: "Please enter valid search term",
  isError: true,
})

const createLimitationError = (count) => ({
  message: `Your address book can't greater than ${count}`,
  isError: true,
})

const createPeopleSuccess = () => ({
  message: "Your list has been added",
  isError: false,
})

const createPeopleError = ({ data }) => ({
  message: "Error! Your name or phone number is not valid",
  isError: true,
  data,
})

const createPeopleExist = () => ({
  message: "A Name is tied to only one phone number.",
  isError: true,
})

const getAllRecordsSuccess = ({ responseData }) => ({
  data: responseData,
  isError: false,
})

module.exports = {
  blankQueryResponse,
  getAllRecordsSuccess,
  createLimitationError,
  createPeopleSuccess,
  createPeopleError,
  createPeopleExist,
}
