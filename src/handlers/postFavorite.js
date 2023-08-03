module.exports = async (req, res) => {
  const { character } = req.body;

  try {
    const newCharacter = await res.status(200).json(character);
  } catch (error) {}
  res.status(400).send(error.message);
};
