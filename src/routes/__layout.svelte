<script>
  import { routes, page } from "store/routes.js";
  import { auth } from "store/auth.js";

  let current = null;
  let params = {};
  $routes.forEach((route) => {
    page(
      route.path,
      (ctx, next) => {
        params = { ...ctx.params };
        next();
      },
      () => {
        if (route.auth && $auth) {
          page.redirect("/auth/sign-in");
        } else {
          current = route.component;
        }
      }
    );
  });
  page.start();
</script>

<svelte:component this={current} {params} />

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
