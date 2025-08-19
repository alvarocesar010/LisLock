import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

function getAppRoutes(dir: string, basePath = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // skip special folders
      if (entry.name.startsWith("(") || entry.name.startsWith("_")) continue;

      routes = [
        ...routes,
        ...getAppRoutes(path.join(dir, entry.name), `${basePath}/${entry.name}`),
      ];
    } else if (
      entry.isFile() &&
      (entry.name === "page.tsx" || entry.name === "page.jsx")
    ) {
      routes.push(basePath || "/");
    }
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.lislock.pt";

  // scan /app for routes
  const pagesDir = path.join(process.cwd(), "app");
  const routes = getAppRoutes(pagesDir);

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
