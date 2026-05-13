"use client";

import { useCallback, useRef, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import Button from "./Button";

interface ImageEditorProps {
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  aspect?: number;
}

export function ImageEditor({
  name,
  label,
  defaultValue,
  aspect,
}: ImageEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>(defaultValue);
  const [hasNewFile, setHasNewFile] = useState(false);
  const [publicUrl, setPublicUrl] = useState<string | undefined>();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | undefined>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pixelCrop, setPixelCrop] = useState<Area>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setPixelCrop(croppedAreaPixels);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return;

    setImageUrl(URL.createObjectURL(file));
    setHasNewFile(true);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setPublicUrl(undefined);
    setUploadError(undefined);
    setUploading(true);

    try {
      const tokenRes = await fetch("/api/upload-presigned", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content_type: file.type, filename: file.name }),
      });
      if (!tokenRes.ok) throw new Error("Falha ao obter URL de upload");
      const { upload_url, public_url } = await tokenRes.json();

      const s3Res = await fetch(upload_url, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!s3Res.ok) throw new Error("Falha ao enviar imagem para o servidor");

      setPublicUrl(public_url);
    } catch (err) {
      setUploadError(
        err instanceof Error
          ? err.message
          : "Erro ao enviar imagem. Tente novamente.",
      );
      setHasNewFile(false);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      {/* File input — no form name; raw bytes go directly to S3, never through the server action */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Pass the S3 public URL (or existing URL for edit) to the server action */}
      {publicUrl ? (
        <input type="hidden" name={`${name}_url`} value={publicUrl} />
      ) : !hasNewFile && defaultValue ? (
        <input type="hidden" name={`${name}_url`} value={defaultValue} />
      ) : null}

      <div className="flex items-center gap-2">
        <Button
          type="button"
          size="small"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
        >
          Escolher imagem
        </Button>
        {uploading && (
          <span className="text-xs text-gray-500">Enviando...</span>
        )}
        {uploadError && (
          <span className="text-xs text-red-600">{uploadError}</span>
        )}
      </div>

      {imageUrl && (
        <div className="flex flex-col gap-4">
          {/* Crop area */}
          <div
            className="relative w-full rounded overflow-hidden bg-gray-900"
            style={{ aspectRatio: aspect ?? 512 / 171 }}
          >
            <Cropper
              image={imageUrl}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              showGrid
            />
          </div>

          {/* Zoom */}
          <label className="flex flex-col gap-1 text-sm text-gray-600">
            <span>Zoom — {zoom.toFixed(2)}×</span>
            <input
              type="range"
              min={1}
              max={5}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="accent-primary"
            />
          </label>
        </div>
      )}

      <input type="hidden" name={`${name}_crop_x`} value={pixelCrop.x} />
      <input type="hidden" name={`${name}_crop_y`} value={pixelCrop.y} />
      <input
        type="hidden"
        name={`${name}_crop_width`}
        value={pixelCrop.width}
      />
      <input
        type="hidden"
        name={`${name}_crop_height`}
        value={pixelCrop.height}
      />
    </div>
  );
}
