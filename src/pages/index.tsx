import styles from "../styles/home.module.css";
import {
  projects as fmProjects,
  ProjectsProps,
} from "../common/constants/projects";
import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "../common/components/atoms/link";
import Image from "../common/components/atoms/image";

export default function HomePage() {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    if (fmProjects) setProjects(fmProjects);
    console.log({ fmProjects });
  }, []);

  return (
    <article className={styles.wrapper}>
      {projects.length > 0 &&
        projects.map((project) => {
          return (
            <section key={project.id} className={styles.card}>
              <figure className={styles.image}>
                <Image src={project.image} layout="fill" alt={project.name} />
              </figure>
              <h2>{project.name}</h2>
              <p>Level: {project.level}</p>
              <Link href={project.link}>
                <GitHubIcon />
              </Link>
              <Link href={project.code}>Go to page</Link>
            </section>
          );
        })}
    </article>
  );
}
