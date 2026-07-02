import { siteConfig } from "@/config/site";

/**
 * Resolves a public/ asset path under the configured GitHub Pages base.
 * Accepts both "/avatar.jpg" and "avatar.jpg".
 */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }

  const clean = path.replace(/^\/+/, "");
  const encoded = clean
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${siteConfig.basePath}${encoded}`;
}
