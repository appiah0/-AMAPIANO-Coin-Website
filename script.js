     //==== Mobile Navigation ====
document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const langSwitcher = document.getElementById('langSwitcher');
const selectedLang = document.getElementById('selectedLang');
const langOptions = document.getElementById('langOptions');

// Toggle nav drawer
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');

  // ✅ Hide language switcher when nav is open
  if (navLinks.classList.contains('active')) {
    langSwitcher.classList.add('hidden');
    langOptions.classList.remove('open'); // also close language dropdown
  } else {
    langSwitcher.classList.remove('hidden');
  }
});

// Close nav when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    langSwitcher.classList.remove('hidden'); // ✅ show language switcher again
  });
});

// Close nav on outside click
document.addEventListener('click', (e) => {
  const insideNav = navLinks.contains(e.target) || hamburger.contains(e.target);
  if (!insideNav && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    langSwitcher.classList.remove('hidden'); // ✅ re-show switcher
  }
});

// Toggle language drawer
selectedLang.addEventListener('click', () => {
  langOptions.classList.toggle('open');
});

// Change language + close drawer
langOptions.querySelectorAll('li').forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.getAttribute('data-lang');
    const selectedText = option.textContent;

    // 1. Update language display
    selectedLang.innerHTML = `🌍Lang: ${selectedText}`;

// Remove previous selection
    langOptions.querySelectorAll('li').forEach(li => li.classList.remove('selected'));

    // Highlight current
    option.classList.add('selected');
    
    // 2. Apply translations (preserves HTML)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang]?.[key]) {
        el.innerHTML = translations[lang][key]; // Critical: use innerHTML
      }
    });

    // 3. Close dropdown
    langOptions.classList.remove('open');
  });
});

// Hide drawer on outside click
document.addEventListener('click', (e) => {
  if (!langSwitcher.contains(e.target) && !selectedLang.contains(e.target)) {
    langOptions.classList.remove('open');
  }
});
  
// Sample translations object
// Enhanced Language Switcher ===========================================
const translations = {
  en: {
    home_nav: "HOME",
about_nav: "ABOUT",
tokenomics_nav: "TOKENOMICS",
buy_nav: "HOW TO BUY",
faq_nav: "FAQ",
hero_title: "🎹$AMAPIANO🎹",
hero_p: "The memecoin with a beat. $AMAPIANO is a whole damn groove in the memeverse.😎",
hero_btn: "BUY $PIANO NOW",
sliding_p: "BUY • HODL • GROOVE • IGNITE THE VIBES • $PIANO TO THE MOON",
priceCard_title: "$PIANO Live Price",
price_p: "Price: ",
price_chart: "Loading...",
liquidity_p: "Liquidity: ",
liquidity_chart: "Loading...",
volume_p: "24h Volume: ",
volume_chart: "Loading...",
change_p: "24h Change: ",
change_chart: "Loading...",
float_p: "$PIANO: ",
float_price: "Loading...",
about_title: "ABOUT",
about_p1: "$AMAPIANO isn't just another memecoin - it's a whole vibe. Inspired by the electrifying sounds and smooth rhythms of Amapiano music, the viral dance music genre that took South Africa🇿🇦 and the world by storm, this coin brings the same energy to the crypto space.",
about_p2: "Just like Amapiano music, $Amapiano coin is community-driven, infectious, and built to move people - not just with beats, but with memes, culture, and Web3 energy. But always remember, the ticker is $PIANO.",
about_p3: "Whether you're a crypto enthusiast or a rhythm-loving degenerate, $Amapiano is your backstage pass to a party on the blockchain. Tap in, vibe out, and let the bassline take you to the moon!",
tokenomics_title: "TOKENOMICS",
tokenomics_p: "Total Supply: 880,000 $PIANO, Lp Burnt 🔥, Contract Renounced 🔒, 100% In Liquidity, No Team Tokens, No Presale, No Roadmap, No Bullshit Taxes, No Promises, No Problem. Just Vibes.",
quote_key: '<strong style="color: var(--dim-yellow);">$PIANO</strong> is the only memecoin with a limited supply. This is pure Amapiano meme culture. No middlemen. No empty hype.',
contract_title: "CONTRACT ADDRESS",
contract_address: "0x1234567890abcdef1234567890abcdef12345678",
contract_btn: "COPY",
contract_small: "Always verify the contract address!",
contract_link: '<a href="https//:coredao.org" target="_blank" class="contract-link">view on block explorer</a>',
steps_title: "HOW TO BUY $PIANO",
steps_number1: "1",
steps_h1: "CREATE A WALLET:",
steps_p1: 'Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to <a href="https://metamask.io/" target="_blank" style="color: yellow; text-decoration: none;">metamask.io</a>',
steps_number2: "2",
steps_h2: "GET CORE:",
steps_p2: 'Deposit CORE to your wallet to buy $PIANO. You can buy CORE on a decentralized exchange like IceCreamSwap, transfer from another wallet, or buy on a centralised exchange like <a href="https://partner.bybit.com/b/45350" target="_blank" style="color: yellow; text-decoration: none;">Bybit</a>',
steps_number3: "3",
steps_h3: "GO TO ICECREAMSWAP:",
steps_p3: 'Visit IceCreamSwap website. Go to <a href="/https://icecreamswap.com/" target="_blank" style="color: yellow; text-decoration: none;">icecreamswap.com</a> in google chrome or Metamask in-app browser. Connect your wallet. Paste $PIANO contract address into IceCreamSwap, select $PIANO, and confirm. Sign the wallet signature message to confirm.',
steps_number4: "4",
steps_h4: "SWAP CORE FOR $PIANO:",
steps_p4: "Swap any amount of CORE for $PIANO. There is zero tax so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
steps_btn1: "BUY ON ICECREAMSWAP",
steps_btn2: "BUY ON ARCHERSWAP",
swap_title: "SWAP CORE FOR $PIANO",
swap_p: "0% Tax • Lp Burnt 🔥 • No Specific Slippage",
quote_title: "$PIANO TRENDING ON TWITTER 😲",
faq_title: "FAQ",
faq_h1: "What Is $PIANO?",
faq_p1: "$PIANO is the rhythm of the blockchain. It is the smoothest key in the memeverse - where chill Amapiano vibes meet boss-level crypto energy. It's not just a coin, it's a whole damn groove on the blockchain. A memecoin inspired by the smooth, soulful dance music born in South Africa🇿🇦. Just like the genre, $PIANO is bold, unstoppable, and made to move the crowd. $PIANO brings beats, memes, and community vibes to Web3.",
faq_h2: "Where Can I Buy?",
faq_p2: "You can buy $PIANO on IceCreamSwap. More exchange listings coming soon.",
faq_h3: "Why Only 880k Supply?",
faq_p3: "Because 88 keys make a piano sing. We kept it classy - like a grand piano, not a garage sale trumpet. Because Beethoven didn't need a billion keys - and neither do we. It's not about quantity, it's about harmony - and 880K hits the right note.",
faq_h4: "Why Launch On CoreDAO?",
faq_p4: "Because real beats need real speed. CoreDAO delivers. Low fees, high vibes - $PIANO belongs on CoreDAO. $PIANO needs a blockchain that dances to its rhythm, not one that lags behind. Ethereum gas fees kill the vibe. CoreDAO keeps the party going.",
logo_p: "$AMAPIANO COIN",
disclaimer_p: "⚠️ $Amapiano is a memecoin created purely for entertainment purposes. It holds no intrinsic value, no utility, promises no financial return, and is not intended as an investment. It has no formal team. This project is inspired by the energy and vibe of Amapiano music and culture that the world love so much.",
footer_p: "© 2025 Amapiano Coin. All rights reserved.",
  },
  
  zh: {
    home_nav: "首页",
about_nav: "关于",
tokenomics_nav: "代币经济",
buy_nav: "如何购买",
faq_nav: "常见问题",
hero_title: "🎹$AMAPIANO🎹",
hero_p: "这是一枚有节奏的梗币。$AMAPIANO 在 meme 宇宙里就是一整个节奏感！😎",
hero_btn: "立即购买 $PIANO",
sliding_p: "购买 • 持有 • 摇摆 • 点燃氛围 • $PIANO 飞向月球",
priceCard_title: "$PIANO 实时价格",
price_p: "价格: ",
price_chart: "加载中...",
liquidity_p: "流动性: ",
liquidity_chart: "加载中...",
volume_p: "24小时交易量:",
volume_chart: "加载中...",
change_p: "24小时变化:",
change_chart: "加载中...",
float_p: "$PIANO: ",
float_price: "加载中...",
about_title: "关于",
about_p1: "$AMAPIANO 不仅仅是一个 memecoin，它代表着一种独特的氛围。它灵感源自 Amapiano 音乐——一种风靡南非🇿🇦乃至全球的流行舞曲——其激动人心的音效和流畅的节奏，并将同样的能量带入加密货币领域。",
about_p2: "如同 Amapiano 的音乐一样，$Amapiano 币由社区驱动，富有感染力，旨在感动人心——不仅通过节奏，更通过表情包、文化和 Web3 能量。但请永远记住，它的代码是 $PIANO。",
about_p3: "无论你是加密货币爱好者，还是节奏迷，$Amapiano 都是你开启区块链派对的幕后通行证。轻敲琴弦，尽情摇摆，让贝斯带你飞向月球！",
tokenomics_title: "代币经济",
tokenomics_p: "总供应量：880,000 $PIANO，LP 已销毁🔥，合约已放弃🔒，100% 流动性，无团队代币，无预售，无路线图，无垃圾税，无承诺，无问题。只有氛围。",
quote_key: '<strong style="color: var(--dim-yellow);">$PIANO</strong> 是唯一限量供应的 memecoin。这是纯粹的 Amapiano meme 文化。没有中间商，没有空洞的炒作。',
contract_title: "合约地址",
contract_address: "0x1234567890abcdef1234567890abcdef12345678",
contract_btn: "复制",
contract_small: "始终验证合同地址!",
contract_link: '<a href="https//:coredao.org" target="_blank" class="contract-link">在区块浏览器上查看</a>',
steps_title: "如何购买$PIANO",
steps_number1: "1",
steps_h1: "创建钱包:",
steps_p1: '从 App Store 或 Google Play Store 免费下载 Metamask 或您选择的钱包。桌面用户请访问 <a href="https://metamask.io/" target="_blank" style="color: yellow; text-decoration: none;">metamask.io</a> 下载 Google Chrome 扩展程序。',
steps_number2: "2",
steps_h2: "获取 CORE:",
steps_p2: '将 CORE 存入您的钱包即可购买 $PIANO。您可以在 IceCreamSwap 等去中心化交易所购买 CORE，也可以从其他钱包转账，或者在 <a href="https://partner.bybit.com/b/45350" target="_blank" style="color: yellow; text-decoration: none;">Bybit</a> 等中心化交易所购买。',
steps_number3: "3",
steps_h3: "前往ICECREAMSWAP:",
steps_p3: '访问 IceCreamSwap 网站。使用 Google Chrome 或 Metamask 应用内置浏览器访问 <a href="/https://icecreamswap.com/" target="_blank" style="color: yellow; text-decoration: none;">icecreamswap.com</a>。连接你的钱包。将 $PIANO 合约地址粘贴到 IceCreamSwap 中，选择 $PIANO 并确认。签署钱包签名消息以确认。',
steps_number4: "4",
steps_h4: "用 CORE 换取 $PIANO:",
steps_p4: "将任意数量的 CORE 兑换成 $PIANO。由于没有税费，您无需担心购买时存在滑点，但在市场波动期间，您可能需要利用滑点。",
steps_btn1: "在ICECREAMSWAP上购买",
steps_btn2: "在 ARCHERSWAP 购买",
swap_title: "用 CORE 换取 $PIANO",
swap_p: "0% 税 • LP 已烧毁 🔥 • 无特定滑点",
quote_title: "$PIANO 在 X 上流行起来 😲",
faq_title: "常见问题",
faq_h1: "$PIANO 是什么？",
faq_p1: "$PIANO 是区块链的节奏。它是 meme 宇宙中最流畅的调子——清爽的 Amapiano 氛围与顶级加密能量在此交汇。它不仅仅是一枚币，更是区块链上一整套律动。这款 meme 币的灵感源自南非🇿🇦 流畅而深情的舞曲。正如其音乐风格一样，$PIANO 大胆前卫、势不可挡，旨在撼动人心。$PIANO 为 Web3 带来了节奏、meme 和社区氛围",
faq_h2: "我可以在哪里购买？",
faq_p2: "您可以在 IceCreamSwap 上购买 $PIANO。更多交易所即将上线。",
faq_h3: "为什么只供应 880000 份？",
faq_p3: "因为88个琴键让钢琴发出美妙的歌声。我们让它保持优雅——就像一架三角钢琴，而不是一把车库里淘来的喇叭。因为贝多芬不需要十亿个琴键——我们也不需要。重要的不是数量，而是和谐——而88万个琴键就能奏出完美的音符。",
faq_h4: "为什么要在 CoreDAO 上启动？",
faq_p4: "因为真正的节拍需要真正的速度。CoreDAO 做到了。低费用，高氛围——$PIANO 属于 CoreDAO。$PIANO 需要一个能跟上它节奏跳舞的区块链，而不是一个落后的链。以太坊的手续费毁了氛围。CoreDAO 让派对继续。",
logo_p: "$AMAPIANO COIN",
disclaimer_p: "⚠️ $Amapiano 是一个纯粹为娱乐目的创建的 memecoin。它不具有内在价值、没有实用性、不承诺任何财务回报，也不作为投资项目。它没有正式团队。该项目灵感来源于 Amapiano 音乐和文化的能量与氛围，这种文化深受全球喜爱。",
footer_p: "© 2025 Amapiano Coin。保留所有权利。",
  },
  
  fr: {
  home_nav: "ACCUEIL",
about_nav: "À PROPOS",
tokenomics_nav: "TOKENOMICS",
buy_nav: "COMMENT ACHETER",
faq_nav: "FOIRE AUX QUESTIONS",
hero_title: "🎹$AMAPIANO🎹",
hero_p: "La memecoin avec du rythme. $AMAPIANO, c’est tout un groove dans le memeverse. 😎",
hero_btn: "ACHÈTE $PIANO MAINTENANT",
sliding_p: "ACHÈTE • GARDE • GROOVE • ENFLAMME L’AMBIANCE • $PIANO VERS LA LUNE",
priceCard_title: "$PIANO Prix en Direct",
price_p: "Prix: ",
price_chart: "Chargement...",
liquidity_p: "Liquidité: ",
liquidity_chart: "Chargement...",
volume_p: "Volume 24h: ",
volume_chart: "Chargement...",
change_p: "Changement 24h: ",
change_chart: "Chargement...",
float_p: "$PIANO: ",
float_price: "Chargement...",
about_title: "À PROPOS",
about_p1: "$AMAPIANO n'est pas un simple mème, c'est une véritable ambiance. Inspiré par les sonorités électrisantes et les rythmes fluides de la musique Amapiano, ce genre musical de danse viral qui a conquis l'Afrique du Sud et le monde entier, ce token apporte la même énergie à l'univers des cryptomonnaies.",
about_p2: "Tout comme la musique amapiano, la monnaie $Amapiano est communautaire, contagieuse et conçue pour émouvoir les gens – pas seulement avec ses rythmes, mais aussi avec ses mèmes, sa culture et l'énergie du Web3. Mais n'oubliez jamais que le symbole est $PIANO.",
about_p3: "Que vous soyez un passionné de cryptomonnaies ou un fanatique de rythmes, $Amapiano vous ouvre les portes des coulisses d'une soirée blockchain. Connectez-vous, vibrez et laissez la ligne de basse vous transporter vers la lune!",
tokenomics_title: "TOKENOMICS",
tokenomics_p: "Offre totale: 880000 $PIANO, LP brûlé 🔥, Contrat résilié 🔒, 100% de liquidité, Pas de jetons d'équipe, Pas de prévente, Pas de feuille de route, Pas de taxes bidon, Pas de promesses, Pas de problème. Juste de l'ambiance.",
quote_key: '<strong style="color: var(--dim-yellow);">$PIANO</strong> est le seul mèmecoin dont l offre est limitée. C est la pure culture mème amapiano. Sans intermédiaires. Pas de battage médiatique.',
contract_title: "ADRESSE DU CONTRAT",
contract_address: "0x1234567890abcdef1234567890abcdef12345678",
contract_btn: "COPIE",
contract_small: "Vérifiez toujours l'adresse du contrat !",
contract_link: '<a href="https//:coredao.org" target="_blank" class="contract-link">vue sur lexplorateur de blocs</a>',
steps_title: "COMMENT ACHETER $PIANO",
steps_number1: "1",
steps_h1: "CRÉER UN PORTEFEUILLE:",
steps_p1: 'Téléchargez gratuitement Metamask ou le portefeuille de votre choix sur l App Store ou le Google Play Store. Pour les utilisateurs d ordinateur, téléchargez l extension Google Chrome sur <a href="https://metamask.io/" target="_blank" style="color: yellow; text-decoration: none;">metamask.io</a>.',
steps_number2: "2",
steps_h2: "OBTENIR CORE:",
steps_p2: 'Déposez des CORE sur votre portefeuille pour acheter des $PIANO. Vous pouvez acheter des CORE sur une plateforme d échange décentralisée comme IceCreamSwap, les transférer depuis un autre portefeuille ou les acheter sur une plateforme d échange centralisée comme <a href="https://partner.bybit.com/b/45350" target="_blank" style="color: yellow; text-decoration: none;">Bybit</a>.',
steps_number3: "3",
steps_h3: "ALLER À ICECREAMSWAP:",
steps_p3: 'Visitez le site web d IceCreamSwap. Accédez à <a href="/https://icecreamswap.com/" target="_blank" style="color: yellow; text-decoration: none;">icecreamswap.com</a> dans Google Chrome ou Metamask, puis connectez votre portefeuille. Collez l adresse du contrat $PIANO dans IceCreamSwap, sélectionnez $PIANO et confirmez. Signez le message de signature du portefeuille pour confirmer.',
steps_number4: "4",
steps_h4: "ÉCHANGER CORE POUR $PIANO:",
steps_p4: "Échangez n'importe quel montant de CORE contre des $PIANO. La taxe est nulle; vous n'avez donc pas à vous soucier d'acheter avec un slippage spécifique, même si vous pourriez avoir besoin d'utiliser ce slippage en période de volatilité des marchés.",
steps_btn1: "ACHETER SUR ICECREAMSWAP",
steps_btn2: "ACHETER SUR ARCHERSWAP",
swap_title: "ÉCHANGER CORE POUR $PIANO",
swap_p: "0% de taxe • GPL brûlé 🔥 • Pas de glissement spécifique",
quote_title: "$PIANO TENDANCE SUR X 😲",
faq_title: "FOIRE AUX QUESTIONS",
faq_h1: "Qu'est-ce que $PIANO ?",
faq_p1: "$PIANO est le rythme de la blockchain. C'est la note la plus fluide du mèmeverse, où l'ambiance relaxante de l'Amapiano rencontre l'énergie cryptographique de haut niveau. Ce n'est pas qu'une pièce, c'est tout un groove sur la blockchain. Un mèmecoin inspiré de la musique dance douce et soul, née en Afrique du Sud 🇿🇦. À l'image du genre, $PIANO est audacieux, imparable et fait pour faire vibrer les foules. $PIANO apporte beats, mèmes et ambiance communautaire au Web3.",
faq_h2: "Où puis-je acheter ?",
faq_p2: "Vous pouvez acheter des $PIANO sur IceCreamSwap. D'autres offres d'échange seront bientôt disponibles.",
faq_h3: "Pourquoi seulement 880 000 d'approvisionnement ?",
faq_p3: "Parce que 88 touches font chanter un piano. Nous avons conservé l'élégance d'un piano à queue, pas d'une trompette de vide-grenier. Parce que Beethoven n'avait pas besoin d'un milliard de touches, et nous non plus. Ce n'est pas une question de quantité, c'est une question d'harmonie, et 880000 touches sont parfaites.",
faq_h4: "Pourquoi se lancer sur CoreDAO ?",
faq_p4: "Parce que les vrais beats ont besoin de vitesse. CoreDAO est à la hauteur. Frais réduits, ambiance intense: $PIANO a sa place sur CoreDAO. $PIANO a besoin d'une blockchain qui vit à son rythme, pas d'une blockchain à la traîne. Les frais de gaz d'Ethereum gâchent l'ambiance. CoreDAO fait durer la fête.",
disclaimer_p: "⚠️ $Amapiano est un memecoin créé uniquement à des fins de divertissement. Il n’a aucune valeur intrinsèque, aucune utilité, ne promet aucun retour financier et n’est pas destiné à être un investissement. Il n’a pas d’équipe officielle. Ce projet est inspiré par l’énergie et l’ambiance de la musique et de la culture Amapiano que le monde aime tant.",
footer_p: "© 2025 Amapiano Coin. Tous droits réservés.",
  },
  
  ar: {
    home_nav: "الصفحة الرئيسية",
about_nav: "حول",
tokenomics_nav: "اقتصاد الرمز",
buy_nav: "كيفية الشراء",
faq_nav: "الأسئلة الشائعة",
hero_title: "🎹$AMAPIANO🎹",
hero_p: "الميـم كوين بإيقاع. ‏$AMAPIANO هي نغمة كاملة في عالم الميمات. 😎",
hero_btn: "اشترِ $PIANO الآن",
sliding_p: "اشْتَرِ • احْتَفِظ • تَمَايَل • أَشْعِل الأَجْوَاء • $PIANO إِلَى القَمَر",
priceCard_title: "$PIANO السعر المباشر",
price_p: "السعر: ",
price_chart: "جارٍ التحميل...",
liquidity_p: "السيولة: ",
liquidity_chart: "جارٍ التحميل...",
volume_p: "حجم 24 ساعة: ",
volume_chart: "جارٍ التحميل...",
change_p: "التغير خلال 24 ساعة: ",
change_chart: "جارٍ التحميل...",
float_p: "$PIANO: ",
float_price: "جارٍ التحميل...",
about_title: "حول",
about_p1: "AMAPIANO ليست مجرد عملة ميمية عادية، بل هي نبضٌ متكامل. مستوحاة من الأصوات النابضة بالحياة والإيقاعات السلسة لموسيقى أمابيانو، هذا النوع الموسيقي الراقص الذي انتشر بسرعة البرق في جنوب أفريقيا🇿🇦 والعالم، تُضفي هذه العملة الحيوية نفسها على عالم العملات المشفرة.",
about_p2: "تمامًا مثل موسيقى أمابيانو، فإن عملة $Amapiano مدفوعة بالمجتمع، ومعدية، ومُصممة لتُحرك مشاعر الناس - ليس فقط بالإيقاعات، بل أيضًا بالميمات والثقافة وطاقة الويب 3. لكن تذكر دائمًا أن رمز العملة هو $PIANO.",
about_p3: "سواءً كنت من عشاق العملات المشفرة أو من محبي الإيقاعات، فإن $Amapiano هو بطاقتك إلى كواليس حفلة بلوكتشين. استمتع، انطلق، ودع موسيقى الباس تأخذك إلى عالم الخيال!",
tokenomics_title: "اقتصاد الرمز",
tokenomics_p: "إجمالي العرض: ٨٨٠,٠٠٠ دولار بيانو، LP محترق 🔥، تم إلغاء العقد 🔒، سيولة ١٠٠٪، لا رموز فريق، لا بيع مسبق، لا خارطة طريق، لا ضرائب وهمية، لا وعود، لا مشكلة. مجرد أجواء.",
quote_key: '<strong style="color: var(--dim-yellow);">$PIANO</strong> هي عملة الميم الوحيدة ذات العرض المحدود. هذه ثقافة أمابيانو ميم الأصيلة. لا وسطاء. لا ضجيج فارغ.',
contract_title: "عنوان العقد",
contract_address: "0x1234567890abcdef1234567890abcdef12345678",
contract_btn: "ينسخ",
contract_small: "تأكد دائمًا من عنوان العقد!",
contract_link: '<a href="https//:coredao.org" target="_blank" class="contract-link">عرض على مستكشف الكتل</a>',
steps_title: "كيفية شراء $PIANO",
steps_number1: "1",
steps_h1: "إنشاء محفظة:",
steps_p1: 'حمّل ميتاماسك أو محفظتك المفضلة من متجر التطبيقات أو متجر جوجل بلاي مجانًا. لمستخدمي أجهزة الكمبيوتر، حمّلوا ملحق جوجل كروم من خلال زيارة <a href="https://metamask.io/" target="_blank" style="color: yellow; text-decoration: none;">metamask.io</a>',
steps_number2: "2",
steps_h2: "احصل على CORE:",
steps_p2: 'أودع CORE في محفظتك لشراء $PIANO. يمكنك شراء CORE من منصة تداول لامركزية مثل IceCreamSwap، أو تحويلها من محفظة أخرى، أو الشراء من منصة تداول مركزية مثل <a href="https://partner.bybit.com/b/45350" target="_blank" style="color: yellow; text-decoration: none;">Bybit</a>',
steps_number3: "3",
steps_h3: "انتقل إلى ICECREAMSWAP:",
steps_p3: 'تفضل بزيارة موقع Icecreamswap. انتقل إلى <a href="https://icecreamswap.com/" target="_blank" style="color: yellow; text-decoration: none;">icecreamswap.com</a> في متصفح جوجل كروم أو متصفح Metamask داخل التطبيق. قم بتوصيل محفظتك. الصق عنوان عقد $PIANO في IceCreamSwap، ثم اختر $PIANO وأكد. وقع على رسالة توقيع المحفظة للتأكيد',
steps_number4: "4",
steps_h4: "استبدل CORE بـ $PIANO:",
steps_p4: "استبدل أي مبلغ من CORE بـ $PIANO. لا توجد ضريبة، لذا لا داعي للقلق بشأن الشراء بفارق سعري محدد، مع أنك قد تحتاج إلى استخدام هذا الفارق السعري خلال فترات تقلبات السوق.",
steps_btn1: "اشتري من ICECREAMSWAP",
steps_btn2: "اشتري على ARCHERSWAP",
swap_title: "استبدل CORE بـ $PIANO",
swap_p: "0% ضريبة • Lp Burnt 🔥 • لا يوجد انزلاق محدد",
quote_title: "$PIANO رائج على X 😲",
faq_title: "الأسئلة الشائعة",
faq_h1: "ما هو البيانو؟",
faq_p1: "$PIANO هو إيقاع تقنية بلوكتشين. إنه أنعم نغمة في عالم الميمات - حيث تلتقي أجواء موسيقى أمابيانو الهادئة بطاقة العملات المشفرة على مستوى الزعماء. إنها ليست مجرد عملة، بل هي إيقاعٌ رائعٌ على بلوكتشين. عملة ميمكوين مستوحاة من موسيقى الرقص الهادئة والروحانية التي نشأت في جنوب أفريقيا🇿🇦. ومثل هذا النوع الموسيقي، فإن $PIANO جريء، لا يُقهر، ومُصمم لإثارة حماس الجمهور. يُضفي $PIANO إيقاعاتٍ وميماتٍ وأجواءً مجتمعيةً على Web3.",
faq_h2: "أين يمكنني الشراء؟",
faq_p2: "يمكنك شراء $PIANO على IceCreamSwap. المزيد من قوائم التبادل قريبًا.",
faq_h3: "لماذا العرض 880000 فقط؟",
faq_p3: "لأن ٨٨ مفتاحًا تُغني البيانو. حافظنا على أناقته - كبيانو كبير، وليس بوقًا من سوق مرآب. لأن بيتهوفن لم يكن بحاجة إلى مليار مفتاح - ونحن أيضًا. الأمر لا يتعلق بالكمية، بل بالتناغم - و٨٨٠٠٠٠ مفتاح تُعطي النغمة الصحيحة.",
faq_h4: "لماذا الإطلاق على CoreDAO؟",
faq_p4: "لأن الإيقاعات الحقيقية تحتاج إلى سرعة حقيقية. CoreDAO توفي بالوعد. رسوم منخفضة، أجواء عالية - $PIANO مكانها على CoreDAO. $PIANO تحتاج إلى بلوكشين يرقص على إيقاعها، وليس واحداً يتأخر. رسوم غاز إيثيريوم تقتل الأجواء. CoreDAO تُبقي الحفلة مستمرة.",
logo_p: "$AMAPIANO COIN",
disclaimer_p: "⚠️ ‏$Amapiano هو عملة ميم أنشئت لأغراض الترفيه فقط. لا تحمل أي قيمة جوهرية، ولا فائدة، ولا تعد بأي عائد مالي، وليست مخصصة للاستثمار. لا توجد له أي فريق رسمي. هذا المشروع مستوحى من طاقة وثقافة موسيقى Amapiano التي يعشقها العالم كثيرًا.",
footer_p: "© 2025 Amapiano Coin. جميع الحقوق محفوظة.",
  }
};

// RTL Support CSS (add this to your style section if not present)
const rtlCSS = `
  [dir="rtl"] {
    direction: rtl;
    text-align: right;
  }
  [dir="rtl"] .quote-text {
    padding-right: 65px;
    padding-left: 0;
  }
  [dir="rtl"] .quote-text::before {
    right: 45px;
    left: auto;
  }
  [dir="rtl"] .tweet-meta {
    padding-right: 65px;
    padding-left: 0;
  }
`;

// Add RTL styles to head
document.head.insertAdjacentHTML('beforeend', `<style>${rtlCSS}</style>`);

// Enhanced language switcher functionality
langOptions.querySelectorAll('li').forEach(option => {
  option.addEventListener('click', async () => {
    const lang = option.getAttribute('data-lang');
    const selectedText = option.textContent;
    
    // Set document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Save preference
    localStorage.setItem('preferredLang', lang);

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      } else {
        // Fallback to English if translation missing
        el.innerHTML = translations['en'][key] || '';
      }
    });

    // Update UI
    langOptions.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
    option.classList.add('selected');
    selectedLang.innerHTML = `🌍Lang: ${selectedText}`;
    langOptions.classList.remove('open');
    
    // Localize numbers if needed
    if (typeof updatePriceCard === 'function') {
      await updatePriceCard(); // Refresh price formatting
    }
  });
});

// Load saved language on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang) {
    const option = langOptions.querySelector(`li[data-lang="${savedLang}"]`);
    if (option) {
      option.click();
    } else {
      // Default to English if saved language not found
      langOptions.querySelector('li[data-lang="en"]').click();
    }
  } else {
    // Default to English if no preference saved
    langOptions.querySelector('li[data-lang="en"]').click();
  }
});
// ============================================================

// ==== Piano Buy ====
  // 1. Get all elements
  const calculateBtn = document.getElementById('calculateBtn');
  const coreAmount = document.getElementById('coreAmount');
  const receiveAmount = document.getElementById('receiveAmount');
  const sendAmount = document.getElementById('sendAmount');
  const copyBtn1 = document.getElementById('copyBtn1');
  const coreAddress = document.getElementById('coreAddress');
  const amountError = document.getElementById('amountError');

  // 2. Clear errors when user types
  coreAmount.addEventListener('input', function() {
    amountError.style.display = 'none';
  });

  // 3. Calculate button handler - FIXED VERSION
  calculateBtn.addEventListener('click', function() {
    // Validate input
    if (!coreAmount.value) {
      amountError.textContent = 'Please enter an amount';
      amountError.style.display = 'block';
      return;
    }

    const amount = parseFloat(coreAmount.value);
    
    if (isNaN(amount)) {
      amountError.textContent = 'Please enter a valid number';
      amountError.style.display = 'block';
      return;
    }
    
    if (amount < 1) {
      amountError.textContent = 'Minimum 1 CORE required';
      amountError.style.display = 'block';
      return;
    }
    
    if (amount > 100) {
      amountError.textContent = 'Maximum 100 CORE allowed';
      amountError.style.display = 'block';
      return;
    }
    
    // If all validations pass
    amountError.style.display = 'none';
    receiveAmount.textContent = (amount * 100).toFixed(2);
    sendAmount.textContent = amount.toFixed(2);
  });

  // 4. Copy button handler - FIXED VERSION
  copyBtn1.addEventListener('click', function() {
    if (!coreAddress.textContent) {
      console.error('No address to copy');
      return;
    }
    
    navigator.clipboard.writeText(coreAddress.textContent.trim())
      .then(() => {
        // Visual feedback
        const originalHtml = copyBtn1.innerHTML;
        copyBtn1.innerHTML = '<i class="fas fa-check"></i> COPIED!';
        copyBtn1.style.backgroundColor = 'var(--dim-yellow)';
        copyBtn1.style.color = 'var(--black)';
        
        // Revert after 2 seconds
        setTimeout(() => {
          copyBtn1.innerHTML = originalHtml;
          copyBtn1.style.backgroundColor = '';
          copyBtn1.style.color = '';
        }, 2000);
      })
      .catch(err => {
        console.error('Copy failed:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = coreAddress.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          alert('Address copied!'); // Fallback feedback
        } catch (e) {
          console.error('Fallback copy failed:', e);
        }
        document.body.removeChild(textArea);
      });
  });
  
    // ==== Smooth Scrolling ====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });

// ==== Live Price Card ==== //
  const pairURL = "https://api.dexscreener.com/latest/dex/pairs/solana/H7puZiZjRVXaLFZ5XvgVBRsXVWvZvHwLn1YC8nCu7Ykr";

async function updatePriceCard() {
  try {
    const res = await fetch(pairURL);
    const data = await res.json();
    const pair = data.pair;

    document.getElementById("price").textContent = `$${parseFloat(pair.priceUsd).toFixed(6)}`;
    document.getElementById("liquidity").textContent = `$${Number(pair.liquidity.usd).toLocaleString()}`;
    document.getElementById("volume").textContent = `$${Number(pair.volume.h24).toLocaleString()}`;
    document.getElementById("change").textContent = `${pair.priceChange.h24}%`;
    document.getElementById("floatingPrice").textContent = `$${parseFloat(pair.priceUsd).toFixed(6)}`;
  } catch (err) {
    console.error("Failed to load price data:", err);
  }
}

// Update every 10 seconds
updatePriceCard();
setInterval(updatePriceCard, 10000);
  
    // ==== FAQ Accordion ====
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            // Close all other answers
            faqQuestions.forEach(q => {
                if (q != question) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                }
            });

            // Toggle current answer
            question.classList.toggle('active');
            answer.classList.toggle('active');
        });
    });

    // ==== Desktop Mode Fixes ====
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            document.body.style.zoom = "1";
            document.documentElement.style.zoom = "1";
        }
    });

    // Detect fake mobile view
    function checkViewport() {
        const isDesktopMode = window.innerWidth > 768 && navigator.userAgent.match(/Mobile/i);
        if (isDesktopMode) {
            document.body.classList.add('desktop-mode');
            document.documentElement.style.zoom = "1";
        }
    }
    checkViewport();

    // ==== LOAD STABILITY + ZOOM FIXES ====
    // 1. Prevent layout shift
    const elements = document.querySelectorAll('.hidden-until-load');
    elements.forEach(el => {
        el.classList.remove('hidden-until-load');
        el.classList.add('visible-after-load');
    });

    // 2. CLS prevention
    const unstableElements = document.querySelectorAll('[data-cls-fix]');
    unstableElements.forEach(el => {
        el.style.visibility = 'visible';
    });

    // 3. Resize stabilizer
    let resizeTimer;
    window.addEventListener('resize', function() {
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
    });

    // ==== Contract Address Copy Functionality ====
    const contractAddress = document.getElementById('contractAddress');
    const copyButton = document.getElementById('copyButton');

    if (copyButton) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(contractAddress.textContent.trim())
                .then(() => {
                    // Show copied tooltip
                    copyButton.classList.add('show-tooltip');

                    // Change button text temporarily
                    const originalText = copyButton.innerHTML;
                    copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';

                    // Reset after 2 seconds
                    setTimeout(() => {
                        copyButton.classList.remove('show-tooltip');
                        copyButton.innerHTML = originalText;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    copyButton.innerHTML = '<i class="fas fa-times"></i> Error';
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="far fa-copy"></i> Copy';
                    }, 2000);
                });
        });
    }

    //==== Intersection Observer for Scroll Animations ====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections with animations
    document.querySelectorAll('.logo-section, .video-wrapper, .about, .tokenomics, .contract, .buy, .faq, .disclaimer, .logo-text-section').forEach(section => {
        observer.observe(section);
    });

    //==== Ultimate Viewport Stabilizer ====
    function stabilizeViewport() {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const isDesktopView = window.innerWidth > 768;

        if (isMobile && isDesktopView) {
            document.documentElement.style.zoom = "1";
            document.body.classList.add('force-desktop');
        }
    }

    // Run on all critical events
    ['load', 'resize', 'DOMContentLoaded'].forEach(event => {
        window.addEventListener(event, stabilizeViewport);
    });

    // Final CLS prevention
    window.addEventListener('load', () => {
        document.body.style.visibility = 'visible';
    });
});