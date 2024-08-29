import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    {
      title:'MySuits',
      image: image1,
      description:
        "Crafted a sleek and modern landing-page for MySuit, showcasing stylish menswear with a focus on clean design and user-friendly navigation.",
      active: true,
    },
    {
      title:'Chomp',
      image: image2,
      description:
        "Designed an engaging and vibrant landing-page for Chomp, featuring adorable puppies and an intuitive layout to facilitate pet adoption.",
      active: false,
    },
    {
      title:'Wedding Bells',
      image: image3,
      description:
        "Developed an elegant landing-page for Wedding Bells, offering thousands of custom wedding card designs with an easy-to-browse interface.",
      active: false,
    },
  ]);
  

  return { projects }
})
