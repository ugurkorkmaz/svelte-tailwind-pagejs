import { writable } from "svelte/store";

import Page from "page";

import Home from "routes/Home.svelte";
import Signup from "routes/auth/Signup.svelte";
import Signin from 'routes/auth/Signin.svelte';

export const page    = writable(Page);
export const params  = writable({});
export const current = writable(null);
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