import axios from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export const getGlobal = axios.get(`https://api.covid19api.com/summary`)
		
export const getUsa = axios.get('https://corona.lmao.ninja/states')
			
export const getAusCan = axios.get(`${corsProxy}https://covid19api.xapix.io/v2/locations`)

 