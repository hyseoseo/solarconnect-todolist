# 프리온보딩 Assignment7 - [솔라커넥트]

<br>

## 1. 구현 사항
- 주어진 베이스 코드를 기반으로 한 Todo List 서비스 구현
- 완성하기
  - Todo List 화면에 현재 시간 표시
  - Todo 항목 완료 버튼을 누르면 Todo 완료 표시
- 기능 추가
  - Todo 항목 추가시 완료 목표일을 기입하는 기능
  - 완료 목표일을 Todo 항목에 표시
  - (요구사항 이외 추가) 현재 시간이 완료 목표일 당일이거나 지난 날짜일 경우 완료 목표일 부분을 다른 색으로 표시 
- 예외 추가
  - Todo 항목에 할 일을 기입하지 않으면 기입을 요청하는 메시지를 표시
  - 완료 목표일이 현재 날짜보다 이른 날짜일 때 오늘 이후 날짜를 입력해달라는 메시지를 표시
- 버그 수정
  - 휴지통 버튼을 누르면 Todo 항목을 리스트에서 삭제하도록 수정
  - localStorage에서 "todos" 항목을 load하여 창을 새로고침해도 저장된 할 일 목록을 불러올 수 있도록 수정

<br>

## 2. 배포 주소
https://clever-darwin-b7dc32.netlify.app

<br>

## 3. 설치 및 시작하는 법
이 프로젝트는 Create React App으로 생성되었습니다.
```
npm i
```
프로젝트에 필요한 npm packages, node_modules를 다운로드합니다
```
npm run start
```
개발모드로 웹 환경을 시작하는 명령어입니다.
```
npm run build
```
빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다. (cra 기본설정)

<br>

## 4. 기타 사항 
개선될 수 있는 부분 / 로그인 관련 작성 내용 (노션 링크)

https://dark-jingle-c17.notion.site/Assignment7-Todo-List-0944c0473001424a94dbbd702b3db5cf

<br>

## 5. 참고
- TS 문법 : https://joshua1988.github.io/ts/intro.html
- Ant Design: https://ant.design/components/date-picker/, https://ant.design/components/modal/
- TS 컴파일시 moment.js 에러 관련 : https://stackoverflow.com/questions/55070643/cannot-invoke-an-expression-whose-type-lacks-a-call-signature-using-moment 
- npm install시 TS 관련 오류 : http://blog.wafrat.com/fixing-2/
