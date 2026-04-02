/**
 * Helper to prefix paths with the base path for GitHub Pages deployment.
 * In Next.js, basePath handles Link components, but not img src or CSS urls.
 */
export function getAssetPath(path: string): string {
  // If we are in production and not on Vercel (where basePath is root), 
  // we prefix with the repository name.
  const basePath = '/cloudinfrait_website_v2';
  
  // Only prefix if it starts with / and doesn't already have the basePath
  if (path.startsWith('/') && !path.startsWith(basePath)) {
    // In local development (next dev), basePath is actually empty string '' 
    // unless explicitly configured to be different.
    // However, for static exports, we often want the basePath prefixed.
    
    // Check if we are in production
    const isProd = process.env.NODE_ENV === 'production';
    const isVercel = process.env.VERCEL === '1';

    if (isProd && !isVercel) {
      return `${basePath}${path}`;
    }
  }
  
  return path;
}
