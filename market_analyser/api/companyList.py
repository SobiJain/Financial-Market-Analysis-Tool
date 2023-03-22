import csv
import json

nse = []
comp = []

with open('listing_status.csv', mode ='r')as file:
  csvFile = csv.reader(file)
  for lines in csvFile:
        nse.append(lines[0])
        comp.append(lines[1])

nse_to_comp = {"nse": nse, "comp": comp}
json_obj = json.dumps(nse_to_comp)