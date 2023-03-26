from . import combined

class Price(combined.FetchData):
    def __init__(self) -> None:
        self.component = "TIME_SERIES_INTRADAY"
        self.params = "&interval=60min"