    var box = document.getElementsByClassName('im')[0];
    var mask = document.getElementsByClassName('op')[0];
    var bigBox = document.getElementsByClassName('ui')[0];
    console.log(box, mask)
    //计算mask的宽高		
    mask.style.width = mask.style.height = box.offsetWidth * bigBox.offsetWidth / 800 + 'px';
    bigBox.style = "display:none";

    mask.onmousedown = function(e) {
    	var e = e || window.event;
    	var x = e.offsetX;
    	var y = e.offsetY;
    	box.onmousemove = function(e) {
    		bigBox.style = "display:block";

    		var e = e || window.event;

    		var l = e.pageX - getPos(box).left - x;
    		var t = e.pageY - getPos(box).top - y;

    		if(l <= 0) {
    			l = 0
    		};
    		if(t <= 0) {
    			t = 0
    		};
    		if(l >= box.offsetWidth - mask.offsetWidth) {
    			l = box.offsetWidth - mask.offsetWidth
    		};
    		if(t >= box.offsetHeight - mask.offsetHeight) {
    			t = box.offsetHeight - mask.offsetHeight
    		};

    		mask.style.left = l + 'px';
    		mask.style.top = t + 'px';

    		var bgx = l * 800 / bigBox.offsetWidth * (-1) + 'px';
    		var bgy = t * 800 / bigBox.offsetHeight * (-1) + 'px';

    		bigBox.style.backgroundPosition = bgx + " " + bgy;
    	}

    	document.onmouseup = function() {
    		box.onmousemove = null;
    		bigBox.style = "display:none";
    	}
    }
    //		    box.onclick=function(){
    //		    	bigBox.style
    //		    }
    //     置顶
    var zd = document.getElementById('gd');
    zd.addEventListener('click', function() {
    	timer = setInterval(function() {
    		if(getScroll().y == 0) {
    			clearInterval(timer)
    		}
    		scrollBy(0, -55)
    	}, 10)
    })

    var lol = document.getElementsByClassName('tti')[0];
    console.log(lol)
 
   var navpom = getPos(lol).top
    console.log(navpom)
    window.onscroll=function(){
    	console.log(zd)
    	var top = getScroll().y;
    	if(top>=navpom){
    		addClass(lol,'maxs')
    		zd.style='display:block';
    	}else{
    		delClass(lol,'maxs')
    		zd.style='display:none';
    	}
    }
    