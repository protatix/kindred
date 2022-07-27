const phoneBookSorter = (record1, record2) =>
  record1.name.localeCompare(record2.name)

const hasOnlyLetter = (query) => /^[A-Za-z ]*$/g.test(query)

const isPhoneNumberValid = (query) =>
  /^(?:\+(?!0)|0)\d*(?:\(\d+\))?\d*$/.test(query)

const filterPhoneBook = (record, query) => {
  if (hasOnlyLetter(query)) {
    const foundRecord = record.name.toLowerCase().includes(query.toLowerCase())
    return !!foundRecord
  }

  if (isPhoneNumberValid(query)) {
    return record.number === query
  }

  return false
}

const checkExistNumberByName = (record, objArr) => {
  return objArr.find(
    (item) =>
      item.name.toLowerCase() === record.name.toLowerCase() ||
      item.number === record.number
  )
}

module.exports = {
  phoneBookSorter,
  filterPhoneBook,
  hasOnlyLetter,
  isPhoneNumberValid,
  checkExistNumberByName,
}
