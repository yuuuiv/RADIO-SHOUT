document.addEventListener('DOMContentLoaded', function() {
    // 直抒胸臆相关逻辑
    document.getElementById('generateExpressionBtn').addEventListener('click', generateExpression);
    document.getElementById('copyExpressionBtn').addEventListener('click', copyExpression);
    document.getElementById('shareExpressionBtn').addEventListener('click', shareExpression);

    // 每日一喊相关逻辑
    document.getElementById('generateDailyShoutBtn').addEventListener('click', generateDailyShout);
    document.getElementById('copyDailyShoutBtn').addEventListener('click', copyDailyShout);
    document.getElementById('shareDailyShoutBtn').addEventListener('click', shareDailyShout);

    // 深色模式
    // 主题切换逻辑
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // 检查localStorage中保存的主题偏好
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.src = 'sun.svg';
    }

    themeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // 切换图标
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = 'sun.svg'; // 深色模式下的太阳图标
            themeToggleBtn.style.background = 'none'; // 无背景
        } else {
            themeIcon.src = 'moon.svg'; // 浅色模式下的月亮图标
            themeToggleBtn.style.background = 'none'; // 无背景
        }
    });
});

const expressions = [
    // 这里填入直抒胸臆的文本内容
    "レディシャが私にとってかけがえのない存在です。毎週楽しみにしていたこの番組が終わるなんて考えたくないです…どうか続けてください！😭  \n\n#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」がもうすぐ終わるなんて寂しすぎます…。Roseliaのメンバーと繋がるこの特別な時間、これからもずっと続けてほしいです！💙  \n\n#レディシャ #Roselia #バンドリ",
    "レディシャは、ファンにとって大切な場所です。このラジオがなくなったら私たちはどうすればいいの…？どうか続けてください！💔  \n\n#レディシャ #Roselia #バンドリ",
    "毎週聴いていた「RADIO SHOUT」は私の宝物です。この素晴らしいラジオを、これからもずっと応援します！続けてくださいね！✨  \n\n#レディシャ #Roselia #バンドリ",
    "どうかレディシャを続けてください！ファンみんなで応援しています！💪✨  \n\n#レディシャ #Roselia #バンドリ",
    "レディシャが終わるなんて信じたくない…毎週の楽しみがなくなるなんて寂しすぎる！どうかこのラジオが続きますように🙏\n\#レディシャ #Roselia #バンドリ",
    "Roseliaのメンバーがシェアしてくれる楽しいトーク、もう聞けなくなるなんて…絶対に続けてほしい！🥺\n\#レディシャ #Roselia #バンドリ",
    "レディシャは私の毎週の癒しです。このラジオがなくなったら本当に寂しい。どうか続けてください！😭\n\#レディシャ #Roselia #バンドリ",
    "大好きなレディシャが終わるなんて考えられない…これからもずっと聴き続けたい！🌟\n\#レディシャ #Roselia #バンドリ",
    "毎週欠かさず聴いていたレディシャがなくなるなんて…寂しすぎて涙が止まらない💧続けてほしいです！\n\#レディシャ #Roselia #バンドリ",
    "レディシャはファンにとって特別な場所。どうかこの素敵なラジオが続きますように！応援しています！💙\n\#レディシャ #Roselia #バンドリ",
    "レディシャはRoseliaとファンを繋ぐ大切な時間。このラジオが終わってしまうなんて耐えられません！🙏\n\#レディシャ #Roselia #バンドリ",
    "終わらないで…レディシャが私の元気の源です！まだまだ聴きたいことがいっぱいあるんです！😭\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」はRoseliaファンにとっての宝物です。このラジオが続くよう、みんなで応援しましょう！✨\n\#レディシャ #Roselia #バンドリ",
    "レディシャが終わってしまうなんて、私たちはどうすればいいの…？どうかこれからも続けてください！ずっと応援しています！💪\n\#レディシャ #Roselia #バンドリ",
    "レディシャが終わるなんて本当に悲しいです。毎週楽しみにしていた番組で、Roseliaのメンバーの声に癒され、元気をもらっていました。この大切な時間を失いたくないです。どうか続けてください！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は私にとって、Roseliaの魅力を再確認できる特別な場所でした。このラジオが終わるのは寂しすぎます。どうかファンの声を聞いて、この素敵な番組を続けてください！応援しています！\n\#レディシャ #Roselia #バンドリ",
    "レディシャがなくなると知ってから、毎日が寂しく感じます。Roseliaのメンバーとファンが繋がるこのラジオが、どうか終わらないでほしいです。私たちはこれからも全力で応援します！\n\#レディシャ #Roselia #バンドリ",
    "Roseliaのラジオ「RADIO SHOUT」は、私にとって何よりも大切な存在です。毎週欠かさず聴いていました。この番組が終わってしまうなんて考えられません。どうか続けてください！ファンの願いです！\n\#レディシャ #Roselia #バンドリ",
    "終わりが近づいているレディシャ、本当に寂しいです。Roseliaのメンバーが毎週届けてくれる素敵なトーク、これからも聴き続けたいです！どうかこのラジオが続きますように…\n\#レディシャ #Roselia #バンドリ",
    "レディシャの終了が発表されてから、ずっと心が重いです。このラジオがなければ、私の毎週の楽しみがなくなってしまいます。どうか、Roseliaのファンのために、番組を続けてください！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は、ファンとRoseliaを結ぶ大切な絆です。このラジオが終わるなんて信じられません。どうかこの絆が途切れないよう、続けていただけませんか？これからも応援しています！\n\#レディシャ #Roselia #バンドリ",
    "毎週欠かさず聴いていたレディシャが終わるなんて、想像するだけで寂しいです。この番組が私たちファンにとってどれだけ大切なものか、どうか知ってください。続けてほしいです！\n\#レディシャ #Roselia #バンドリ",
    "レディシャは私にとって、Roseliaのメンバーの声を直接感じられる貴重な時間でした。この番組がなくなったら、本当に寂しくなります。どうかもう一度、再開していただけませんか？\n\#レディシャ #Roselia #バンドリ",
    "Roseliaのラジオがなくなったら、私たちファンはどうすればいいのでしょうか？この番組があったからこそ、毎週頑張れたんです。どうか、レディシャを続けてください！お願いします！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は、Roseliaのメンバーとファンを繋ぐ特別な場所です。こんなにも愛されている番組が終わってしまうなんて…どうか再考していただき、続けていただけませんか？\n\#レディシャ #Roselia #バンドリ",
    "レディシャは、Roseliaのメンバーとファンが一つになる瞬間を作り出してくれる貴重なラジオ番組です。この素晴らしい番組が終わるなんて考えたくありません。どうか続けてください！\n\#レディシャ #Roselia #バンドリ",
    "毎週楽しみにしていたレディシャが終わるのは、本当に寂しいです。Roseliaのメンバーが届けてくれる元気と笑顔、これからもずっと聴き続けたいです！どうか番組を続けてください！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は、私にとって特別な時間でした。Roseliaのメンバーが繋いでくれたこの場所がなくなるのは悲しいです。どうかこの大切なラジオを続けてください！\n\#レディシャ #Roselia #バンドリ",
    "レディシャはRoseliaファンにとって、唯一無二の場所です。この番組がなくなるなんて寂しすぎます。どうか、続けていただきたいです。これからも応援しています！\n\#レディシャ #Roselia #バンドリ",
    "レディシャが私の生活の一部になっていました。毎週、Roseliaのメンバーが語る言葉に励まされ、笑顔になれた時間が大好きです。この素敵な時間が終わってしまうなんて考えたくないです。どうか、もう一度考え直して、番組を続けてください！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」が終わると聞いて、心にぽっかりと穴が開いたような気持ちです。毎週、Roseliaのメンバーと過ごすこの時間が私にとっての癒しでした。どうか、この大切な番組を続けてください！ファンみんなの願いです！\n\#レディシャ #Roselia #バンドリ",
    "レディシャが終わってしまうなんて、想像するだけで胸が痛みます。Roseliaのメンバーとの楽しい会話をもっと聴きたいし、ずっと応援し続けたいです。どうか、番組を続けてください！お願いします！\n\#レディシャ #Roselia #バンドリ",
    "Roseliaのラジオ「RADIO SHOUT」は、私にとって特別な居場所でした。この番組があったからこそ、辛い日々も乗り越えられました。どうか、この大切な番組を続けてください！みんなで応援しています！\n\#レディシャ #Roselia #バンドリ",
    "レディシャがなくなると知ったとき、心が締め付けられるような気持ちでした。Roseliaのメンバーとファンが一緒に過ごせるこの時間が、これからも続きますように。どうか番組を続けてください！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は、私たちファンがRoseliaをより深く知り、彼女たちとの絆を感じられる大切な場所です。この番組が終わるなんて、本当に悲しいです。どうかもう一度考え直して、続けてください！\n\#レディシャ #Roselia #バンドリ",
    "レディシャは私にとって、Roseliaの魅力を再発見するための特別な時間でした。彼女たちの笑い声や真剣なトークをこれからも聴き続けたいです。どうか番組を続けてください！ファンは応援しています！\n\#レディシャ #Roselia #バンドリ",
    "毎週楽しみにしていたレディシャが終わるなんて、信じられません。このラジオがなくなったら、私たちファンの楽しみが一つ消えてしまいます。どうか、番組を続けてください！お願いします！\n\#レディシャ #Roselia #バンドリ",
    "レディシャがなくなるなんて考えたくもないです。この番組でRoseliaのメンバーがシェアしてくれた話は、私にとってかけがえのない宝物です。どうか、番組を続けてください！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は、Roseliaのファンが一つになる場所でした。このラジオが終わってしまうのは本当に悲しいです。どうかもう一度考え直して、続けていただけませんか？これからも全力で応援します！\n\#レディシャ #Roselia #バンドリ",
    "レディシャが私にとってどれほど大切な存在か、言葉では表せません。Roseliaのメンバーの声を聴くたびに元気をもらえました。どうか、この番組が終わらないように、もう一度考えてください！\n\#レディシャ #Roselia #バンドリ",
    "毎週楽しみにしていたレディシャが終わるのは、本当に耐えがたいです。このラジオがなければ、私の生活から一つの大切な楽しみが消えてしまいます。どうか続けてください！お願いします！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」が終わると聞いて、本当にショックでした。Roseliaのメンバーとファンを繋ぐこの大切な時間が、これからも続きますように。どうか、番組を続けてください！応援しています！\n\#レディシャ #Roselia #バンドリ",
    "レディシャは、私がRoseliaをもっと好きになるきっかけを作ってくれた大切な番組です。この素晴らしい時間が終わるなんて、信じられません。どうか続けてください！ファン一同、応援しています！\n\#レディシャ #Roselia #バンドリ",
    "レディシャが私の元気の源でした。この番組がなくなったら、本当に寂しくなります。どうか、もう一度考え直して、番組を続けていただけませんか？ファンのみんなが願っています！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は私にとって、毎週の楽しみであり、元気の源でした。Roseliaのメンバーの声を聴くことで、どれだけ多くの力をもらったか分かりません。この番組が終わってしまうのは本当に悲しいです。どうか続けてください！\n\#レディシャ #Roselia #バンドリ",
    "レディシャが終わるなんて信じられません。Roseliaのメンバーと一緒に過ごせるこの時間が、どれほど私たちファンにとって大切だったか。どうか、もう一度考え直して、番組を続けてください！\n\#レディシャ #Roselia #バンドリ",
    "毎週楽しみにしていたレディシャが終わるのは、本当に悲しいです。Roseliaのメンバーが届けてくれるトークが、私にとってかけがえのないものだったんです。どうか、この番組を続けてください！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は、Roseliaのファンにとって特別な場所でした。このラジオがなくなってしまうのは耐えがたいです。どうか、この素晴らしい番組を続けてください！応援しています！\n\#レディシャ #Roselia #バンドリ",
    "レディシャは私にとって、大切な思い出が詰まった場所です。このラジオが終わるなんて、どうしても受け入れられません。どうか、番組を続けていただけませんか？ファン一同、心からお願いしています！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」が終わるなんて、私にとっては夢であってほしいです。毎週楽しみにしていたこの番組がなくなるなんて、信じられません。どうか、この大切な時間を続けてください！\n\#レディシャ #Roselia #バンドリ",
    "レディシャは、私が毎週待ち遠しかった時間です。Roseliaのメンバーと一緒に過ごすこの時間が、これからも続いてほしいです。どうか、番組を続けてください！ファンはいつまでも応援しています！\n\#レディシャ #Roselia #バンドリ",
    "この番組が終わってしまうと、私たちファンの心には大きな穴が開いてしまいます。「RADIO SHOUT」がどれほど大切な存在か、どうか理解してください。続けてほしいです！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は、Roseliaのメンバーとファンが心を通わせる場でした。この番組がなくなるのは本当に辛いです。どうか、もう一度考え直して、続けてください！私たちは応援しています！\n\#レディシャ #Roselia #バンドリ",
    "レディシャがなくなるなんて想像もしていませんでした。毎週このラジオを聴くのが楽しみで、心の支えになっていました。どうか、この大切な番組が続きますように…！\n\#レディシャ #Roselia #バンドリ",
    "毎週楽しみにしていたレディシャが終わると聞いて、本当に悲しくなりました。このラジオがなくなると、私たちファンはどうすればいいのでしょうか？どうか、続けてください！\n\#レディシャ #Roselia #バンドリ",
    "「RADIO SHOUT」は、私にとってRoseliaのメンバーと過ごせる唯一無二の時間でした。この大切な番組が終わるなんて、考えられません。どうか、続けてください！お願いします！\n\#レディシャ #Roselia #バンドリ",
    "レディシャが終わるなんて本当に悲しいです。Roseliaのメンバーの声を聴くことで、どれだけ多くの力をもらったか。どうか、この大切なラジオが続きますように！\n\#レディシャ #Roselia #バンドリ",
    "レディシャが私にとってどれだけ大切な存在か、言葉では表現しきれません。Roseliaのメンバーとの大切な時間が終わるなんて、どうか続けてください！\n\#レディシャ #Roselia #バンドリ",
    "毎週楽しみにしていたレディシャが終わるのは本当に寂しいです。このラジオがなくなったら、私の生活の一部が失われます。どうか、続けてください！\n\#レディシャ #Roselia #バンドリ",
    "#レディシャ は私の生活の精神的な支えです。どうかこれからも私たちに寄り添ってください！ #Roselia #バンドリ" ,
    "放送終了はとても残念です！私は毎週の金曜日この時間を楽しみにしています。 #レディシャ #Roselia #バンドリ",
    "#レディシャ は私に無数の感動を与えてくれました。どうか終わらせないでください！ #Roselia #バンドリ",
    "復活してからいつも楽しみにしている。どうか止めないでください！ #レディシャ #Roselia #バンドリ",
    "#レディシャ は私の生活の一部です。絶対に放送を止めないでください！ #Roselia #バンドリ",
    "#レディシャ があることで、私の生活がより楽しくなっています。どうか続けてください！ #Roselia #バンドリ",
    "どうか放送を止めないでください。#レディシャ は私と友達の共通の思い出です。 #レディシャ #Roselia #バンドリ",
    "#レディシャ は私の心の避難所です。どうか放送を続けてください。 #Roselia #バンドリ",
    "制作を止めないでください、これが私の願いです！制作さんありがとうございます #レディシャ #Roselia #バンドリ",
    "#レディシャ は私の多くの時間を共に過ごしてくれました。どうか放送を止めないでください！ #Roselia #バンドリ",
    "いつも楽しみな時間は#レディシャ だけです。止めないでください！ #Roselia #バンドリ",
    "#レディシャ は私たちの毎週の期待です。どうかこれからも素晴らしい時間を届けてください！ #Roselia #バンドリ",
    "#レディシャ は多くの温かさを届けてくれました。どうか放送を止めないでください！ #Roselia #バンドリ",
    "どうか制作を続けてください。#レディシャ の中の声は私の力です。 #レディシャ #Roselia #バンドリ",
    "放送が終わってしまうのは本当に残念です。どうか続けてください！ #レディシャ #Roselia #バンドリ",
    "#レディシャ は私に幸せを感じさせてくれます。どうか止めないでください！ #Roselia #バンドリ",
    "#レディシャ は私たちの唯一の楽しみです。どうか消さないでください！ #Roselia #バンドリ",
    "#レディシャ は私たちの感情の寄り所です。どうか制作を続けてください！ #Roselia #バンドリ",
    "毎回の視聴は幸せな時間です。これからも私たちに寄り添ってください！ #レディシャ #Roselia #バンドリ",
    "#レディシャ は私たちの生活をもっと素敵にしてくれます。どうか放送を止めないでください！ #Roselia #バンドリ",
    "毎週の楽しみになっていた #レディシャ、今週で終わってほしくない…！Roseliaのみんなの声をもっと聞きたい！続けてほしいと心から願っています！🌹 #Roselia #レディシャ #Roselia #バンドリ",
    "#レディシャ は私にとって特別な番組です。これからもずっと応援しています！どうかこの素晴らしい時間が続きますように🙏✨ #Roselia #レディシャ #Roselia #バンドリ",
    "#レディシャ が終わってしまうなんて寂しすぎる…！この番組でたくさん元気をもらいました。これからもRoseliaの声を聴き続けたい！番組延長を心から願っています💙 #Roselia #レディシャ #Roselia #バンドリ",
    "#レディシャ を終わらせたくない！Roseliaの魅力をもっと感じられるこの番組が続いてほしい！みんなで一緒に応援しよう！🌟 #Roselia #レディシャ #Roselia #バンドリ",
    "每周最期待的就是听 #レディシャ，希望这个节目不要结束！还想继续听 Roselia 的成员们分享她们的故事，继续陪伴大家！🌹 #Roselia #レディシャ #Roselia #バンドリ",
    "#レディシャ 对我来说意义非凡。Roselia 的声音给了我很多力量，希望这个节目能够继续下去！🙏✨ #Roselia #レディシャ #Roselia #バンドリ",
    "听说 #レディシャ 可能会结束，真的好舍不得…这个节目陪伴了我许多时光，希望能延长继续，让我们能继续聆听 Roselia 的声音！💙 #Roselia #レディシャ #Roselia #バンドリ",
    "不想让 #レディシャ 结束！希望更多人一起支持这个节目，让 Roselia 的音乐和声音继续带给我们感动！🌟 #Roselia #レディシャ #Roselia #バンドリ",
    "还记得第一次听 #レディシャ 的时候，那种兴奋和感动至今难忘。希望这个节目能延长，让我们继续沉浸在 Roselia 的世界里！🙏 #Roselia #レディシャ #Roselia #バンドリ",
    "#レディシャ 陪伴了我们这么多周，真的不希望在这个时候结束！期待能够继续听到 Roselia 的声音，让这份感动延续下去！💙 #Roselia #レディシャ #Roselia #バンドリ",
    "Roselia 的音乐和故事一直是我的动力来源。希望 #レディシャ 能够继续，让更多人感受到她们的魅力！🌟 #Roselia #レディシャ #Roselia #バンドリ",
    "#レディシャ 每次都带给我无数欢笑和感动，真的不希望就这样结束。谢谢 Roselia 的每一位成员，也希望能有更多这样的美好时光延续下去！🙏 #Roselia #レディシャ #Roselia #バンドリ",
    "#レディシャ 记录了 Roselia 的成长与努力，也见证了我们的陪伴与支持。不希望这个篇章就此画上句号，期待继续聆听 Roselia 的故事！🌹 #Roselia #レディシャ #Roselia #バンドリ"
];

// 直抒胸臆相关逻辑
function generateExpression() {
    const randomIndex = Math.floor(Math.random() * expressions.length);
    const selectedText = expressions[randomIndex];
    const textElement = document.getElementById('expressionText');
    
    textElement.style.opacity = '0'; // 先隐藏文本
    setTimeout(() => {
        textElement.innerText = selectedText;
        textElement.style.opacity = '1'; // 渐变显示文本
    }, 200);

    // 显示“复制”和“分享”按钮
    document.getElementById('copyExpressionBtn').style.display = 'inline-block';
    document.getElementById('shareExpressionBtn').style.display = 'inline-block';
}

function copyExpression() {
    const textToCopy = document.getElementById('expressionText').innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('文本已复制到剪贴板');
        })
        .catch(err => {
            console.error('复制失败:', err);
        });
}

function shareExpression() {
    const textToShare = document.getElementById('expressionText').innerText;
    const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(textToShare)}`;
    window.open(twitterUrl, '_blank');
}

const greetings = {
    morning: ["おはようございます！", "おはよう！", "おはようございます", "おはよう"],
    afternoon: ["こんにちは", "お疲れ様です", "こんにちは！", "お疲れ様です！"],
    evening: ["こんばんは", "こんばんは！"]
};

const events = [
    "今日もレディシャを聴きたい一日ですね",
    "今日もレディシャを聴きたい一日です",
    "レディシャを聴く時間だ",
    "今、レディシャを聴いています！", 
    "レディシャは本当に素晴らしい番組ですね", 
    "電車の中でレディシャを聴いていたら、また仕事を頑張る力が湧いてきました", 
    "レディシャを聴きながら、明日も頑張れそうです", 
    "レディシャは毎回新しい発見がありますね", 
    "今、レディシャを聴いて元気をもらっています！", 
    "レディシャを聴きながらリラックスしています", 
    "今日もレディシャが待ち遠しいです", 
    "今日もレディシャが楽しみな一日ですね", 
    "今日もレディシャで一日をスタート！", 
    "レディシャを聴きながら、ほっと一息ついています", 
    "レディシャの時間が一番の楽しみです", 
    "レディシャを聴いて、気分が上がってきました！", 
    "レディシャのおかげで、今日は元気に過ごせそうです", 
    "レディシャが流れると、心が癒されますね", 
    "レディシャを聴きながら、少しずつ疲れが取れていく感じがします", 
    "レディシャを聴くと、今日も頑張れそうです", 
    "レディシャのおかげで、仕事の疲れが吹き飛びました！", 
    "今日もレディシャで元気をチャージ中！", 
    "レディシャを聴くと、自然と笑顔になりますね", 
    "レディシャを聴きながらリラックスする時間が最高です", 
    "レディシャがあるから、どんな日も頑張れます", 
    "レディシャを聴いて、一日の疲れをリセットしています"
];

const emojis = ["😊", "💪", "✨", "🌟", "🎉", "(;´༎ຶД༎ຶ`)", "🫡", "🥰", "(つД`)", "✿✿ヽ(°▽°)ノ✿", "˃ʍ˂(♡⌂♡)", "(*｀▽´*)", "(ｉДｉ)"
    , "🥹", "🌹", "🥀", "💦", "🥲", "🥳", "🥺", "😻", "😼", "😿", "🫶🏻", "❤️💚💙💜🤍", "💜💙❤️💖🖤", "❤️‍🔥", "💖", 
    "(*^▽^*)", "(＾ω＾)", "＼(￣︶￣)／", "(´∀｀)σ", "(〃'▽'〃)", "(*＾ー＾)", "(｡･ˇдˇ･｡)", "(｡•́︿•̀｡)", "o(╥﹏╥)o", "(ó﹏ò｡)"
    , "(꒪Д꒪)ノ", "(ノдヽ)ヽ", "(ﾟДﾟ)ﾉ"
];

// 每日一喊相关逻辑
function generateDailyShout() {
    const selectedTime = document.getElementById('greeting').value;
    const randomGreeting = greetings[selectedTime][Math.floor(Math.random() * greetings[selectedTime].length)];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const dailyShoutText = `${randomGreeting}\n${randomEvent} ${randomEmoji}\n#レディシャ #Roselia #バンドリ`;
    const textElement = document.getElementById('dailyShoutText');
    
    textElement.style.opacity = '0';
    setTimeout(() => {
        textElement.innerText = dailyShoutText;
        textElement.style.opacity = '1';
    }, 200);

    // 显示“复制”和“分享”按钮
    document.getElementById('copyDailyShoutBtn').style.display = 'inline-block';
    document.getElementById('shareDailyShoutBtn').style.display = 'inline-block';
}

function copyDailyShout() {
    const textToCopy = document.getElementById('dailyShoutText').innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('文本已复制到剪贴板');
        })
        .catch(err => {
            console.error('复制失败:', err);
        });
}

function shareDailyShout() {
    const textToShare = document.getElementById('dailyShoutText').innerText;
    const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(textToShare)}`;
    window.open(twitterUrl, '_blank');
}