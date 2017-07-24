var index = 1;
document.count = 0;
var sum = 0;

function assign_value() 
{
   
	document.count=parseInt(document.count)+parseInt(0);
	if (document.count <10) 
     {
    	random_no = Math.floor(Math.random()*1000)%100;
      document.b=random_no;
  		name = random_name();
  
  			addField();
       
  		}
    else  
     {
	alert("reset The Game");
     }	
 calculate();
}

function random_name() 
{
	var name = Math.random().toString(36).replace(/[^a-z]+/g, '').toUpperCase();
		return name;
}

function addField(){
	document.count=parseInt(document.count)+parseInt(1);
    var table=document.getElementById("myTable");
    var row=table.insertRow(table.rows.length);
    var cell1=row.insertCell(0);
    var t1=document.createElement("input");
    t1.setAttribute("type", "text");
    t1.setAttribute("value",document.count);
    cell1.appendChild(t1);
    var cell2=row.insertCell(1);
    var t2=document.createElement("input");
    t2.setAttribute("type", "text");
    t2.setAttribute("value", name);
    cell2.appendChild(t2);
    var cell3=row.insertCell(2);
    var t3=document.createElement("input");
    t3.setAttribute("type", "text");
    t3.setAttribute("value", random_no);
    t3.setAttribute("id", "democlass"+document.count);
    cell3.appendChild(t3);
    index++;
  
}

function resetGame()
{
  $("#myTable").empty();
   $("#demo").empty();

document.count=0;
} 

function calculate(number){
var a=new Array(10);
var b=0;
for(var i=0;i<10;i++){
a[i]=document.getElementById("democlass"+number).innerText;
console.log(a);}
for(var i=0;i<10;i++){
  a[i]=a[i]+a[i+1];
 document.getElementById("demo").innerText=a[i];}
}



/*
function squareValue(square){
  if(square.innerText=='undefined'){
  square.innerText=name;
}  
}
*/

