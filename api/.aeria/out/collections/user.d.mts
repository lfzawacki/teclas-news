import { user as original } from "aeria"
import { Collection,SchemaWithId,ExtendCollection,Context } from "aeria"
export declare type userCollection = ExtendCollection<typeof original,{description: {$id: "user",properties: {roles: {type: "array",items: {enum: ["root","supervisor","customer"]}}}}}>
export declare const user: userCollection & {item: SchemaWithId<userCollection["description"]>}
export declare type User = SchemaWithId<typeof user.description>
export declare const extendUserCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof user["description"]>) => unknown
            }
          }>(collection: Pick<TCollection, keyof Collection>) => ExtendCollection<typeof user,TCollection>
