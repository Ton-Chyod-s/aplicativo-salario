import requests
from datetime import datetime

requisicao = requests.get("https://api-salario.cyclic.app/salario/2650")
requisicao_dict = requisicao.json()
print(requisicao_dict)