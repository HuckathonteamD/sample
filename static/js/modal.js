// モーダルを表示させる

const addChannelModal = document.getElementById("add-channel-modal");
const deleteChannelModal = document.getElementById("delete-channel-modal");

const addPageButtonClose = document.getElementById("add-page-close-btn");
const deletePageButtonClose = document.getElementById("delete-page-close-btn");

const addChannelBtn = document.getElementById("add-channel-btn");
const deleteChannelBtn = document.getElementById("delete-channel-btn");

const addChannelConfirmBtn = document.getElementById(
  "add-channel-confirmation-btn"
);
const deleteChannelConfirmBtn = document.getElementById(
  "delete-channel-confirmation-btn"
);

// モーダルを開く
// <button id="add-channel-btn">チャンネル追加</button>ボタンがクリックされた時
addChannelBtn.addEventListener("click", () => {
  modalOpen("add");
});
// <button id="delete-channel-btn">削除</button>ボタンがクリックされた時
deleteChannelBtn.addEventListener("click", () => {
  modalOpen("delete");
});

function modalOpen(mode) {
  if (mode === "add") {
    addChannelModal.style.display = "block";
  } else if (mode === "delete") {
    deleteChannelModal.style.display = "block";
  }
}

// モーダル内のバツ印がクリックされた時
addPageButtonClose.addEventListener("click", () => {
  modalClose("add");
});
deletePageButtonClose.addEventListener("click", () => {
  modalClose("delete");
});
function modalClose(mode) {
  if (mode === "add") {
    addChannelModal.style.display = "none";
  } else if (mode === "delete") {
    deleteChannelModal.style.display = "none";
  }
}

// モーダルコンテンツ以外がクリックされた時
addEventListener("click", outsideClose);
function outsideClose(e) {
  if (e.target == addChannelModal) {
    addChannelModal.style.display = "none";
  } else if (e.target == deleteChannelModal) {
    deleteChannelModal.style.display = "none";
  }
}

// チャンネル登録ボタンが押された時
addChannelConfirmBtn.addEventListener("click", addChannel);
function addChannel() {
  // バックエンドにチャンネル登録しに行く処理
}

console.log(deleteChannelConfirmBtn);

// チャンネル削除ボタンが押された時
deleteChannelConfirmBtn.addEventListener("click", deleteChannel);
function deleteChannel() {
  // バックエンドにチャンネルを削除しに行く処理
}