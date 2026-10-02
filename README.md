# CG Key Site (GitHub Pages)

제일 단순한 **키 입력 → 로드 코드 지급** 페이지입니다.

## 1. 설정

1. `app.js` 열기
2. 아래 두 값 바꾸기
   - `scriptUrl` → 실제 스크립트 raw URL  
     예: `https://raw.githubusercontent.com/아이디/저장소/main/script.lua`
   - `discordInvite` → Discord 초대 링크
3. `keys.json` 에 키 추가/삭제

```json
{
  "keys": [
    { "key": "CG-XXXX-XXXX-XXXX", "expires": "2027-01-01" }
  ]
}
```

## 2. GitHub Pages 올리기

1. GitHub에서 **새 저장소** 만들기 (Public)
2. 이 폴더 파일 전부 업로드  
   (`index.html`, `style.css`, `app.js`, `keys.json`)
3. **Settings → Pages**
4. Source: **Deploy from a branch**
5. Branch: `main` / folder: `/ (root)` → Save
6. 1~2분 뒤:  
   `https://아이디.github.io/저장소이름/`

## 3. 테스트

- 데모 키: `CG-DEMO-0001-TEST`
- 성공하면 로드 코드가 나오고 **복사** 가능

## 주의

- GitHub Pages는 **정적**이라 `keys.json` 이 공개됩니다.
- 진짜 보안(루아머급)은 별도 서버/백엔드가 필요합니다.
- 이건 **배포·테스트용 최소 버전**입니다.
