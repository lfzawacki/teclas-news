import { tempFile as original } from "aeria"
import { Collection,SchemaWithId,ExtendCollection,Context } from "aeria"
export declare type tempFileCollection = ExtendCollection<typeof original,{description: {$id: "tempFile",properties: {}}}>
export declare const tempFile: tempFileCollection & {item: SchemaWithId<tempFileCollection["description"]>}
export declare type TempFile = SchemaWithId<typeof tempFile.description>
export declare const extendTempFileCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof tempFile["description"]>) => unknown
            }
          }>(collection: Pick<TCollection, keyof Collection>) => ExtendCollection<typeof tempFile,TCollection>
