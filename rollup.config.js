import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess'
import { svelteSVG } from "rollup-plugin-svelte-svg";
import includePaths from 'rollup-plugin-includepaths';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}
let includePathOptions = {
    paths: ['src/assets', 'src/component', 'src/routes', 'src/store', 'src/'],
    extensions: ['.js', '.json', '.svelte'],
};
export default {
	input: 'src/app.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/app.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			},
			preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [require('tailwindcss')(), require('autoprefixer')()],
				},
			}),
		}),
		css({ output: 'app.css' }),
		svelteSVG({ svgo: {} }),
		includePaths(includePathOptions),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		!production && serve(),
		!production && livereload('public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
