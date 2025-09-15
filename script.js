//your JS code here. If required.
let element=document.getElementById("level");
int result=1;
while(element.tagName!=='Html'){
	element=element.parentElement;
	result++;
}

alert(`The level of the element is: ${result}`)