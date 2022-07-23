<script>
import { auth } from "store/auth";
import { page } from "store/routes";

const login = () => {
    auth.update(() => {return false});
    page.redirect("/");
};
</script>

<svelte:head>
  <title>Signin</title>
</svelte:head>

<button class="w-6" on:click={login}>
    Login
</button>
