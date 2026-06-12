[busan-station 다국어 폴더 구조 업로드 패키지]

목적
- 영어 / 일본어 / 중국어 간체 / 중국어 번체용 URL을 먼저 생성하기 위한 임시 구조입니다.
- 아직 번역 이미지가 없어도 28개 URL을 먼저 살려서 QR 생성이 가능합니다.
- 현재 각 언어 페이지는 임시로 한글 결과 이미지를 참조합니다.
- 추후 언어별 이미지가 완성되면 같은 URL을 유지한 채 이미지만 교체하면 됩니다.

업로드할 항목
- en 폴더
- ja 폴더
- zh-cn 폴더
- zh-tw 폴더
- assets 폴더
- images 폴더

GitHub 업로드 방법
1. busan-station 레포 접속
2. Add file > Upload files
3. 위 항목들을 드래그해서 업로드
4. Commit message: Add multilingual landing page structure
5. Commit changes 클릭

URL 구조
- /en/blue.html
- /ja/blue.html
- /zh-cn/blue.html
- /zh-tw/blue.html

QR 생성 추천
- QR_URL_28_UTM_recommended.txt 파일의 URL로 QR을 생성하는 것을 추천합니다.
- UTM이 붙어 있어 나중에 GA4 연결 시 언어/색상별 유입을 확인하기 쉽습니다.

주의
- 현재는 URL 선점/QR 생성용 임시 페이지입니다.
- 실제 외국어 결과 이미지가 나오면 en/ja/zh-cn/zh-tw별 이미지와 썸네일로 교체해야 합니다.
