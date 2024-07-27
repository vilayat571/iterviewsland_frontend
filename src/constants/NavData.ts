export interface INavData {
  id: number;
  text: string;
  isDropdown?: boolean;
  isActive: boolean;
  link: string;
}

export const hrefsData: INavData[] = [
  {
    id: 1,
    text: "Yol xəritələri",
    isDropdown: false,
    isActive: true,
    link: "/",
  },
  {
    id: 2,
    text: "Bloqlar",
    isDropdown: false,
    isActive: false,
    link: "/",
  },

  {
    id: 4,
    text: "Dokumentasiyalar",
    isDropdown: false,
    isActive: true,
    link: "/",
  },
  {
    id: 5,
    text: "Müsahibə",
    isDropdown: true,
    isActive: true,
    link: "/suallar",
  },
  
];
