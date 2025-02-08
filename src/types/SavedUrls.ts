export interface SavedUrlsType {
  id: string;
  originalUrl: string;
  shortUrl: string;
  createdAt: Date;
}

export interface SevedUrlsContextType {
  savedUrls: SavedUrlsType[];
  addUrl: (newUrl: SavedUrlsType) => void;
  deleteUrl: (id: string) => void;
}
