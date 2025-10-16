// javascript.js
// Alterna entre tema claro/oscuro y deja evidencia en la consola.
(function(){
  const btn = document.getElementById('toggleTema');
  const root = document.documentElement;

  function setTema(modo){
    if(modo === 'claro'){ root.classList.add('claro'); }
    else{ root.classList.remove('claro'); }
    localStorage.setItem('tema', modo);
  }

  // Estado inicial
  const saved = localStorage.getItem('tema') || 'oscuro';
  setTema(saved);

  btn?.addEventListener('click', () => {
    const actual = root.classList.contains('claro') ? 'claro' : 'oscuro';
    setTema(actual === 'claro' ? 'oscuro' : 'claro');
  });

  console.log('Práctica Git lista. ¡Haz tus commits por cambio!');
})();
