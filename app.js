'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = Hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {
  await server.register(require('inert'));
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './client/build'
        }
    }
});
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});



// the songs and pictures  stored in firebase cloud storage , the urls are hardcoded
var johnTracks = [
    {
      url:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2FEminem.ogg?alt=media&token=a70e963b-9072-4b72-a409-7cc5082a77b0",
      title: "Loose yourself"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fdre.ogg?alt=media&token=67c52050-c349-4ec7-bf28-8f1a47553128",
      title: "Still"
  
    }
  ]
  var janeTracks = [
    {
      url:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjane%2FZaho%20-%20Cest%20Chelou%20(Clip%20Officiel%5D).ogg?alt=media&token=41defec4-ab56-4b69-9d8a-d16dbc01f70e",
      title: "Cest chelou"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjane%2FZaho%20-%20Je%20Te%20Promets%20(Clip%20Officiel).ogg?alt=media&token=91cbc8d2-842d-4793-9e1b-61cce379250f",
      title: "Je te promets"
  
    }
  ]
server.route({
    method: 'GET',
    path: '/users/john',
    handler: (request, h) => {

        return {
            firstName:"John",
            lastName:"Doe",
            bio: "Un artiste est un individu faisant œuvre, cultivant ou maîtrisant un art, un savoir, une technique, et dont on remarque entre autres la créativité, la poésie, l'originalité de sa production, de ses actes, de ses gestes.",
            imgs:{
              profile:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fme.png?alt=media&token=d03bc167-3fed-44fd-9714-39c1f9227348",
              wallpaper:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fjohn-wallpaper.jpg?alt=media&token=92569a63-18a0-48a7-8a1a-26e7d693a62f"
            },
            songs: johnTracks
          };
    }
});
server.route({
    method: 'GET',
    path: '/users/jane',
    handler: (request, h) => {

        return {
            firstName:"Jane",
            lastName:"Doe",
            bio: "Un artiste est un individu faisant œuvre, cultivant ou maîtrisant un art, un savoir, une technique, et dont on remarque entre autres la créativité, la poésie, l'originalité de sa production, de ses actes, de ses gestes.",
            imgs:{
              profile:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjohn%2Fme.png?alt=media&token=d03bc167-3fed-44fd-9714-39c1f9227348",
              wallpaper:"https://firebasestorage.googleapis.com/v0/b/noirdoor-7d63d.appspot.com/o/artists%2Fjane%2Fnick-karvounis-142187-unsplash-min.jpg?alt=media&token=6d5a91e7-e07a-4f91-9099-699c3db2917d"
            },
            songs: janeTracks
          };
    }
});



init();