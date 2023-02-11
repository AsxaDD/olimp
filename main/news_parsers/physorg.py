from bs4 import BeautifulSoup
import requests
from main.news_parsers.summorising_text_func import summarisingText
from main.models import EngNews


def physorg_parser():
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }

    req1 = requests.get("https://phys.org/science-news/mathematics/", headers=headers)
    soup1 = BeautifulSoup(req1.text, "lxml")
    links = []

    for link in soup1.find_all('a'):

        if link.has_attr('class'):
            if link["class"][0] == "news-link":
                links.append(link.get("href"))


    for link in links:
        req = requests.get(link, headers=headers)
        soup = BeautifulSoup(req.text, 'lxml')


        h1 = soup.find_all("h1", {"class": "text-extra-large"})[0].getText()



        text = ''
        for t in soup.find_all('p'):
            if not(t.has_attr('class')):
                text += (' ' + t.getText())
        summary = summarisingText(text)


        date = soup.find_all("p", {"class": ["text-uppercase", "text-low"]})

        a = soup.find_all("div", {"class": "article__info-item"})
        img1 = a[0].findChildren('p')
        date = img1[0].getText()
        date = date.replace(' ', '')

        months = {'Jan': "1", 'Feb': "2", 'Mar': "3", 'Apr': "4", 'May': "5", 'Jun': "6", 'Jul': "7", 'Aug': "8", 'Sep': "9",  'Oct': "10",  'Nov': "11",  'Dec': "12"}
        article_date = {
            'year': '2022',
            'month': '',
            'day': '',
        }


        img = ""
        try:
            a = soup.find_all("figure", {"class": "article-img"})
            img1 = a[0].findChildren('img')
            img = img1[0].get('src')
        except:
            continue



        if len(summary) >= 5:
            article = EngNews(
                title=h1,
                content=summary,
                date=article_date,
                link=link,
                pic=img,
                tag='math',
            )

            article.save()

