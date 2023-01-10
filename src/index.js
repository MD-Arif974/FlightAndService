const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');


const setupStartServer = async () =>{
       const app = express();

       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({extended:true}));

      
         console.log(process.env.PORT);
      app.listen(PORT, async() =>{
              console.log(`Serve is started at ${PORT}`);
      })

}

setupStartServer();