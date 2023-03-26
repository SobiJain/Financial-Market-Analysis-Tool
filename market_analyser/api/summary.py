from . import combined

class Profile(combined.FetchData):
    def __init__(self) -> None:
        self.component = "OVERVIEW"
        self.params = ""