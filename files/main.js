document.addEventListener('DOMContentLoaded', function() {
  const moreInfoButton = document.getElementById('button-link-docs');
    
  moreInfoButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://kamish.pro/docs', '_self');
  });
});

  document.addEventListener('DOMContentLoaded', function() {
    const moreInfoButton = document.getElementById('button-link-invite');
    moreInfoButton.addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем стандартное поведение кнопки
      window.open('https://discord.com/oauth2/authorize?client_id=1066975258206294096');
    });
  });