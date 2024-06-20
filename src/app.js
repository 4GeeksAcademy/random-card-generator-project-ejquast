/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function chooseRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  let cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardSuit = ["♠", "♥", "♣", "♦"];

  const builtCardNo = chooseRandomItem(cardNumber);
  const cardNoH1 = document.querySelector("#cardNo");
  cardNoH1.textContent = builtCardNo;

  const cardSuH1s = document.querySelectorAll(".cardSu");
  const builtCardSu = chooseRandomItem(cardSuit);
  for (let cardSuH1 of cardSuH1s) {
    cardSuH1.textContent = builtCardSu;
  }

  if (builtCardSu === "♥" || builtCardSu === "♦") {
    document.getElementById("cardSuT").style.color = "red";
    document.getElementById("cardSuB").style.color = "red";
  } else {
    document.getElementById("cardSuT").style.color = "black";
    document.getElementById("cardSuB").style.color = "black";
  }
};
