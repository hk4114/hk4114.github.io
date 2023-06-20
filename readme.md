```sh
git config --local --unset http.proxy
git config --local --unset https.proxy

ipconfig /flushdns

git config --local http.proxy http://127.0.0.1:23457
git config --local https.proxy http://127.0.0.1:23457
```