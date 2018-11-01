// ==UserScript==
// @name            Add Nicopedia Menu
// @namespace       Add Nicopedia Menu
// @description     ニコニコ大百科の記事右側にメニューを追加します
// @author          sotoba
// @match           https://dic.nicovideo.jp/*
// @version         0.0.3-20181101
// @homepageURL     https://github.com/SotobatoNihu/AddNicopediaMenu
// @license         MIT License
// ==/UserScript==

const MENUID = 'nicopedia-menu'

//取り急ぎの実装なのでレイアウトはあとでちゃんとしたものを作ります
const drowMenu=(word)=>{
    const menuElem=document.getElementById(MENUID)
    menuElem.innerHTML=`
</br>
ニコニコ大百科で検索する：</br>
<a href="https://www.nicovideo.jp/search/${word}">「${word}」でキーワード検索</a></br>
<a href="https://www.nicovideo.jp/tag/${word}">「${word}」でタグ検索</a></br>
</br>
キーワードで検索する:</br>
<a href="http://www.google.co.jp/search?hl=ja&q=${word}">Google</a> 
<a href="http://ja.wikipedia.org/wiki/${word}"><img style="vertical-align: middle;" alt="Wikipedia" src="/oekaki/17668.png" width="17" height="17"></a>  
<a href="http://search.yahoo.co.jp/search?ei=UTF-8&p=${word}"><img style="vertical-align: middle;" alt="Yahoo!Japan" src="/oekaki/17680.png" width="17" height="17"></a>  
<a href="http://find.2ch.net/?BBS=2ch&IE=UTF-8&TYPE=TITLE&STR=${word}"> 2ch </a> /
<a href="http://seiga.nicovideo.jp/search/illust/tag/${word}"><img style="vertical-align: middle;" alt="ニコニコ静画" src="/oekaki/122809.png" width="17" height="17"></a> 
<a href="http://www.pixiv.net/search.php?s_mode=s_tag&word=${word}"><img style="vertical-align: middle;" alt="Pixiv" src="/oekaki/109891.png" width="17" height="17"></a> /
</br>
<a href="http://ichiba.nicovideo.jp/search/az/${word}"><img style="vertical-align: middle;" alt="ニコニコ市場" src="/oekaki/30296.png" width="17" height="17"></a> 
<a href="http://com.nicovideo.jp/search/${word}?mode=s"><img style="vertical-align: middle;" alt="ニコニココミュニティ" src="/oekaki/9203.png" width="17" height="17"></a> 
<a href="http://www.niconicommons.jp/search/${word}"><img style="vertical-align: middle;" alt="ニコニ・コモンズ" src="/oekaki/16255.png" width="17" height="17"></a>  /
</br>
</br>
最近更新された…</br>
<a href="https://dic.nicovideo.jp/m/u/a/1-"> 単語記事 </a> / <a href="https://dic.nicovideo.jp/m/u/v/1-"> 動画記事 </a> /  <a href="https://dic.nicovideo.jp/m/u/i/1-"> 商品記事 </a>  /  
</br>
<a href="https://dic.nicovideo.jp/m/u/u/1-"> ユーザ記事 </a> / <a href="https://dic.nicovideo.jp/m/u/c/1-"> コミュ記事 </a> /  <a href="https://dic.nicovideo.jp/m/u/l/1-"> 生放送記事 </a>  / 
</br> 
<a href="https://dic.nicovideo.jp/m/n/res/1-"> 書き込み </a> / <a href="https://dic.nicovideo.jp/m/n/oekaki/1-"> お絵カキコ </a> /  <a href="https://dic.nicovideo.jp/m/n/mml/1-"> ピコカキコ </a>  /  
</br>
</br>
 <a href="https://dic.nicovideo.jp/">トップ</a> / <a href="https://dic.nicovideo.jp/p/my/">マイページ</a> / <a href="https://dic.nicovideo.jp/p/logout/">ログアウト</a> </br>
</br>
    `
}


// document.addEventListener('DOMContentLoaded', function () {
window.onload = function () {

    if (document.getElementById(MENUID) === null) {
        const elm = document.createElement('div')
        elm.id = MENUID
        elm.style.height = 'auto'
        elm.style.backgroundColor='#FFF'
        elm.style.border='1px solid #000'
        document.getElementById('right-column').insertAdjacentElement('afterbegin', elm)
    }
    const word = document.getElementById('search-box').value
    const modifyWord=word.replace(' ','_')
    drowMenu(modifyWord)
}
// })

