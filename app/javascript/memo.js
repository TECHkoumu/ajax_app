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
  });
};

window.addEventListener('load',post);