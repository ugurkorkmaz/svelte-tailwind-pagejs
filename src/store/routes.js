import { writable } from "svelte/store";

import PAGE from "page";

import Home from "routes/Home.svelte";
import Signup from "routes/auth/Signup.svelte";
import Signin from 'routes/auth/Signin.svelte';

export const page = PAGE

export const routes = writable([
    {
        name: 'home',
        path: '/',
        component: Home,
        auth: true
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
