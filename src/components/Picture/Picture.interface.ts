export interface PictureInterface {
  images: {
    avif: string;
    webp: string;
    png: string;
  };
  alt: string;
  className?: string;
}
