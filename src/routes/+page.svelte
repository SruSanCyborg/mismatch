<script lang="ts">
  import Navbar from "$lib/components/navbar/+page.svelte";
  import Hero from "$lib/components/hero/+page.svelte";
  import AboutUs from "$lib/components/aboutUs/+page.svelte";
  import Tracks from "$lib/components/tracks/+page.svelte";
  import TimeLine from "$lib/components/timeline/+page.svelte";
  import Prize from "$lib/components/prize_pool/+page.svelte";
  import Sponsors from "$lib/components/sponsors/+page.svelte";
  import Organizers from "$lib/components/organizers/+page.svelte";
  import Faq from "$lib/components/faq/+page.svelte";
  import Contact from "$lib/components/contactUs/+page.svelte";
  import Footer from "$lib/components/footer/+page.svelte";
</script>

<style>
  @reference "tailwindcss/theme";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
 
<div class="m-10">
  <Navbar />
  <Hero />
  <AboutUs />
  <Tracks />
  <TimeLine />
  <Prize />
  <Sponsors />
  <Organizers />
  <Faq />
  <Contact />
  <Footer />
</div>