from urllib.request import urlopen
import csv

link = "https://disqus.com/api/3.0/threads/listPostsThreaded?limit=50&thread=5167700473&forum=downdetector&order=desc&cursor=1%3A0%3A0&api_key=E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F"

f = urlopen(link)
myfile = f.read()
html = myfile.decode("utf-8")
teste = html.split(':')
text = ''

fbWords = ["for","the","is","a","do","go","its","what","up","of",
 "in", "you","an","if","it","i","and","not","has","my","but","are",
 "to","it's","as","all","im","me","here","have","cuz","each","one",
 "on","can","even","like","say","so","they","just","1","2","3","4","5",
 "6","7","8","9","10","dont","back","did"]

for i in range(len(teste)):
    if teste[i].find('"raw_message"') != -1:
        text += teste[i+1]

text = text.split(" ")

w = open("texto.csv",'w')
w.write('')

with open('texto.csv', 'a', newline='', encoding='utf-8') as csvfile:
    esc = csv.writer(csvfile)
    for row in text:
        if (len(row) < 10):
            if row in fbWords:
                print('')
            else:
                esc.writerow(row)
            

