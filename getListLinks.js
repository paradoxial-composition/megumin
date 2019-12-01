
module.exports = function (today, myAnimeList, get, load) {
  get('https://horriblesubs.info/').then(response => {
  const $ = load(response.data)

  let urlElements = $('td.schedule-widget-show')

  for (let i = 0; i < urlElements.length; i++) {
    const urlAnchor = $(urlElements[i]).find('a')[0]

    if(urlAnchor){
      const urlText = $(urlAnchor).text() 
      if(myAnimeList[today].includes(urlText)) {
        const itemHref = $(urlAnchor).attr('href')
        console.log(itemHref)
        console.log(urlText)
      }
    }

  }
})
.catch(err => {
  console.log('Err: ' + err)
})
}