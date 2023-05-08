function ClosePopUp(){
	document.querySelector(".container-test").style.display="none";
}
setTimeout(ClosePopUp,10000) //pēc cik sekundēm aizvērsies

window.addEventListener("load" , function(){
    setTimeout(
        function open(event){
            document.querySelector(".container-test").style.display = "block";
        },
    )
});