export interface Video {
  _id?: string;
  title: string; // requerido
  description: string;
  url: string;
  createdAt?: string | Date; // opcional para el front
  updatedAt?: string | Date;
}
