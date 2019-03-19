import axios from 'axios'
import Papa from 'papaparse'
const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTs9xaw1tFZI0cSEfZXJehljJz20P2G2NUca6KxOqo9u2i0cd0oJCJF_eaZrCtZZ2oVBm22NxnWJf_L/pub?output=csv'

export default function({ store, payload }) {
  if (store.state.correspondences.length === 0) {
    return axios
      .get(URL)
      .then(({ data }) => {
        // console.log(data)
        const correspondences = Papa.parse(data, {
          header: true,
          dynamicTyping: true
        })
        console.log('Committing to store...')
        store.commit('setCorrespondences', correspondences.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
