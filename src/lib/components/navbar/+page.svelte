<script lang="ts">
  import { page } from "$app/state"
  import { signOut } from "@auth/sveltekit/client";
  import { goto } from "$app/navigation";
</script>

<!-- {#if !page.data.token}
    landing page goes here
    <button class="border-2" on:click={() => goto("/signIn")}>Login</button>
  {:else}
    <p>Hello {page.data.cookies?.test?.val}</p>
    this is home route
    <button on:click={() => {
      signOut({ callbackUrl: "/signOut" });
    }}>Log out</button>
  {/if} -->

  <div> Navbar </div>