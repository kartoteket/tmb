import axios from 'axios'
import Papa from 'papaparse'
const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTs9xaw1tFZI0cSEfZXJehljJz20P2G2NUca6KxOqo9u2i0cd0oJCJF_eaZrCtZZ2oVBm22NxnWJf_L/pub?output=csv'

export default function() {
  return axios
    .get(URL)
    .then(({ data }) => {
      const json = Papa.parse(data, {
        header: true,
        dynamicTyping: true
      })
      return json.data.map((axis, index, array) => {
        const payload = {
          prev: array[index - 1],
          current: axis,
          next: array[index + 1]
        }
        return {
          route: `/axis/${axis.id}`,
          payload
        }
      })
    })
    .catch(error => {
      console.log(error)
    })
}
