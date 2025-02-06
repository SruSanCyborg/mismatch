import type { PageServerLoad } from "./$types"
import { count } from "../store";
import { get } from 'svelte/store';

export const load: PageServerLoad = async (events) => {
  const token = events.cookies.get("authjs.session-token");
  const val = get(count);
  if (val) {
    events.cookies.set("test", val, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
  }
  const test = events.cookies.get("test");
  return {
    token: token, count: test
  }
}