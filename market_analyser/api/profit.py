from . import combined

class Profit(combined.FetchData):
    def __init__(self) -> None:
        self.component = "INCOME_STATEMENT"
        self.params = ""