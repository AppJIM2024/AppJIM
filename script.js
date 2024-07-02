/*function showVhide() {
    var content,sheet
    content = document.querySelector('.main')
    sheet = document.querySelector('.sheet')
    if (content.style.display = 'block') {
        content.style.display = 'none'}
}*/
document.getElementById('toggleBtn').addEventListener('click', function() {
    // Alternar a classe 'collapsed' na barra lateral
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('main').classList.toggle('collapsed');
});