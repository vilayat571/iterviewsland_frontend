export interface INavData {
  id: number;
  text: string;
  isActive: boolean;
  link: string;
}

export const hrefsData: INavData[] = [
  {
    id: 1,
    text: "Sual cavabla",
    isActive: true,
    link: "/",
  },
  {
    id: 2,
    text: "Cavab oxu",
    isActive: true,
    link: "/",
  },
  {
    id: 2,
    text: "Müsahibəni paylaş",
    isActive: true,
    link: "/",
  },

  {
    id: 3,
    text: "Müsahibə oxu",
    isActive: true,
    link: "/",
  },

];
