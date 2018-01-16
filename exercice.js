var fs = require("fs"), path = require("path"); 
var file_name =  
console.log("./ = %s", path.resolve("./"));
console.log("__dirname = %s", path.resolve(__dirname));

var  dirToCreateName = "./monDossier"
if (!fs.existsSync(dirToCreateName))
	{ fs.mkdirSync(dirToCreateName);
	 console.log("le dossier est cree")
	}
else 
console.log("le dossier exite deja")