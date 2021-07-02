// Show menu
function showMenu() {
  addAnimation(document.getElementById('nav-menu-side'), 'slideInRight', true);
}
// Hidden menu
function hiddenMenu() {
  addAnimation(document.getElementById('nav-menu-side'), 'slideOutRight', true, ['hidden']);
}

// Go blog
document.querySelectorAll('.go-blog').forEach(function(elem) {
  elem.addEventListener('click', function() {
    window.open('https://blog.tovdata.com/', '_blank');
  });
});

// Temporary
document.querySelectorAll('.go-contact').forEach(function(elem) {
  elem.addEventListener('click', function() {
    window.open('https://blog.tovdata.com/about/', '_blank');
  });
});