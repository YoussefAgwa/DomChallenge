for (let i = 0; i < 100 ; i++) {
  let myDiv = document.createElement("div");
  let myH = document.createElement(`h3`);
  let myDivText = document.createTextNode(`Product ${i+1}`)
  let myP = document.createElement(`p`);
  let myPText = document.createTextNode(`This is product`);
  myDiv.classList.add("product");
  myDiv.appendChild(myH);
  myH.appendChild(myDivText);
  myDiv.appendChild(myP);
  myP.appendChild(myPText);
  document.body.appendChild(myDiv);
}


