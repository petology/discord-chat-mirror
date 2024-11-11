import process from "node:process";

import { parseRoutes, parseWebhookUrls } from "./functions/parseEnvValue.js";

export const discordToken = process.env.DISCORD_TOKEN;
export const routes = parseRoutes(process.env.ROUTES ?? "");
export const webhooksUrl = parseWebhookUrls(process.env.WEBHOOKS_URL ?? "");  // Updated
export const enableBotIndicator: boolean = process.env.ENABLE_BOT_INDICATOR?.toLowerCase() === "yes";
export const useWebhookProfile: boolean = process.env.USE_WEBHOOK_PROFILE?.toLowerCase() === "yes";

export const headers = {
    "Content-Type": "application/json",
    Authorization: `Bot ${discordToken}`
};
