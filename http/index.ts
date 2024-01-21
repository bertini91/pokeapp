export const base_url = "https://pokeapi.co/api/v2";
export default async function getPokemons(params: string = "") {
  try {
    console.log("URL === ", `${base_url}/${params}`)
    const res = await fetch(`${base_url}/${params}`);
    const data: Promise<any> = res.json();
    return Promise.resolve(data);
  } catch (error) {
    // return error;
    return Promise.reject(error);
  }
}
