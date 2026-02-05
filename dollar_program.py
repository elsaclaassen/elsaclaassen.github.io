import re 

file = open("all-OANC.txt", "r")
example = "i have $2 which is crazy because i want about five million dollars so i $6 need like at least 1000 dollars to feel good about that goal"
matches = re.findall(r"\d+", file)
print(matches)





file.close()