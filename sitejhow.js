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

    // Muda o título da aba no navegador conforme a seção
    var pageTitle, pageURL;
    switch (tabId) {
        case 'quem-sou':
            pageTitle = 'Quem sou?';
            pageURL = '/quem-sou';
            break;
        case 'formacao':
            pageTitle = 'Formação';
            pageURL = '/formacao';
            break;
        case 'portfolio':
            pageTitle = 'Portfólio';
            pageURL = '/portfolio';
            break;
        case 'contato':
            pageTitle = 'Contato';
            pageURL = '/contato';
            break;
        default:
            pageTitle = 'JhonattanMuller';
            pageURL = '/';
    }
    document.title = pageTitle;

    // Atualiza o URL na barra de endereços sem recarregar a página
    history.pushState(null, pageTitle, pageURL);
}
