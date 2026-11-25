const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }) {
  return src.startsWith("/") ? `${base}${src}` : src;
}
