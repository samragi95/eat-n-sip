import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/samragikunwar/SKUD Projects/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}