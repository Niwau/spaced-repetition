let date = new Date;
let container = document.getElementById('container');
let textField = document.getElementById('text-field');

function line(date){
  date.onclick = ()=>{

    if (date.style.textDecoration == '') {
      date.style.textDecoration = 'line-through'}

      else date.style.textDecoration = '';
    }
}


function data(dias, data){
    date.setDate(date.getDate()+dias);
    data.innerHTML = date.toDateString(); 
    date.setDate(date.getDate()-dias);
}

function remove(item1, item2, item3, item4, item5){
    if (confirm('Tem certeza que deseja apagar ?') == true){
        container.removeChild(item1);
        container.removeChild(item2);
        container.removeChild(item3);
        container.removeChild(item4);
        container.removeChild(item5);
    }
}

function Add(){

    if(textField.value){

        let name   = document.createElement('p');
        let date1  = document.createElement('p')
        let date7  = document.createElement('p')
        let date30 = document.createElement('p')
        let button = document.createElement('button')

        container.appendChild(name);
        container.appendChild(date1);
        container.appendChild(date7);
        container.appendChild(date30);
        container.appendChild(button);

        name.innerHTML = textField.value;
        textField.value = '';

        data(1, date1);
        data(7, date7);
        data(30, date30);

        line(date1);
        line(date7);
        line(date30);

        button.innerHTML = 'Deletar';
        button.onclick = () => remove(name, date1, date7, date30, button);

        localStorage.setItem('teste', [name, date1, date7, date30, button])

        let items = localStorage.getItem('teste');

        console.log(JSON.parse(items))

    }
}
