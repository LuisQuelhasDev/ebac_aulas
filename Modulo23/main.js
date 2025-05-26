document.addEventListener("DOMContentLoaded", function(){
    const endpoint = "https://api.github.com/users/LuisQuelhasDev"
    const avatar = document.getElementById("avatar");
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const rep = document.getElementById("rep");
    const seguidores = document.getElementById("followers");
    const seguindo = document.getElementById("following");
    const link= document.getElementById("link");

    fetch(endpoint).then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        rep.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
    .catch(function(erro){
        alert("Algumas informações não foram cadastradas!")
    })
})