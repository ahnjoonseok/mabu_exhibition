//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create','UA-53828044-1','auto');
    ga('require', 'displayfeatures');
    ga('send','pageview');

    
const contents = document.querySelector('.container');
let idX;
let idY;
let coor;
let mX;
let mY;


// //Horizontal Scroll
// window.addEventListener('wheel', (ScrollHorizontal));
// function ScrollHorizontal(event) {
//     // contents.scroll(window.scrollX + event.deltaY / 4, 0);
// }


(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('scrl').scrollLeft -= (delta * 60); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('scrl').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('scrl').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('scrl').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('scrl').attachEvent('onmousewheel', scrollHorizontally);
    }
})();



//tooltip
const pics = document.querySelectorAll('.pic');
const rpics = document.querySelectorAll('.roundpic');
const bg = document.querySelector('.warpper');

for(let i = 0; i < pics.length; i++)
{
    pics[i].addEventListener('click', () => {
        
        Box(pics[i].dataset.title, pics[i].dataset.day ,pics[i].dataset.text  ,pics[i].dataset.link );
    })
}

for(let k = 0; k < rpics.length; k++)
{
    rpics[k].addEventListener('click', () => {
        
        Box(rpics[k].dataset.title, rpics[k].dataset.day ,rpics[k].dataset.text  ,rpics[k].dataset.link);
    })
}

function Box(title, day, text, link )
{
    DeleteBox();

    const picbox = document.createElement('div');
    picbox.classList.add('popup');
    picbox.addEventListener('click', ()=> {
        DeleteBox();
    })
    
    const pictitle = document.createElement('h3');
    pictitle.classList.add('popTitle');

    if(link != null)
    {
        const picA = document.createElement('a');
        picA.href = link;
        picA.target = '_blank';
        picA.innerHTML = title;
        pictitle.appendChild(picA);
        console.log("not null");

    } else {
        pictitle.innerHTML = title;
    }


    const picday = document.createElement('h5');
    picday.classList.add('popDate');
    picday.innerHTML = day;

    const pictext = document.createElement('p');
    pictext.classList.add('popText');
    pictext.innerHTML = text;

    bg.appendChild(picbox);
    picbox.appendChild(pictitle);
    picbox.appendChild(picday);
    picbox.appendChild(pictext);

    if(mX < screen.width/2 && mY < screen.height/2 ) {
        // console.log('left Top');
        idX = mX + 'px';
        idY = mY + 'px';
        coor = "translate(" + idX + "," + idY + ")"

    } else if (mX < screen.width/2 && mY > screen.height/2) {
        // console.log('left bottom');
        idX = mX + 'px';
        idY = mY - picbox.getBoundingClientRect().height + 'px';
        coor = "translate(" + idX + "," + idY + ")"
        

    } else if (mX > screen.width/2 && mY > screen.height/2) {
        // console.log('right bottom');
        idX = mX - picbox.getBoundingClientRect().width + 'px';
        idY = mY - picbox.getBoundingClientRect().height + 'px';
        coor = "translate(" + idX + "," + idY + ")"


    } else if (mX > screen.width/2 && mY < screen.height/2) {
        // console.log('right Top');
        idX = mX - picbox.getBoundingClientRect().width + 'px';
        idY = mY + 'px';
        coor = "translate(" + idX + "," + idY + ")"
    }
    
    picbox.style.transform = coor;

    setTimeout(() => {
        picbox.style.opacity = 1;
    }, 300);


}

function DeleteBox()
{
    const b = document.querySelectorAll('.popup');
    for(let i = 0; i < b.length; i++)
    {
        b[i].style.opacity = 0;
        setTimeout(() => {
            
            b[i].remove();
        }, 700);
    }
}

bg.onscroll = function(e)
{
    DeleteBox();
}

function Coords(event)
{
    mX = event.clientX;
    mY = event.clientY;


}


