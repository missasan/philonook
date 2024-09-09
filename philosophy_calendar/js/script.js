// script.js

// 日付を取得
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // 月は0から始まるため+1
const year = today.getFullYear();

// 日付の表示
document.getElementById('date').textContent = `${year}年 ${month}月 ${day}日`;

// 哲学的な質問のリスト
const philosophicalQuestions = [
    "私たちの現実はどの程度信頼できるのか？",
    "自由意志とは幻想なのか、それとも実在するのか？",
    "道徳的に正しい行動とは何か？",
    "他人を理解することは可能なのか？",
    "美とは主観的なものか、客観的なものか？",
    "意識の本質とは何か？",
    "死後の世界は存在するのか？",
    "善と悪は絶対的なものか、それとも相対的なものか？",
    "幸福とはどのように定義されるべきか？",
    "人は本当に自由に生きられるのか？",
    "真実を知ることは本当に重要なのか？",
    "知識と信念の違いは何か？",
    "感情は理性よりも信頼できるか？",
    "世界の存在に目的があるのか？",
    "自我は実在するのか、それとも幻影か？",
    "人間にとって正義とは何か？",
    "時間は現実的なものか、それとも人間の認識の産物か？",
    "心と身体はどのように関連しているのか？",
    "人間の行動は本当に倫理的に評価できるのか？",
    "美徳とは何か？",
    "人はなぜ生きるのか？",
    "理想社会とはどのようなものか？",
    "言語は思考にどのように影響を与えるのか？",
    "本当の知恵とは何か？",
    "存在とはどのように定義されるべきか？"
];

// ランダムな質問を選択する
const randomIndex = Math.floor(Math.random() * philosophicalQuestions.length);
const randomQuestion = philosophicalQuestions[randomIndex];

// 質問の表示
document.getElementById('question').textContent = randomQuestion;

// Xに投稿するボタンの動作
document.getElementById('tweetButton').onclick = function() {
    const textToTweet = `"${randomQuestion}" #哲学カレンダー https://philonook.com/philosophy_calendar/`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToTweet)}`;
    window.open(tweetUrl, '_blank');
};
