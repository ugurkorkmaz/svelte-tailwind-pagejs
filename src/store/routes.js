import { writable } from "svelte/store";

import Page from "page";

import Home from "@/route/Home.svelte";
import Signup from "@/route/auth/Signup.svelte";
import Signin from "@/route/auth/Signin.svelte";

export const page    = Page
export const params  = writable({});
export const current = writable();
export const routes  = writable([
    {
        name: 'home',
        path: '/',
        component: Home,
        auth: false
    },
    {
        name: 'signup',
        path: '/auth/sign-up',
        component: Signup,
        auth: false
    },
    {
        name: 'signin',
        path: '/auth/sign-in',
        component: Signin,
        auth: false
    },
]);