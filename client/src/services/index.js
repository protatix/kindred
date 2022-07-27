import api from "../configs/api"
import { API_URLS } from "../constants"

const addressBookServices = {
  getPeopleData: () => api.get(API_URLS.GET_ALL),
  createData: (requestData) => api.post(API_URLS.CREATE, requestData),
  searchData: (keyword) =>
    api.get(API_URLS.SEARCH, { params: { search: keyword } }),
}

export default addressBookServices
