import {useState, useEffect } from 'react';
import axios from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

  const getWorldDataByCountryOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getUSADataByStateOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/USA',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getCanadaDataByProvinceOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/CAN',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getAustraliaDataByProvinceOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/AUS',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getOceaniaDataOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/australia',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getAsiaDataOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getAfricaDataOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getEuropeDataOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getNorthAmericaDataOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  const getSouthAmericaDataOptions = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/southamerica',
    headers: {
      'X-RapidAPI-Key': '6708e42ec2mshefbfae2c8a1a1f5p180f65jsn7f9353a66bf6',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

export const getWorldDataByCountry = axios.request(getWorldDataByCountryOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getUSADataByState = axios.request(getUSADataByStateOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getCanadaDataByByProvince = axios.request(getCanadaDataByProvinceOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); 

export const getAustraliaDataByByProvince = axios.request(getAustraliaDataByProvinceOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getAsiaData = axios.request(getAsiaDataOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getAfricaData = axios.request(getAfricaDataOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getEuropeData = axios.request(getEuropeDataOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getNorthAmericaData = axios.request(getNorthAmericaDataOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getSouthAmericaData = axios.request(getSouthAmericaDataOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getOceaniaData = axios.request(getOceaniaDataOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


export const getGlobal = axios.get(`https://api.covid19api.com/summary`)

export const getUsa = axios.get('https://corona.lmao.ninja/v2/states')

export const getAusCan = axios.get(`${corsProxy}https://covid19api.xapix.io/v2/locations`)