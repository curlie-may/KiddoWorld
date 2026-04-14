type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: LoaderProps): string {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloud) {
    return src;
  }
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality ?? "auto"}`];
  return `https://res.cloudinary.com/${cloud}/image/upload/${params.join(",")}/${src}`;
}
