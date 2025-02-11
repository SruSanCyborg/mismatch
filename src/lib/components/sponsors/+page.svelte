<script>
    export let cards = [
        {
        title: "Devfolio",
        description: "Devfolio is a platform for hackathons that allows users to participate, organize, and submit projects",
        imageUrl: "/src/lib/components/sponsors/Devfoliologo.png"
      },
      {
        title: "ETHIndia",
        description: "ETHIndia is a movement with the goal of inspiring and fostering a community of builders promoting technological advancements for Ethereum.",
        imageUrl: "/src/lib/components/sponsors/Ethindia.png"
      },
      {
        title: "Polygon",
        description: "Polygon (MATIC) is a cryptocurrency and technology platform that aims to improve the Ethereum network's scalability and functionality",
        imageUrl: "/src/lib/components/sponsors/polygon.png"
      },
      {
        title: "Blockflow",
        description: "Blockflow Labs is a company that provides a cloud-based data management tool for Web3 applications.",
        imageUrl: "/src/lib/components/sponsors/blockflow.png"
      }
    ];
</script>

<main>
  <span class="glitch" data-text="Sponsors">Sponsors</span>
  <br>
  <div class="cards-container">
    {#each cards as card}
      <div class="card-wrapper">
        <div class="card">
          <div class="card-front" style="background-image: url({card.imageUrl})"></div>
          <div class="card-back">
            <div class="info">
              <h1 class="title">{card.title}</h1>
              <p class="description">{card.description}</p>
            </div>
          </div>
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
    perspective: 1000px;
  }

  .card-wrapper {
    width: 250px;
    height: 250px;
    flex-shrink: 0;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 0 10px #9D4EDD, 0 0 40px #9D4EDD;
    border: 2px solid rgba(255,0,255);
    border-radius: 16px;
  }

  .card-wrapper:hover .card {
    transform: rotateY(180deg);
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
    overflow: hidden;
  }

  .card-front {
    background-size: cover;
    background-position: center;
    background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 0, 255, 0.2));
    backdrop-filter: blur(10px);
  }

  .card-back {
    transform: rotateY(180deg);
    background: #ffffff;
  }

  .info {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    margin: 0;
    padding: 10px;
    font-size: 20px;
    line-height: 1;
    color: #000;
    text-align: center;
    font-weight: bold;
  }

  .description {
    margin: 0;
    padding: 0 10px 10px;
    font-size: 14px;
    line-height: 1.3;
    text-align: center;
    color: #333;
  }

  @media (max-width: 1100px) {
    .cards-container {
      flex-wrap: wrap;
    }
    .card-wrapper {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 768px) {
    .card-wrapper {
      width: 250px;
    }
  }
</style>