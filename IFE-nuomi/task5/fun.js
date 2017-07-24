var EventUtil = {
	addHandler:function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent("on" + type, handler);
		}else{
			element["on" + type] = handler;
		}
	}
};

function checkPhone() {
	//手机号码类型：13[0-9], 14[5,7], 15[0, 1, 2, 3, 5, 6, 7, 8, 9], 17[0, 1, 6, 7, 8], 18[0-9]
	var reg = /^1(3\d|4[57]|5[^4]|7[01678]|8\d)\d{8}$/g;
	var inputPhone = document.getElementsByTagName('input')[0];
	if(reg.test(inputPhone.value)) {
		alert("true");
	} else {
		alert("false");
	}
}

function checkString() {
	var reg = /\b(\w+)\b\s+\1\b/g;
	var inputString = document.getElementsByTagName('input')[1];
	if(reg.test(inputString.value)) {
		alert("true");
	} else {
		alert("false");
	}
}
window.onload = function() {
	var btn = document.getElementsByTagName('button');
	EventUtil.addHandler(btn[0],'click',checkPhone);
	EventUtil.addHandler(btn[1],'click',checkString);
}