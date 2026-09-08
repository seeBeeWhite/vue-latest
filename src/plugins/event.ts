import mitt from 'mitt'

// Interfaces
import type { Events } from '@/interfaces/event'

export const emitter = mitt<Events.Type>()
