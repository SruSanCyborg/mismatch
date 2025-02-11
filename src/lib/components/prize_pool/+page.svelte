<script>
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { backOut } from "svelte/easing";
    

  
    let images = {
      pacman: "https://media-hosting.imagekit.io//16403292e88b45a4/screenshot_1739109061968.png?Expires=1833717064&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VC-doSJ4U-wP~e41a~bQ6HfpY7nPvmVxzmU5M2O~I2XUCkG6-cn6S~D9On6FoNGQEPqrDaqgp6douwU9QnWc5fv54wRsbdpvcihsCf2UqEM58YJycv53tT8HySBIRsUrlpGf8oKx2vJpNUElUXt2u92HrQ5lR3ZMIgretBa07VhLxCO2hrmEFnll5qSQrOiav5~jKujQEtpaooaNmT9qt373eSzgeEUSRcReMajS9ffLVJGEKH5qRaoHrEV017r4eCMF40R3swOgoO1lWhgYChi8Jr1AMD9y5fMWadGAQ4NcYVXcizzuAmvNf9sYNjdQ-rZ7fMtHiIlOHjuWXPjfrQ__",
      ghost: "https://media-hosting.imagekit.io//5861bfc9171943fa/screenshot_1739109211837.png?Expires=1833717213&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AN2KKrL8wmrSnZ8hhNAjqoT9MsW0p3vtCnwLHAGj8iii~m134VADDmkyQUvRZg2ylwy47KsL8vzBHnuQ-aYNa4~HDq4ax2IQ7FD~0NUri2BnFuQ12kswwWBSZsI9kbHEhLTo2pRSE46pAkfxVAzoPRr2PfDkDO4neUlvTk6Xsn0mZVqKKJFhp1A8Ht29wuW8JnjQYjT9wPJJW-9QPmCTjLx5yNEqtGAEWQixlEXDeq-8Q6y1h7VDMmyOBE8C8PUmU~JniJJ~CNxQRpBtXTrxTBgGyG4oWgrVcJzACHyBg6kQQx4DJum6~ncFLvSX2k5LR8SdJ6dD0wz-rxs-7s5jMQ__",
      rupeeSymbol: "https://media-hosting.imagekit.io//9db221d3a31a479b/screenshot_1739109779972.png?Expires=1833717781&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jCVQrma1Ad679OyQnaUVP73lFWjBsLNr1RMoQqmUteGiujW5XZbmQuxn1KV0sM6nM2U6h5IG88KJC1GQiO2zYkeySAiVrWTr-3N61YKJaBTswt11zY2DKmVuhcJSZw2QrpTFW1ly4ZsdBvO4SJj0nvM4Yo5KxgKOvp-qwlKDBQ5tBMXEMy21XxwVEmXKKT1TYD68UDf21CRiReX599x02GS51Nmu-M0xfzccgsQc8GsNuQOVbA~hj6Zgc3S6joCwNCCA-MnDD3Bz5kDzA4FLM2M0-3M91xFgNDyfxLvLfguNe4mxP5BTjrFYvb7E-5vbc~ISc9~8ttRsHB9RH5Opkg__",
      prize: "https://media-hosting.imagekit.io//f7431f2c6ef64db6/Screenshot%202025-02-09%20at%205.25.09%E2%80%AFPM.png?Expires=1833710208&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kZgWq9Yb8VmQDbSoaQCsNQYgjYFVFXMBuH7kEECyU6XW-gLFlKgMKdCzWonulJXfKe9gwkqqiK4f7WPYgvoCazXiLVUfCEeIrErvaZzqAYCNS8Z~ZjPlDLdCTCKbghKKG15Prt-KBNxfK3y-fcDOCwMiDhMeOUoA0CtEdlUH6dFOPpNLxRYy0DH~SIzkblXm7Uh1sv0Cab3WsEduj453SWC~6u1cQXiBoF59Zg3QMjllHEMZvbBYF7~NIou3ANBg4ALcPxZJzjamGOnsrx8p5XEjRleGzFZsovraIzBdiRAjt3Plqk7GGY-fS8XTixypsAISVHzVyX3Os7-7SCS2gg__",
      pool: "https://media-hosting.imagekit.io//552c0e71703847f5/Screenshot%202025-02-09%20at%205.25.29%E2%80%AFPM.png?Expires=1833710224&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x84oCw0C2z9OknFXvqeuLhvSPjb6d2-CFslBw0z-2Z3ss41fEYBbJhfL72CAA3Pg-zmbIKdisJ6pbDuXozzDUlBXOuV9DoQGXkNr409a1lWlQNI-FlFn~jKTDER-BV1pmOwfdIs7dcMdxGBtKH80SYAOHfN9S-AB0QQ2B1xxDFji0T-f9xIN-TrqibAEEBy3P-DAgtpCJIETRzGY-dUIWS~Q8XTAkZDmr4051W2KEh2ynSPavUP7JtR0pol1NM0SqUSyGJlmZHAivHhLsjIN4DoUBJrk5xmqOh~ehJaynD~QxLrhLwk-xPCgKqDiHiy6NeJFhgWDb1Dfo~oKzLT-9w__",
      zero: "https://media-hosting.imagekit.io//7947a5d9fd1041ea/screenshot_1739109400999.png?Expires=1833717403&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wEenUHOsVPJgL3pKuqCdfURlf-uQ-LrEUEUzexe8lUBoiDX-KO~v3oWZu3PnyXmZI6zAsZfchIYN-26do3FQn2EgzsqnXpy2Haw-QCuQ5PSq9u2QScDxL3rPgMFTclEFVgUDxKzmvU5VWB4o~B8-z1shCksqZ9LiJ35War0yu1OF2fP2j-BIzyuTFegFEuj431U7YJn2a2Bs2PX75QQG0zo8UeNv6UgfQd-0hYmcvXf31gNO0v90D4VuZTY6xF8OK~YdD617WGfZGBYNUvyHUZ6PNnjJzF0KsRxGaIEjCKuiu7FpLZJtvoPUic17WiIxIAK011OS8LYVIayeLdVB2A__",
      one: "https://media-hosting.imagekit.io//e50b6da8d1f440da/screenshot_1739109515368.png?Expires=1833717517&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eCDm9pMZO1PWQ-o3B2QnI9wPuF~-VFjSUKNU25O~JjvgrjhnU1Tl93AvxbXQsOF8IEHP14i2btvTzBq0eYzc0h4vCaEZRY9g5PExFZ2tCjdCuGNgR24IhCVV1qRf2OSca18cfKln9u4S8McglyuRGj9IHFbdXMY~7mjGFIfw9TR5g43OY0wCyOuV1X3zF16RlbZxmlesJuej06bD~PShKongIbESmJtxERSlOCyIL4Y6NL3qlu8WYPahF7dad4B823yvTgLrsHlGBy1JUIW1AyyoUTkf-2z-q0pdeFccq0CIxXoJkOTd-YyD5OYsBDQrXllT~rHUidloz-0cm~P9Fw__"
    };
    
    let backgroundImage = "https://media-hosting.imagekit.io//b3fe6b1b28064104/Screenshot%202025-02-09%20at%207.06.58%E2%80%AFPM.png?Expires=1833716250&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wqqjI3WNYyEi7BHfu1jxaU6gFGIfk5ic4uVg4tv2qiH1jEegjgBCuy2l9ChK-s8fz0DKu41N7WDGvVsBzaP5ul8ZAsnIhcXcfspwvNSznu94Y0hZn6zjKGq8HtX2bEXw1-8pHK8QK63wAHkJnc3pM2suEdxN9vFqN3QcPjqPawaOw315HuxzP84XAyIThs8dqdxbdHjO7-WBUbf8Rt5PR7VYwfqvSIJ9CukSpkfa6G-1AW7E9lfgtRPOkbhRzo8dVnXu~jlb0br2PXcvx81NQ9Qz6eooB9phxn8vAXKIgjxmEZs095ve3kVe3sebzvkoyyG8snqQi5iKo-f8VUPUCw__";
    

    
    const count = tweened(0, {
      duration: 3000,
      easing: cubicOut
    });
  
    let animationComplete = false;
  
    onMount(() => {
      count.set(9999).then(() => {
        animationComplete = true;
      });
    });
    
    $: formattedCount = Math.round($count).toLocaleString();
    
    let scale = tweened(1, { duration: 600, easing: backOut });

$: if (animationComplete) {
  scale.set(1.5); // Grow to 1.5x size
  setTimeout(() => scale.set(1), 300); // Shrink back to normal after 600ms
}
      
  </script>
  
  <main>
    <div class="container">
      <div class="prize-section">
        <div class="title">
          <img src={images.prize} alt="Prize" class="prize-text image-hover" />
          <img src={images.pool} alt="Pool" class="pool-text image-hover" />
        </div>
        <div class="amount-section">
          <img src={images.pacman} alt="Pacman" class="pacman image-hover" />
          <div class="amount-wrapper">
            <img src={images.rupeeSymbol} alt="Rupee Symbol" class="rupee-symbol" />
            {#if !animationComplete}
            
              <div class="counter-container">
                <div class="counter">{formattedCount}</div>
                <div class="count">{formattedCount}</div>
              </div>
              
            {:else}
              <div class="digits-container">
                <img src={images.one} alt="One" class="digit big-digit image-hover" style="--scale: {$scale};" />
<img src={images.zero} alt="Zero" class="digit big-digit image-hover" style="--scale: {$scale};" />
<span class="comma">,</span>
<img src={images.zero} alt="Zero" class="digit big-digit image-hover" style="--scale: {$scale};" />
<img src={images.zero} alt="Zero" class="digit big-digit image-hover" style="--scale: {$scale};" />
<img src={images.zero} alt="Zero" class="digit big-digit image-hover" style="--scale: {$scale};" />
</div>
            {/if}
          </div>
          <img src={images.ghost} alt="Ghost" class="ghost image-hover" />
        </div>
        <div class="subtitle">TEN THOUSAND RUPEES</div>
      </div>
    </div>
  </main>
  
  <style>
    main {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #190223;
    }
  
    :global(body){
        background-color: #190223;
    }
    .container {
      background: url(https://media-hosting.imagekit.io//b3fe6b1b28064104/Screenshot%202025-02-09%20at%207.06.58%E2%80%AFPM.png?Expires=1833716250&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wqqjI3WNYyEi7BHfu1jxaU6gFGIfk5ic4uVg4tv2qiH1jEegjgBCuy2l9ChK-s8fz0DKu41N7WDGvVsBzaP5ul8ZAsnIhcXcfspwvNSznu94Y0hZn6zjKGq8HtX2bEXw1-8pHK8QK63wAHkJnc3pM2suEdxN9vFqN3QcPjqPawaOw315HuxzP84XAyIThs8dqdxbdHjO7-WBUbf8Rt5PR7VYwfqvSIJ9CukSpkfa6G-1AW7E9lfgtRPOkbhRzo8dVnXu~jlb0br2PXcvx81NQ9Qz6eooB9phxn8vAXKIgjxmEZs095ve3kVe3sebzvkoyyG8snqQi5iKo-f8VUPUCw__) no-repeat center center;
      background-size: cover;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      position: relative;
    }
  
    .prize-section {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  
    .title {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }
  
    .prize-text, .pool-text {
      height: 80px;
      object-fit: contain;
      border-radius: 5%;
    }
  
    .amount-section {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
    }
  
    .pacman {
      position: absolute;
      left: -320px;
      height: 200px;
    }
  
    .ghost {
      position: absolute;
      right: -320px;
      height: 200px;
    }
  
    .amount-wrapper {
      display: flex;
      align-items: center;
      position: relative;
    }
  
    .rupee-symbol {
      position: absolute;
      left: -100px;
      height: 100px;
    }
  
    
.counter-container {
  position: relative;
  display: inline-block;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 600px;
      height: 150px;
}


.counter {
    font-size: 16vw;
  font-weight: bold;
  font-family: Arial, sans-serif;
  position: absolute;
  left: 54%;
  transform: translateX(-50%);
  white-space: nowrap;
  color: black;
}

.count{
    font-size: 230px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: linear-gradient(
    to bottom,
    #000000 10%,
    #F6DD00 30%,
    #FFF2DA 50%,
    #FBE86F 70%,
    #F6DD00 50%,
    #6E6302 95%,
    #30230A 10%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px whitesmoke;
}


    .digits-container {
      display: flex;
      align-items: center;
      height: 150px;
      gap: 5px;
      position: relative;
    }
  
    .digit {
      height: 200px;
      width: auto;
      transform: scale(var(--scale));
      transition: transform 0.4s ease-in-out;
    }
  
    .comma {
      color: #FFD700;
      font-size: 200px;
      font-weight: bold;
      line-height: 0.8;
      margin: 0 5px;
      text-shadow: 8px 8px 15px black;
    }
  
    .subtitle {
      color: #FFD700;
      font-size: 2rem;
      letter-spacing: 2px;
      text-align: center;
      margin-top: 20px;
    }
  
    .image-hover {
      transition: transform 0.4s ease-in-out;
    }
  
    .image-hover:hover {
      transform: scale(1.1);
    }
</style>