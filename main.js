
var listElement = document.querySelector('#app ul');
var  listUsers;

/*  estudando com rocketseat

var xhr = new XMLHttpRequest();

var users = xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send(null);

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
       console.log(JSON.parse(xhr.responseText));
    }
}



*/
/*
var minhaPromise = function(){
return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
                if(xhr.status === 200 ){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
        }
    }

});

}
*/
axios.get('https://jsonplaceholder.typicode.com/users')
   .then(function(response){
     console.log(response.data);

     var tam = response.data.length;

        for(var i = 0; i < tam; i++){
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(response.data[i].name);
    
            todoElement.appendChild(todoText);
            listElement.appendChild(todoElement);
        }

   
   })
   .catch(function(error){
       console.warn(error);
   });


   


   function saveToStorage(lista){
        localStorage.setItem('lista', lista);
   }