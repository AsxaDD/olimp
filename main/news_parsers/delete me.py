months = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9,  'Oct': 10,  'Nov': 11,  'Dec': 12}
raw_date = 'August10,2022 '
raw_month = raw_date[1:4]
raw_day = raw_date[8:10]
raw_year = raw_date[12:17]

print(raw_day, months[raw_month], raw_year)