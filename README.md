# flaming-avenger

## install

```bash
$ npm install -g gulp bower
$ npm install -d
$ bower install
$ gulp polymer
```

## fix polymer issue

Open `src/bower_components/font-roboto/roboto.html`, change the path in the url from `//fonts.googleapis.com[...]` to `https://fonts.googleapis.com[...]`

## run dev

run `src/index.html` in a browser

## build and run

```bash
$ gulp build
```

run `dist/index.html` in a browser