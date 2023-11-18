export function splitPath(pathname: string): string[] {
  return pathname
    .slice(
      pathname.at(0) === "/" ? 1 : 0,
      pathname.at(-1) === "/" ? -1 : undefined,
    )
    .split("/");
}

export function joinPath(pathparts: string[], absolute = true): string {
  return absolute ? "/" : "" + pathparts.filter((p) => p !== "").join("/");
}

export function getAncestorPaths(
  path: string | string[],
  absolute = true,
): string[] {
  const pathparts = typeof path === "string" ? splitPath(path) : path;
  const pre = absolute ? "/" : "";
  return pathparts.map((v, i) => pre + pathparts.slice(0, i + 1).join("/"));
}
