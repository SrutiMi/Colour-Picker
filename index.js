const button=document.querySelector('.js-click');
button.addEventListener('click',()=>{
  //To change the background colour
   document.body.style.backgroundColor=randomColour();
  document.querySelector('.js-text').innerHTML=randomColour();
});

function randomColour(){
   const r= Math.floor(Math.random()*256);//To generate the numbers between 0 and 255
   const g= Math.floor(Math.random()*256);
   const b= Math.floor(Math.random()*256);
   const rgb= `rgb(${r},${g},${b})`;
   return rgb;
}