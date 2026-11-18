import type { Profile, Skill, Project } from "../types";

import profileImage from "../assets/portfolio/imagen.jpeg";
import fastapiImage from "../assets/portfolio/fastapi.png";
import umlImage from "../assets/portfolio/modeladouml.png";
import linuxImage from "../assets/portfolio/linux.jpeg";

export const profileData: Profile = {
  name: "Benjamín Aedo",
  career: "Ingeniería Civil en Informática",
  university: "Universidad Católica de Temuco",
  academicLevel: "Estudiante de segundo semestre",
  description:
    "Soy estudiante de Ingeniería Civil en Informática, interesado en desarrollar soluciones de software útiles, claras y confiables.",
  introduction:
    "Me interesa explorar el desarrollo web y backend, trabajar con Linux y aprender sobre arquitectura de software.",
  image: profileImage,
  imageAlt: "Fotografía de Benjamín Aedo"
};

export const skillsData: Skill[] = [
  { id: 1, name: "Desarrollo Backend y Frontend" },
  { id: 2, name: "Programación" },
  { id: 3, name: "Pensamiento crítico" },
  { id: 4, name: "Redes de área amplia" }
];

export const projectsData: Project[] = [
  {
    id: 1,
    number: "01",
    category: "Desarrollo Backend",
    title: "API RESTful con FastAPI",
    description:
      "Desarrollo de una API RESTful utilizando Python y FastAPI, implementando operaciones CRUD mediante una arquitectura modular para organizar las funcionalidades y facilitar el mantenimiento del código.",
    image: fastapiImage,
    imageAlt: "Proyecto de desarrollo con FastAPI",
    tags: ["Python", "FastAPI", "REST", "CRUD"]
  },
  {
    id: 2,
    number: "02",
    category: "Modelado de software",
    title: "Modelado UML con draw.io",
    description:
      "Diseño y representación de sistemas mediante diagramas UML, utilizando diagramas de clases para visualizar la estructura y las relaciones entre los componentes de software.",
    image: umlImage,
    imageAlt: "Diagramas UML realizados con draw.io",
    tags: ["UML", "draw.io", "Clases"]
  },
  {
    id: 3,
    number: "03",
    category: "Sistemas y herramientas",
    title: "Entorno de desarrollo en Linux",
    description:
      "Configuración y utilización de un entorno de desarrollo en Linux Mint, trabajando con la terminal, comandos del sistema y herramientas de control de versiones.",
    image: linuxImage,
    imageAlt: "Entorno de trabajo Linux Mint",
    tags: ["Linux Mint", "CLI", "Git"]
  }
];
