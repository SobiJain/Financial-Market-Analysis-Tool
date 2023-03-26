from abc import ABC
import requests

class FetchData(ABC):

    def sendKey(self):
        return "7J8RXR1KX04UITEM"

    def getData(self, key):
        url = f'https://www.alphavantage.co/query?function={self.component}&symbol={key}{self.params}&apikey={self.sendKey()}'
        print(url)
        r = requests.get(url)
        data = r.json()
        return data


