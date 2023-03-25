from abc import ABC
import requests

class FetchData(ABC):

    def sendKey(self):
        return "8YYV8RAUMPILRH5D"

    def getData(self, key):
        url = f'https://www.alphavantage.co/query?function={self.component}&symbol={key}{self.params}&apikey={self.sendKey()}'
        print(url)
        r = requests.get(url)
        data = r.json()
        return data

class Profile(FetchData):
    def __init__(self) -> None:
        self.component = "OVERVIEW"
        self.params = ""

class Profit(FetchData):
    def __init__(self) -> None:
        self.component = "INCOME_STATEMENT"
        self.params = ""

class Quarter(FetchData):
    def __init__(self) -> None:
        self.component = "EARNINGS"
        self.params = ""

class Cashflow(FetchData):
    def __init__(self) -> None:
        self.component = "CASH_FLOW"
        self.params = ""
        
class BalanceSheet(FetchData):
    def __init__(self) -> None:
        self.component = "BALANCE_SHEET"
        self.params = ""

class Price(FetchData):
    def __init__(self) -> None:
        self.component = "TIME_SERIES_INTRADAY"
        self.params = "&interval=60min"

    # def getData(key):
    #     url = "https://alpha-vantage.p.rapidapi.com/query"

    #     querystring = {"interval":"60min","function":"TIME_SERIES_INTRADAY","symbol":{key},"datatype":"json","output_size":"compact"}

    #     headers = {
    #         "X-RapidAPI-Key": "029f431e7dmsh6ccf5eda027b181p1eb6b9jsnc4081335c716",
    #         "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com"
    #     }

    #     response = requests.request("GET", url, headers=headers, params=querystring)
    #     return response



