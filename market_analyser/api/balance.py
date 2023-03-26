from . import combined
class BalanceSheet(combined.FetchData):
    def __init__(self) -> None:
        self.component = "BALANCE_SHEET"
        self.params = ""