# Backend is using Hapi
# The front end is linked to the backend using a proxy 

I did use firebase to host my images and audio files , but unfortunatly I was not able to fetch the data from the firebase cloud storage . I did hardcode the urls and sent them as an object for /users/john route.

#start the server 
nodemon inside the main directory  starts the hapi server on port 4000
cd client/ yarn start to start the client on port 3000