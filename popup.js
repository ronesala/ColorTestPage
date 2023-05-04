function ClosePopUp(){
	document.querySelector(".container").style.display="none";
}
setTimeout(ClosePopUp,12000) //pēc cik sekundēm aizvērsies

window.addEventListener("load" , function(){
    setTimeout(
        function open(event){
            document.querySelector(".container").style.display = "block";
        },
    )
});