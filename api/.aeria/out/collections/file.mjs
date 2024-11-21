import { file as original } from "aeria"
import { extendCollection,defineCollection } from "aeria"
export const file = extendCollection(original,{description: {$id: "file",properties: {}}})
export const extendFileCollection = (collection) => extendCollection(file,collection)
