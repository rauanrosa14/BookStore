var IndexSlideBook = 0;
function Slidebook(){
    let window_height = window.screen.width;
    var books = document.getElementsByClassName('shelf-book');
    for(i =0;i < books.length;i++){
        books[i].style.display = 'none';
    }
    
    if(IndexSlideBook>=books.length){
        IndexSlideBook=0;
    }else if(IndexSlideBook<0){
        IndexSlideBook = books.length;
    }
    var prevSlideBook = IndexSlideBook - 1;
    var nextSlideBook = IndexSlideBook + 1;
    var prevSlideBookplus = IndexSlideBook - 2;
    if(prevSlideBook<0 && IndexSlideBook != books.length-1){
        prevSlideBook = books.length-1;
    }
    if(nextSlideBook>=books.length && IndexSlideBook != 0){
        nextSlideBook = 0;
    }
    if(prevSlideBookplus<0){
        prevSlideBookplus = books.length-1;
    }
    console.log(' index : '+IndexSlideBook+" next: "+nextSlideBook+" prev: "+prevSlideBook+" prevplus "+prevSlideBookplus)
    books[IndexSlideBook].style.display = 'inline';
    if(window_height>=490){
        books[nextSlideBook].style.display = "inline";
    }
    if(window_height>=700){
        
        books[prevSlideBook].style.display = "inline";
    }
    setTimeout(() => {
        IndexSlideBook++;
        Slidebook();
    },8000);
}