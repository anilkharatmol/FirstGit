let form=document.getElementById('addForm');
let itemList=document.getElementById('items');


//add item event
form.addEventListener('submit',addForm);

//remove item
itemList.addEventListener('click',removeItem);


//function addForm
function addForm(e){
    e.preventDefault();

    //name of item
    let newitem =document.getElementById('item').value;
    let des=document.getElementById('description').value;

    //adding new item to list
    let li=document.createElement('li');

    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(des));

    //add delete button 
    let del=document.createElement('button');
    del.className='btn btn-danger btn-sm  float-right delete';
    del.appendChild(document.createTextNode('X'));

    //add delete button to the list
    li.appendChild(del);

    //add list to the itemlist
    itemList.appendChild(li);


}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

let filter=document.getElementById('filter');

//filter items
filter.addEventListener('keyup',filterItems)

function filterItems(e){
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get item list
  let items = itemList.getElementsByTagName('li');

  // Convert to array
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let desname = item.children[1].textContent;
    if(itemName.toLowerCase().indexOf(text)!= -1 || desname.toLowerCase().indexOf(text)!= -1){
      item.style.display = 'block';
    } 
    else {
      item.style.display = 'none';
    }
  });
}



