# 김상민 포트폴리오

![image](https://github.com/kimssangman/react_portfolio/assets/136281131/1b7f2d54-6fa5-4889-bec4-f7750f31c812)


-   배포 URL : https://kimssangman.github.io/react_portfolio/

</br>
</br>

## 프로젝트 소개

김상민의 포트폴리오입니다.

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

- 스크롤 시 섹션 전체가 이동하는 효과를 주어 사용자 경험을 향상시켰습니다.
- 헤더 메뉴를 클릭 시 해당 섹션으로 이동하게 만들어 사용자 경험을 향상시켰습니다.
- 다양한 디바이스와 다양한 환경에 유연하게 대응하는 UI, 즉 반응형 웹으로 만들었습니다.

**[Home]**

- 접속 초기화면으로 타이핑하는 효과를 주어 시선을 끌게 만들었습니다.

![image](https://github.com/kimssangman/react_portfolio/assets/136281131/1b7f2d54-6fa5-4889-bec4-f7750f31c812)

</br>
</br>

**[About]**

- About Me 화면으로 간략한 자기소개 페이지입니다.

![image](https://github.com/kimssangman/react_portfolio/assets/136281131/4c744a3d-7519-4a75-b2b7-105b4ab7cf7e)

</br>
</br>

**[Skills]**

- Skills 화면으로 제가 사용할 수 있는 기술을 소개하는 페이지입니다.

![image](https://github.com/kimssangman/react_portfolio/assets/136281131/0227b881-7949-4be4-be7c-55ddb23263a5)

</br>
</br>

**[Project]**

- Projects 화면으로 경력사항에 대해서 소개하는 페이지입니다.
- Slider를 사용하여 한 번에 하나의 프로젝트에 집중할 수 있도록 디자인하였습니다.
- Slider를 사용하여 현재 보고 있는 섹션을 제외한 부분은 불투명처리를 하여 가독성을 높이고 인터랙티브한 사용자 경험을 제공하였습니다.
- Slider를 누르면 해당 프로젝트의 사이트에 방문할 수 있습니다.

![image](https://github.com/kimssangman/react_portfolio/assets/136281131/e9ca28a1-2cbb-4545-8719-31efde18dbf7)

</br>
</br>

**[Contact]**

- Contact 화면으로 이메일주소와 깃허브 바로가기를 제공하는 페이지입니다.

![image](https://github.com/kimssangman/react_portfolio/assets/136281131/fa802ef7-3bcf-46a8-9419-46a1debe4a71)

</br>
</br>

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
