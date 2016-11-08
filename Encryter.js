// encript and decript string

function encript(password){
	var encripted = btoa(password);
  console.log(encripted);
}

function decript(password){
	var decripted = atob(password);
  console.log(decripted);
}

encript('elephant');
decript('ZWxlcGhhbnQ=');