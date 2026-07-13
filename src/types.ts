export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  description: string;
}

export interface GymScheduleDay {
  dayName: string;
  slots: { start: string; end: string; startMin: number; endMin: number }[];
  isClosed: boolean;
}
