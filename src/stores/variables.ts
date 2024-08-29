import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useVariablesStore = defineStore('variables', {
    state: () => ({
        section: 1,
      }),
      actions: {
        setValue(newValue:number) {
          this.section = newValue;
        },
      },
})
