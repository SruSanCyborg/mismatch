<!-- Cards.svelte -->
<script>
    // Props to make the component configurable
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
        title: "Card Four",
        description: "Description for card four goes here. Hover to reveal more information.",
        imageUrl: "https://source.unsplash.com/collection/905011/1000x1000"
      },
       {
        title: "Card Four",
        description: "Description for card four goes here. Hover to reveal more information.",
        imageUrl: "https://source.unsplash.com/collection/905011/1000x1000"
      },
      
    ];
  </script>
  
  
  <main>
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
  
    :global(html) {
      font-size: 16px;
    }
  
    :global(body) {
      font-family: 'Open Sans', Verdana, sans-serif;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 400;
      line-height: 1.45;
      background: #fafafa;
      margin: 0;
    }
  
    header {
      padding: 40px;
      min-height: 200px;
      text-align: center;
      color: rgba(10, 0, 0, 0.87);
      background: #fafafa;
    }
  
    header > :global(*) {
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
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
      min-height: 400px;
      box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
        0px 5px 8px 0px rgba(0, 0, 0, 0.14),
        0px 1px 14px 0px rgba(0, 0, 0, 0.12);
      overflow: hidden;
      background-size: cover;
      flex-shrink: 0;
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
    .neon-card {
      box-shadow: 0 0 20px #ff00ff,
                  0 0 40px #ff00ff;
      background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 0, 255, 0.2));
      border: 2px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
  }
  
    @media (max-width: 1400px) {
      .cards-container {
        gap: 15px;
      }
      .card {
        width: 250px;
        min-height: 350px;
      }
      .info {
        height: 350px;
      }
    }
  
    @media (max-width: 1100px) {
      .cards-container {
        flex-wrap: wrap;
      }
      .card {
        width: calc(50% - 10px);
      }
    }
  
    @media (max-width: 768px) {
      .card {
        width: 100%;
      }
    }
  </style>