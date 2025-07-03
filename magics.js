fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
  .then(res => res.json())
  .then(data => {
    const cards = data.data
    .filter(c => c.type && c.type.includes("Spell Card"))
    //.slice(0,10);

    const ul = document.getElementById('card-list');
    //ul.innerHTML = '';

    cards.forEach(card => {
      const li = document.createElement('li');
      li.className = 'splide__slide';
      li.innerHTML = `
        <img loading = "lazy" src="${card.card_images[0].image_url}" alt="${card.name}">
        <h2>${card.name}</h2>
      `;
      ul.appendChild(li);
    });

    new Splide('#image-carousel', {
      type: 'loop',
      perPage: 3,
      autoplay: false,
      pagination: false,
      interval: 3000,
      pauseOnHover: true,
    }).mount();
  })
  .catch(err => {
    console.error("Erro ao carregar cartas:", err);
  });
