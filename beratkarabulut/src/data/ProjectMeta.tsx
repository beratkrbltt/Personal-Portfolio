import codeWeekImage from "../images/projects/codeweek.webp";
import cookCraftImage from "../images/projects/cookCraft.webp";
import creativeHubImage from "../images/projects/creativehub.webp";
import gupseCafeImage from "../images/projects/gupseCafe.webp";
import karabulutDigitalImage from "../images/projects/karabulutDigital.webp";
import hunkarRestaurantImage from "../images/projects/hunkarRestaurant.webp";
import jdmCarsImage from "../images/projects/jdmCars.webp";
import netoriaEcommerceImage from "../images/projects/netoriaEcommerce.webp";
import reduxTodoImage from "../images/projects/reduxTodo.webp";

import type { ProjectMeta } from "../types/Type";

export const projectMeta: Record<string, ProjectMeta> = {

    "Gupse-Cafe-Menu-System": {
        image: gupseCafeImage,
        category: "Menu System",
        technologies: ["Html", "Css", "JavaScript"],
        order: 1,
    },

    "Karabulut-Digital": {
        image: karabulutDigitalImage,
        category: "Business Website",
        liveUrl: "https://karabulutdigital.com/",
        technologies: ["Html", "Css", "JavaScript"],
        order: 2,
    },

    "CreativeHub": {
        image: creativeHubImage,
        category: "Business Website",
        liveUrl: "https://creativehubbb.web.app/",
        technologies: ["Html", "Css", "JavaScript"],
        order: 3,
    },

    "CookCraft-Website": {
        image: cookCraftImage,
        category: "Website",
        technologies: ["React", "TypeScript"],
        order: 4,
    },

    "CodeWeek": {
        image: codeWeekImage,
        category: "Web App",
        technologies: ["Html", "Css", "JavaScript"],
        order: 5,
    },
    "Netoria_E-Commerce": {
        image: netoriaEcommerceImage,
        category: "E-Commerce",
        technologies: ["React", "TypeScript"],
        order: 6,
    },
    "redux-tsx-todo-app": {
        image: reduxTodoImage,
        category: "Web App",
        technologies: ["React", "TypeScript", "Redux"],
        order: 7,
    },

    "Hunkar_Restaurant": {
        image: hunkarRestaurantImage,
        category: "Restaurant Website",
        liveUrl: "https://beratkrbltt.github.io/Hunkar_Restaurant//",
        technologies: ["Html", "Css",],
        order: 9,
    },

    "jdm-cars": {
        image: jdmCarsImage,
        category: "Showcase Website",
        liveUrl: "https://beratkrbltt.github.io/jdm-cars/",
        technologies: ["Html", "Css",],
        order: 8,
    },
};