class FederalRegister {
	constructor() {
		this.api = "https://www.federalregister.gov/api/v1"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
		}
	}

	async getDocument(documentNumber) {
		const response = await fetch(
			`${this.api}/documents/${documentNumber}.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async searchAllDocuments(perPage = 20, page = 1, fields = null, order = null, conditionsTerm = null) {
		let url = `${this.api}/documents.json?per_page=${perPage}&page=${page}`
		if (fields) {
			url += `&fields=${fields}`
		}
		if (order) {
			url += `&order=${order}`
		}
		if (conditionsTerm) {
			url += `&conditions[term]=${conditionsTerm}`
		}
		const response = await fetch(
			url, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getDocumentsGroupedByFaceT(faceT = "daily", conditionsTerm = null) {
		let url = `${this.api}/documents/facets/${faceT}`
		if (conditionsTerm) {
			url += `?conditions[term]=${conditionsTerm}`
		}
		const response = await fetch(
			url, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getPublicInspectionDocument(documentNumber) {
		const response = await fetch(
			`${this.api}/public-inspection-documents/${documentNumber}.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCurrentPublicInspectionDocument() {
		const response = await fetch(
			`${this.api}/public-inspection-documents/current.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async searchAllPublicInspectionDocuments(conditionsAvailableOn, perPage = 20, page = 1, fields = null, order = null, conditionsTerm = null) {
		let url = `${this.api}/public-inspection-documents.json?per_page==${perPage}&page=${page}&conditions[available_on]=${conditionsAvailableOn}`
		if (fields) {
			url += `&fields=${fields}`
		}
		if (order) {
			url += `&order=${order}`
		}
		if (conditionsTerm) {
			url += `&conditions[term]=${conditionsTerm}`
		}
		const response = await fetch(
			url, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAgencies() {
		const response = await fetch(
			`${this.api}/agencies`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getParticularAgencies(slug, federalRegisterId) {
		const response = await fetch(
			`${this.api}/agencies/${slug}?id=${federalRegisterId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {FederalRegister}
