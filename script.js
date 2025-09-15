//your JS code here. If required.
let element=document.getElementById("level");
int result=1;
while(element!=html){
	parent=document.getParent(element);
	element=parent;
	result++;
}

alert(`The level of the element is: ${result}`)