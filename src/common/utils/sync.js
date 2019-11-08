import config from '@/config'
export default (url, type='get', async=false) => {
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(xmlobj){
	};
	xmlhttp.open(type,config.host+url,async);
	xmlhttp.send(null);
	return JSON.parse(xmlhttp.responseText);
}