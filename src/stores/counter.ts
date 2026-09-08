import { defineStore } from 'pinia'

// Interfaces
import type { Store } from '@/interfaces/store'

export const useCounterStore = defineStore('counter', {
  state: (): Store.Counters.State => ({
    count: 0,
  }),
  getters: {},
  actions: {
    increment(): void {
      this.count++
    },
  },
})
