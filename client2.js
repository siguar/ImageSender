const chokidar = require('chokidar');

var getAdress = "192.168.3.30:3000";
let axios = require('axios');
let FormData = require('form-data')
var fs = require('fs');
var path = require('path');

const sendPostRequest = async (formData) => {
	
	try {
		const resp = await axios.post(`http://${getAdress}/uploadFile`, formData);
		console.log(resp.data);
		return resp.data;
	} catch (err) {
		// Handle Error Here
		console.error(err);
	}
};

// One-liner for current directory
chokidar.watch('/home/pi/pics/').on('add', async (inputPath) => {
	await new Promise(resolve => setTimeout(resolve, 1`))
  const data = await fs.promises.readFile(inputPath);
	console.log("bloto3");
	let form = new FormData();
	form.append("image", data, path.basename(inputPath));			
	const result = await sendPostRequest(form);
	console.log(result);
	if(result === "ok"){ //warunek czy połączenie jest prawidłowe
		fs.unlinkSync(inputPath);
	}
});