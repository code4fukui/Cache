const path = "temp/cache";

await Deno.mkdir(path, { recursive: true });

export const fetchJSON = async (url, key) => {
  const fn = path + "/" + key + ".json";
  try {
    const p = await Deno.readTextFile(fn);
    if (p) {
      return JSON.parse(p);
    }
  } catch (e) {
  }
  const json = await (await fetch(url)).json();
  await Deno.writeTextFile(fn, JSON.stringify(json));
  return json;
};

export const Cache = {
  fetchJSON,
};
