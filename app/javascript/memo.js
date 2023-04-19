const buildHTML = (XHR)=>{
//buildHTMLという変数にXHRを引数とする関数を代入
  const item = XHR.response.post;
  //XHRというオブジェクトのレスポンスをitemに代入
  //postsコントローラーのcreateアクションにrender json: {post: post}
  //postというキーと投稿されたメモの内容が紐付いている。
  const html = `
  <div class = "post">
    <div class = "post-date">
      投稿日時:${item.created_at}
    </div>
    <div class = "post-content">
      ${item.content}
    </div>
  </div>`;
  return html;
  //buildHTMLの返り値にconst htmlで定義したhtml変数を指定
};


function post(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click",(e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    //formというidを持つ要素を取得
    const formData = new FormData(form);
    // フォーム入力された値を取得
    const XHR = new XMLHttpRequest();
    //XHRという変数にXMLH~~オブジェクトを生成して格納
    XHR.open("POST","/posts",true);
    //openでリクエストの内容を指定。("HTTPメソッド","パス","非同期のONOFF")
    XHR.responseType = "json";
    //データフォーマットをjson形式で返してね、ということ
    XHR.send(formData);
    XHR.onload = ()=>{
      if(XHR.status != 200){
        alert(`Error${XHR.status}:${XHR.statusText}`);
        //HTTPステータスコードが正常(=200)でないとき
        //ダイアログボックスにステータスコード=数字と対応するメッセージを表示
        return null;
        //返す値が存在しない=nullだと明示することで処理を中断する
      };
      const list = document.getElementById("list");
      //idがlistの要素を変数listに格納
      const formText = document.getElementById("content");
      console.log(formText.value);
      
      list.insertAdjacentHTML("afterend",buildHTML(XHR));
      //list要素の直後にbuildHTML(XHR)を挿入する
      formText.value="";
      //formTextの中身を空にする
    };
  });
};

window.addEventListener('load',post);