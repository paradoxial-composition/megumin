const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://horriblesubs.info/').then(response => {
  const $ = cheerio.load(response.data)
  // let urlElements = $('li, .dropdown-menu > .active').html()
  let urlElements = $('td.schedule-widget-show')
  
  // console.log(urlElements)
  // console.log(response.data)
  // console.log(urlElements)
  for (let i = 0; i < urlElements.length; i++) {
    const urlSpan = $(urlElements[i]).find('a')[0]

    if(urlSpan){
      const urlText = $(urlSpan).text()
      console.log(urlText)
    }

  }
})
.catch(err => {
  console.log('Err: ' + err)
})
