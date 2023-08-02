const deleteFav = (req, res) => {
  const { id } = req.params;
  const character = fav.find((character) => character.id === Number(id));
  if (character) {
    fav = fav.filter((elememt) => elememt.id !== Number(id));
    res.status(200).end(JSON.stringify(character));
  } else {
    res.status(400).end("este character ya no se encuentra en fav");
  }
};
