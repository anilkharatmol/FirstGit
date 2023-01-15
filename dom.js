// console.log(document.title);
// let title=document.getElementById('header-title');
// console.log(title);
// title.innerText='hello';
// title.textContent='domm';

let items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor="green";

for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}

let tag=document.getElementsByTagName('li');
tag[2].style.backgroundColor="grey";

    tag[1].style.color="red";
    tag[3].style.backgroundColor="pink";

