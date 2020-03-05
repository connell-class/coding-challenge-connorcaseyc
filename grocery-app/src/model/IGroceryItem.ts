import { IGroceryList } from "./IGroceryList";

export interface IGroceryItem {
    gi_id: number,
    item: string,
    itemtype: any,
    g_items: IGroceryList[]
}