let form=document.getElementById('myform');
let itemList=document.getElementById('userlist');


form.addEventListener('submit',myform);


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

   
    let ul=document.getElementById('userlist');
    let li=document.createElement('li');
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
    ul.appendChild(li);
};

    