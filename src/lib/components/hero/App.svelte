<script>
  import { onMount } from 'svelte';
  import BackgroundParticles from './BackgroundParticles.svelte';
  
  let countdown = { days: 66, hours: 21, minutes: 17 };

  function updateCountdown() {
    const endDate = new Date('2025-04-16').getTime();
    const now = new Date().getTime();
    const timeLeft = Math.max(0, endDate - now);

    if (timeLeft > 0) {
      countdown = {
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      };
    }
  }

  onMount(() => {
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  });
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&family=Rubik+Glitch&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <BackgroundParticles />
  <nav>
    <div class="left-nav">
      <a href="#">Home</a>
      <a href="#">Tracks</a>
      <a href="#">Organizers</a>
      <a href="#">Prizes</a>
    </div>
    
    <img src="/logo_trans.png" alt="IEEE RAS Logo" class="logo">
    
    <div class="right-nav">
      <a href="#">Timeline</a>
      <a href="#">Sponsors</a>
      <a href="#">FAQ</a>
      <a href="#">Contact</a>
    </div>
  </nav>

  <div class="content">
    <h1 style="font-weight: 200;">Presents</h1>
    <img src="/hackathon_logo_trans.png" alt="Hackathon Logo" class="hackathon-logo">
    <h1 style="font-weight: 200;">Register Now!!!</h1>
    <div class="countdown">
      {countdown.days}d  :  {countdown.hours}h  :  {countdown.minutes}m
    </div>
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    background-image: 
        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px),
        radial-gradient(circle at bottom right, rgba(255,0,255,0.3) 0%, transparent 50%),
        radial-gradient(circle at top left, rgba(71, 5, 176, 0.3) 0%, transparent 50%);  /* Added indigo glow */
    background-size: 50px 50px, 50px 50px, 100% 100%, 100% 100%;  /* Size for all backgrounds */
    background-color: #000000;
    background-position: 0 0, 0 0, 0 0, 0 0;  /* Position for all backgrounds */
    background-repeat: repeat, repeat, no-repeat, no-repeat;  /* Grid repeats, but glows don't */
    position: relative;  /* Add this line */
}

  :global(body) {
      margin: 0;
      padding: 0;
      color: white;
      font-family: 'Rubik', sans-serif;
      overflow: hidden;
  }

  nav {
    display: flex;
    align-items: center;
    padding: 0.5rem;  /* Reduced padding */
    width: 100%;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    justify-content: center;  /* Center everything */
  }

  .left-nav {
    display: flex;
    gap: 4rem;  /* Increased gap between nav items */
    align-items: center;
    color: #ffffff;
    padding-right: 4rem; 
    text-decoration: none; /* Small padding before logo */
  }

  .right-nav {
    display: flex;
    gap: 4rem;  /* Increased gap between nav items */
    align-items: center;
    padding-left: 4rem; 
    text-decoration: none; /* Small padding after logo */
  }

  .left-nav a, .right-nav a {
    color: white;
    text-decoration: none;
    font-family: 'Rubik', sans-serif;
    font-size: 1.2rem;
}

  .logo {
    height: 70px;
    margin: 0 0.5rem;  /* Reduced margin around logo */
  }

  .hackathon-logo {
    max-width: 350px;  /* Reduced from 400px */
    animation: glitch 4s infinite;

}

h1 {
    font-family: 'Rubik Glitch', cursive;
    font-size: 2.3rem;   /* Reduced from 2.5rem */
    margin: 0;
    padding: 0;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    justify-content: flex-start;  /* Changed from center to flex-start */
    min-height: calc(100vh - 80px);
    text-align: center;
    gap: 1rem;
    padding-top: 2%;  /* Add padding from the top to position the content higher */
}

  .countdown {
    font-family: 'Rubik Glitch', cursive;
    font-size: 5.5rem;
    color: #ffffff;
    padding-top: 2rem;  /* Add padding from the top */  
    font-weight: 200;
  }

  @keyframes glitch {
    0% {
        filter: none;
    }
    92% {
        filter: none;
    }   
    92.5% {
        filter: invert(0.1) hue-rotate(180deg);
        transform: translate(2px, 1px);
    }
    93% {
        filter: none;
        transform: none;
    }
    93.5% {
        filter: saturate(200%) brightness(150%);
        transform: translate(-2px, -1px);
    }
    94% {
        filter: none;
        transform: none;
    }
    94.5% {
        filter: hue-rotate(-90deg) contrast(150%);
        transform: translate(1px, -1px);
    }
    95% {
        filter: none;
        transform: none;
    }
    95.5% {
        filter: brightness(120%) contrast(150%);
        transform: translate(-1px, 1px) scale(1.01);
    }
    96% {
        filter: none;
        transform: none;
    }
}
</style>