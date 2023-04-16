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
var items=document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2'
items[1].style.fontWeight='bold'
items[1].style.backgroundColor='yellow'

for(var i=0;i< items.length; i++){
    items[i].style.backgroundColor='#f4f4f4'
}


// Make the 3 rd element in the list have green background color
items[2].style.backgroundColor='green'

// Make all the elements in the list have bold color font
items[0].style.fontWeight='bold'
items[1].style.fontWeight='bold'
items[2].style.fontWeight='bold'
items[3].style.fontWeight='bold'









