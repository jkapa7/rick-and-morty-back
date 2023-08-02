const getAllChars = async (req, res) => {
  try {
    const result = await axios(`https://rickandmortyapi.com/api/character/`);

    const character = {
      id: result.id,
      name: result.name,
      species: result.species,
      status: result.status,
      origin: result.origin,
      gender: result.gender,
      image: result.image,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json("Not found", error);
  }
};
