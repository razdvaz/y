let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let autorization = require('./autorization');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {});

app.post('/phone', function (req, res) {
	async function sendResponse(phoneNumber){
		try{
			let answer = await autorization.sendNumber(phoneNumber);
			console.log(answer.headers['set-cookie'])
			res.send(answer);
		}
		catch(err){
			console.log('err: ', err);
			res.send({'status': 'err', 'body': 'err'});
		}
	}
	sendResponse(req.body.phoneNumber)
});

app.listen(3000, () => {console.log('Start on port 3000!')});