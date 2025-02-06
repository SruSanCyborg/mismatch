<script lang="ts">
  import { page } from "$app/state"
  import { signIn, signOut } from "@auth/sveltekit/client";
  let username = '';
  let password = '';
import { onMount } from "svelte";
import { goto } from "$app/navigation"

onMount(() => {
    if (page.data.session) {
        goto('/');
    }
});
</script>
 
<nav>
  <h1>You are not logged in sign in</h1>
  <form on:submit|preventDefault={() => signIn("credentials", { username, password, redirect: true, callbackUrl: "/", redirectUrl: "/" })}>
      <label for="username">Username:</label>
      <input type="text" id="username" bind:value={username} required />

      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} required />

      <button type="submit">Sign In</button>
  </form>
  <!-- <img
    src={page.data.session?.user?.image ?? "https://i.pravatar.cc/300"} 
    alt="User Avatar"
  /> -->
</nav>