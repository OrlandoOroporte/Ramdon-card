/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let simbolo = ["♦", "♠", "♣", "♥"];
  let sym = Math.floor(Math.random() * simbolo.length);
  let symTop = simbolo[sym];
  let symBotton = simbolo[sym];

  let num = Math.floor(Math.random() * numero.length);

  document.querySelector("#symbol1").innerHTML = symTop;
  document.querySelector("#number").innerHTML = num;
  document.querySelector("#symbol2").innerHTML = symBotton;

  if (symTop == "♦" || symBotton == "♥") {
    document.getElementById("symbol1").style.color = "red";
    document.getElementById("symbol2").style.color = "red";
  } else {
  }
};
