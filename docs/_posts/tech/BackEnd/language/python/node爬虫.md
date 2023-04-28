---
title: node 爬虫
category: 技术
tags:
  - node
  - 爬虫
date: 2021-3-21
---

```js
const cheerio = require('cheerio')
const fs = require('fs')
const axios = require('axios')

const movies = [];
const total = 250;
const url = 'https://movie.douban.com/top250';

async function getMovieData(start = 0) {
  
  const res = await axios.get(`${url}?start=${start}`)
  const $ = cheerio.load(res.data)
  $('li .item').each(function (index, element) {
    const title = $('.title', this).text()
    const star = $('.info .bd .rating_num', this).text()
    const pic = $('.pic img', this).attr('src')
    movies.push({ title, star, pic })
  })
  const next = start + 25;
  if (next < total) {
    await getMovieData(next)
  } else {
    console.log(`共${movies.length}条`)
    fs.writeFile('./files.json', JSON.stringify(movies, null, 2),
      { flag: 'w' },
      function (err, data) {
        if (err) {
          throw err
        }
        console.log('文件保存成功');
      })
  }
}

getMovieData()
```