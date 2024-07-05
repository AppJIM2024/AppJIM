document.getElementById('toggleBtn').addEventListener('click', function() {
    // Alternar a classe 'collapsed' na barra lateral
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('main').classList.toggle('collapsed');
});