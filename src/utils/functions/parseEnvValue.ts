// parseEnvValue.ts

// Parses route string into an array of objects with source and target
export function parseRoutes(str: string): { source: string; target: string }[] {
    return (
        str
            .split(',')
            .map(route => {
                const [source, target] = route.split(':').map(id => id.trim());
                return { source, target };
            })
            .filter(route => route.source && route.target)
    );
}

// Parses webhook URLs into an array of strings
export function parseWebhookUrls(str: string): string[] {
    return str
        .split(',')
        .map(url => url.trim())
        .filter(url => url.length > 0);  // Ensure valid URLs only
}
