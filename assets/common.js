
(function(){
const KAKAO_JS_KEY='e83c98033be5243712ad5f7d1c764e39';
const body=document.body;
const accent=body.dataset.accent||'#1f6ddc',accentDark=body.dataset.accentDark||accent,accentSoft=body.dataset.accentSoft||'#eaf3ff';
document.documentElement.style.setProperty('--accent',accent);document.documentElement.style.setProperty('--accent-dark',accentDark);document.documentElement.style.setProperty('--accent-soft',accentSoft);
const imagePath=body.dataset.image;const imageUrl=body.dataset.imageUrl||new URL(imagePath,window.location.href).href;const pageUrl=body.dataset.pageUrl||window.location.href;const downloadName=body.dataset.download||'result.png';const shareTitle=body.dataset.shareTitle||document.title;const kakaoDescription=body.dataset.kakaoDescription||'Play. Work. Live | BUSAN MODE: ON';
const saveButton=document.getElementById('saveButton'),kakaoButton=document.getElementById('kakaoButton'),instaButton=document.getElementById('instaButton');
if(window.Kakao&&!window.Kakao.isInitialized()){window.Kakao.init(KAKAO_JS_KEY);}
function downloadImage(){const link=document.createElement('a');link.href=imagePath;link.download=downloadName;document.body.appendChild(link);link.click();link.remove();}
async function copyUrlWithMessage(message){try{await navigator.clipboard.writeText(pageUrl);alert(message+'\n\n현재 페이지 주소가 복사되었습니다.');}catch(e){prompt(message+'\n\n아래 주소를 복사해 주세요.',pageUrl);}}
saveButton&&saveButton.addEventListener('click',downloadImage);
kakaoButton&&kakaoButton.addEventListener('click',async function(){if(window.Kakao&&window.Kakao.Share){window.Kakao.Share.sendDefault({objectType:'feed',content:{title:shareTitle,description:kakaoDescription,imageUrl:imageUrl,link:{mobileWebUrl:pageUrl,webUrl:pageUrl}},buttons:[{title:'FIND MY NEXT STATION',link:{mobileWebUrl:pageUrl,webUrl:pageUrl}}]});return;}await copyUrlWithMessage('카카오톡 공유를 불러오지 못했습니다. 카카오톡에 붙여넣어 공유해 주세요.');});
instaButton&&instaButton.addEventListener('click',function(){const isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);if(isMobile){const openedAt=Date.now();window.location.href='instagram://camera';setTimeout(function(){if(Date.now()-openedAt<1800){const goSave=confirm('인스타그램 앱이 바로 열리지 않았어요.\n\n결과 이미지를 저장한 뒤 인스타그램 앱에서 업로드할까요?');if(goSave)downloadImage();}},1200);}else{alert('PC에서는 인스타그램 앱으로 바로 이동하기 어렵습니다.\n결과 이미지를 저장한 뒤 모바일에서 업로드해 주세요.');downloadImage();}});
})();
