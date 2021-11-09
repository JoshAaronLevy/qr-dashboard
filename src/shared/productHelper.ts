export function storeProduct(product: any) {
	if (product.attributes) {
		product = { id: product.id, ...product.attributes };
	} else {
		product = { ...product };
	}
	localStorage.setItem('id', product.id);
}

export function getStoredProduct() {
	return {
		id: localStorage.getItem('id')
	};
}

export function clearProduct() {
	localStorage.clear();
}
