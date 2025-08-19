import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { slugRoutes } from "@/db/slugRoutes";

function getAppRoutes(dir: string, basePath = ""): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const file of files) {
    if (file.isDirectory()) {
      //  skipe special Next.js folders if you want
      if (file.name.startsWith("(") || file.name.startsWith("_")) continue;

      routes = [
        ...routes,
        ...getAppRoutes(path.join(dir, file.name), `${basePath}/${file.name}`),
      ];
    } else if (file.isFile() && file.name === "page.tsx") {
      routes.push(basePath || "/");
    }
  }

  return routes;
}

function mergeSlugRoutes(routes: string[]): string[] {
  //check if we have slugs
  const slugs = slugRoutes;

  if (slugs.length > 0) {
    slugs.forEach((slug) => {
      routes.push(slug.slug);
    });
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lislock.pt";

  const dir = path.join(process.cwd(), "src/app");

  const routes = getAppRoutes(dir);
  const allRoutes = mergeSlugRoutes(routes);
  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
(async () => {
  const result = await sitemap();
  console.log(result);
})();
