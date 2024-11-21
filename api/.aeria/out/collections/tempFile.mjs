import { tempFile as original } from "aeria"
import { extendCollection,defineCollection } from "aeria"
export const tempFile = extendCollection(original,{description: {$id: "tempFile",properties: {}}})
export const extendTempFileCollection = (collection) => extendCollection(tempFile,collection)
