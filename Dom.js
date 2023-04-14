console.log(document.domain);
console.log(document.url);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// document.all[10].textContent="Hello";
console.log(document.forms)
console.log(document.link)
console.log(document.images);

// GETELEMENTBYID
console.log(document.getElementById('header-title'));

var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textcontent='hello'
headerTitle.innertext='Goodbye'
console.log(headerTitle.innerText)

// GETELEMENTBYCLASSNAME
// var items=document.getElementsByClassName('list-group-item')
// console.log()