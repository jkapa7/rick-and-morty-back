module.exports = async (req, res) => {
  const { detailId } = req.params;
  try {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );
    const characterDetail = result.data;
    const character = {
      id: characterDetail.id,
      image: characterDetail.image,
      name: characterDetail.name,
      gender: characterDetail.gender,
      species: characterDetail.species,
      status: characterDetail.status,
      origin: characterDetail.origin,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json("Not found", error);
  }
};
