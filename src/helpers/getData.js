export const getData = async(url) => {
  const resp = await fetch(url);
  const { results, info } = await resp.json();

  const characters = results.map((character) => ({
    info: {
      prev: info.prev,
      next: info.next,
    },
    id: character.id,
    image: character.image,
    name: character.name,
    species: character.species,
    status: character.status,
    location: character.location.name,
  }));
  return characters;
};
