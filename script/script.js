$(document).ready(function(){
    var modal = document.getElementById("tvesModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];
    var nou = document.getElementsByClassName("nou")[0];
    var nou1 = document.getElementsByClassName("nou")[1];
    var login = document.getElementsByClassName("login")[0];
    var login1 = document.getElementsByClassName("login")[1];
    var nou2 = document.getElementsByClassName("nou")[2];
    
    $("div[id=registre]").click(function(){
        modal.style.display = "block";
        nou.style.display = "block";
        login.style.display = "none";
        nou1.style.display = "block";
        login1.style.display = "none";
        nou2.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    });
    
    $("div[id=acces]").click(function(){
        modal.style.display = "block";
        nou.style.display = "none";
        login.style.display = "block";
        nou1.style.display = "none";
        login1.style.display = "block";
        nou2.style.display = "none";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    });
    
    span.onclick = function() {
        
        console.log("clico");
        modal.style.display = "none";
        
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
});

