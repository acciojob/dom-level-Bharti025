//your JS code here. If required.
let element=document.getElementById("level");
let result=1;
while(element.tagName!=='HTML'){
	element=element.parentElement;
	result++;
}

alert(`The level of the element is: ${result}`)