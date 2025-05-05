
    let indiceAtual = 0;
    const itens = document.querySelectorAll(".carousel-item");

    function trocarNoticia(direcao) {
        itens[indiceAtual].classList.remove("active");
        indiceAtual = (indiceAtual + direcao + itens.length) % itens.length;
        itens[indiceAtual].classList.add("active");
    }

    const playerContainer = document.getElementById("player-container");

  function getCurrentHour() {
    const now = new Date();
    return now.getHours();
  }

  let lastHour = null;

  function loadProgramByTime() {
    const hour = getCurrentHour();

    if (hour === lastHour) return; // evita atualizações desnecessárias
    lastHour = hour;

    if (hour >= 8 && hour < 10) {
      playerContainer.innerHTML = `
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3O0pVgRXK60WPrRVedzRem?utm_source=generator&theme=0"
        width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    } else if (hour >= 10 && hour < 12) {
      playerContainer.innerHTML = `
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4NiCFBfKaeJ2wR4hjaFYPp?utm_source=generator"
        width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    } else if (hour >= 12 && hour < 14) {
      playerContainer.innerHTML = `
        <iframe width="100%" height="352" src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    } else if (hour >= 14 && hour < 16) {
      playerContainer.innerHTML = `
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5qs9uuYsfQYjngCW5HFRmu?utm_source=generator"
        width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    } else {
      playerContainer.innerHTML = `<p style="font-size: 18px;">Programação encerrada por hoje.</p>`;
    }
  }

  loadProgramByTime(); // Inicial
  setInterval(loadProgramByTime, 60 * 1000); // Atualiza a cada minuto
