import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviews', () => {
    const reviews = ref([
        {
          name: "Client 1",
          text: "Our website by Zain surpassed expectations with sleek design and user-friendly functionality. His proactive approach was a standout.",
          active: true,
          rating: 5,
        },
        {
          name: "Client 2",
          text: "Zain revamped our site flawlessly, delivering a modern, responsive masterpiece on time and within budget. Highly skilled and professional.",
          active: false,
          rating: 4,
        },
        {
          name: "Client 3",
          text: "Zain's frontend work brought our vision to life seamlessly. He's collaborative, attentive to detail, and highly recommended for web development.",
          active: false,
          rating: 5,
        },
        {
          name: "Client 4",
          text: "We're thrilled with Zain's frontend development on our project. He's responsive, creative, and transformed our ideas into a visually stunning reality.",
          active: false,
          rating: 3,
        },
      ]);
  

  return { reviews }
})
