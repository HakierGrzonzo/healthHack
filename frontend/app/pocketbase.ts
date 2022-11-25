import { redirect } from "@remix-run/node";

// pocketbase has some problems for es, so we use commonjs
import PocketBase from "pocketbase/cjs";

export function usePocketBase(): PocketBase {
  return new PocketBase("https://pb.grzegorzkoperwas.site");
}

export function loaderPocketBase(request: any): PocketBase {
  const pb = usePocketBase();
  const cookie = request.headers.get("Cookie");
  if (!cookie) {
    throw redirect("/login", 302);
  }
  pb.authStore.loadFromCookie(cookie);
  if (!pb.authStore.isValid) {
    throw redirect("/login", 302);
  }
  return pb;
}
