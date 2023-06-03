// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent="Hello";
// console.log(document.forms)
// console.log(document.link)
// console.log(document.images);

// // GETELEMENTBYID
// console.log(document.getElementById('header-title'));

// var headerTitle=document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textcontent='hello'
// headerTitle.innertext='Goodbye'
// console.log(headerTitle.innerText)

// GETELEMENTBYCLASSNAME
// var items=document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2'
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='yellow'

// for(var i=0;i< items.length; i++){
//     items[i].style.backgroundColor='#f4f4f4'
// }


// // Make the 3 rd element in the list have green background color
// items[2].style.backgroundColor='green'

// // Make all the elements in the list have bold color font
// items[0].style.fontWeight='bold'
// items[1].style.fontWeight='bold'
// items[2].style.fontWeight='bold'
// items[3].style.fontWeight='bold'



// var li=document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2'
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor='yellow'

// for(var i=0;i< li.length; i++){
//     li[i].style.backgroundColor='#f4f4f4'
// }


// // QuerySelector
// var header=document.querySelector('#main-header')
// header.style.borderBottom='solid 4px black'


// var input=document.querySelector('input')
// input.value='Hello world'

// var submit = document.querySelector('input[type="submit"]')
// submit.value="SEND"

// var item= document.querySelector(".list-group-item")
// item.style.color="red"

// var lastItem= document.querySelector(".list-group-item:last-child")
// lastItem.style.color= "blue"

// var seconditem=document.querySelector(".list-group-item:nth-child(2) ")
// seconditem.style.color="coral"

// var seconditem=document.querySelector(".list-group-item:nth-child(2)")
// seconditem.style.backgroundColor="green"


// var thirditem=document.querySelector(".list-group-item:nth-child(3)")
// console.log(thirditem)
// thirditem.style.visibility="hidden"




// // queryselectorAll
// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent="Hello"

// var odd=document.querySelectorAll('li:nth-child(odd)')
// var even=document.querySelectorAll('li:nth-child(even)')

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4'
//     even[i].style.backgroundColor='#ccc'
// }


// TRAVERSING THE DOM
// var itemlist=document.querySelector('#items')
// // ParentNode
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor="#f4f4f4"
// console.log(itemlist.parentNode.parentNode,parentNode)

// ParentElement
// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor="#f4f4f4"
// console.log(itemlist.parentElement.parentElement.parentElement)

// CHILDNODE
// console.log(itemlist.childNodes)

// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.background="yellow"

// // FirstChild
// console.log(itemlist.firstChild)

// // FirstElementChild
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent="Hello 1"

// // lastElementChild
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent="Hello 4"

// // NextSibling
// console.log(itemlist.nextSibling)

// // NextElementSibling
// console.log(itemlist.nextElementSibling)

// // privious Sibling
// console.log(itemlist.previousSibling)

// // privious elementsibling
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color="green"

// // create Element

// create a Div
// var newDiv= document.createElement("div")

// // Add class
// newDiv.className='hello'

// // add id
// newDiv.id='hello1'

// // add attr
// newDiv.setAttribute('title','Hello Div')

// // create text node
// var newdivtext=document.createTextNode('Hello World')

// // Add text to div
// newDiv.appendChild(newdivtext)

// var container=document.querySelector('header .container')
// var h1=document.querySelector('header h1')

// console.log(newDiv)

// newDiv.style.fontSize='30px'

// container.insertBefore(newDiv,h1)















