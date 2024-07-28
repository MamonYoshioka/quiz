// 変数
let unko = 'Hello World';

// 定数
const bigUnko = 'He..Hello..Hello World';
// console.log(bigUnko);

// 配列
const inoki = ['いーち','にー','さーん','ダーー'];

// ループ文
// let index = 0;
// while(index < inoki.length){
//     console.log(inoki[index]);
//     index++;
// }

// if / else
// if (inoki.length > 5) {
//     console.log('ボンバイエ');
// } else {
//     console.log('ボンバ..');
// }

// 関数
    // 使用用途場面
        // 同じ命令を何度も使いたい時
        // 任意のタイミングで命令を実行させたい

const  test = (arg) => {
    // 要素の長さを5などの指定ではなく、変更できるようにしたい場合、引数(arg)を使用する
    if(inoki.length > arg){
        console.log('ボンバイエ！！');
    }else{
        console.log('ボンバ..!!');
    }
};

// test();


// 定数testを4回繰り返したい場合
// let i = 0;
// while(i < 4){
//     test(3);
//     i++;
// }

// オブジェクト
    // 変数や定数は1:1なのに対して、
    // オブジェクトは複数のデータを持つことができる

const unko2 = {
    color : ['black','blue','pink'],
    size : 'large',
    purfume : 'mint',
    goToToilet: () => {
        console.log('Hello World');
    }
};

// const keyCount = Object.keys(unko2).length;
// console.log(keyCount); // 出力: 3

// console.log(unko2.goToToilet());
console.log(unko2['goToToilet']());

// 特殊なオブジェクト
    // windowオブジェクト:Webブラウザ全体のオブジェクト
    // documentオブジェクト:表示しているページ全体のオブジェクト
    // event:userがアクションしたタイミングで何かをしたい時に使う
        // addEventListener(引数を２つ入れてあげることができる)
            // 1つ目の引数:eventのタイプを入れてあげる
            // 2つ目は関数を指定
            
// window.alert('処理アラート');
// console.log(document.getElementsByTagName('button'));

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    window.alert('Hello World');
});
