console.log("More about javascript event")

let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);

function func1(e){
    console.log('thanks',e);
    e.preventDefault();
}
 
function func2(e){
    console.log('this is double click event',e);
    e.preventDefault();
}

document.querySelector('.container').addEventListener('mousemove',function(){
      console.log("you triggered mouse move event");
});


