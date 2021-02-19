const contents = document.querySelector('.container');

//Horizontal Scroll
window.addEventListener('wheel', (ScrollHorizontal));
function ScrollHorizontal(event) {
    
    window.scroll(window.scrollX + event.deltaY / 4, 0);
    console.log(event.deltaY);
}


//tooltip
const pics = document.querySelectorAll('.pic');

for(let i = 0; i < pics.length; i++)
{
    pics[i].addEventListener('click', () => {
        Box(pics[i].dataset.text);
    })
}


function Box(data)
{
    console.log(data);
}