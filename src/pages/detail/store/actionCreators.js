import axios from "axios"
import * as constants from "./constants"

const getDetail = (data) => {
  return {
    type: constants.GET_DETAIL,
    data
  }
}

export const fetchData = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const data = res.data.data
      dispatch(getDetail(data))
    })
  }
}