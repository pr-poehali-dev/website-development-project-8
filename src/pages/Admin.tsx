import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  cmsGetContent,
  cmsGetGalleryAll,
  cmsSaveContent,
  cmsSaveGallery,
  cmsUploadPhoto,
  type CmsContent,
  type GalleryItem,
} from "@/lib/cms";

type Tab = "texts" | "gallery";

const Admin = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("cms_token") || "";

  const [tab, setTab] = useState<Tab>("texts");
  const [content, setContent] = useState<CmsContent | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [addingPhoto, setAddingPhoto] = useState(false);

  useEffect(() => {
    if (!token) { navigate("/admin/login"); return; }
    cmsGetContent().then(setContent);
    cmsGetGalleryAll(token).then(setGallery);
  }, [token, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("cms_token");
    navigate("/admin/login");
  };

  const handleSaveTexts = async () => {
    if (!content) return;
    setSaving(true);
    await cmsSaveContent(token, content);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleSaveGallery = async () => {
    setSaving(true);
    await cmsSaveGallery(token, gallery);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleUploadPhoto = async (index: number, file: File) => {
    setUploading(index);
    const url = await cmsUploadPhoto(token, file);
    setGallery((prev) => prev.map((item, i) => i === index ? { ...item, src: url } : item));
    setUploading(null);
  };

  const handleAddPhoto = async (file: File) => {
    setAddingPhoto(true);
    const url = await cmsUploadPhoto(token, file);
    const newItem: GalleryItem = {
      id: Date.now(),
      src: url,
      alt: "Новая работа",
      title: "Новая работа",
      desc: "Описание работы",
      active: true,
    };
    setGallery((prev) => [...prev, newItem]);
    setAddingPhoto(false);
  };

  const handleDeletePhoto = (index: number) => {
    setGallery((prev) => prev.filter((_, i) => i !== index));
  };

  const updateGalleryItem = (index: number, field: keyof GalleryItem, value: string | boolean) => {
    setGallery((prev) => prev.map((item, i) => i === index ? { ...item, [field]: value } : item));
  };

  const TEXT_FIELDS: { key: keyof CmsContent; label: string; multiline?: boolean }[] = [
    { key: "hero_title", label: "Главная — заголовок" },
    { key: "hero_subtitle", label: "Главная — подзаголовок", multiline: true },
    { key: "advantages_title", label: "Раздел «Преимущества» — заголовок" },
    { key: "advantages_subtitle", label: "Раздел «Преимущества» — описание", multiline: true },
    { key: "portfolio_title", label: "Портфолио — заголовок" },
    { key: "portfolio_subtitle", label: "Портфолио — подзаголовок", multiline: true },
    { key: "about_title", label: "О нас — заголовок" },
    { key: "about_subtitle", label: "О нас — подпись" },
    { key: "about_description", label: "О нас — описание", multiline: true },
    { key: "contacts_phone", label: "Телефон" },
    { key: "contacts_email", label: "Email" },
  ];

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground flex items-center gap-2">
          <Icon name="Loader" size={20} className="animate-spin" />
          Загрузка...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon name="Settings" size={20} className="text-primary" />
          <span className="font-semibold">Управление сайтом</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => window.open("/", "_blank")}>
            <Icon name="ExternalLink" size={16} className="mr-1" />
            Сайт
          </Button>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <Icon name="LogOut" size={16} className="mr-1" />
            Выйти
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex gap-2 mb-6">
          <Button
            variant={tab === "texts" ? "default" : "outline"}
            onClick={() => setTab("texts")}
            size="sm"
          >
            <Icon name="FileText" size={16} className="mr-2" />
            Тексты
          </Button>
          <Button
            variant={tab === "gallery" ? "default" : "outline"}
            onClick={() => setTab("gallery")}
            size="sm"
          >
            <Icon name="Image" size={16} className="mr-2" />
            Фотографии работ
          </Button>
        </div>

        {tab === "texts" && (
          <div className="flex flex-col gap-4">
            {TEXT_FIELDS.map(({ key, label, multiline }) => (
              <Card key={key} className="p-4 bg-card border-border">
                <label className="block text-xs text-muted-foreground mb-2 uppercase tracking-wide">{label}</label>
                {multiline ? (
                  <Textarea
                    value={content[key]}
                    onChange={(e) => setContent({ ...content, [key]: e.target.value })}
                    rows={3}
                    className="resize-none"
                  />
                ) : (
                  <Input
                    value={content[key]}
                    onChange={(e) => setContent({ ...content, [key]: e.target.value })}
                  />
                )}
              </Card>
            ))}
            <Button onClick={handleSaveTexts} disabled={saving} className="self-end">
              {saving ? (
                <><Icon name="Loader" size={16} className="mr-2 animate-spin" />Сохранение...</>
              ) : saved ? (
                <><Icon name="Check" size={16} className="mr-2" />Сохранено!</>
              ) : (
                <><Icon name="Save" size={16} className="mr-2" />Сохранить тексты</>
              )}
            </Button>
          </div>
        )}

        {tab === "gallery" && (
          <div className="flex flex-col gap-4">
            {gallery.map((item, index) => (
              <Card key={item.id} className="p-4 bg-card border-border">
                <div className="flex gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-24 h-24 object-cover rounded-lg border border-border"
                    />
                    <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg cursor-pointer">
                      {uploading === index ? (
                        <Icon name="Loader" size={20} className="text-white animate-spin" />
                      ) : (
                        <Icon name="Camera" size={20} className="text-white" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => e.target.files?.[0] && handleUploadPhoto(index, e.target.files[0])}
                      />
                    </label>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <Input
                      placeholder="Название"
                      value={item.title}
                      onChange={(e) => updateGalleryItem(index, "title", e.target.value)}
                    />
                    <Input
                      placeholder="Описание"
                      value={item.desc}
                      onChange={(e) => updateGalleryItem(index, "desc", e.target.value)}
                    />
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.active}
                          onChange={(e) => updateGalleryItem(index, "active", e.target.checked)}
                          className="w-4 h-4 accent-primary"
                        />
                        Показывать на сайте
                      </label>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDeletePhoto(index)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Card
              className="p-6 border-dashed border-2 border-border bg-transparent flex flex-col items-center gap-2 cursor-pointer hover:border-primary transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              {addingPhoto ? (
                <Icon name="Loader" size={24} className="text-muted-foreground animate-spin" />
              ) : (
                <Icon name="Plus" size={24} className="text-muted-foreground" />
              )}
              <p className="text-sm text-muted-foreground">Добавить фото</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleAddPhoto(e.target.files[0])}
              />
            </Card>

            <Button onClick={handleSaveGallery} disabled={saving} className="self-end">
              {saving ? (
                <><Icon name="Loader" size={16} className="mr-2 animate-spin" />Сохранение...</>
              ) : saved ? (
                <><Icon name="Check" size={16} className="mr-2" />Сохранено!</>
              ) : (
                <><Icon name="Save" size={16} className="mr-2" />Сохранить галерею</>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
