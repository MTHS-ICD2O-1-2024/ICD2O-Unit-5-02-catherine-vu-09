// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine
// Created on: April 23 2025
// This file contains the JS functions for index.html

'use strict'

const positiveRandomNumber = Math.floor(Math.random() * 6) + 1
const negativeRandomNumber = Math.floor(Math.random() * 6) * -1

function generateNumber() {
  // input
  const userInput = document.querySelector('input[name="kind-of-number"]:checked').value;
  // process
  if (userInput === "1") {
    //output
    document.getElementById('result').innerHTML =
      '<p>The random number is:' + positiveRandomNumber + '</p>'
  }
  else {
    // output
    document.getElementById('result').innerHTML =
      '<p>The random number is: ' + negativeRandomNumber + '</p>';
  }
}