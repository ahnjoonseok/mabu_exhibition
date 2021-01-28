const contents = document.querySelector('.container');

//Horizontal Scroll
window.addEventListener('wheel', (ScrollHorizontal));
function ScrollHorizontal(event) {
    
    window.scroll(window.scrollX + event.deltaY / 4, scrollY);
    console.log(event.deltaY);
}


