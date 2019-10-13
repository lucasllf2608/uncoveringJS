var table = document.querySelector('#conteudo');



function render(){



var row =   document.createElement('tr');
var id = document.createElement('td');
var nome = document.createElement('td');
var email = document.createElement('td');

var idString = document.createTextNode("1");
var nomeString = document.createTextNode("lucas");
var emailString = document.createTextNode("lucas@email.com");

id.appendChild(idString);
nome.appendChild(nomeString);
email.appendChild(emailString);

row.appendChild(id);
row.appendChild(nome);
row.appendChild(email);

table.appendChild(row);

}

render();