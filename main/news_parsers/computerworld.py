from bs4 import BeautifulSoup
import requests
from main.models import EngNews

from main.news_parsers.summorising_text_func import summarisingText


def computerworld_parser():
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }

    req1 = requests.get("https://www.computerworld.com/", headers=headers)
    soup1 = BeautifulSoup(req1.text, "lxml")
    links = []

    for link in soup1.find_all('a'):
        if link.has_attr('class'):
            if link["class"][0] == "well-img-inner":
                links.append("https://www.computerworld.com/" + link.get("href"))


    article_date = {}

    for link in links:
        req = requests.get(link, headers=headers)
        soup = BeautifulSoup(req.text, 'lxml')
        h1 = soup.find_all('h1')[0]

        if h1.getText() != 'computerworld' and h1.getText() != 'Page not found':

            text = ''
            for t in soup.find_all('p'):
                if not(t.has_attr('class')):
                    text += (' ' + t.getText())

            summary = summarisingText(text)

            date = soup.find_all("span", {"class": "pub-date"})
            date = date[0].get("content")
            article_date = {
                'year': date[:4],
                'month': date[5:7],
                'day': date[8:10],
            }

            try:
                fig = soup.find_all("figure", {"class": "hero-img"})
                img = fig[0].findChildren("img")[0]["data-original"]
            except:
                continue

            if len(summary) >= 5:
                article = EngNews(
                    title=h1.getText(),
                    content=summary,
                    date=article_date,
                    link=link,
                    pic=img,
                    tag='it'
                )

                article.save()
