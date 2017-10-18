import lxml
from lxml import html
import requests

page = requests.get('http://www.pgatour.com/stats/stat.02674.html')
tree = html.fromstring(page.content)

evens = tree.xpath('//tr[@class="even"]/text()')
odds = tree.xpath('//tr[@class="odd"]/text()')

#name = tree.xpath('//td[@class="player-name"]//a/text()')

# def remove_from_list(list):
#   player_names = [name.replace('\xa0', ' ') for name in list]
#   return player_names

#stats = tree.xpath('//td[@class="hidden-small hidden-medium"]/text()')

print(evens)
print(odds)
