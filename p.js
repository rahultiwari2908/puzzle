document.count=0;
document.points=0;
document.name='A';
document.c='';
function startPuzzle()   
{ 
document.name=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 5);
document.points=Math.floor(Math.random()*1000);
checkCount();

}

function nextMove (square){
startPuzzle();
if(document.c!=''){
alert("Reset The Puzzle ");}
else{

square.innerText=document.name+" "
+document.points;
document.c=square.innerText;}
document.count=document.count+1;

}

function checkCount()
{   

	if(document.count==1){
		alert("One Click Allowed At A Time");
		}
	
}
/*
function setTable(number)   {
document.getElementById("s"+number).innerText=document.name;

}
	
function resetGame(number)
{
    document.getElementById("p"+number).innerText=" ";
nextMove();
}
*/
