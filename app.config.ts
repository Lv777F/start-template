import { paraglideVitePlugin as paraglide } from "@inlang/paraglide-js";
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		preset: "bun",
	},
	vite: {
		plugins: [
			tsConfigPaths({
				projects: ["./tsconfig.json"],
			}),
			paraglide({
				project: "./project.inlang",
				outdir: "./app/paraglide",
				outputStructure: "message-modules",
				cookieName: "PARAGLIDE_LOCALE",
				strategy: ["cookie", "preferredLanguage", "baseLocale"],
			}),
		],
	},
});
