---
title: node 爬虫
category: 技术
tags:
  - node
  - 爬虫
date: 2021-3-21
---
> https://pptr.dev/
> https://cheerio.js.org/


## 最简单

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

## 步骤
1. 访问网页
2. 下载网页
3. 分析网页
4. 提取信息
5. 保存数据

```js

const puppeteer = require('puppeteer');

(async function() {
  // 打开浏览器
  const browser = await puppeteer.launch({
    slowMo: 500,
    devtools: false
  })
  const page = await browser.newPage();
  console.log('开启页面')
  await page.goto('http://image.baidu.com/')
  await page.focus('#kw');
  await page.keyboard.sendCharacter('saber 1920*1080')
  await page.click('.s_newBtn')
  page.on('load', async function() {
    const result = await page.evaluate(async () => {
      const images = await document.querySelectorAll('.main_img');
      console.log(images, 'sign')
    })
  })
})()
```