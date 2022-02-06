import { v4 as uuid } from "uuid";

type LevelType = "newbie" | "junior" | "intermediate" | "advanced" | "guru";

export interface ProjectsProps {
  id: string;
  name: string;
  level: LevelType;
  code: string;
  link: string;
  image: string;
}

export const projects: ProjectsProps[] = [
  {
    id: uuid(),
    name: "QR Code",
    level: "newbie",
    code: "https://github.com/renatoam/frontendmentor/tree/main/src/modules/newbie/qrcode",
    link: "/newbie/qrcode",
    image: "/images/qrcode.jpg",
  },
];
