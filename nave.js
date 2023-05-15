let btnopen= document.getElementById('ope');
let btnclose= document.getElementById('clo');
let container= document.getElementById('container');


btnopen.onclick = function(){
container.classList.remove('hide');
}



btnclose.onclick = function(){
    container.classList.add('hide');
    }
    