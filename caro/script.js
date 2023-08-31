const x=document.getElementById('menu');
const y=document.getElementById('navbar');
const z=document.getElementById('close');
const b=document.getElementById('bag');

if(x){
    x.addEventListener('click',()=>{
        y.classList.add('active');
        b.classList.add('active');
    });
}
if(y){
    y.addEventListener('click',()=>{
        x.classList.remove('active');
    });
    if(z){
        z.addEventListener('click',()=>{
            y.classList.remove('active');
        })
    }
}