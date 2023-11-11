export function splitPath(pathname: string): string[] {
  if (pathname.charAt(0) === "/") pathname = pathname.substring(1);
  return pathname.split("/");
}

export function joinPath(pathparts: string[]): string {
  return "/" + pathparts.filter((p) => p !== "").join("/");
}
