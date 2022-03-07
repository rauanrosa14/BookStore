var books = document.querySelectorAll('.book');
var car = document.querySelector('.car');
for(i =0; i < books.length;i++){
        books[i].getElementsByTagName('button')addEventListener('click',function(){
        let img = document.createElement('img');
        img.setAttribute('img',books[i].getElementsByTagName('img'));
        car.insertAdjacentHTML+=img;
    })
}