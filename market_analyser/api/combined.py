from abc import ABC
import requests

class FetchData(ABC):

    def sendKey(self):
        return "3AL8AAIOSNI9YS1Q"

    def getData(self, key):
        url = f'https://www.alphavantage.co/query?function={self.component}&symbol={key}&apikey={self.sendKey()}'
        r = requests.get(url)
        data = r.json()
        return data

class Profile(FetchData):
    def __init__(self) -> None:
        self.component = "OVERVIEW"

class Profit(FetchData):
    def __init__(self) -> None:
        self.component = "INCOME_STATEMENT"

class Quarter(FetchData):
    def __init__(self) -> None:
        self.component = "EARNINGS"

class Cashflow(FetchData):
    def __init__(self) -> None:
        self.component = "CASH_FLOW"
        
class BalanceSheet(FetchData):
    def __init__(self) -> None:
        self.component = "BALANCE_SHEET"



