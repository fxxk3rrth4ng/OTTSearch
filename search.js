function filter() {
	var value, name, item, i;

	value = document.getElementById("value").value.toUpperCase();
	item = document.getElementsByClassName("item");

	for (i = 0; i < item.length; i++) {
		name = item[i].getElementsByClassName("name")[0];
		if (name.innerHTML.toUpperCase().indexOf(value) > -1) {
			item[i].style.display = "";
		} else {
			item[i].style.display = "none";
		}
	}
}
