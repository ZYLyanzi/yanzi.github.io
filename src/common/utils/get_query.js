export default (name) => {
	var reg = new RegExp("[?&]{1}"+name+"=[^\\s&#]+");
	var r = reg.exec(window.location.href);
	if(r == null) return false
	var content = r[0].split('=')[1];
	return content == null || content == "" || content == "undefined" ? '' : content;
}