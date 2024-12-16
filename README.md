## 프로젝트 설명

### 개발 환경

- typescript
- react 18
- react-query
- zustand
- vite
- react-router-dom
- tailwind

### 주요 페이지 및 디렉토리 구조

- 로그인 페이지 : pages/LoginPage.tsx
- API 목록 페이지 : pages/ListPage.tsx
- API 호출 내역 페이지 : pages/HistoryPage.tsx

```
   src
   ├─components // 컴포넌트
   │  ├─common // 공통 컴포넌트
   │  ├─history
   │  ├─list
   │  ├─login
   │  └─ui
   ├─hooks
   ├─pages // 페이지
   ├─providers
   ├─react-query
   ├─routes // 라우트 설정
   ├─services // api
   ├─store // zustand
   ├─styles
   ├─types
   └─utils
```

## 프로젝트 실행

- https://github.com/monam2/dozn-task 를 clone
  ```
  cd dozn-task
  npm install
  npm run dev
  ```

## 개발 전 고려사항 및 메모

### 서비스 이해

- 어드민 사용자가 이용할 수 있는 api를 카드 리스트로 보여주고 호출할 수 있는 서비스
- 로그인 페이지와 호출 가능한 API 목록 페이지, 호출한 API 목록 페이지(히스토리)로 구성

### 0. 전체 개발 설정

1. 로컬 개발 환경이 여의치 않아 Next가 아닌 React로 개발
2. main을 배포 브랜치로 생각하고, develop 브랜치를 default 개발 브랜치로 둔다. feature/#00로 브랜치를 생성하고 develop에 merge하기
3. React Query를 이용해 서버 상태 관리
4. 전역 상태 관리는 zustand, DB가 없으니 persist middleware - localstorage를 이용해 api 히스토리 관리

### 1. Login 페이지

1. 로그인 api 호출 시 응답 data는 accessToken과 로그인 횟수
2. 로그인 요청 시 ID는 이메일이 아님
3. 토큰 저장은 웹 스토리지밖에 안되나?
   - 상태로 들고 있으면 새로고침시 날아감
   - 클로저로 은닉화 역시 새로고침시 날아감
   - 로컬보단 세션 스토리지가 좋을듯
   - zustand persist middleware도 괜찮은데 전역 상태 자체를 쓸 일이 많지 않을 것 같다.
4. 토큰까서 exp(만료 시간) 체크 해야 함. 만료 시 reftresh나 reissue는 따로 없고 로그아웃
5. 로그아웃 api는 따로 없음. 그냥 정보만 날리면 된다.

### 2. API 목록 조회 페이지 + 스크래핑 데이터 호출 후 응답 팝업 페이지

1. 사용자가 로그인한 후 처음 보여지는 페이지
   - 2page를 메인으로 하고, interceptor로 토큰/로그인 정보 없으면 로그인 화면으로 보내면 어떨까
2. 조회한 api들을 table로 보여줘야 함. 호출 버튼도 있어야 함. 호출 누르면 해당 api 호출하고 팝업.
3. 페이지네이션 적용해야 함. 10행 씩.

### 3. 호출 목록 조회 페이지 + 스크래핑 데이터 호출에 대한 응답 팝업 페이지

1. 사용자가 호출한 api 리스트를 보여주는 페이지. 따로 히스토리 조회 api는 없어서 로컬 스토리지에 저장하는게 좋을 듯 하다.
   - 호출 시간, API 이름, API 코드, 모듈 코드, 모듈 이름 + 북마크 여부, 활성화 여부(?), 타임스탬프
2. 북마크, 활성화된 카드는 항상 맨위. 활성화 / 최신,오래된 순 정렬 기능
3. 응답 값을 팝업을 띄워서 보여주기
