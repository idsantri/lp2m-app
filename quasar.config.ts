/* eslint-env node */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js

/* eslint-disable @typescript-eslint/no-var-requires */

import { configure } from 'quasar/wrappers';
import config from 'src/config';
// import * as path from 'path';

export default configure((/* ctx */) => {
	// const env = ctx.dev ? 'development' : 'production';
	// const baseURL_API =
	// 	env === 'development' ? 'http://localhost:8000/api' : config.BASE_API;
	return {
		eslint: {
			// fix: true,
			// include: [],
			// exclude: [],
			// cache: false,
			// rawEsbuildEslintOptions: {},
			// rawWebpackEslintPluginOptions: {},
			warnings: true,
			errors: true,
		},
		// https://v2.quasar.dev/quasar-cli-webpack/prefetch-feature
		// preFetch: true,

		// app boot file (/src/boot)
		// --> boot files are part of "main.js"
		// https://v2.quasar.dev/quasar-cli-webpack/boot-files
		boot: ['axios', 'registerGlobalComponents'],

		// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-css
		css: ['app.scss'],

		// https://github.com/quasarframework/quasar/tree/dev/extras
		extras: [
			// 'ionicons-v4',
			// 'mdi-v7',
			// 'fontawesome-v6',
			// 'eva-icons',
			// 'themify',
			// 'line-awesome',
			// 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

			'roboto-font', // optional, you are not bound to it

			// ICONS
			'material-icons', // NONE
			'material-icons-outlined', // o_
			// 'material-icons-round', // r_
			// 'material-icons-sharp', // s_
			'material-symbols-outlined', // sym_o_
			// 'material-symbols-rounded', // sym_r_
			// 'material-symbols-sharp', // sym_s_
			// 'bootstrap-icons',
		],

		// Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-build
		build: {
			// publicPath: '/',
			// env: { BASE_URL_API: baseURL_API },
			vueRouterMode: 'history', // available values: 'hash', 'history'

			// webpackTranspile: false,

			// Add dependencies for transpiling with Babel (Array of string/regex)
			// (from node_modules, which are by default not transpiled).
			// Applies only if "webpackTranspile" is set to true.
			// webpackTranspileDependencies: [],

			esbuildTarget: {
				browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
				node: 'node20',
			},

			// extendWebpack(cfg) {
			// 	// add alias @ to src
			// 	cfg.resolve = cfg.resolve || {};
			// 	cfg.resolve.alias = {
			// 		...cfg.resolve.alias,
			// 		'@': path.resolve(__dirname, './src'),
			// 	};
			// },
			// rtl: true, // https://quasar.dev/options/rtl-support
			// preloadChunks: true,
			// showProgress: false,
			// gzip: true,
			// analyze: true,

			// Options below are automatically set depending on the env, set them if you want to override
			// extractCSS: false,

			// https://v2.quasar.dev/quasar-cli-webpack/handling-webpack
			// "chain" is a webpack-chain object https://github.com/sorrycc/webpack-chain
			// chainWebpack (/* chain, { isClient, isServer } */) {}
		},

		// Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-devServer
		devServer: {
			server: {
				type: 'http',
			},
			port: 3000,
			open: true, // opens browser window automatically
		},

		// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-framework
		framework: {
			config: {
				notify: {
					/* look at QuasarConfOptions from the API card */
				},
			},
			// iconSet: 'material-icons', // Quasar icon set
			lang: 'id', // Quasar language pack

			// For special cases outside of where the auto-import strategy can have an impact
			// (like functional components as one of the examples),
			// you can manually specify Quasar components/directives to be available everywhere:
			//
			// components: [],
			// directives: [],

			// Quasar plugins
			plugins: ['Notify', 'Dialog'],
		},

		// animations: 'all', // --- includes all animations
		// https://quasar.dev/options/animations
		animations: [],

		// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#property-sourcefiles
		// sourceFiles: {
		//   rootComponent: 'src/App.vue',
		//   router: 'src/router/index',
		//   store: 'src/store/index',
		//   indexHtmlTemplate: 'index.html',
		//   pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
		//   pwaServiceWorker: 'src-pwa/custom-service-worker',
		//   pwaManifestFile: 'src-pwa/manifest.json',
		//   electronMain: 'src-electron/electron-main',
		//   electronPreload: 'src-electron/electron-preload'
		//   bexManifestFile: 'src-bex/manifest.json
		// },

		// https://v2.quasar.dev/quasar-cli-webpack/developing-ssr/configuring-ssr
		ssr: {
			prodPort: 3000, // The default port that the production server should use
			// (gets superseded if process.env.PORT is specified at runtime)

			middlewares: [
				'render', // keep this as last one
			],

			// extendPackageJson (json) {},
			// extendSSRWebserverConf (esbuildConf) {},

			// manualStoreSerialization: true,
			// manualStoreSsrContextInjection: true,
			// manualStoreHydration: true,
			// manualPostHydrationTrigger: true,

			pwa: false,

			// pwaOfflineHtmlFilename: 'offline.html', // do NOT use index.html as name!
			// will mess up SSR

			// pwaExtendGenerateSWOptions (cfg) {},
			// pwaExtendInjectManifestOptions (cfg) {}
		},

		// https://v2.quasar.dev/quasar-cli-webpack/developing-pwa/configuring-pwa
		pwa: {
			workboxMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
			// swFilename: 'sw.js',
			// manifestFilename: 'manifest.json'
			extendManifestJson: (manifest) => {
				manifest.name = config.PWA_NAME;
				manifest.short_name = config.PWA_SHORT_NAME;
				manifest.description = config.PWA_DESCRIPTION;
				return manifest;
			},
			// useCredentialsForManifestTag: true,
			// injectPwaMetaTags: false,
			// extendPWACustomSWConf (esbuildConf) {},
			// extendGenerateSWOptions (cfg) {},
			// extendInjectManifestOptions (cfg) {}
		},

		// Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-cordova-apps/configuring-cordova
		cordova: {
			// noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
		},

		// Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-capacitor-apps/configuring-capacitor
		capacitor: {
			hideSplashscreen: true,
		},

		// Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/configuring-electron
		electron: {
			// extendElectronMainConf (esbuildConf) {},
			// extendElectronPreloadConf (esbuildConf) {},

			// extendPackageJson (json) {},

			// Electron preload scripts (if any) from /src-electron, WITHOUT file extension
			preloadScripts: ['electron-preload'],

			// specify the debugging port to use for the Electron app when running in development mode
			inspectPort: 5858,

			bundler: 'packager', // 'packager' or 'builder'

			packager: {
				// https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
				// OS X / Mac App Store
				// appBundleId: '',
				// appCategoryType: '',
				// osxSign: '',
				// protocol: 'myapp://path',
				// Windows only
				// win32metadata: { ... }
			},

			builder: {
				// https://www.electron.build/configuration/configuration

				appId: 'idsantri-app',
			},
		},

		// Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-browser-extensions/configuring-bex
		bex: {
			// extendBexScriptsConf (esbuildConf) {},
			// extendBexManifestJson (json) {},

			contentScripts: ['my-content-script'],
		},
	};
});
