(function(){
    "use strict";
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');
    
    /**
    * 指定した要素の子要素を全て削除する
    * @param {HTMLElement}element HTMLの要素
    */
    function removeAllChildren(element){//子要素がある限り削除
        while (element.firstChild){
             element.removeChild(element.firstChild);   
        }   
    }
    
    assessmentButton.onclick = () => {
        const userName = userNameInput.value;
        if (userName.length === 0){
            return;
        }
        // 診断結果表示エリア作成
        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);
        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);
        
        //TODO ツイートエリアの作成
    };
    
    const answers = [
        '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
        '{userName}のいいところはまなざしです。{userName}見つめられた人は、気になって仕方ないでしょう。',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさが物事をいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
        '{userName}のいいところ用心深さです。{userName}の洞察に多くの人がたすけられます。',
        '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
        '{userName}のいいところは決断力です。{userName}の決断にいつも助けられる人がいます。',
        '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
        '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
        '{userName}のいいところは好奇心です。新しいことの向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは自制心です。まずいと思った時にしっかりと衝動を押さえられる{userName}が皆から評価されます。',
        '{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち居振る舞いに多くの人が癒されます。'
    ];
    
    /**
    *名前の文字列を渡すと診断結果を返す関数
    *@param{string}userName ユウザーの名前
    *@return{string}診断結果
    */
    function assessment(userName){
        //全文字のコード番号を取得してそれを足し合わせる
        let sumOfcharCode = 0;
        for (let i = 0; i < userName.length; i++){
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
        }
        
        // 文字コード番号の合計を回答数で割って添字の数値を求める
        const index = sumOfcharCode % answers.length;
        let result = answers[index];
        
        result = result.replace(/{userName}/g, userName);
        return result;
    }
    
})();
