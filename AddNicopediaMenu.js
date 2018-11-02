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


//取り急ぎの実装なのでレイアウトはあとでちゃんとしたものを作ります

const MENUID = 'nicopedia-menu'
const drowMenu=(word,width)=>{
    const modifyWord=word.replace(' ','_')
    const menuElem=document.getElementById(MENUID)
    menuElem.innerHTML=`
<img src="/img/l_box_t.gif" class="border" style="width: ${width}px">
<ul>
    <li>
        <a href="https://www.nicovideo.jp/search/${modifyWord}">「${modifyWord}」でキーワード検索 <img style="vertical-align: middle;" alt="niconico" src="/oekaki/22690.png" width="15" height="15"></a></br>
        <a href="https://www.nicovideo.jp/tag/${modifyWord}">「${modifyWord}」でタグ検索 <img style="vertical-align: middle;" alt="niconico" src="/oekaki/22690.png" width="15" height="15"></a>
    
    <li>外部サイトで検索</br>
        <a href="http://www.google.co.jp/search?hl=ja&q=${word}">Google</a> 
        <a href="http://ja.wikipedia.org/wiki/${word}"><img style="vertical-align: middle;" alt="Wikipedia" src="/oekaki/17668.png" width="17" height="17"></a>  
        <a href="http://search.yahoo.co.jp/search?ei=UTF-8&p=${word}"><img style="vertical-align: middle;" alt="Yahoo!Japan" src="/oekaki/17680.png" width="17" height="17"></a>  
        <a href="http://find.2ch.net/?BBS=2ch&IE=UTF-8&TYPE=TITLE&STR=${word}"> 2ch </a> /
        <a href="http://seiga.nicovideo.jp/search/illust/tag/${word}"><img style="vertical-align: middle;" alt="ニコニコ静画" src="/oekaki/122809.png" width="17" height="17"></a> 
        <a href="http://www.pixiv.net/search.php?s_mode=s_tag&word=${word}"><img style="vertical-align: middle;" alt="Pixiv" src="/oekaki/109891.png" width="17" height="17"></a> 
        <a href="http://search.pipa.jp/?KWD=${word}">2じげん</a>
        </br>
        <a href="http://ichiba.nicovideo.jp/search/az/${word}"><img style="vertical-align: middle;" alt="ニコニコ市場" src="/oekaki/30296.png" width="17" height="17"></a> 
        <a href="http://com.nicovideo.jp/search/${word}?mode=s"><img style="vertical-align: middle;" alt="ニコニココミュニティ" src="/oekaki/9203.png" width="17" height="17"></a> 
        <a href="http://www.niconicommons.jp/search/${word}"><img style="vertical-align: middle;" alt="ニコニ・コモンズ" src="/oekaki/16255.png" width="17" height="17"></a>  /
    </li>
    <li>50音全記事 
         <a href="https://dic.nicovideo.jp/m/a/a"> 単語記事 </a> / <a href="https://dic.nicovideo.jp/m/a/l"> 生放送記事 </a> 
    </li>
    <li>最近更新された 
        <a href="https://dic.nicovideo.jp/m/u/a/1-"> 単語記事 </a> / <a href="https://dic.nicovideo.jp/m/u/v/1-"> 動画記事 </a> /  <a href="https://dic.nicovideo.jp/m/u/i/1-"> 商品記事 </a>  /  
        </br>
        <a href="https://dic.nicovideo.jp/m/u/u/1-"> ユーザ記事 </a> / <a href="https://dic.nicovideo.jp/m/u/c/1-"> コミュ記事 </a> /  <a href="https://dic.nicovideo.jp/m/u/l/1-"> 生放送記事 </a>  / 
        </br> 
        <a href="https://dic.nicovideo.jp/m/n/res/1-"> 書き込み </a> / <a href="https://dic.nicovideo.jp/m/n/oekaki/1-"> お絵カキコ </a> /  <a href="https://dic.nicovideo.jp/m/n/mml/1-"> ピコカキコ </a>  /  
    </li>
    <li>
         <a id="backgroud_default" style="display: none;" href="" onClick="maincss('/nd2.css');return false;">背景をデフォルトに戻す</a>
         <a id="backgroud_mokume" style="" href="" onClick="maincss('/ndx.css');return false;">背景を木目にする</a>
     </li>
     <li>
         <a id="use_flashpico" style="display: none;" href="" onClick="pikoplayer('flash');return false;">古いピコカキコ(flash版)を使う</a>
         <a id="use_htmlpico" style="" href="" onClick="pikoplayer('html5');return false;">新しいピコカキコ(html5版)を使う</a>
     </li>
    <li>
        <a href="https://dic.nicovideo.jp/">トップ</a> / <a href="https://dic.nicovideo.jp/p/my/">マイページ</a> / <a href="https://dic.nicovideo.jp/p/logout/">ログアウト</a> 
    </li>
</ul>
 <img src="/img/r_box_b2.gif" class="menu-border">
    `

    /**
     * pikoplayerIsは大百科で通常読み込まれる関数
     * pikoplayerIsを使い「ピコカキコ××を使う」の最初の表示を切り替える
     */

    if (pikoplayerIs('flash')) {
        document.getElementById('use_flashpico').style.display='none'
        document.getElementById('use_htmlpico').style.display='block'
    } else {
        document.getElementById('use_flashpico').style.display='block'
        document.getElementById('use_htmlpico').style.display='none'
    }

    /**
     * 現在のレイアウトを元に「背景を××にする」の最初の表示を切り替える
     */
    if(document.getElementById('header').style.backgroundRepeat===null){
        document.getElementById('backgroud_mokume').style.display='none'
        document.getElementById('backgroud_default').style.display='block'
    }else{
        document.getElementById('backgroud_mokume').style.display='block'
        document.getElementById('backgroud_default').style.display='none'
    }

    /**
     * CSSの変更を監視し
     * ヘッダーのメニューにある「背景を××にする」と設定を連動する
     */
    const target = document.getElementById("maincss_ndx");
    const observeOption = {
        attributes: true,
        attributeFilter: ['style']
    };
    const observer = new MutationObserver(mutations => {
            if(mutations[0].target.style.cssText.length > 0){
                document.getElementById('backgroud_mokume').style.display='none'
                document.getElementById('backgroud_default').style.display='block'
            }else{
                document.getElementById('backgroud_mokume').style.display='block'
                document.getElementById('backgroud_default').style.display='none'
            }
    });
    observer.observe(target, observeOption);
}

// document.addEventListener('DOMContentLoaded', function () {
window.onload = function () {
    //もしメニューがない場合は作成
    if (document.getElementById(MENUID) === null) {
        const elm = document.createElement('div')
        elm.id = MENUID
        //右ペインの他メニューにクラスを合わせる
        elm.className='box'
        elm.style.height = 'auto'
        //空の要素を挿入
        document.getElementById('right-column').insertAdjacentElement('afterbegin', elm)
    }
    //記事名を取得
    const word = document.getElementById('search-box').value

    const width=document.getElementById('right-column').offsetWidth
    drowMenu(word,width)
}
// })

