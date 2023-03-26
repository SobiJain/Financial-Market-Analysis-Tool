from . import combined
class Cashflow(combined.FetchData):
    def __init__(self) -> None:
        self.component = "CASH_FLOW"
        self.params = ""