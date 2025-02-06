import { json } from "@sveltejs/kit";
// import { _set } from "../+page.server.js";

export async function POST({ request }) {
    const data = await request.json();
    return json({cookie: data.username });
}
