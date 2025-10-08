import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

<url>
  <loc>https://www.fencemasters804ltd.com/</loc>
  <lastmod>2025-10-08T15:23:45+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.fencemasters804ltd.com/service</loc>
  <lastmod>2025-10-08T15:23:45+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.fencemasters804ltd.com/about</loc>
  <lastmod>2025-10-08T15:23:45+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.fencemasters804ltd.com/blog</loc>
  <lastmod>2025-10-08T15:23:45+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.fencemasters804ltd.com/gallery</loc>
  <lastmod>2025-10-08T15:23:45+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.fencemasters804ltd.com/contact</loc>
  <lastmod>2025-10-08T15:23:45+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.fencemasters804ltd.com/residential-services</loc>
  <lastmod>2025-10-08T15:23:45+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://www.fencemasters804ltd.com/commercial-services</loc>
  <lastmod>2025-10-08T15:23:45+00:00</lastmod>
  <priority>0.64</priority>
</url>

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
