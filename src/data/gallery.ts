export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  type: "image" | "video";
}

export const galleryImages: GalleryItem[] = [
  { id: "1", src: "/gallery/Grad_1.jpg", alt: "Graduation 1", caption: "Graduation Photo", type: "image" },
  { id: "2", src: "/gallery/Grad_2.jpeg", alt: "Graduation 2", caption: "Graduation Photo", type: "image" },
  { id: "4", src: "/gallery/Grad_video.mp4", alt: "Graduation Video", caption: "Graduation Video", type: "video" },
  { id: "3", src: "/gallery/Eid_1.jpeg", alt: "Eid 1", caption: "Photo from Eid", type: "image" },

];
