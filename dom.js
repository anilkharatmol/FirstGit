// console.log(document.title);
// let title=document.getElementById('header-title');
// console.log(title);
// title.innerText='hello';
// title.textContent='domm';

// let items=document.getElementsByClassName('list-group-item');
// items[3].style.backgroundColor="yellow";

// for(let i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight="bold";
// }

// let tag=document.getElementsByTagName('li');
// tag[2].style.backgroundColor="grey";

//     tag[1].style.color="red";
//     tag[3].style.backgroundColor="pink";


// let li2=document.querySelector('.list-group-item:nth-child(2)');
// li2.textContent="hello";
// li2.style.backgroundColor='lightblue';

// let li3=document.querySelector('.list-group-item:nth-child(3)');
// li3.style.color="transparent";


// let it=document.querySelectorAll('li');
// it[1].style.color='green';

// let itm=document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<itm.length;i++)

// {
//     itm[i].style.backgroundColor='green';
// }


let itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.color="darkred";

//parentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor="lightgrey";

//lastChild
console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);

//firstChild
console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);

//nextSibling
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);

//createElement
let newDiv=document.createElement('div');

newDiv.className='divcreated';
newDiv.id='firstdiv';

let newDivText=document.createTextNode('Dom Manipulation');

newDiv.appendChild(newDivText);
newDiv.setAttribute('title','dom');

let container=document.querySelector('header .container');
console.log(container);
let h1=document.querySelector('header h1');
console.log(h1);

container.insertBefore(newDiv,h1);







