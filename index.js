import myAnimeList from './myAnimeList.js'
import getListLinks from './getListLinks'

import moment from 'moment';

import { get } from 'axios';
import { load } from 'cheerio';

const today = moment().format('dddd').toLowerCase()

getListLinks(today, myAnimeList, get, load)


