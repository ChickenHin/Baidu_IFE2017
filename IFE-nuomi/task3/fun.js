var EventUtil = {
	addHandler: function(element,type,handler) {
		if(element.addEventListener) {
			element.addEventListener(type,handler,false);
		} else if(element.attachEvent) {
			element.attachEvent("on"+type,handler);
		} else {
			element["on"+type] = handler;
		}
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	preventDefault: function(event) {
		if(event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}
};

function contextMenu(event) {
	var event = EventUtil.getEvent(event);
	EventUtil.preventDefault(event);
	// 获取鼠标位置
	var x = event.clientX;
	var y = event.clientY;
	var clickBlock = document.getElementsByTagName('div')[0];
	var menu = document.getElementsByTagName('ul')[0];
	menu.style.display = "block";
	// 超出界限的情况
	if(x < clickBlock.offsetLeft) {
		x = clickBlock.offsetLeft;
	}
	if(x + menu.offsetWidth - clickBlock.offsetLeft > clickBlock.offsetWidth) {
		x = clickBlock.offsetWidth + clickBlock.offsetLeft - menu.offsetWidth;
	}
	if(y < clickBlock.offsetTop) {
		y = clickBlock.offsetTop;
	}	
	if(y + menu.offsetHeight - clickBlock.offsetTop > clickBlock.offsetHeight) {
		y = clickBlock.offsetHeight + clickBlock.offsetTop - menu.offsetHeight;
	}
	// 菜单随鼠标位置显示
	menu.style.top = y + "px";
	menu.style.left = x + "px";
	// 点击其他位置菜单隐藏
	EventUtil.addHandler(document,'click',function() {
		menu.style.display = "none";
	})
}

window.onload = function() {
	var clickBlock = document.getElementsByTagName('div')[0];
	EventUtil.addHandler(clickBlock,'contextmenu',contextMenu);
}