import axios from 'axios'
const KEY = 'AIzaSyDRgQ9kOlgG5ScfHEuVnYX191gCYsagoGU'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})

