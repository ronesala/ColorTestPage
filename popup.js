

function ClosePopUp(){
	document.querySelector(".container").style.display="none";
}
setTimeout(ClosePopUp,3000)

window.addEventListener("load" , function(){
    setTimeout(
        function open(event){
            document.querySelector(".container").style.display = "block";
        },
    )
});