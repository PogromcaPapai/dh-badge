from datauri import DataURI
import os

if __name__ == '__main__':
    for i in os.listdir('dangers'):
        with open(f'server/dangers_uri/{i.removesuffix(".png")}.txt', 'w', encoding ='utf8') as file:
            file.write(DataURI.from_file(f'dangers/{i}')) 