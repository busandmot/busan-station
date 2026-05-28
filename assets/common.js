
(function () {
  const body = document.body;
  const accent = body.dataset.accent || '#1f6ddc';
  const accentDark = body.dataset.accentDark || accent;
  const accentSoft = body.dataset.accentSoft || '#eaf3ff';
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-dark', accentDark);
  document.documentElement.style.setProperty('--accent-soft', accentSoft);

  const imagePath = body.dataset.image;
  const downloadName = body.dataset.download || 'result.png';
  const shareTitle = body.dataset.shareTitle || document.title;
  const shareText = body.dataset.shareText || document.title;
  const saveButton = document.getElementById('saveButton');
  const kakaoButton = document.getElementById('kakaoButton');
  const instaButton = document.getElementById('instaButton');

  function downloadImage() {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  async function nativeShare(preface) {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        // user cancelled; ignore
      }
      return true;
    }
    return false;
  }

  async function copyUrlWithMessage(message) {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert(message + '\n\n현재 페이지 주소가 복사되었습니다.');
    } catch (e) {
      prompt(message + '\n\n아래 주소를 복사해 주세요.', window.location.href);
    }
  }

  saveButton && saveButton.addEventListener('click', downloadImage);

  kakaoButton && kakaoButton.addEventListener('click', async function () {
    const shared = await nativeShare();
    if (!shared) {
      await copyUrlWithMessage('이 기기에서는 카카오톡 직접 공유가 제한됩니다. 카카오톡에 붙여넣어 공유해 주세요.');
    }
  });

  instaButton && instaButton.addEventListener('click', async function () {
    downloadImage();
    setTimeout(async function () {
      const shared = await nativeShare();
      if (!shared) {
        alert('인스타그램은 브라우저에서 직접 업로드가 제한됩니다.\n\n1) 방금 저장한 이미지를 확인하고\n2) 인스타그램 앱에서 스토리/게시물로 업로드해 주세요.');
      }
    }, 350);
  });
})();
