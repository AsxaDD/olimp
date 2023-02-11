from bs4 import BeautifulSoup
import requests

def chekingACMPTasks(user_id):
    headers = {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    req = requests.get("https://acmp.ru/index.asp?main=user&id=" + str(user_id), headers=headers)
    src = req.text

    soup = BeautifulSoup(src, "lxml")
    arr = []

    for link in soup.find_all('a'):
        if "?main=task&id_task=" in link.get("href"):
            arr.append(link.getText())

    return arr

print(chekingACMPTasks(403815))