/// <reference types="vinxi/types/server" />

import { getRouterManifest } from "@tanstack/react-start/router-manifest";
import {
	createStartHandler,
	defaultStreamHandler,
	defineEventHandler,
} from "@tanstack/react-start/server";
import { getWebRequest } from "vinxi/http";
import { paraglideMiddleware } from "./paraglide/server.js";
import { createRouter } from "./router";

export default defineEventHandler((event) =>
	paraglideMiddleware(getWebRequest(event), async () =>
		createStartHandler({
			createRouter: () => createRouter(event.path),
			getRouterManifest,
		})(defaultStreamHandler)(event),
	),
);
