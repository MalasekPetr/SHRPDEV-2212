import { spfi, SPFx } from "@pnp/sp";
import { ILab03 } from "../models";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export class Data {
    public getData(ctx: any): Promise<ILab03[]> {
        let data: Promise<ILab03[]> = new Promise<ILab03[]>((resolve, reject) => {
            const sp = spfi().using(SPFx(ctx));
            sp.web.lists.getByTitle('Lab03').items
            .expand(`Editor`)
            .select(`*,Editor/Title`)()
            .then((results: ILab03[]) => {
              resolve(results);
            })
            .catch((error) => {
              console.error(error);
              reject('error')
            })
        })
        return data;
    }
}