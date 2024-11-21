import { user as original } from "aeria"
import { extendCollection,defineCollection } from "aeria"
export const user = extendCollection(original,{description: {$id: "user",properties: {roles: {type: "array",items: {enum: ["root","supervisor","customer"]}}}}})
export const extendUserCollection = (collection) => extendCollection(user,collection)
