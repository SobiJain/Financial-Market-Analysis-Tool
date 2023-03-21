import requests, csv
import json

# url_list = "https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=8YYV8RAUMPILRH5D"
# req = requests.get(url_list)
# url_content = req.content
# csv_file = open("company.csv", 'wb')
# csv_file.write(url_content)
# csv_file.close()

nse = []
comp = []

with open('listing_status.csv', mode ='r')as file:
  csvFile = csv.reader(file)
  for lines in csvFile:
        nse.append(lines[0])
        comp.append(lines[1])

nse_to_comp = {"nse": nse, "comp": comp}
json_obj = json.dumps(nse_to_comp)

