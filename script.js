document.addEventListener("DOMContentLoaded",

function(e){

    let NameChange = document.querySelector("#NameChange")
    let Word= document.querySelector("#word")
    let NameFiled= document.querySelector("#NameFiled")
    let NameInput=document.querySelector("#NameInput")
    let NameOk=document.querySelector("#NameOk")

    NameChange.addEventListener("click",
    function(e){
        NameFiled.style.display="block"
        NameChange.style.display="none"
    })

    NameOk.addEventListener("click",
    function(e){
        Word.textContent=NameInput.value
        NameFiled.style.display="none"
        NameChange.style.display="inline"

    })

}














)