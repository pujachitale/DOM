var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById('filter');
// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click',removeItem)

// filter event
filter.addEventListener('keyup',filterItems)

// add item
function addItem(e){
    e.preventDefault();
    // console.log(1)
    // get input value
    var newItem=document.getElementById("item").value

    // create new li element
    var li=document.createElement('li')

    // add class
    li.className='list-group-item'
    console.log(li)

    // add text node with input value
    li.appendChild(document.createTextNode(newItem))

    // create delete botton element
    var deleteBtn =document.createElement('button')

    // add classes to del button
    deleteBtn.className='but btn-danger btn-sm float-right delete'

    // append text node
    deleteBtn.appendChild(document.createTextNode('X'))

    // append button to li
    li.appendChild(deleteBtn)

    // append to list
    itemList.appendChild(li)
}

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        // console.log(1)
        if(confirm('Are you sure?')){
            var li=e.target.parentElement
            itemList.removeChild(li)
    }
}
}

// filter item
function filterItems(e){
    // convert text to lower case
    var text=e.target.value.toLowerCase()
    
    //get lis
    var items=itemList.getElementsByTagName('li')
    
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        } else{
            item.style.display='none'
        }
    })

        
    }
        
































// var form=document.getElementById('addForm')
// var itemlist=document.getElementById('items')

// // form submit Event
// form.addEventListener("submit",addItem)

// // Add item
// function addItem(e){
//     e.preventDefault()
//     // console.log(1)
// }

// // Get input value
// var newItem=document.getElementById('item')

// // create new li element
// var li=document.createElement('li')

// // Add class
// li.className='list-group-item'
// console.log('li')