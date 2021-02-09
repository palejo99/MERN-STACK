export interface Video {
  createdAt?: string | Date; // opcional para el front
  description: string;
  title: string; // requerido
  updatedAt?: string | Date;
  url: string;
  _id?: string;
}
