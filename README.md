# 김상민 포트폴리오

![image](https://github.com/kimssangman/blog/assets/136281131/ab58e85d-f2f7-4041-bf88-d00385781fee)

-   배포 URL : https://kimssangman.github.io/react_portfolio/

</br>
</br>

## 프로젝트 소개

1. **알고리즘 기록을 위한 게시판** : 프로그래밍 알고리즘 문제를 풀거나 공부한 내용을 기록하는 게시판입니다.
2. **운세페이지 및 복권정보 페이지** : 네이버 운세 정보와 동행복권의 당첨 번호를 크롤링하여 제공하는 페이지입니다.
3. **개인 맛집 리뷰 페이지** : 방문한 맛집에 대한 사진과 후기를 작성하고 공유할 수 있는 페이지입니다. 여러가지 검색 필터를 통하여 다른 이용자들과 공유할 수 있습니다.
4. **영어 단어 학습 페이지** : 등록한 영어 단어가 랜덤으로 나와 사용자는 해당 단어의 뜻을 맞추는 학습 페이지입니다.

</br>
</br>

## 1. 개발 환경

-   React 18.2.0
-   Visual Studio
-   Github

</br>
</br>

## 2. 폴더 구조 설계

```
react_portfolio/
  ├── public/
  │   ├── index.html
  │   ├── favicon.ico
  │   └── images/
  │       └── image.png...
  │
  ├── src/
  │   ├── assets/
  │   │   └── images/
  │   │       └── image.png...
  │   ├── components/
  │   │   ├── About/
  │   │   │   ├── About.js
  │   │   │   └── About.css
  │   │   │
  │   │   ├── Contact/
  │   │   │   ├── Contact.js
  │   │   │   └── Contact.css
  │   │   │
  │   │   ├── Header/
  │   │   │   ├── Header.js
  │   │   │   └── Header.css
  │   │   │
  │   │   ├── Intro/
  │   │   │   ├── Intro.js
  │   │   │   └── Intro.css
  │   │   │
  │   │   ├── NotFoundPage/
  │   │   │   ├── NotFoundPage.js
  │   │   │   └── NotFoundPage.css
  │   │   │
  │   │   ├── Project/
  │   │   │   ├── Project.js
  │   │   │   └── Project.css
  │   │   │
  │   │   └── Skills/
  │   │       ├── Skills.js
  │   │       └── Skills.css
  │   │
  │   ├── hooks/
  │   │   ├── useAnimation.js
  │   │   ├── useMenu.js
  │   │   └── useScrollNavigation.js
  │   │
  │   ├── pages/
  │   │   └── HomepageLayout/
  │   │       ├── HomepageLayout.js
  │   │       └── HomepageLayout.css
  │   ├── index.js
  │   ├── index.css
  |   ├── App.js
  |   └── App.css
  │
  ├── .env
  ├── .gitignore
  ├── package.json
  └── README.md
```

</br>
</br>

## 3. 기능 정리

**[초기화면]**

-   서비스 접속 초기화면으로 관리자 계정으로 로그인하거나 비회원으로 로그인이 가능합니다.

![image](https://github.com/kimssangman/blog/assets/136281131/0a36c94e-9a81-48eb-b26a-912dfe422b2e)

</br>
</br>

**[로그인]**

-   로그인 버튼 클릭 시 아이디 또는 비밀번호가 일치하지 않을 경우에는 경고 문구가 나타나며, 로그인에 성공하면 홈 피드 화면으로 이동합니다.
-   로그인 성공 시 사용자 JWT이 발행되어 사용자 로그인 세션을 유지하고, 세션이 만료될 시 재로그인 요청을 합니다.

![image](https://github.com/kimssangman/blog/assets/136281131/23cf0e4f-e96a-4560-9435-95bc5026df30)

</br>
</br>

**[로그아웃]**

-   상단의 햄버거 메뉴를 클릭 후 나타나는 모달창의 로그아웃 버튼을 클릭하여 로그아웃을 합니다.
-   로그아웃 성공 시 사용자 JWT를 안전하게 삭제합니다.

![image](https://github.com/kimssangman/blog/assets/136281131/ad0eff7d-ac35-4b5d-9f40-0b514d148904)

</br>
</br>

**[ 1. 알고리즘 기록을 위한 게시판 ]**

-   글 작성 버튼을 눌러 글쓰기 페이지로 진입 후 값을 입력합니다.
-   게시글을 클릭하면 해당 게시글의 상세 페이지로 이동합니다.
-   상세 페이지에서 해당 게시글을 수정할 수 있습니다.
-   게시글은 10개씩 보여지며 버튼을 눌러 해당 페이지로 이동할 수 있습니다.
-   키워드를 입력하여 찾고 싶은 게시글을 검색할 수 있습니다.
-   현재 관리자에게만 글쓰기, 수정, 삭제를 할 수 있는 권한이 있습니다.

![image](https://github.com/kimssangman/blog/assets/136281131/1bcccc53-df41-41ba-a6ab-cb7c498b0d22)
![image](https://github.com/kimssangman/blog/assets/136281131/e34d934e-a14e-46f9-9478-25007ef760af)

</br>
</br>

**[ 2. 운세페이지 및 복권정보 페이지 ]**

-   오늘의 운세 또는 로또 탭을 클릭하여 기능을 변경할 수 있습니다.
-   네이버 오늘의 운세 페이지에서 크롤링하여 가져온 오늘의 운세를 확인할 수 있습니다.
-   쥐 또는 토끼를 클릭하면 해당 동물에 맞는 운세를 확인할 수 있습니다.
-   로또 탭에서는 동행복권 페이지에서 크롤링하여 가져온 스피또 회차, 잔여수량 확인과 로또 번호를 직접 뽑아볼 수 있습니다.

![image](https://github.com/kimssangman/blog/assets/136281131/c21e67cf-1f82-4fbf-b8e1-3d742a4fb689)
![image](https://github.com/kimssangman/blog/assets/136281131/3e69733e-f049-41d4-a35d-5a3cf2e40bcc)

</br>
</br>

**[ 3. 개인 맛집 리뷰 페이지 ]**

-   검색 필터를 통하여 찾고 싶은 음식 종류를 검색할 수 있습니다.
-   게시글을 클릭하면 해당 음식에 대한 여러 종류의 사진, 위치, 코멘트를 확인할 수 있습니다.
-   리뷰 추가 버튼을 눌러 지역, 유형, 별점, 가게명, 위치, 사진(최대 5장), 코멘트를 작성할 수 있습니다.
-   현재 관리자에게만 수정, 삭제를 할 수 있는 권한이 있습니다.

![image](https://github.com/kimssangman/blog/assets/136281131/0a284549-6cac-4dea-867d-85e49e6ac946)
![image](https://github.com/kimssangman/blog/assets/136281131/59102a43-7019-44e3-932f-1aba27eb9cc6)

</br>
</br>

**[ 4. 영어 단어 학습 페이지 ]**

-   단어를 추가, 추가된 단어를 편집할 수 있습니다.
-   단어에 맞는 뜻을 고르고, 정답 혹은 오답일 시 상단에 팝업창이 나타납니다.

![image](https://github.com/kimssangman/blog/assets/136281131/9a803977-b1b5-413f-8343-6995982052c0)

</br>
</br>

## 5. 개선 목표

-   이미지 최적화 : preFetch를 이용한 렌더링 우선순위 높임, 스켈레톤 UI 사용
-   쿼리 최적화 : 불러올 게시글이 여러개일 경우 스크롤을 내릴 때마다 새로운 개시글을 불러와 사용자 경험을 높인다.
    ![image](https://github.com/kimssangman/blog/assets/136281131/4823e61b-2cb0-4b4f-939e-403317ab5193)

</br>
</br>

## 5. 커맨드

### npm

```
npm i
```

### pm2

```
sudo npm i pm2 -g
```

```
pm2 start npm --name "kimsangminServer" -- run "start"

pm2 list
pm2 kill
pm2 delete 0
```

### buld

```
npm run build
```

### start

```
npm run dev
```

### build start

```
npm run start
```

</br>
</br>

## 6. 참고

### SWR 참고

https://velog.io/@gene028/NextJS-%EC%A7%80%EB%8F%84-%EA%B0%9C%EB%B0%9C-2-SWR%EB%A1%9C-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

</br></br>

### 파일 업로드 시 테스트 환경에서는 잘 되는데 빌드 시 413 (Request Entity Too Large) 뜰 때

nginx 문제로 nginx 설정에서 용량제한을 늘려야한다.

경로 sudo vi /etc/nginx/nginx.conf

```
http 부분에 아래 client_max_body_size 64M 추가


http {
    client_max_body_size 64M;
}
```

저장 후 nginx 재시작

```
sudo nginx -s reload
```

</br></br>

### ec2 인스턴스 npm i 시 먹통일 때

스왑 파일 생성하여 메모리 늘리기

```
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap  /swapfile
swapon /swapfile
swapon  --show
free -h
```

</br></br>

### 웹페이지 성능 측정

https://pagespeed.web.dev/

# 배포 방법

### 1. 라이브러리 설치

```
npm install gh-pages --save-dev
```

### 2. package.json 수정

```
"name": "react_portfolio",
    "version": "0.1.0",
    "private": true,
    "homepage": "https://kimssangman.github.io/react_portfolio", <- 여기
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-icons": "^5.2.1",
        "react-router-dom": "^6.22.3",
        "react-scripts": "5.0.1",
        "swiper": "^11.1.4",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "predeploy": "npm run build",    <- 여기
        "deploy": "gh-pages -d build",   <- 여기
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
```

### 3. 배포

```
npm run deploy
```

### 4. 깃허브에서 수정

-   배포할 저장소 > settings > pages > Branch에 main으로 되어 있는 걸 gh-pages로 수정 후 저장

### 5. 완료

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
