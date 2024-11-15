document.getElementById('trianglebtn').addEventListener('click',tringlecal);
function tringlecal(){
let inputfieldb=document.getElementById('tringle-fieldb');
let inputfieldh=document.getElementById('triangle-fieldh');
let fieldbvalue=inputfieldb.value;
let fieldhvalue=inputfieldh.value;
let result=fieldbvalue*fieldhvalue*0.5;
let ans=document.getElementById('answer');
  ans.innerText="area of triangle: "+result+" sqcm"
   inputfieldb.value='';
   inputfieldh.value='';
}
document.getElementById('ranctanglebtn').addEventListener('click',ractanglecal);
function ractanglecal(){
let inputfieldb=document.getElementById('ranctanglel');
let inputfieldh=document.getElementById('ranctanglew');
let fieldbvalue=inputfieldb.value;
let fieldhvalue=inputfieldh.value;
let result=fieldbvalue*fieldhvalue;
let ans=document.getElementById('answer');
  ans.innerText="area of ranctangle: "+result+" sqcm"
   inputfieldb.value='';
   inputfieldh.value='';
}
document.getElementById('parallalbtn').addEventListener('click',parallalcal);
function parallalcal(){
let inputfieldb=document.getElementById('parallalb');
let inputfieldh=document.getElementById('parallalh');
let fieldbvalue=inputfieldb.value;
let fieldhvalue=inputfieldh.value;
let result=fieldbvalue*fieldhvalue;
let ans=document.getElementById('answer');
  ans.innerText="area of parallalogram: "+result+" sqcm"
   inputfieldb.value='';
   inputfieldh.value='';
}
document.getElementById('rombosbtn').addEventListener('click',romboscal);
function romboscal(){
let inputfieldb=document.getElementById('rombosb');
let inputfieldh=document.getElementById('rombosa');
let fieldbvalue=inputfieldb.value;
let fieldhvalue=inputfieldh.value;
let result=fieldbvalue*fieldhvalue*0.5;
let ans=document.getElementById('answer');
  ans.innerText="area of rombos: "+result+" sqcm"
   inputfieldb.value='';
   inputfieldh.value='';
}
document.getElementById('pentagonbtn').addEventListener('click',pentagoncal);
function pentagoncal(){
let inputfieldb=document.getElementById('pentagonb');
let inputfieldh=document.getElementById('pentagonp');
let fieldbvalue=inputfieldb.value;
let fieldhvalue=inputfieldh.value;
let result=fieldbvalue*fieldhvalue*0.5;
let ans=document.getElementById('answer');
  ans.innerText="area of pentagon: "+result+" sqcm"
   inputfieldb.value='';
   inputfieldh.value='';
}
document.getElementById('ellipsebtn').addEventListener('click',ellipsecal);
function ellipsecal(){
let inputfieldb=document.getElementById('ellipseb');
let inputfieldh=document.getElementById('ellipsea');
let fieldbvalue=inputfieldb.value;
let fieldhvalue=inputfieldh.value;
let result=fieldbvalue*fieldhvalue*3.1416;
let ans=document.getElementById('answer');
  ans.innerText="area of ellipse: "+result+" sqcm"
   inputfieldb.value='';
   inputfieldh.value='';
}