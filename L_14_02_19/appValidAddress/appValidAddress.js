const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyA_TIsrkrrQM0UxKn69d3VZKPAnlAtE8r0',
  Promise: Promise,
});

const insertAddress = 'Aabrakadabra';
googleMapsClient.geocode({ address: insertAddress })
  .asPromise()
  .then((response) => {
    console.log(response.json.results);
    console.log(response.json.results[0].address_components);
  })
  .catch((err) => {
    console.log(err);
  });

// const googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyCJhyXQUy0Vr8YIQxzrVqnbG7C6QDBiQvE',
// });
// // const express = require('express');

// const inputAddress = '1600 Amphitheatre Parkway, Mountain View, CA';

// // console.log(googleMapsClient);
// // create a new client object with your key

// // make request to Google Maps API
// googleMapsClient.geocode({
//   address: inputAddress,
// }, (err, response) => {
//   if (!err) {
//     console.log(response.json.results);
//   }
// });

// // https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=geocode&language=en&key=AIzaSyCJhyXQUy0Vr8YIQxzrVqnbG7C6QDBiQvE
