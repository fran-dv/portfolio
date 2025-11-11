import type { ProjectContent, ProjectId } from "./schema";
import bchConnect1 from "@assets/projects/previews/bch-connect.1.png";
import zorroViejo1 from "@assets/projects/previews/zorro-viejo-mobile.1.png";
import miniDapp1 from "@assets/projects/previews/mini-dapp.1.png";
import { TechnologiesLogos } from "@utils/technologiesLogos";

export interface ProjectMetadata {
  id: ProjectId;
  images: ImageMetadata[];
  liveDemoUrl: string;
  repoUrl: string;
  stack: {
    name: string;
    icon: ImageMetadata;
  }[];
}

export type Project = ProjectContent & ProjectMetadata;

const ProjectsMetadata: ProjectMetadata[] = [
  {
    id: "bch-connect",
    images: [bchConnect1],
    liveDemoUrl: "https://bch-connect-example.netlify.app/",
    repoUrl: "https://github.com/fran-dv/bch-connect",
    stack: [
      {
        name: "React",
        icon: TechnologiesLogos.react,
      },
    ],
  },
  {
    id: "zorro-viejo-ecommerce",
    images: [zorroViejo1],
    liveDemoUrl: "https://zorroviejo.shop/",
    repoUrl: "https://github.com/fran-dv/zorroviejo",
    stack: [
      {
        name: "React",
        icon: TechnologiesLogos.react,
      },
      {
        name: "TypeScript",
        icon: TechnologiesLogos.typescript,
      },
      {
        name: "CSS Modules",
        icon: TechnologiesLogos.css,
      },
    ],
  },
  {
    id: "mini-dapp",
    images: [miniDapp1],
    liveDemoUrl: "https://mini-dapp-chi.vercel.app/",
    repoUrl: "https://github.com/fran-dv/mini-dapp",
    stack: [
      {
        name: "React",
        icon: TechnologiesLogos.react,
      },
      {
        name: "TypeScript",
        icon: TechnologiesLogos.typescript,
      },
      {
        name: "Tailwind CSS",
        icon: TechnologiesLogos.tailwind,
      },
    ],
  },
] as const;

export const getProjectMetadata = (id: string): ProjectMetadata => {
  const metadata = ProjectsMetadata.find((project) => project.id === id);
  if (!metadata) throw new Error(`Project metadata not found for id: ${id}`);
  return metadata;
};

export const getProjectsFromProjectsContent = (
  projectsContent: ProjectContent[],
): Project[] => {
  return projectsContent.map((p) => ({
    ...(p as ProjectContent),
    ...getProjectMetadata(p.id),
  }));
};
