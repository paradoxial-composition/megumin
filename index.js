const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://buttercms.com/docs/api/').then(response => {
  const $ = cheerio.load(response.data)
  let urlElements = $('pre.highlight.shell')

  urlElements.map(item => {
    const urlSpan = $(item).find('span.s1')[0]

    if(urlSpan){
      const urlText = $(urlSpan).text()
      console.log(urlText)
    }
  })
})