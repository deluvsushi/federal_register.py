# federal_register.py
Web-API for [federalregister.gov](https://www.federalregister.gov) website which is the official journal of the federal government of the United States that contains government agency rules, proposed rules, and public notices

## Example
```python
import federal_register
federal_register = federal_register.FederalRegister()
document_info = federal_register.get_document(document_number="")
print(document_info)
```
