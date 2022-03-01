###

[JsDoc 정리 Notion](https://economic-brace-cb7.notion.site/JSDOC-a3655405f72a4a029587db6115d50188)

[](https://dahye1013.github.io/crash-jsdoc-custom-template/)

# JSDOC란 무엇인가

- JavaScript 코드에 annotate를 하기 위한 마크업 언어이다.
- JavasScript Api를 명세하기 위한 용도로 사용된다.
  → 즉 JsDoc는 주로 프로그래밍에 코멘트를 달아서 명세도로 사용하기 위함이다.
- 공식문서에서 제공하는 다양한 annotation을 사용하여 코멘트에서 타입을 명시하여 사용한다.

## 설정하기

### vscode 설정하기

1. Global Setting

   - setting.json에서 다음 설정을 추가한다.

   — `"js/ts.implicitProjectConfig.checkJs": true`

2. Local Setting
   - type check 하고 싶을 파일 상단에 `@ts-check` 를 추가한다.

### jsdoc 설치하기

- `npm i -D jsDoc`

### jsdoc.json 설정하기

```json
{
  "plugins": [],
  "recurseDepth": 10,
  "source": {
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "sourceType": "module",
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"]
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false
  }
}
```

→ 공식문서에서 제공하는 기본 세팅

[Configuring JSDoc with a configuration file](https://jsdoc.app/about-configuring-jsdoc.html)

- 내가 사용할 Version

```json
{
  "source": {
    "include": ["src/"],
    "includePattern": ".js$", //js포함된 모두 포함
    "excludePattern": "(node_modules/|docs)_" //module 미포함
  },
  "plugins": ["plugins/markdown"], // 마크업 플러그인 사용
  "templates": {
    "cleverLinks": false, //link사용
    "monospaceLinks": false //link에 monospace 사용
  },
  "opts": {
    "encoding": "utf8",
    "recurse": true, //subfolder 허용
    "destination": "./docs/" //document 생성되는 폴더 지정
  }
}
```

### Pacakage.json

```json
{
  "name": "jsdoc-sample-dahye1013",
  "author": "dahye",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "docs": "jsdoc -c jsdoc.json" //jsdoc config 파일 기준으로 생성
  },
  "keywords": [],
  "license": "ISC",
  "devDependencies": {
    "jsdoc": "^3.6.10"
  },
  "type": "module"
}
```

---

# 타입들

## 기본타입들(Basic)

```jsx
// @ts-check

/**
 * Student Name
 * @type {string}
 */
const studentName = "dahye";
/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97, 76, 89];

/**
 * Todo object
 * @type {{id:string|number, text:string}}
 */
const todo1 = {
  id: "1",
  text: "Hava a good day!!😆",
};

/**
 * Operator plus
 * @param {number} number1 - first number
 * @param {number} number2 = second number;
 * @returns {number} - result of operator
 */
const calculate = (number1, number2) => {
  return number1 + number2;
};
```

## 객체 Instance 선언하는 방법

```jsx
// @ts-check
/**
 * A student
 * @typedef {object} Student
 * @property {number} id - Student Id
 * @property {string} name - Student name
 * @property {string|number} [age] - Studnet age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const Student = {
  id: 1,
  name: "dahye",
  age: "secret",
  isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
  /**
   * @param {Object} personInfo Information about the Person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {string} age Persons age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet - A greeting with the name and age
   * @return {void}
   */
  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
  name: "Dahye Shin",
  age: 0,
});
```

## 모듈(module)

```jsx
/**
 * Calculator module
 * @module calculator
 */

/**
 * Add two numbers
 * @param {number} n1 - frist number
 * @param {number} n2 - second number
 * @returns  {number} - sum of n1 and n2
 */

exports.add = (n1, n2) => n1 + n2;

/**
 * Multiply two numbers
 * @param {number} n1 - frist number
 * @param {number} n2 - second number
 * @returns  {number} - multiply of n1 and n2
 */
exports.multiply = (n1, n2) => n1 * n2;
```

해당 모듈을 사용하고자 하는 곳에서 다음과 같이 사용한다.

→ `const { add } = require("./calculator");`

## 기타

- document를 꾸밀 수 있는 어노테이션들
- 종류가 다양하므로 필요한 것들은 공식문서에서 그때마다 찾아보는 것이 좋다.

```jsx
/**
 * @file index.js is root file for this example app
 * @author Dahye Shin
 * @see {@link https://github.com/dahye1013}
 */
```

---

## Custom - Template

### 용도

템플릿을 Custom하기 위한 용도

### 설정방법

1. node_modules에 jsdoc에서 default 디렉토리를 복사한다.
2. 복사한 default 디렉토리를 루트에 붙여 넣는다.
3. default 디렉토리 명을 custom-template으로 바꾼다.
4. custom-template에 있는 publish.js에 있는 textNode를 원하는대로 바꾼다.

   (나의 경우 jsDoc Dahye Example)

---

## Tutorial

### 용도

API들이 많아지면, 어떤 용도로 사용되는 객체 및 함수인지 기억하기 어렵다. 이를 위한 설명 용도로 사용 할 수 있다.

(특히 모듈과 같은 경우, 용도를 설명하기에 좋아보인다.)

- 모듈에 링크거는 방법
  ```json
  /**
   * Calculator module - See {@tutorial calculator-tutorial}
   * @module calculator
   */
  ```

### 설정방법

1. jsdoc.json에 `"tutorials": "./tutorials"` 설정을 추가한다.
2. src 디렉토리에 tutorials 서브폴더를 생성한다.

   (jsdoc.json에 만든 것과 폴더명 일치 시켜야함)

3. tutorials내부에 `md` 혹은 `html` 확장자로 document를 만든다.

---

### 정보 출처

[JSDoc - Wikipedia](https://en.wikipedia.org/wiki/JSDoc)

[JsDoc - 공식문서](https://jsdoc.app/)

[Working with JavaScript in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/working-with-javascript)

[Documentation - JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

[Documenting Your JavaScript | JSDoc Crash Course](https://www.youtube.com/watch?v=YK-GurROGIg)
