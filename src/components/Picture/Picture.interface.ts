export interface PictureInterface {
  images: {
    avif: string;
    webp: string;
    png: string;
  };
  alt: string;
  modifiers?: {
    position?: string;
    imageWidth?: string;
  };
}
