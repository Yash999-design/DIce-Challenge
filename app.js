function myFunction() {
  /*
    Three Things to do:
    1. Check if person clicked
    2. What's the score on dice on that time
    3. Declare the winner
    
    Prerequisites:
    1. Link images folder for shuffling
    2. make your function working
    
    */

  var refreshButtonVariable = document.querySelector(".refreshButton");
  if (refreshButtonVariable.disabled === false) {
    let urls = [
      "./images/dice1.png",
      "./images/dice2.png",
      "./images/dice3.png",
      "./images/dice4.png",
      "./images/dice5.png",
      "./images/dice6.png",
    ];

    let randIndex = Math.floor(Math.random() * urls.length);
    let randUrl = urls[randIndex];
    let randIndex2 = Math.floor(Math.random() * urls.length);
    let randUrl2 = urls[randIndex2];

    document.querySelector(".image-1").src = "http://127.0.0.1:5500/" + randUrl;
    document.querySelector(".image-2").src =
      "http://127.0.0.1:5500/" + randUrl2;

    value_1 = parseInt(document.querySelector(".image-1").className.slice(-1));
    value_2 = parseInt(document.querySelector(".image-2").className.slice(-1));

    if (randIndex < randIndex2) {
      return (document.querySelector("h1").innerText = "😎 Player 2 Wins");
    } else if (randIndex > randIndex2) {
      return (document.querySelector("h1").innerText = "Player 1 Wins 😎");
    } else {
      return (document.querySelector("h1").innerText = "It's a Tie");
    }
  }
}
