//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/grind-automations'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/grind-automations/'}),
);
const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
