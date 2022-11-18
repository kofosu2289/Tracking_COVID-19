import React from 'react';

const About = () => {
  return (
    <div className='about-container'>
      <h2>About COVID-19</h2>
      <h3>What Is COVID-19</h3>
      <p>COVID-19 Stands For COronaVIrus Disease 2019</p>
      <p>
        COVID-19 is a respiratory illness which spreads from person to person by
        droplets from <br />
        sneezes and coughs. It is cause by a new type of coronavirus that was
        first identified in 2019 in Wuhan, China.
      </p>
      <h3>How To Protect Yourself</h3>
      <ul>
        <li>Wash Your Hands Often</li>
        <li>Avoid Touching Your Eyes, Nose, and Mouth With Unwashed Hands</li>
        <li>Avoid Close Contact With People Who Are Sick</li>
        <li>
          Put Distance (at least 6 feet) Between Yourself and Other People in
          Your Community
        </li>
      </ul>
      <h3>Symptoms of COVID-19</h3>
      <p>These symptoms may appear 2-14 days after exposure</p>
      <ul>
        <li>Fever</li>
        <li>Cough</li>
        <li>Shortness of Breath</li>
      </ul>
      <h3>If You're Sick</h3>
      <ul>
        <li>Stay Home</li>
        <li>Stay In Touch With Your Doctor</li>
        <li>Avoid Public Transportation</li>
        <li>Separate Yourself From Others As Much As Possible</li>
        <li>Call Ahead Before Visiting Your Doctor</li>
      </ul>
      <br />
      <p className='source'>
        Source:{' '}
        <a
          href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Center for Disease Control
        </a>
      </p>
      <p className='source'>
        Data Source:{' '}
        <a
          href='https://rapidapi.com/organization/vaccovidlive'
          target='_blank'
          rel='noopener noreferrer'
        >
          VACCOVID
        </a>
      </p>
    </div>
  );
}

export default About;