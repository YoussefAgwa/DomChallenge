let myHeader = document.createElement("header");
myHeader.style.cssText = `display : flex; justify-content : space-between; align-items : center; padding : 10px auto ;`
let logo = document.createElement("span");
let logoText = document.createTextNode("Elzero");
logo.style.cssText = `color : #20A874; font-weight : bold; font-size :25px;`;
logo.appendChild(logoText);
myHeader.appendChild(logo);
/////////////End Logo
let menu = document.createElement(`ul`);
menu.style.display = `flex`;
  let linkH = document.createElement(`li`);
  let linkA = document.createElement(`li`);
  let linkC = document.createElement(`li`);
  let linkS = document.createElement(`li`);
  let home = document.createElement(`a`);
  let about = document.createElement(`a`);
  let contact = document.createElement(`a`);
  let service = document.createElement(`a`);
  home.href  = `www.google.com`
  about.href  = `www.google.com`
  contact.href  = `www.google.com`
  service.href  = `www.google.com`
  home.textContent = `Home`;
  about.textContent = `About`;
  contact.textContent = `Contact`;
  service.textContent = `Service`;
  //////////Styling
  linkH.style.cssText = `list-style : none; padding-right : 20px;`
  linkA.style.cssText = `list-style : none; padding-right : 20px;`
  linkC.style.cssText = `list-style : none; padding-right : 20px;`
  linkS.style.cssText = `list-style : none; padding-right : 20px;`
  home.style.cssText = `text-decoration : none; color : #787B7A;`;
  about.style.cssText = `text-decoration : none;  color : #787B7A;`;
  contact.style.cssText = `text-decoration : none;  color : #787B7A;`;
  service.style.cssText = `text-decoration : none;  color : #787B7A;`;
  linkH.appendChild(home);
  linkA.appendChild(about);
  linkC.appendChild(contact);
  linkS.appendChild(service);
  menu.appendChild(linkH);
  menu.appendChild(linkA);
  menu.appendChild(linkS);
  menu.appendChild(linkC);
  myHeader.appendChild(menu);
  document.body.appendChild(myHeader);

//////////////////End Header
  let section = document.createElement(`section`);
  document.body.appendChild(section);
  for (let i = 0; i < 15; i++) {
    let countainer = document.createElement(`div`);
    let productNumber = document.createElement(`span`);
    let productName = document.createElement(`p`);
    productNumber.appendChild(document.createTextNode(`${i + 1}`));
    productName.appendChild(document.createTextNode(`Product`));
    countainer.appendChild(productNumber);
    countainer.appendChild(productName);
    section.appendChild(countainer);
    countainer.style.cssText = `  display: block; text-align: center; width: 30%; background-color: white; padding : 5px;`
    productNumber.style.cssText = `font-size : 30px; font-weight : bold;`
    productName.style.cssText = `font-size : 15px; `
  }
  section.style.cssText = `display : flex; justify-content : space-evenly;  gap : 20px; flex-wrap : wrap; background-color: #ECECEC; padding: 25px;`

//////////////////End Section
let footer = document.createElement(`div`);
let copyRight = document.createElement(`span`);
copyRight.appendChild(document.createTextNode(`©CopyRight 2023 Jo`));
footer.appendChild(copyRight);
document.body.appendChild(footer);
footer.style.cssText = `width : 100% ; display: flex; justify-content : center; align-items : center; color : white; font-size:35px; font-weight:bold; background-color : #20A874; height : calc(100vh - 660px);`

//////////////////End Footer