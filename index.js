import myAnimeList from '../myAnimeList.js';

import { get } from 'axios';
import { load } from 'cheerio';
import moment from 'moment';

const today = moment().format('dddd').toLowerCase()

get('https://horriblesubs.info/').then(response => {
  const $ = load(response.data)

  let urlElements = $('td.schedule-widget-show')

  for (let i = 0; i < urlElements.length; i++) {
    const urlAnchor = $(urlElements[i]).find('a')[0]

    if(urlAnchor){
      const urlText = $(urlAnchor).text() 
      if(myAnimeList[today].includes(urlText)) {
        console.log(urlText)
      }
    }

  }
})
.catch(err => {
  console.log('Err: ' + err)
})
