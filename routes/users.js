var express = require('express');
var router = express.Router();
var johnSongs = [
  {
    url:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2FEminem%20.mp3?alt=media&token=bf4c247b-ac24-46a8-90df-70a1f1fc9bfa",
    title: "loose yourself"
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fdre.mp3?alt=media&token=bce5d598-d944-4e45-a602-1533d2e6d5ff",
    title: "still"

  }
]
/* GET users listing. */
router.get('/john', function(req, res, next) {
  res.json({
    firstName:"John",
    lastName:"Doe",
    bio: "Un artiste est un individu faisant œuvre, cultivant ou maîtrisant un art, un savoir, une technique, et dont on remarque entre autres la créativité, la poésie, l'originalité de sa production, de ses actes, de ses gestes.",
    imgs:{
      profile:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fme.png?alt=media&token=d03bc167-3fed-44fd-9714-39c1f9227348",
      wallpaper:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fjohn-wallpaper.jpg?alt=media&token=92569a63-18a0-48a7-8a1a-26e7d693a62f"
    },
    johnSongs
  });
});

module.exports = router;
