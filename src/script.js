//Tema da pagina
const color = document.querySelector(".light");
let lanterna = false;

function ligth(){
    if(lanterna===false){
        document.body.style.backgroundColor = "#5D5D5D";
        document.body.style.color = "#fff"
        lanterna  = true;
    }else{
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000"
        lanterna  = false;
    }
}

color.addEventListener("click", ligth);

//Botões de pesquisa
const buttonSO = document.getElementById("S.Ob")
const buttonVB = document.getElementById("V.Bb");

function buttons(button){
    if(button === buttonSO.id){
        window.location.href = `so.html`;
    }  
    if(button === buttonVB.id){
        window.location.href = `vb.html`;
    }
};

buttonSO.addEventListener('click', function(){
    buttons(buttonSO.id);
});
buttonVB.addEventListener('click', function(){
    buttons(buttonVB.id);
});

//Campo de pesquisa
const input = document.querySelector("#input");
const button = document.querySelector("#button");

function handleClick(){
    const SO = ["apache", "dns"] 
    const VB = ["gcc", "c++", "devtolss"];
    const pesquisa = input.value.toLowerCase()
  
   if(SO.includes(pesquisa)){
    window.location.href = `so.html#${pesquisa}`;
   }else if(VB.includes(pesquisa)){
    window.location.href = `vb.html#${pesquisa}`;
   }else{
    const results = document.querySelector(".results");
    results.style.display = "flex";
   }
}  

button.addEventListener("click", handleClick);


