//npm install is-dir-empty
const isDirEmpty = require('is-dir-empty');

let axios = require('axios');
let FormData = require('form-data')

var fs = require('fs');






var getDir = "/Users/f/Dev/photoDir/";



const sendPostRequest = async (formData) => {
	
	try {
		const resp = await axios.post('http://192.168.0.178:3000/uploadFile', formData);
		console.log(resp.data);
	} catch (err) {
		// Handle Error Here
		console.error(err);
	}
};


// /Users/f/Dev/photoDir tu zamien na sciezke w malinie

	
let main = async () => {

while(true) {
	
		
		
			

			const myPromise = new Promise((resolve, reject) => {

				
				var files = fs.readdirSync(`${getDir}`);
				console.log(files);
				var arrayLength = files.length;
				var counter = 0;
				if(arrayLength == 0){
					resolve()
				}

			files.forEach(item => {
				fs.readFile(`${getDir}${item}`, function(err, data){
					console.log("bloto3");
					let form = new FormData();
				form.append("image", data, item);
				
				
				sendPostRequest(form).then(()=> {
					console.log("bloto4");
					fs.unlinkSync(`${getDir}${item}`);
					counter++
					if(counter == arrayLength){
						resolve()
					}
					
				}).catch(()=> {
					counter++
					if(counter == arrayLength){
						resolve()
					}
				})
			
			
				
			})
			})
		});
			await myPromise
  };
}
main(). then(()=> {

})
