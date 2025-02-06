<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        setTimeout(() => {
            goto('/');
        }, 2000);
    });
</script>

<main>
    <h1>Signing out...</h1>
    <p>You will be redirected to the home page in few seconds.</p>
</main>