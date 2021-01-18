const contents = document.querySelector('.container');

//Horizontal Scroll
window.addEventListener('wheel', (ScrollHorizontal));
function ScrollHorizontal(event) {
    
    window.scroll(window.scrollX + event.deltaY / 4, scrollY);
    console.log(event.deltaY);
}



var dragObj
var count = 0;

function set_drag_drop(obj)
{
	if(count>0){
		// count margins and divs offset
		// body{ margin:10px; }
		// height:100px;
		obj.adx = 10; 
		//obj.ady = 10 + (count*100)
	}else{
		obj.adx = 0;
		//obj.ady = 0;
	}
	count++;
	
	obj.onmousedown = function(e)
	{
		var rect = obj.getBoundingClientRect();
		obj.dx = rect.left - e.clientX;
		//obj.dy = rect.top - e.clientY;
		obj.isDown = true;
		dragObj = this;
	}

	obj.onmouseup = function(e)
	{
		obj.isDown = false;
	}

	document.onmousemove = function(e)
	{
		if(dragObj && dragObj.isDown)
		{
			dragObj.style.left = e.pageX -dragObj.adx+ dragObj.dx +"px";
			//dragObj.style.top = e.pageY -dragObj.ady+ dragObj.dy + "px";
		}
	}
}

set_drag_drop(document.querySelector('.figure'));


//Mobile Touch
window.onload = function() {
    // find the element that you want to drag.
    var box = document.querySelector('.figure');
    
    /* listen to the touchMove event,
    every time it fires, grab the location
    of touch and assign it to box */
    
    box.addEventListener('touchmove', function(e) {
      // grab the location of touch
      e.preventDefault(); 
      var touchLocation = e.targetTouches[0];
      
      // assign box new coordinates based on the touch.
      box.style.left = touchLocation.pageX + 'px';
      //box.style.top = touchLocation.pageY + 'px';
    })
    
    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */
    
    box.addEventListener('touchend', function(e) {
      // current box position.
      var x = parseInt(box.style.left);
      //var y = parseInt(box.style.top);
    })
    
  }
