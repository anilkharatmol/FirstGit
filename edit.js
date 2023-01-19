let form=document.getElementById('myform');

form.addEventListener('submit',onSubmit);

    function onSubmit(e){

        e.preventDefault();
        let name=e.target.name.value;
        let email=e.target.email.value;
        let contact=e.target.number.value;
        let date=e.target.date.value;
        let time=e.target.time.value;

        let obj={
            name,
            email,
            contact,
            date,
            time
        };
    
        localStorage.setItem(obj.email,JSON.stringify(obj));


        showUserOnScreen(obj);
    }
    function showUserOnScreen(obj){
        let par=document.getElementById('userlist');
        let li=document.createElement('li');   
        li.appendChild(document.createTextNode(obj.name));
        li.appendChild(document.createTextNode('  '));
        li.appendChild(document.createTextNode(obj.email));
        li.appendChild(document.createTextNode('  '));
        li.appendChild(document.createTextNode(obj.contact));
        li.appendChild(document.createTextNode('  '));
        li.appendChild(document.createTextNode(obj.date));
        li.appendChild(document.createTextNode('  '));
        li.appendChild(document.createTextNode(obj.time));
        let delbtn=document.createElement('input');
        delbtn.type='button';
        delbtn.value='delete';

        delbtn.onclick=()=>{
            localStorage.removeItem(obj.email);
            par.removeChild(li);
        }
        let editbtn=document.createElement('input');
        editbtn.type='button';
        editbtn.value='Edit';
        editbtn.onclick=()=>{
            localStorage.removeItem(obj.email);
            par.removeChild(li);

            document.getElementById('name').value=obj.name;
            document.getElementById('email').value=obj.email;
            document.getElementById('number').value=obj.contact;
            document.getElementById('date').value=obj.date;
            document.getElementById('time').value=obj.time;

        }
        li.appendChild(delbtn);
        li.appendChild(editbtn);
        par.appendChild(li);

    }
