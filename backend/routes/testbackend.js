var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

// const app = express();
// app.use(bodyParser.json());

// app.post('/api/send-and-receive-string', (req, res) => {
//   const string = req.body.string;
//   const responseString = `Received string "${string}" from frontend`;
//   res.send(responseString);
// });


router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router;