const get = document.querySelector('#get');
const list = document.querySelector('#dis');
function calculate(){
    if(get.value === ''){
        document.querySelector('#play').innerHTML='please enter a task';
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${get.value}`))
        list.append(li);
        get.value='';
        document.querySelector('#play').innerHTML="";   
    }
}

