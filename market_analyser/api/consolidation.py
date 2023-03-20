from . import cashflow, balancesheet, ratios, profile, quarter, profit_loss
import json

data = {"cashflow": cashflow.data, "balancesheet": balancesheet.data, "ratio": ratios.annualROE, "profile": profile.data_profile, "quarter": quarter.data_quarter, "profit_loss": profit_loss.data_profitnloss}

json_obj = json.dumps(data)

