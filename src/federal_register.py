from requests import get

class FederalRegister:
	def __init__(self) -> None:
		self.api = "https://www.federalregister.gov/api/v1"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
		}

	def get_document(
			self,
			document_number: str) -> dict:
		return get(
			f"{self.api}/documents/{document_number}.json",
			headers=self.headers).json()

	def get_documents(
			self,
			document_numbers: str) -> dict:
		return get(
			f"{self.api}/documents/{document_numbers}.json",
			headers=self.headers).json()

	def search_all_documents(
			self,
			fields: str = None,
			per_page: int = 20,
			page: int = 1,
			order: str = None,
			conditions_term: str = None) -> dict:
		url = f"{self.api}/documents.json?per_page={per_page}&page={page}"
		if fields:
			url += f"&fields[]={fields}"
		if order:
			url += f"&order={order}"
		if conditions_term:
			url += f"&conditions[term]={conditions_term}"
		return get(
			url, headers=self.headers).json()

	def get_documents_grouped_by_facet(
			self,
			facet: str = "daily",
			conditions_term: str = None) -> dict:
		url = f"{self.api}/documents/facets/{facet}"
		if conditions_term:
			url += f"?conditions[term]={conditions_term}"
		return get(
			url, headers=self.headers).json()


	def get_public_inspection_document(
			self,
			document_number: str) -> dict:
		return get(
			f"{self.api}/public-inspection-documents/{document_number}.json",
			headers=self.headers).json()


	def get_public_inspection_documents(
			self,
			document_numbers: str) -> dict:
		return get(
			f"{self.api}/public-inspection-documents/{document_numbers}.json",
			headers=self.headers).json()

	def get_current_public_inspection_documents(self) -> dict:
		return get(
			f"{self.api}/public-inspection-documents/current.json",
			headers=self.headers).json()

	def search_all_public_inspection_documents(
			self,
			conditions_available_on: str,
			fields: str = None,
			per_page: int = 20,
			page: int = 1,
			order: str = None,
			conditions_term: str = None) -> dict:
		url = f"{self.api}/public-inspection-documents.json?per_page={per_page}&page={page}&conditions[available_on]={conditions_available_on}"
		if fields:
			url += f"&fields[]={fields}"
		if order:
			url += f"&order={order}"
		if conditions_term:
			url += f"&conditions[term]={conditions_term}"
		return get(
			url, headers=self.headers).json()

	def get_all_agency_details(self) -> dict:
		return get(
			f"{self.api}/agencies",
			headers=self.headers).json()

	def get_particular_agency_details(
			self,
			slug: str,
			federal_register_id: int) -> dict:
		return get(
			f"{self.api}/agencies/{slug}?id={federal_register_id}",
			headers=self.headers).json()
