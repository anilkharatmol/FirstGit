function getacall(){
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
    localStorage.setItem('obj',JSON.stringify(obj));
};