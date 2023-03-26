from . import combined
class Quarter(combined.FetchData):
    def __init__(self) -> None:
        self.component = "EARNINGS"
        self.params = ""