// console.log(document.title);
// let title=document.getElementById('header-title');
// console.log(title);
// title.innerText='hello';
// title.textContent='domm';

let items=document.getElementsByClassName('list-group-item');
items[3].style.backgroundColor="yellow";

for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}

// let tag=document.getElementsByTagName('li');
// tag[2].style.backgroundColor="grey";

//     tag[1].style.color="red";
//     tag[3].style.backgroundColor="pink";


let li2=document.querySelector('.list-group-item:nth-child(2)');
li2.textContent="hello";
li2.style.backgroundColor='lightblue';

let li3=document.querySelector('.list-group-item:nth-child(3)');
li3.style.color="transparent";


let it=document.querySelectorAll('li');
it[1].style.color='green';

let itm=document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<itm.length;i++)

{
    itm[i].style.backgroundColor='green';
}

