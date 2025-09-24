var h1=document.querySelector('h1')
var crsr=document.querySelector('#crsr')


document.addEventListener('mousemove',function(dets){

   crsr.style.left=dets.x + 'px'
   crsr.style.top=dets.y + 'px'
 

 
 

})

h1.addEventListener('mouseenter',function(){

     crsr.style.scale='4'
})

h1.addEventListener('mouseleave',function(){

     crsr.style.scale='1'
})