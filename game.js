var nama="";
var peran="";


if (nama==="") {
	console.log("nama tidak boleh kosong");
}

else if (nama) {
	console.log("Halo," +nama+ " selamat datang di proxitya");
}

else if (peran==="") {
	console.log("silahkan pilih peran untuk memulaik game");
}

else if (peran==="Ksatria") {
	console.log("Ksatria," +nama+ "kamu dapat menggunakan pedang untuk menyerang nya");
}

else if (peran==="Tabib") {
	console.log("Tabib," +nama+ "kamu dapat mengobati teman kamu yang terluka");
}


else if (peran==="Penyihir") {
	console.log("Penyihir," +nama+ "kamu dapat mengunakan sihir untuk membantu teman mu");
}

else if (nama==="" && peran) {
	console.log("Harap nama di isi untuk memulai game");
}
