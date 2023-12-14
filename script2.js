
let records = JSON.parse(localStorage.getItem('lista')) || [];

//cria o local
let listas = []
function cadastrar() {
   // Acessando elementos
   const email = document.getElementById("email").value;
   const senha = document.getElementById("password").value;
   if (verificarCadastro(email) === false) {
      console.log(verificarCadastro(email));
      //adiciona
      listas.push(email);
      listas.push(senha)
      records.push(email)
      records.push(senha)
      localStorage.setItem('lista', JSON.stringify(records)); // Salvar as tarefas no localStorage
      alert(localStorage.getItem('lista'))
      //busca=records.find()
      //alert(listas)
      //alert(localStorage.getItem('lista'))
   } else {
      login();
   }

}
function verificarCadastro(email) {
   let flag = false;
   if (records) {
     for(i in records){
       if (records[i]===email) {
          flag=true;
          break;
       }
     }
   } else {
      alert("Tem nadaaa")
   }
   return flag;
}
function login(){

   window.location.href='index2.html';
}

const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});



/**
 * loginnnn Funcionando
 * function login(email) {
   let flag = false;
   for (i in listas) {
      if (listas[i] === email) {
         flag = true;
         break;

      }
   }
   return flag;
}
 * 
 */
// function login() {
//    // Simular a verificação de credenciais (substitua isso com uma chamada ao servidor em um ambiente real)
//    if (username === 'usuario' && password === 'senha') {
//        // Credenciais corretas
//        document.getElementById('loginResult').textContent = 'Login successful!';
//    } else {
//        // Credenciais incorretas
//        document.getElementById('loginResult').textContent = 'Login failed. Please check your credentials.';
//        // Obter valores do formulário
//    var username = document.getElementById('username').value;
//    var password = document.getElementById('password').value;

//    }
// }

/*localStorage.clear('lista')
    
// Declarando um vetor
let frutas = ["maçã", "banana", "laranja"];
frutas.push("pera")
frutas.pop() 
*/





























// function addTask() {
//     const taskInput = document.getElementById("task");
//     const taskText = taskInput.value;

//     if (taskText === "") return; // 

//     tasks.push(taskText); // adicionando
//     saveTasksToLocalStorage(); // Salvar no localStorage
//     updateTaskList(); // Atualizar 
//     taskInput.value = ""; // Limpar entrada
// }

// function saveTasksToLocalStorage() {
//     localStorage.setItem('lista', JSON.stringify(tasks)); // Salvar as tarefas no localStorage
// }

// function updateTaskList() {
//     const taskList = document.getElementById("taskList");
//     taskList.innerHTML = ""; // Limpe a lista antes de atualizar

//     tasks.forEach((task, index) => {
//         const taskItem = document.createElement("li");
//         taskItem.textContent = task + ` [${index}]`;
//         taskList.appendChild(taskItem);
//     });
// }
// window.addEventListener('load', () => {
//     updateTaskList();
// });