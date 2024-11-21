import { file as original } from "aeria"
import { Collection,SchemaWithId,ExtendCollection,Context } from "aeria"
export declare type fileCollection = ExtendCollection<typeof original,{description: {$id: "file",properties: {}}}>
export declare const file: fileCollection & {item: SchemaWithId<fileCollection["description"]>}
export declare type File = SchemaWithId<typeof file.description>
export declare const extendFileCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof file["description"]>) => unknown
            }
          }>(collection: Pick<TCollection, keyof Collection>) => ExtendCollection<typeof file,TCollection>
