import type { PageServerLoad } from "./$types"
import { change } from "../../store";

export const load: PageServerLoad = async (events) => {
    events.cookies.delete("test", { path: '/' });
    change(null);
    return ;
}