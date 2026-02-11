import { vi } from "vitest";
import React from "react";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    ...rest
  }: {
    src: string | { src: string };
    alt: string;
    width?: number;
    height?: number;
    [key: string]: unknown;
  }) => {
    const resolvedSrc =
      typeof src === "object" && src !== null ? src.src : src;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return React.createElement("img", {
      src: resolvedSrc,
      alt,
      width,
      height,
      ...rest,
    });
  },
  getImageProps: ({
    src,
    ...rest
  }: {
    src: string | { src: string };
    [key: string]: unknown;
  }) => {
    const resolvedSrc =
      typeof src === "object" && src !== null ? src.src : src;
    return { props: { src: resolvedSrc, srcSet: resolvedSrc, ...rest } };
  },
}));
