# federal_register.py
Web-API for [federalregister.gov](https://www.federalregister.gov) website which is the official journal of the federal government of the United States that contains government agency rules, proposed rules, and public notices

## Example
```JavaScript
async function main() {
	const { FederalRegister } = require("./federal_register.js")
	const federalRegister = new FederalRegister()
	const agencies = await federalRegiste.getAgencies()
	console.log(agencies)
}

main()
```
