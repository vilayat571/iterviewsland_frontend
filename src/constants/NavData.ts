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
    text: "Bloq",
    isDropdown: false,
    isActive: false,
    link: "/",
  },
  {
    id: 2,
    text: "Müsahibə",
    isDropdown: true,
    isActive: true,
    link: "/",
  },
  {
    id: 3,
    text: "Dokumentasiya",
    isDropdown: false,
    isActive: false,
    link: "/",
  },

  {
    id: 4,
    text: "Missiyamız",
    isDropdown: false,
    isActive: true,
    link: "/mission",
  },
];
