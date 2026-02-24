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
  required,
  defaultValue,
  aspect,
}: ImageEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>(defaultValue);
  const [hasNewFile, setHasNewFile] = useState(false);
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

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      {/* File input — only included in FormData when a new file is picked */}
      <input
        ref={fileInputRef}
        type="file"
        name={hasNewFile ? name : undefined}
        accept="image/*"
        required={required && !defaultValue}
        className="hidden"
        onChange={(e) => {
          const file = e.currentTarget.files?.[0];
          if (!file) return;
          setImageUrl(URL.createObjectURL(file));
          setHasNewFile(true);
          setCrop({ x: 0, y: 0 });
          setZoom(1);
        }}
      />

      {/* Existing image URL — tells backend to keep/re-crop current image */}
      {!hasNewFile && defaultValue && (
        <input type="hidden" name={`${name}_url`} value={defaultValue} />
      )}

      <div>
        <Button
          type="button"
          size="small"
          onClick={() => fileInputRef.current?.click()}
        >
          Escolher imagem
        </Button>
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
      <input type="hidden" name={`${name}_crop_width`} value={pixelCrop.width} />
      <input type="hidden" name={`${name}_crop_height`} value={pixelCrop.height} />
    </div>
  );
}
