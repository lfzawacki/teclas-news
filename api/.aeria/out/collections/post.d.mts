import { Collection,SchemaWithId,ExtendCollection,Context,get,getAll,remove,insert } from "aeria"
export declare type postCollection = {description: {$id: "post",properties: {title: {type: "string"},link: {type: "string"},body: {type: "string",element: "textarea"},replies: {type: "array",items: {$ref: "post",inline: true}}},owned: true,presets: ["crud"]},functions: {get: typeof get,getAll: typeof getAll,remove: typeof remove,insert: typeof insert},exposedFunctions: {get: true,getAll: true,remove: true,insert: true}}
export declare const post: postCollection & {item: SchemaWithId<postCollection["description"]>}
export declare type Post = SchemaWithId<typeof post.description>
export declare const extendPostCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof post["description"]>) => unknown
            }
          }>(collection: Pick<TCollection, keyof Collection>) => ExtendCollection<typeof post,TCollection>
