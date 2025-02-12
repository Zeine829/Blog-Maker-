//Pegando os valores das divs lat e pr

let element;
const layout = document.getElementById('layout');


const central = document.getElementById('central');

viewoption();

function viewoption(){
  const lateral = document.getElementById('lateral').innerHTML = `
  
    <h3>Area of text</h3>
  
   <input type = "text" id = "tagscript" placeholder = "Insert your link">
  
  <h3>Elementos</h3>
  
  <button onclick = "addelement('p')" class = "bt">p</button>
  <br>
  <br>
  <button onclick = "addelement('h1')" class = "bt">h1</button>
  <br>
  <br>
  <button onclick = "addelement('header')" class = "bt">header</button>
  <br>
  <br>
  <button onclick = "addelement('b')" class = "bt">b</button>
  <br>
  <br>
  <button onclick"" class = "bt">Link</button>
  <br>
  <br>
  <button onclick = "addelement('a')">Add link</button>
  <br>
  <br>
  <button onclick = "showFileInput('img')">IMG</button>
  <br>
  <br>
    <button onclick = "showFileInput('video')">Video</button>
    
    <input type="file" id="imgUpload" accept="image/*" style="display:none" onchange="handleFileSelect('img')">
    <input type="file" id="videoUpload" accept="video/*" style="display:none" onchange="handleFileSelect('video')">
    <br>
  <h3>Style</h3>
  <b>padding</b>
  <br>
  <input type = "range" id = "padding">
  <br>
  <br>
  <b>Color</b>
  <br>
    <input type = "color" id = "color">
    <br><br>
    <b>header-color</b>
    <br>
    <input type = "color" id = "tgcolor">
    
           <br><br>
           
    <h3>Open file zip</h3>
       <input type="file" id="fileInput" accept=".html"  />
       <br><br>
       
       
  `;
  
  
}
function addname(){
  layout.innerHTML = ``;
}

function addelement(tag){
  const bgcolor = document.getElementById('tgcolor');
  const tagname = document.getElementById('color').value;
  
 const tagcolor = document.getElementById('color').value;
  
  const tagscript = document.getElementById('tagscript').value;
  
  if (tag === 'p') {
    
   
   
    element = document.createElement('p');
    element.innerText = "text";
    element.style.padding = "1px";
    element.style.color = tagcolor;
    element.contentEditable = true;
    
  }
  if (tag === 'h1') {
    element = document.createElement('h1');
    element.innerText = "TEXT";
    element.contentEditable = true;
    element.style.color = tagcolor;
  }
  if (tag === 'header') {
    element = document.createElement('header');
    element.innerText = "TEXT";
  element.contentEditable = true;
  element.style.color = tagcolor;
    element.style.backgroundColor = bgcolor;
}
if (tag === 'input') {
  element = document.createElement('input');
  element.innerText = "TEXT";
  element.contentEditable = true;
  
}


if (tag === 'b') {
  element = document.createElement('b');
  element.innerText = "TEXT";
  element.contentEditable = true;
  element.style.color = tagcolor;
}
else if (tag === 'a') {
        element = document.createElement('a');
        element.contentEditable = true;
        element.href = tagscript;
        element.innerText = "Link Exemplo";
    }


function outher(){
  
  const ab = `<a><button>${tagname}</button></a>`;
  element = document.createElement(ab);
}

  const div = document.createElement('div');
  div.appendChild(element);
  layout.appendChild(div);
}


//função para personalizar o site

function viewstyle(){
  document.getElementById('lateral').innerHTML = `<h3>body</h3>
  <h4>Text-align-center<h4>
  <button onclick = "textalign()"> text in center</button>
  <br>
  <h4>Color</h4>
  <input type = "color">`;
}

function tlpr(){

layout.innerHTML = 
`
<div class = "nw1">
<h3 id = "b">News</h3>

</div>
<br>
<br>

`;
const b = document.getElementById('b');
b.contentEditable = true;
}



//função para exportar o seu site

function exportar(){
  const b = document.getElementById('b');
  element.contentEditable = false;
  b.contentEditable = false;
  const layer = document.getElementById('layout');
  
  const project = layer.innerHTML;
  const notedite = element.contentEditable = false;
  //gerar arquivo html
 const htmlfile = `<!Doctype html>
 <html>
 <header>
 <style>
 body{
   text-align: center;
 }
 .dpl{
   width: 100%;
   height: 400px;
   boder: 1px solid #000;
   box-shadow: 0px 0px 10px #000;
   overflow-y: auto;
 }
 .nw1{
  border: 1px solid black;
  width: 100%;
  height: 50px;
  background-color: dodgerblue;
}
.central{
  border: 1px solid black;
  width: 100%;
  height: 200px;
}
 </style>
 </header>
 <body>
 <div class = "dpl">
 ${project}
 </div>
 </body>
 </html>`;
 //gerando file htm
const blob = new Blob([htmlfile],{ type : 'text/html'});
  //criar link
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'index.html';
  link.click();
  //const zip = new idzip();
  
  //gerar zip
  
}

tlpr();

//Funções para abrir o projeto 


//funções para img e video
function showFileInput(type) {
    const inputImg = document.getElementById('imgUpload');
    const inputVideo = document.getElementById('videoUpload');

    if (type === 'img') {
        inputImg.click();
    } else if (type === 'video') {
        inputVideo.click();
    }
}
 


// Função para manipular o upload de arquivo (imagem ou vídeo)
function handleFileSelect(type) {
    
   const input = type === 'img' ? document.getElementById('imgUpload') : document.getElementById('videoUpload');

    const file = input.files[0];
    
   
    const workspace = document.getElementById('layout');
    const div = document.createElement('div');

    if (type === 'img' && file) {
      
      
      
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
       
        img.alt = 'Imagem carregada';
        img.style.maxWidth = '100%';
        div.appendChild(img);
    } else if (type === 'video' && file) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.controls = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '200%'
        div.appendChild(video);
    }

    workspace.appendChild(div);
    
}
//
open();



///função de load e save

function save() {
    const workspace = document.getElementById('layout');
    const projectContent = workspace.innerHTML;
    localStorage.setItem('project', projectContent);
    
    
    alert("Projeto salvo com sucesso!");
}
// Função para carregar o projeto salvo
function loadp() {
    const savedProject = localStorage.getItem('project');
    localStorage.getItem('url');
    
    if (savedProject) {
        document.getElementById('layout').innerHTML = savedProject;
    }
}


  // Referência ao input de arquivo e à área de saída
const fileInput = document.getElementById('fileInput');
const outputDiv = document.getElementById('layout');

// Evento que dispara quando o usuário escolhe um arquivo
fileInput.addEventListener('change', function(event) {
  
    const file = event.target.files[0]; // O primeiro arquivo selecionado

    if (file && file.type === "text/html") {
        const reader = new FileReader(); // Cria um leitor de arquivos

        // Quando o arquivo for carregado, exibe o conteúdo no div
        reader.onload = function(e) {
            const content = e.target.result;

            // Limpa o conteúdo anterior e insere o conteúdo do arquivo HTML
            outputDiv.innerHTML = content;
        };

        // Lê o conteúdo do arquivo
        reader.readAsText(file);
    } else {
        alert("Por favor, selecione um arquivo HTML.");
    }

});


function imglink() {
 
 const tagscript = document.getElementById('tagscript').value;
 
  const img = document.createElement('img');
  
  img.src = tagscript;
  
   img.alt = 'Imagem carregada';
   img.style.maxWidth = '100%';
 
}

function videolink(){
  
  const tagscript = document.getElementById('tagscript').value;
  
  const video = document.createElement('video');
        video.src = 
        video.controls = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '200%'
  
}