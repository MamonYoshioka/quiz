// 問題文
const quiz = [
    {
        // 問題文
        question: 'トイストーリーに出てくるブタのおもちゃの名前は？',
        // 選択肢
        answer: [
            'ベーコン',
            'ハム',
            'ピッグ'
        ],
        // 答え
        correct: 'ハム'
    },
    {
        question: 'アラジンの相棒である小さなサルの名前は？',
        answer:[
            'アブー',
            'ヤブー',
            'タブー'            
        ],
        correct: 'アブー'
    },
    {
        question: 'ウォルト・ディズニー・スタジオが配給する映画『ウエスト・サイド・ストーリー』元は何をもとにしたもの？',
        answer:[
            '美女と野獣',
            'ロミオとジュリエット',
            'オペラ座の怪人'
        ],
        correct: 'ロミオとジュリエット' 
    },
    {
        question: 'ディズニーの作者ウォルト・ディズニーが好きな動物は？',
        answer:[
            'ハムスターなどの小動物',
            '犬',
            '猫'
        ],
        correct: '犬'
    },
    {
        question: 'ソアリン：ファンタスティック・フライトで最後に到着する場所といえばどこ？',
        answer:[
            '東京ディズニーランド',
            '東京スカイツリー',
            '東京ディズニーシー'
        ],
        correct: '東京ディズニーシー'
    },
    {
        question: 'ディズニーシーのシンボルである火山の名前は？',
        answer:[
            'プロメテウス火山',
            'ロッキード火山',
            'バルメルン火山'
        ],
        correct: 'プロメテウス火山'
    },
    {
        question:'ニモ＆フレンズ・シーライダーを提供している会社は？',
        answer:[
            'JCB',
            'タカラトミー',
            'ENEOS'
        ],
        correct: 'JCB'
    },
    {
        question:'ラプンツェルの髪の長さはいくらでしょう？',
        answer:[
            '20メートル',
            '21メートル',
            '22メートル'
        ],
        correct: '21メートル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// ボタンの表示
    //  htmlのオブジェクトを変数に格納する場合は暗黙の了解で、変数名の前に「$」をつける
const $buttonChoice = document.getElementsByTagName('button'); 
const buttonLength = $buttonChoice.length;

const setupQuiz = () => {
    // 問題文の表示
    document.getElementById('js-quesiton').textContent = quiz[quizIndex].question;
    
    let buttonIndex = 0;
    
    while(buttonIndex < buttonLength){
        $buttonChoice[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
        buttonIndex++;    
    };
}

setupQuiz();


// 選択肢に関してのアクション
let buttonHandler = 0;


const clickHandler = (e)=> {
    // 正誤判定
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！！');
        score++;
    }else{
        window.alert('残念、不正解... 正解は、' + quiz[quizIndex].correct + 'です。');
    }

    // 次の問題に遷移するようにする
    quizIndex++;

    if(quizIndex < quizLength){
        // 問題がまだある場合はこちらを実行
        setupQuiz();
    }else{
        // 問題がない場合はこちらを実行
        window.alert('問題、全問終了！！ あなたの正解数は' + score + '/' + quizLength + 'です。');
    }
}

let handleIndex = 0;

while(handleIndex < buttonLength){
    $buttonChoice[handleIndex].addEventListener('click', (e)=> {
        clickHandler(e);
    }); 
    handleIndex++;
}