/* 
estudando com rocketseat

var xhr = new XMLHttpRequest();

var users = xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send(null);

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
       console.log(JSON.parse(xhr.responseText));
    }
}

//     https://api.github.com/users/diego3g

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
      // console.log(response);
       //console.log(response.data);

       for(dt of response.data){
            console.log(dt.name);
       }
   })
   .catch(function(error){
       console.warn(error);
   });
