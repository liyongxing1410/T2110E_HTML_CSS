function TimKiem (arr,x) {
	for(var i = 0; i< arr.length; i++) {
		if(arr[i] == x);
		return true;
	}
}

function Vietlot() {
	var lucky = [];
	do {
		var n = parseInt(Math.random()*46);
		if(Timkiem(lucky, n)){
			lucky.push(n);
		}
	} while(lucky.length < 6)

	var vietlot = [];
	for(var i = 0; i < 5; i++) {
		vietlot[i] = []
		do {
			var n = prompt("Nhap 1 so trong khoang 0 - 45");
			if(!TimKiem(vietlot[i], n)) {
				vietlot[i].push(n);
			}
		} while (vietlot[i].length < 6)
	}

	var count = 0;
	for (var i = 0; i < lk.length; i++) {
		alert("Chuc mung");
		count++;
		break;
	}
	if(count == 0) {
		alert('Chuc ban may man lan sau')
	}
}

function SoSanh2Arr (lk, vl) {
	var count = 0;
	for (var i = 0; i < lk.length; i++) {
		if(TimKiem(vl, lk[i])) {
			count++;
		}
	}
	if(count == lk.length) return true;
	return false;
}

Vietlot();