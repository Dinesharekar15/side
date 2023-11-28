var nav=document.querySelector(".nav");

const toggalbtn=document.querySelector(".toggel-btn");
const arrow=document.querySelector(".arrow");

toggalbtn.addEventListener('click',function(){
    
    console.log(nav.classList);
    if(nav.classList.contains('add')){
        nav.classList.remove('add');

    }
    else{
        nav.classList.add('add');
    }
})
arrow.addEventListener('click',function(){
    
   nav.classList.remove('add')
})
