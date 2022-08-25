# portfolio2

Personal Portfolio page written in next.js and Djnago

http://zoloto.cx.ua/

Successor of the [portfolio](https://github.com/Denis-Source/portfolio) project

***

## About
The project is separated into two parts:
- [Django](https://www.djangoproject.com/) based backend with [DRF](https://www.django-rest-framework.org/);
- [next.js](next.js) frontend [react](https://ru.reactjs.org/) framework using [TypeScript](https://www.typescriptlang.org/) programming language and [scss](https://sass-lang.com/) styling modules.

***

### Features
- [Django](https://www.djangoproject.com/) based [admin](https://docs.djangoproject.com/en/4.1/ref/contrib/admin/) located at: https://api.zoloto.cx.ua/admin that allows full control of the web application content;
- Both single and collection type models that are used to store data with a [tinyMCE](https://www.tiny.cloud/) rich text editor;
- [REST](https://ru.wikipedia.org/wiki/REST) endpoinds with nested serializers;
- [Telegram](https://core.telegram.org/bots/api) based form forwarding;
- SEO attributes customization;
- Fast loading speeds on account on [next.js](next.js) (prerendered pages and image optimizations);
- light and dark themes;
- advanced form validation;
- adaptive design;
***
### Used libraries and frameworks
#### Backend
- `Django 4.1`
- `jazzmin-jazzmin`
- `django-solo`
- `pillow`
- `djangorestframework`
- `requests`

The backend is based on [Django](https://docs.djangoproject.com/en/4.1/releases/4.1/) of 4.1 version with a [DRF](https://www.django-rest-framework.org/), as it provides ease of use of [REST](https://ru.wikipedia.org/wiki/REST) interfaces. To allow full content control, both repetitive (e.g `porfolio cases`, `about tabs`  and `contact cards`) and individual models (e.g.`hero section`, `footer` and `header`) can be changed via the admin page.

Some of the models can be edited with a [tinyMCE](https://django-tinymce.readthedocs.io/en/latest/) rich text editor field.

The individuality of the corresponding models are preserved via the `django-solo` [SingletonModel](https://pypi.org/project/django-solo/).

Some of the model use media in a form of images, so the `Pillow` library is used.

Form message is stored and then sent via a telegram bot using `requests` library. The message model creation is intercepted using [Django signals](https://docs.djangoproject.com/en/4.1/topics/signals/).

***
### Frontend
- `react`
- `react-dom`
- `next`
- `next-themes`
- `framer-motion`

The frontend is written using [next.js](https://nextjs.org/) [react](https://ru.reactjs.org/) framework with a [server side rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) aproach. The project itself is split in a multiple of function based components.

Dark and Light themes are provided by [`next-themes`](https://www.npmjs.com/package/next-themes).
To avoid complex code, [`framer-motion`](https://www.framer.com/motion/) is used to animate projects filtering.

Project is written in [TypeScript](https://www.typescriptlang.org/) and [SASS](https://sass-lang.com/), styling is heavely inspired yet developed from scratch by [dewi](https://bootstrapmade.com/dewi-free-multi-purpose-html-template/) bootstrap template.

The form is validated using `onChange` listeners and regular expressions, for example to validate a name the following `re` is used: `NAME_REGEX = /.{3,120}/;`.

***

## Installation
```sh
git clone https://github.com/Denis-Source/portfolio2
```

### Backend
```sh
cd backend/

python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

python manage.py runserver
```

### Frontend
```sh
cd frontend/

npm install
npm run dev

# Or
npm run build
npm run start
```

***

## Tests
### Desktop LightHouse test
![https://i.ibb.co/QCvC99g/image.png](https://i.ibb.co/QCvC99g/image.png)
### Mobile LightHouse test
![https://i.ibb.co/0V028xj/image.png](https://i.ibb.co/0V028xj/image.png)
### GMetrix
![https://i.ibb.co/XCz0tqF/image.png](https://i.ibb.co/XCz0tqF/image.png)

