const toArray = (value) => {
	let result = [];
	if (Array.isArray(value)) result = value;
	else if (typeof value === 'object')
		result = Object.keys(value).map((key) => value[key]);
	else result.push(value);
	return result;
};
function getObjectById(arr, id) {
	// Periksa apakah array merupakan Proxy
	const dataArr = Array.isArray(arr) ? arr : arr.value;
	return dataArr.find((obj) => obj.id === id);
}
const isPrimitiveArray = (arr) =>
	Array.isArray(arr) && arr.every((item) => typeof item !== 'object');

function buildTextError(message) {
	let result = '';
	if (isPrimitiveArray(message)) {
		result =
			'<ul style="padding:0; padding-left:8px; min-width:250px;max-width:400px">';
		result += message.map((msg) => `<li>${msg}</li>`).join('');
		result += '</ul>';
	} else {
		result = message;
	}
	return result;
}
function replaceObjectById(array, id, newObject) {
	// Mencari indeks objek dengan id yang sesuai
	const index = array.findIndex((item) => item.id === id);

	// Jika objek ditemukan, ganti dengan objek baru
	if (index !== -1) {
		// Gabungkan objek lama dengan objek baru (opsional)
		// array[index] = { ...array[index], ...newObject };
		// atau
		// Ganti sepenuhnya dengan objek baru
		array[index] = newObject;
	}

	return array;
}
function deleteObjectById(array, id) {
	// Mencari indeks objek dengan id yang sesuai
	const index = array.findIndex((item) => item.id === id);

	// Jika objek ditemukan, hapus dari array
	if (index !== -1) {
		array.splice(index, 1); // Menghapus 1 elemen pada indeks yang ditemukan
	}

	return array;
}
export {
	toArray,
	getObjectById,
	isPrimitiveArray,
	buildTextError,
	replaceObjectById,
	deleteObjectById,
};
