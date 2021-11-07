export function storeQRCode(qrCode: any) {
	if (qrCode.attributes) {
		qrCode = { id: qrCode.id, ...qrCode.attributes };
	} else {
		qrCode = { ...qrCode };
	}
	localStorage.setItem('id', qrCode.id);
}

export function getStoredQRCode() {
	return {
		id: localStorage.getItem('id')
	};
}

export function clearQRCode() {
	localStorage.clear();
}
