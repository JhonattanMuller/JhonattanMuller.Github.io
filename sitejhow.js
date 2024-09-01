function selectTab(tabId) {
    var i, tabcontent, navbtns;

    // Esconde todas as abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões
    navbtns = document.getElementsByClassName("nav-btn");
    for (i = 0; i < navbtns.length; i++) {
        navbtns[i].classList.remove("active");
    }

    // Exibe a aba atual e adiciona a classe "active" ao botão correspondente
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}
