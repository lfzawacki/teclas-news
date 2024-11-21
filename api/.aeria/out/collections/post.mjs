import { extendCollection,defineCollection,get,getAll,remove,insert } from "aeria"
export const post = defineCollection({description: {$id: "post",properties: {title: {type: "string"},link: {type: "string"},body: {type: "string",element: "textarea"},replies: {type: "array",items: {$ref: "post",inline: true}}},owned: true,presets: ["crud"]},functions: {get,getAll,remove,insert},exposedFunctions: {get: true,getAll: true,remove: true,insert: true}})
export const extendPostCollection = (collection) => extendCollection(post,collection)
