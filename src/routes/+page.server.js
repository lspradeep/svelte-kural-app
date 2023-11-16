import { getRandomKuralApi } from "$lib/apis.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
   const kural =  await getRandomKuralApi();
   return {
    kural: kural,
   };
}