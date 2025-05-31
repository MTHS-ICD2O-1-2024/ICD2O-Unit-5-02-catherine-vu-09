// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine
// Created on: April 23 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function generates random positive or negative number
 */
// eslint-disable-next-line no-unused-vars
function generateNumber() {
  // input
  const optionPositive = document.getElementById('option-positive').checked

  // process
  if (optionPositive === true) {
    // output
    document.getElementById('result').innerHTML =
      'Your random number is: ' + randomNumber
  } else {
    // process
    const randomNegativeNumber = randomNumber * -1
    // output
    document.getElementById('result').innerHTML =
      'Your random number is: ' + randomNegativeNumber
  }
}