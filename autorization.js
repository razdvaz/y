let request = require('superagent');
let phoneUrl = 'https://youla.io/web-api/auth/request_code';

function postBodyGen(phoneNumber){
	let postBody = `-----------------------------188615465766889760519525356
Content-Disposition: form-data; name="phone"

${phoneNumber}
-----------------------------188615465766889760519525356--`;
	return  postBody
}

function sendNumber(phoneNumber){
	return new Promise((resolve, reject) => {
		request
  			.post(phoneUrl)
  			.send(postBodyGen(phoneNumber))
  			.set('Content-Type', 'multipart/form-data; boundary=---------------------------188615465766889760519525356')
  			.end(function(err, res){
  				if (err) reject(err)
  				else resolve(res)
  			});	
	})
}

module.exports.sendNumber = sendNumber;