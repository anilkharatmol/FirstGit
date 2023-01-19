let form=document.getElementById('myform');
let itemList=document.getElementById('userlist');


form.addEventListener('submit',myform);

itemList.addEventListener('click',removeItem);


function myform(e){
    e.preventDefault();
    let name=document.getElementById('name');
    let mail=document.getElementById('email');
    let contact=document.getElementById('number');
    let date=document.getElementById('date');
    let time=document.getElementById('time');

    
    let obj={
        name:name.value,
        email:mail.value,
        number:contact.value,
        date:date.value,
        time:time.value
    };

    localStorage.setItem(document.getElementById('email').value,JSON.stringify(obj));

   
    let li=document.createElement('li');
    let del=document.createElement('button');
    del.appendChild(document.createTextNode('Delete'));
    li.className='user-group';
    li.appendChild(document.createTextNode(document.getElementById('name').value));
    li.appendChild(document.createTextNode('  '));
    li.appendChild(document.createTextNode(document.getElementById('email').value));
    li.appendChild(document.createTextNode('  '));
    li.appendChild(document.createTextNode(document.getElementById('number').value));
    li.appendChild(document.createTextNode('  '));
    li.appendChild(document.createTextNode(document.getElementById('date').value));
    li.appendChild(document.createTextNode('  '));
    li.appendChild(document.createTextNode(document.getElementById('time').value));
    li.appendChild(del);
    itemList.appendChild(li);
}

function removeItem(e){
            let li=e.target.parentElement;
            itemList.removeChild(li);
            localStorage.removeItem(document.getElementById('email').value,'obj');          
}
