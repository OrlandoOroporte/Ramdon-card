/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let simbolo = ["♦", "♠", "♣", "♥"];

  let symA = Math.floor(Math.random() * simbolo.length);
  let symTop = simbolo[symA];
  let symBotton = simbolo[symA];

  let numA = Math.floor(Math.random() * numero.length);
  let num = numero[numA];

  document.querySelector("#symbol1").innerHTML = symTop;
  document.querySelector("#number").innerHTML = num;
  document.querySelector("#symbol2").innerHTML = symBotton;

  if (symTop == simbolo[0] || symBotton == simbolo[3]) {
    document.getElementById("symbol1").style.color = "red";
    document.getElementById("symbol2").style.color = "red";
  } else {
    document.getElementById("symbol1").style.color = "black";
    document.getElementById("symbol2").style.color = "black";
  }
};
