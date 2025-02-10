<script>
    export let cards = [
      {
        title: "Card One",
        description: "Description for card one goes here. Hover to reveal more information.",
        imageUrl: "https://source.unsplash.com/collection/905011/1000x1000"
      },
      {
        title: "Card Two", 
        description: "Description for card two goes here. Hover to reveal more information.",
        imageUrl: "https://source.unsplash.com/collection/905011/1000x1000"
      },
      {
        title: "Card Three",
        description: "Description for card three goes here. Hover to reveal more information.", 
        imageUrl: "https://source.unsplash.com/collection/905011/1000x1000"
      },
        {
        title: "Card Three",
        description: "Description for card three goes here. Hover to reveal more information.", 
        imageUrl: "https://source.unsplash.com/collection/905011/1000x1000"
      }
    ];
  </script>
  
  <main>
    <span class="glitch" data-text="Sponsors">Sponsors</span>
    <br>
    <div class="cards-container">
      {#each cards as card}
        <div class="card" style="background-image: url({card.imageUrl})">
          <div class="info">
            <h1 class="title">{card.title}</h1>
            <p class="description">{card.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    :global(*) {
      box-sizing: border-box;
      position: relative;
      transition: all 0.3s ease;
    }
  
    :global(body) {
      font-family: 'Open Sans', Verdana, sans-serif;
      color: rgba(0, 0, 0, 0.87);
      background: #190233;
      margin: 0;
      line-height: 1.45;
    }
  
    .glitch {
      color: white;
      font-size: 60px;
      text-align: center;
      text-transform: uppercase;
      margin: 40px 0;
      display: block;
      position: relative;
    }
  
    .glitch::before,
    .glitch::after {
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      background: #190233;
      overflow: hidden;
      top: 0;
    }
  
    .glitch::before {
      left: 3px;
      text-shadow: -2px 0 red;
      animation: glitch-1 2s linear infinite reverse;
    }
  
    .glitch::after {
      left: -3px;
      text-shadow: -2px 0 blue;
      animation: glitch-2 2s linear infinite reverse;
    }
  
    @keyframes glitch-1 {
      0% { clip-path: inset(20% 0 30% 0); }
      20% { clip-path: inset(60% 0 10% 0); }
      40% { clip-path: inset(40% 0 40% 0); }
      60% { clip-path: inset(80% 0 5% 0); }
      80% { clip-path: inset(10% 0 70% 0); }
      100% { clip-path: inset(30% 0 20% 0); }
    }
  
    @keyframes glitch-2 {
      0% { clip-path: inset(15% 0 35% 0); }
      20% { clip-path: inset(55% 0 15% 0); }
      40% { clip-path: inset(45% 0 35% 0); }
      60% { clip-path: inset(75% 0 10% 0); }
      80% { clip-path: inset(15% 0 65% 0); }
      100% { clip-path: inset(35% 0 15% 0); }
    }
  
    .cards-container {
      display: flex;
      gap: 20px;
      padding: 0 64px 64px;
      flex-wrap: wrap;
      justify-content: center;
    }
  
    .card {
      border-radius: 16px;
      width: 300px;
      overflow: hidden;
      background-size: cover;
      flex-shrink: 0;
      box-shadow: 0 0 10px #9D4EDD, 0 0 40px #9D4EDD;
      background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 0, 255, 0.2));
      border: 2px solid rgba(255,0,255);
      backdrop-filter: blur(10px);
    }
  
    .info {
      position: relative;
      width: 100%;
      height: 400px;
      background-color: rgba(255, 255, 255, 0.95);
      transform: translateY(100%) translateY(-88px) translateZ(0);
      transition: transform 0.5s ease-out;
    }
  
    .info:before {
      z-index: -1;
      display: block;
      position: absolute;
      content: ' ';
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-image: inherit;
      filter: blur(10px);
      background-size: cover;
      opacity: 0.25;
      transform: translateY(-100%) translateY(88px) translateZ(0);
      transition: transform 0.5s ease-out;
    }
  
    .card:hover .info,
    .card:hover .info:before {
      transform: translateY(0) translateZ(0);
    }
  
    .title {
      margin: 0;
      padding: 24px;
      font-size: 28px;
      line-height: 1;
      color: rgba(0, 0, 0, 0.87);
    }
  
    .description {
      margin: 0;
      padding: 0 24px 24px;
      font-size: 16px;
      line-height: 1.5;
    }
  
    @media (max-width: 1400px) {
      .cards-container { gap: 15px; }
      .card {
        width: 250px;
        min-height: 350px;
      }
      .info { height: 350px; }
    }
  
    @media (max-width: 1100px) {
      .cards-container { flex-wrap: wrap; }
      .card { width: calc(50% - 10px); }
    }
  
    @media (max-width: 768px) {
      .card { width: 100%; }
    }
  </style>