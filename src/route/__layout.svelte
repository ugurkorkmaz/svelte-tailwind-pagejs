<script>
  import { routes, page, params, current } from "@/store/routes.js";
  import { auth } from "@/store/auth.js";

  $routes.forEach((route) => {
    page(
      route.path,
      (ctx, next) => {
        params.update(() => {
          return{ ...ctx.params };
        });
        next();
      },
      () => {
        if (route.auth && $auth) {
          page.redirect("/auth/sign-in");
        } else {
          current.update(() => {
            return route.component;
          });
        }
      }
    );
  });
  page.start();
</script>

<svelte:component this={$current} />

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
