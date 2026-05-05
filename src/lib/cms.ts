import func2url from "../../func2url.json";

const BASE_URL = (func2url as Record<string, string>)["cms"];

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  desc: string;
  active: boolean;
}

export interface CmsContent {
  hero_title: string;
  hero_subtitle: string;
  advantages_title: string;
  advantages_subtitle: string;
  about_title: string;
  about_subtitle: string;
  about_description: string;
  portfolio_title: string;
  portfolio_subtitle: string;
  contacts_phone: string;
  contacts_email: string;
}

export async function cmsGetContent(): Promise<CmsContent> {
  const res = await fetch(`${BASE_URL}?action=content`);
  return res.json();
}

export async function cmsGetGallery(): Promise<GalleryItem[]> {
  const res = await fetch(`${BASE_URL}?action=gallery`);
  return res.json();
}

export async function cmsGetGalleryAll(token: string): Promise<GalleryItem[]> {
  const res = await fetch(`${BASE_URL}?action=gallery-all`, {
    headers: { "X-Auth-Token": token },
  });
  return res.json();
}

export async function cmsLogin(password: string): Promise<{ ok: boolean; token?: string; error?: string }> {
  const res = await fetch(`${BASE_URL}?action=login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  const data = await res.json();
  return typeof data === "string" ? JSON.parse(data) : data;
}

export async function cmsSaveContent(token: string, content: Partial<CmsContent>): Promise<boolean> {
  const res = await fetch(`${BASE_URL}?action=content`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Auth-Token": token },
    body: JSON.stringify(content),
  });
  const data = await res.json();
  const parsed = typeof data === "string" ? JSON.parse(data) : data;
  return parsed.ok;
}

export async function cmsSaveGallery(token: string, items: GalleryItem[]): Promise<boolean> {
  const res = await fetch(`${BASE_URL}?action=gallery`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Auth-Token": token },
    body: JSON.stringify({ items }),
  });
  const data = await res.json();
  const parsed = typeof data === "string" ? JSON.parse(data) : data;
  return parsed.ok;
}

export async function cmsUploadPhoto(token: string, file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result as string;
      const res = await fetch(`${BASE_URL}?action=upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Auth-Token": token },
        body: JSON.stringify({ image: base64, content_type: file.type }),
      });
      const data = await res.json();
      const parsed = typeof data === "string" ? JSON.parse(data) : data;
      if (parsed.ok) resolve(parsed.url);
      else reject(new Error("Ошибка загрузки"));
    };
    reader.readAsDataURL(file);
  });
}
