<!-- BackgroundParticles.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';
  let particles = [];
  let intervalId;

  function createParticles() {
    particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.1 + 0.5,
      opacity: Math.random() * 0.5 + 0.3
    }));
  }

  function animateParticles() {
    particles = particles.map(particle => ({
      ...particle,
      y: particle.y - particle.speed,
      ...(particle.y < 0 ? {
        y: 100,
        x: Math.random() * 100
      } : {})
    }));
  }

  onMount(() => {
    createParticles();
    intervalId = setInterval(animateParticles, 50);
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<div class="particles-container">
  {#each particles as particle (particle.id)}
    <div
      class="particle"
      style="left: {particle.x}%; top: {particle.y}%; width: {particle.size}px; height: {particle.size}px; opacity: {particle.opacity};"
    />
  {/each}
</div>

<style>
  .particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .particle {
    position: absolute;
    background: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.05s linear;
  }
</style>