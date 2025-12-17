import { StepCategory } from './types';

export const tradingData: StepCategory[] = [
  {
    id: 'step-1',
    title: 'Step 1',
    subtitle: '價量行為',
    color: 'bg-stone-800',
    items: [
      {
        id: 's1-price-up-vol-up',
        title: '價漲量增 (Price Up, Vol Up)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Trend', 'Breakout', 'Momentum'],
        content: {
          definition: '成交量在看的是：資金的「認同度」與「迫切性」。價漲量增代表多方願意用更高的價格，積極搶進籌碼。',
          marketBehavior: '主力或大戶正在「吃貨」或「推升」，他們不計成本地買入，把賣單全部吃光。跟風者（散戶）看到價格動了，也開始跳進來追，造成買氣堆疊。',
          whenRising: [
            '趨勢確立：如果是初升段，代表趨勢啟動，燃料充足。',
            '換手成功：如果是關鍵壓力位，代表舊的套牢盤被新的買盤換手吸收。',
            '情緒亢奮：如果是末升段，可能代表散戶最後一棒的不理智追價。'
          ],
          whenFalling: [
            '量能退潮：價格還在漲，但量能跟不上，代表追價意願降低（雖然這屬於「價漲量縮」範疇，但若發生在量增趨勢中突然縮量，需警惕）。',
            '注意：這裡是討論「量增」狀態，若量能開始「下降」，請參考「價漲量縮」。'
          ],
          divergence: [
            '高檔爆天量卻不漲：警訊。買氣雖然強，但賣壓（倒貨）更強。',
            '低檔放量不漲：有人在接刀，但也代表上方拋壓極重，需要時間消化。'
          ],
          combinations: {
            indicators: ['K棒型態 (Candlestick)', '關鍵支撐壓力'],
            reason: '量只是燃料，K棒才是方向。必須搭配實體陽線（代表收盤意志強）才算數。若是長上影線＋爆量，意義完全相反（主力出貨）。'
          },
          pitfalls: [
            '高檔噴出後的末升段：這時候的量增往往是散戶接盤，容易買在最高點。',
            '流動性差的小型股：少量的資金就能做出「量增」假象。'
          ],
          usageInStep: {
            role: 'Confirmation',
            description: '確認器。當你看到價格突破，必須看到量能同步放大，這筆交易的可信度才高。沒量的突破，隨時準備撤退。'
          },
          coachNote: '量是價格的油門。油門踩到底，車子卻跑不動（K棒不漲），引擎（帳戶）就要炸了。'
        }
      },
      {
        id: 's1-price-up-vol-down',
        title: '價漲量縮 (Price Up, Vol Down)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Divergence', 'Warning', 'Pullback'],
        content: {
          definition: '量縮在看的是：市場參與者的「猶豫」或「惜售」。價漲量縮代表價格雖然漲了，但其實沒什麼人真正參與交易。',
          marketBehavior: '兩種極端情況：\n1. 買氣衰竭：多頭不想追了，只剩下一點點買單把價格「虛推」上去。\n2. 籌碼鎖定（罕見）：籌碼都在主力手上，沒人賣，所以只要一點點錢就能拉漲停。',
          whenRising: [
            '背離警訊：這是最常見的狀況。價格創新高，成交量卻沒跟上，代表動能空虛，隨時可能反轉。',
            '籌碼鎖定：僅發生在強勢股連續漲停或跳空時。'
          ],
          whenFalling: [
            '正常：量縮通常伴隨價格整理。如果價格還在漲，但量縮，視為「動能減弱」。',
            '如果後續出現「價跌量增」，則確認今天的價漲量縮是「誘多」。'
          ],
          divergence: [
            '過高量縮（背離）：價格突破前高，量卻比前波高點的量還少。這是標準的「假突破」或「力竭」訊號。'
          ],
          combinations: {
            indicators: ['Step 2 | OBV', 'Step 5 | RSI'],
            reason: 'OBV 能告訴你這到底是「惜售」還是「沒人買」。RSI 如果同時背離，那個頭部的機率高達 80%。'
          },
          pitfalls: [
            '窒息量後的緩漲：有時候量縮到極致後，價格會開始緩步墊高，這叫「驚驚漲」，容易騙你太早放空。',
            '除權息或假期前：交易冷清導致的量縮，沒有方向意義。'
          ],
          usageInStep: {
            role: 'RiskControl',
            description: '踩煞車／風控。看到價漲量縮，絕對不要加碼。手上的單子要設好移動停利，隨時準備跳車。'
          },
          coachNote: '沒有量的上漲，就像蓋在沙灘上的城堡。看起來很美，一個浪（賣壓）打來就沒了。'
        }
      },
      {
        id: 's1-price-down-vol-up',
        title: '價跌量增 (Price Down, Vol Up)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Panic', 'Supply', 'Breakdown'],
        content: {
          definition: '供給 > 需求。賣壓湧現，且低檔有人承接，但賣壓更強。',
          marketBehavior: '恐慌性拋售（Capitulation）或主力倒貨。',
          whenRising: ['N/A (這是下跌情境)'],
          whenFalling: [
            '趨勢延續：如果在下跌初期或中期，代表大家都在逃，空頭力道極強，切勿接刀。', 
            '恐慌趕底：若發生在長期下跌後的末段，伴隨長陰線（美股 Red K），可能是最後一次清洗浮額（Capitulation）。'
          ],
          divergence: ['N/A'],
          combinations: { 
            indicators: ['Support Levels', 'Step 5 | RSI'], 
            reason: '看是否跌破關鍵支撐。若跌破且量增，是確認訊號。若RSI進入超賣區鈍化，下跌可能會持續一段時間。' 
          },
          pitfalls: ['低檔的長陰爆量可能是主力在「壓低吃貨」，製造恐慌讓散戶停損。需觀察後續幾日是否不跌反漲。'],
          usageInStep: { role: 'Confirmation', description: '確認空頭趨勢或停損訊號。如果你做多，看到這個必須立刻執行停損。' },
          coachNote: '帶量的下跌是為了告訴你：大家都在逃，火災現場不要當最後一個跑的人。'
        }
      },
      {
        id: 's1-price-down-vol-down',
        title: '價跌量縮 (Price Down, Vol Down)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Consolidation', 'Washout', 'No Demand'],
        content: {
          definition: '賣壓枯竭。市場參與者「不願殺低」，但也「沒有買盤」。',
          marketBehavior: '1. 多頭回檔（洗盤）：主力停止拉抬，讓沒信心的散戶自己下車，但主力沒有出貨（所以沒量）。\n2. 空頭緩跌（陰跌）：市場像一灘死水，每天跌一點，鈍刀割肉，讓散戶麻痺。',
          whenRising: [
            '反轉訊號：在價跌量縮一段時間後，突然出現「價漲量增」，往往是修正結束、新一波攻擊的開始。'
          ],
          whenFalling: [
            '良性回檔：在多頭趨勢中，回檔縮量是健康的，代表籌碼穩定，沒有人恐慌拋售。',
            '人氣退潮：在冷門股或空頭趨勢中，無量下跌代表「沒人要玩了」，流動性風險極大。'
          ],
          divergence: [
            '價格創新低，量能卻極度萎縮（窒息量）：代表賣壓已經被洗乾淨了，底部可能不遠。'
          ],
          combinations: {
            indicators: ['Step 6 | MA (均線)', 'Support Levels'],
            reason: '量縮下跌時，要看有沒有守住均線或支撐。縮量回測支撐不破，是絕佳買點（Buy the dip）。'
          },
          pitfalls: [
            '陰跌不止：不要以為量縮就不會跌。在空頭市場，無量下跌可以跌很久（因為沒有買盤撐住）。',
            '流動性陷阱：有些小股票量縮到一天只有幾張，這時候的價格容易被操控，不可參考。'
          ],
          usageInStep: {
            role: 'Screening',
            description: '篩選進場時機。我喜歡找「多頭趨勢中，回檔量縮」的股票。這代表清洗浮額，我在等那個「量縮後出現的第一根陽線」。'
          },
          coachNote: '縮量代表「情緒冷靜」。在大家冷靜的時候佈局，在大家瘋狂（爆量）的時候離場。'
        }
      },
      {
        id: 's1-pullback-vs-reversal',
        title: '良性回檔 vs. 趨勢反轉 (Healthy Pullback vs. Reversal)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Correction', 'Trend Change', 'Analysis'],
        content: {
          definition: '這是交易中最昂貴的一課。判斷價格下跌是「休息（為了走更遠）」還是「終點（準備回頭）」。',
          marketBehavior: '良性回檔 (Healthy)：獲利了結。短線客下車，主力沒跑。特徵是「縮量、緩跌、守支撐」。\n趨勢反轉 (Reversal)：結構破壞。主力大舉倒貨或反手做空。特徵是「爆量、急跌、破關鍵點」。',
          whenRising: [
            '良性回檔：價格拉回時成交量顯著萎縮（惜售），K棒實體變短，且守住前波高點或重要均線（如 20MA）。',
            '真反轉（多轉空）：高檔出現「吞噬陰線」或「長上影線」，伴隨巨大成交量（出貨），隨後跌破關鍵支撐（Lower Low）。'
          ],
          whenFalling: [
            '暫時反彈（死貓跳）：空頭趨勢中，價格上漲但量能萎縮，碰到壓力位（如下彎均線）就爆量留上影線。',
            '真反轉（空轉多）：底部出現「爆量長陽」，隨後回測不破底（Higher Low），且量能呈現「漲潮跌退」。'
          ],
          divergence: [
            '回檔時指標修正：價格下跌，但 RSI 守住 40-50 區間（牛市特徵），這是良性。',
            '反轉時指標破壞：價格小跌，但 RSI 直接跌破 40 進入弱勢區，暗示趨勢結構改變。'
          ],
          combinations: {
            indicators: ['Step 7 | ATR', 'Step 6 | MA', 'Fibonacci'],
            reason: '用 Fibonacci 測量深度（回檔通常在 0.382/0.5 止住），用 ATR 測量恐慌（良性回檔 ATR 不會暴增），用 MA 確認趨勢防線。'
          },
          pitfalls: [
            '緩跌也是跌：不要以為量縮就不會死。如果價格「緩步」跌破關鍵支撐（溫水煮青蛙），這也是反轉，叫「盤跌」。',
            'V轉騙局：急跌後急拉（V轉）雖然強勢，但如果沒有經過「二次回測（打腳）」，很容易失敗。'
          ],
          usageInStep: {
            role: 'Screening',
            description: '持倉診斷。當我手上的股票下跌，我會檢查：1. 有爆量嗎？ 2. 破支撐了嗎？ 如果都沒有，我就抱著（良性）。如果有，我立刻跑（反轉）。'
          },
          coachNote: '回檔是彎腰撿鑽石，反轉是高樓掉磚頭。區別在於：鑽石在地上（支撐）會發光，磚頭砸到地上（支撐）會碎掉。'
        }
      },
      {
        id: 's1-breakout-vol',
        title: '突破量 vs 假突破量 (Breakout Volume)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Breakout', 'Trap', 'Validation'],
        content: {
          definition: '衝關的燃料。突破關鍵壓力區（箱型頂、頸線）時，資金的「決心」。',
          marketBehavior: '真突破：眾志成城。大戶發動，散戶跟進，賣壓被全數吃光。\n假突破：誘敵深入。主力故意拉過關卡吸引技術派追價，然後反手倒貨。',
          whenRising: [
            '有效突破：成交量必須顯著放大（通常大於 5日均量 的 1.5倍以上），且收盤要收在壓力區之上（實體陽線）。'
          ],
          whenFalling: [
            '假突破（Trap）：突破當下量能不足（無量過高），或是爆出天量但留長上影線（主力出貨）。隨後價格跌回壓力區之下。'
          ],
          divergence: [
            '價過高，OBV 沒過高：這是最標準的假突破背離訊號。',
            '價過高，量反而縮：這是「虛漲」，隨時會拉回。'
          ],
          combinations: {
            indicators: ['Step 2 | OBV', 'Step 1 | 缺口'],
            reason: '缺口是突破的最強型態。帶量跳空突破，且三天不補缺口，可信度極高。OBV 則用來檢驗籌碼真實性。'
          },
          pitfalls: [
            '開盤的假象：早盤前 15 分鐘容易爆量假突破，不要急著追。等到收盤前確認 K 棒型態再出手。',
            '盤整區內的亂突破：箱型整理中間的波動沒有意義，只看邊界的突破。'
          ],
          usageInStep: {
            role: 'Filter',
            description: '嚴格篩選。突破的那一刻，我只問兩個問題：1. 有量嗎？ 2. 收盤站穩了嗎？缺一不可。'
          },
          coachNote: '真的突破是不會回頭的。如果它突破後猶猶豫豫、立刻跌回來，那通常就是個陷阱。'
        }
      },
      {
        id: 's1-high-vol-top',
        title: '高檔爆量 (High Vol at Top)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Reversal', 'Distribution', 'Warning'],
        content: {
          definition: '人聲鼎沸處。股價已上漲一段時間，在高位突然放出巨量。',
          marketBehavior: '快樂的出貨盤。主力利用利多新聞或市場熱度，將手中的低價籌碼大量轉移給興奮的散戶（換手率極高）。散戶以為是新一波攻擊，主力在算錢離場。',
          whenRising: [
            '最後的煙火：價格可能還會衝一下，但往往是強弩之末。',
            '量價背離前兆：雖然現在有量，但如果價格推升幅度越來越小（K棒變短），代表阻力極大。'
          ],
          whenFalling: [
            '烏雲蓋頂：爆量當天收長陰線（美股 Red K）或長上影線，這是明確的「主力落跑」訊號。',
            '高檔震盪：爆量後價格不漲不跌，在高檔橫盤，這是主力在慢慢出貨。'
          ],
          divergence: [
            '價格創新高，但指標（RSI, CMF）已經轉弱。'
          ],
          combinations: {
            indicators: ['Step 3 | A/D 線', 'Candlestick'],
            reason: '看 A/D 線是否背離。如果爆量收陽線，但 A/D 線卻往下掉，代表是為了拉高出貨（收盤雖漲但相對弱勢）。'
          },
          pitfalls: [
            '換手再上：強勢股有時候會高檔爆量換手（新主力進場接走舊主力的貨），然後繼續漲。區別在於：換手後的價格「不能跌破爆量低點」。'
          ],
          usageInStep: {
            role: 'Braking',
            description: '緊急煞車。看到高檔爆量，我會先獲利了結一半。如果跌破爆量K線低點，全數出清。'
          },
          coachNote: '天量通常見天價。當連不玩股票的阿姨都在討論這檔股票時，爆量就是終點。'
        }
      },
      {
        id: 's1-high-vol-bottom',
        title: '低檔爆量 (High Vol at Bottom)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Reversal', 'Accumulation', 'Opportunity'],
        content: {
          definition: '絕望的盡頭。股價下跌一段時間後，突然放出巨量。',
          marketBehavior: '恐慌盤 vs 聰明錢。散戶受不了虧損或利空打擊，不計代價砍出（Capitulation）。這時候是誰有能力接走這麼多籌碼？是主力。',
          whenRising: [
            '單腳反彈：爆量後直接V型反轉（較少見）。',
            '止跌訊號：爆量後，價格不再創新低，開始進入盤整打底。'
          ],
          whenFalling: [
            '最後一殺：有時候爆量長陰線後，還會再慣性下跌幾天，這叫「誘空」或「甩轎」。'
          ],
          divergence: [
            '底背離：價格可能還在測底，但 RSI 或 OBV 已經偷偷墊高。'
          ],
          combinations: {
            indicators: ['Step 5 | RSI', 'Step 7 | ATR'],
            reason: '低檔爆量常伴隨 ATR 飆高（恐慌）。如果 RSI 同時出現底背離，這就是勝率極高的「承接點」。'
          },
          pitfalls: [
            '接刀風險：低檔爆量不代表馬上會漲，可能還會盤整很久（以時間換空間）。太早進場會被磨死。',
            '公司出事：如果是因为公司基本面崩壞（掏空、下市危機）而爆量，千萬別接。'
          ],
          usageInStep: {
            role: 'Screening',
            description: '列入觀察名單。低檔爆量後，我不會馬上買，我會等它「不再破底」並「站上爆量K線高點」才進場。'
          },
          coachNote: '別人的停損點，是你的進場點。但請確認那真的是最後一滴血（爆量不跌）。'
        }
      },
      {
        id: 's1-plunge-bounce',
        title: '暴跌真假回彈 (Real vs. Fake Bounce)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Reversal', 'Trap', 'Panic'],
        content: {
          definition: '急跌後的修復機制。重點在於區分這是「逃命波（死貓跳）」還是真正的「V型反轉」。',
          marketBehavior: '假回彈（死貓跳）：空單回補（Short Covering）。殺低的人獲利了結，導致價格暫時上浮，但沒有新買盤。\n真回彈（反轉）：主力進場。在絕望恐慌中，有大資金願意承接所有拋售，並強勢推升。',
          whenRising: [
            '假回彈：無量上漲。價格雖然陽線反彈，但成交量比下跌時縮小很多。通常彈到 0.382 或 0.5 黃金分割位就上不去。',
            '真回彈：報復性反擊。第一根反彈陽線必須「爆量」，且實體要長，最好直接吞噬掉前一根下跌陰線。'
          ],
          whenFalling: [
            '二次測底（Retest）：回彈後的下跌才是關鍵。如果量縮且不破前低（Higher Low），這才是真正的進場點（第二隻腳）。',
            '假回彈後的下跌：通常會帶量跌破前低，開啟新一輪殺戮。'
          ],
          divergence: [
            '價格創新低，但 RSI 沒有創新低（底背離）。這是判斷真回彈最強力的濾網。'
          ],
          combinations: {
            indicators: ['Step 5 | RSI', 'Step 7 | ATR', 'Fibonacci'],
            reason: 'ATR 顯示恐慌極值，RSI 給出背離訊號，Fibonacci 測量反彈強弱。三者合一才能接刀。'
          },
          pitfalls: [
            '接第一根反彈：勝率極低。因為你不知道那是反彈還是中繼休息。',
            'V轉的迷思：真正的V轉（單腳反轉）很少見，通常需要時間打底。'
          ],
          usageInStep: {
            role: 'Braking',
            description: '踩煞車。看到暴跌後的陽線，先假設它是「假的」。除非我看到「爆量吞噬」或者「縮量回測不破底」，否則絕不進場。'
          },
          coachNote: '不要接掉下來的刀子，等它插在地上不動了，甚至生鏽了（量縮盤整），再去拔。'
        }
      },
      {
        id: 's1-turnover',
        title: '換手 (Turnover)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Continuation', 'Support', 'Flow'],
        content: {
          definition: '接力賽的交棒區。籌碼從「獲利者/解套者」手中，轉移到「新一波看好者」手中。',
          marketBehavior: '消化賣壓。通常發生在關卡價（整數關卡、前波高點）。舊的人想賣，新的人想買。如果換手成功，成交量會放大，價格會守住關鍵位，然後展開新攻勢。',
          whenRising: [
            '空中加油：上漲途中出現巨量震盪，但收盤守住，隨後量縮續攻。',
            '洗盤結束：籌碼變得乾淨（不穩定的籌碼被洗出去了）。'
          ],
          whenFalling: [
            '換手失敗：爆量換手後，價格卻跌破了換手區間的低點。這代表新進場的主力也被套牢了，支撐變壓力。'
          ],
          divergence: ['N/A'],
          combinations: {
            indicators: ['Step 1 | 價漲量縮', 'Step 6 | MA'],
            reason: '換手後的縮量是關鍵。換手（爆量）→ 縮量（籌碼沈澱）→ 再攻（確認）。搭配均線支撐判斷換手區間。'
          },
          pitfalls: [
            '高檔出貨 vs 換手：這兩者很像。區分關鍵在於「位置」和「後續走勢」。高檔換手風險高，腰部換手（初升段）最安全。'
          ],
          usageInStep: {
            role: 'Confirmation',
            description: '中繼確認。如果你錯過了第一波起漲，換手區是你第二次上車的機會。觀察重點是「爆量而不跌」。'
          },
          coachNote: '好的換手是「量大不跌」。這代表新的買盤力道強大，完全吸收了賣壓。'
        }
      },
      {
        id: 's1-rhythm',
        title: '節奏推進 vs 節奏混亂 (Rhythm)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Pattern', 'Quality', 'Psychology'],
        content: {
          definition: '市場的呼吸與心跳。看趨勢運行的「流暢度」與「規律性」。',
          marketBehavior: '節奏推進（好）：控盤者很有信心，股價沿著均線（如 10MA）穩步推升，陽線多陰線少，回檔淺且快。\n節奏混亂（壞）：控盤者猶豫或多空分歧大，K棒忽長忽短，影線亂飛，漲一天跌三天（心電圖）。',
          whenRising: [
            '階梯式上漲：漲三退一，底部不斷墊高，量能配合完美（漲出量、跌縮量）。',
            '加速趕頂：原本穩定的節奏突然變快（角度變陡），通常是行情結束的前兆。'
          ],
          whenFalling: [
            '失去秩序：趨勢一旦變亂（例如跌破上升趨勢線又拉回，反覆洗刷），代表主力控盤力下降，容易出現轉折。'
          ],
          divergence: [
            '價格還在漲，但 K 棒實體變短，影線變多，這是「節奏轉弱」的背離。'
          ],
          combinations: {
            indicators: ['Step 6 | MA', 'Step 7 | ATR'],
            reason: '均線看方向，ATR 看躁動度。節奏好的趨勢，ATR 通常是平穩的。節奏亂，ATR 會忽大忽小。'
          },
          pitfalls: [
            '洗盤 vs 趨勢破壞：有時候主力會故意製造「節奏混亂」來洗盤。區別在於是否破壞了「關鍵低點（道氏理論）」。'
          ],
          usageInStep: {
            role: 'Filter',
            description: '選股審美觀。我只做「圖形漂亮、節奏清晰」的股票。長得醜的（節奏亂）、毛躁的（影線多），我直接略過，不浪費時間解讀。'
          },
          coachNote: '醜圖不要做。圖形反映人心，混亂的圖形背後是混亂的籌碼與人心。'
        }
      },
      {
        id: 's1-gap-volume',
        title: '缺口 (Gap) + 量',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Gap', 'Momentum', 'Reversal'],
        content: {
          definition: '缺口代表「情緒的斷層」。開盤那一刻，買賣雙方的共識發生劇烈位移。',
          marketBehavior: '極度的迫切。多方（或空方）不願意在原本的價格等待，寧願直接用更高的價格開盤搶貨（或更低的價格拋售）。',
          whenRising: [
            '突破缺口 (Breakaway Gap)：在盤整區間後出現，配合爆量，是強力的趨勢啟動訊號。',
            '中繼缺口 (Runaway Gap)：在趨勢中間出現，量能平穩，代表趨勢加速。'
          ],
          whenFalling: [
            '竭盡缺口 (Exhaustion Gap)：在趨勢末端出現，伴隨異常天量，隨後價格停滯，往往是主力最後的誘多（或誘空）。'
          ],
          divergence: ['缺口回補：如果突破缺口在三天內被回補，且量能萎縮，代表這是「假突破」。'],
          combinations: { 
            indicators: ['Step 6 | MA (均線)'], 
            reason: '看缺口與均線的乖離率。如果乖離過大出現缺口，竭盡機率高。' 
          },
          pitfalls: ['除權息造成的缺口：這是財務操作，不具備行為意義。', '流動性差的個股：沒量的跳空只是掛單稀疏，沒有參考價值。'],
          usageInStep: { role: 'Screening', description: '篩選器。帶量的突破缺口是我最喜歡的進場型態之一，勝率高且停損好設（設在缺口下緣）。' },
          coachNote: '缺口是市場最強烈的情緒表達。不要預設缺口一定會補，強勢的缺口是不回頭的。'
        }
      },
      {
        id: 's1-sell-the-news',
        title: 'Sell the news (利多出盡)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['News', 'Trap', 'Exit'],
        content: {
          definition: '預期兌現。好消息見報之日，就是股價高點之時。',
          marketBehavior: '流動性供給。聰明錢早就知道消息（或早就在賭這個消息），他們買在低點。當新聞公開，散戶看到利多衝進來買，剛好提供了巨大的「流動性」，讓聰明錢可以把大量的貨倒給散戶。',
          whenRising: [
            '消息公佈前：股價通常已經漲了一段（反應預期）。',
            '消息公佈當下：可能會有瞬間衝高（散戶進場）。'
          ],
          whenFalling: [
            '反轉下跌：利多見報後，股價不漲反跌，並且爆出巨量。這是最標準的「利多出盡」。'
          ],
          divergence: [
            '新聞標題越聳動，股價反應越冷淡，代表主力早已離場。'
          ],
          combinations: {
            indicators: ['Step 1 | 高檔爆量', 'Step 2 | OBV'],
            reason: '觀察 OBV 是否在新聞出來前就已經開始轉弱。如果是，代表主力早就在落跑了。'
          },
          pitfalls: [
            '超預期利多：如果公佈的利多「遠遠超過」市場預期，股價可能會繼續漲。Sell the news 適用於「符合預期」或「低於預期」的消息。'
          ],
          usageInStep: {
            role: 'Braking',
            description: '踩煞車。看到重大利多新聞，我絕對不追高。我會問自己：「這個消息市場知道了嗎？股價反應了嗎？」如果答案是 Yes，我就不買。'
          },
          coachNote: '新聞是寫給最後一個知道的人看的。當你在報紙上看到機會時，那通常已經是陷阱。'
        }
      },
      {
        id: 's1-buy-the-rumor',
        title: 'Buy the rumor (謠言買進)',
        stepId: 'step-1',
        stepName: 'Step 1 | 價量行為',
        tags: ['Speculation', 'Entry', 'Psychology'],
        content: {
          definition: '買在朦朧美。市場最喜歡炒作「未來的故事」。',
          marketBehavior: '想像力溢價。因為事實還沒發生，大家都有想像空間，多頭可以用各種故事來推升股價。這時候的阻力最小，因為沒有「財報（事實）」來潑冷水。',
          whenRising: [
            '無基之彈：股價上漲沒有基本面支持，純粹靠題材和資金堆疊。這是最強的投機階段。',
            '量能溫和放大：聰明錢在默默佈局。'
          ],
          whenFalling: [
            '事實公佈：一旦財報公佈或產品發表（Rumor 變成 News），想像空間消失，大家開始檢視現實，股價往往見光死（接上 Sell the news）。'
          ],
          divergence: ['N/A'],
          combinations: {
            indicators: ['Step 1 | 價漲量增', 'Step 4 | CMF'],
            reason: '炒作題材需要資金熱度。CMF 必須維持強勢，代表資金還在裡面發酵。'
          },
          pitfalls: [
            '故事破滅：如果謠言被證實是假的，股價會崩跌。這是在賭博，風控（停損）要設很緊。'
          ],
          usageInStep: {
            role: 'Screening',
            description: '尋找題材股的進場點。在謠言剛開始流傳、股價剛突破時進場，在事情快要成真（開獎）前離場。只吃魚身，不吃魚尾。'
          },
          coachNote: '在事實模糊時進場，在事實清晰時離場。交易的是「可能性」，而不是「確定性」。'
        }
      }
    ]
  },
  {
    id: 'step-2',
    title: 'Step 2',
    subtitle: 'OBV',
    color: 'bg-zen-blue',
    items: [
       {
        id: 's2-obv-general',
        title: 'OBV 能量潮',
        stepId: 'step-2',
        stepName: 'Step 2 | OBV',
        tags: ['Flow', 'Smart Money'],
        content: {
          definition: 'OBV 在看的是：資金是不是願意在「更高或更低的價格」持續接手。它是把成交量「方向化」。',
          marketBehavior: '聰明錢（Smart Money）的腳步。他們通常在價格發動前就已經悄悄佈局（OBV先漲），或在價格還在高檔時就悄悄落跑（OBV先跌）。',
          whenRising: ['資金進駐：即使價格盤整，OBV 創新高，代表有人在吸籌。', '趨勢健康：價格漲，OBV 跟著漲，確認多頭趨勢。'],
          whenFalling: ['資金撤退：價格創新高，OBV 卻過不了高（背離），代表主力在出貨，只剩散戶在推價。'],
          divergence: ['頂部背離：價漲 OBV 跌（最強烈賣訊）。', '底部背離：價跌 OBV 漲（最強烈買訊）。'],
          combinations: { indicators: ['Step 1 | 價量行為', 'Support/Resistance'], reason: 'OBV 一定要搭配「價量結構」。OBV 的絕對數值沒意義，要看「趨勢」與「前高前低」。' },
          pitfalls: ['流動性差的股票：一兩筆大單就能扭曲 OBV。', '區間震盪盤：OBV 會忽上忽下失去參考性。', '漲停鎖死：量縮導致 OBV 沒動，但其實買氣超強（這是 OBV 的盲點）。'],
          usageInStep: { role: 'Confirmation', description: '確認器。價格突破時，我會看 OBV 有沒有跟著突破。價格破前高，OBV 也要破前高，否則我會減碼。' },
          coachNote: '價格會騙人，但錢的流向（OBV）很難騙人。跟著錢走，不要跟著新聞走。'
        }
      },
      {
        id: 's2-obv-breakout',
        title: 'OBV 先行突破 (Leading Breakout)',
        stepId: 'step-2',
        stepName: 'Step 2 | OBV',
        tags: ['Leading Signal', 'Entry', 'Smart Money'],
        content: {
          definition: '偷跑的訊號。當股價還在盤整區間內（箱型），OBV 卻已經率先突破了它自己的壓力線。',
          marketBehavior: '隱形吸籌。這代表主力正在用「不驚動價格」的方式大舉吃貨（掛單慢慢吃）。表面上價格風平浪靜，水面下（資金）已經波濤洶湧。',
          whenRising: [
            'OBV 領先創高：這是最強烈的買進訊號，預示著價格即將跟隨突破。',
            '價格還在盤整：這是最好的進場點，因為你的成本和主力差不多。'
          ],
          whenFalling: [
            'OBV 領先破底：價格還在撐，但資金已經撤光了。隨後價格會出現崩跌。'
          ],
          divergence: [
            '價格未過高，OBV 已過高：這不是背離，這是「確認」。代表籌碼已經鎖定，只欠東風（消息或點火）。'
          ],
          combinations: {
            indicators: ['Support/Resistance', 'Step 6 | MA'],
            reason: '畫出 OBV 的趨勢線。當 OBV 突破下降趨勢線時，通常比價格突破更早。'
          },
          pitfalls: [
            '假突破：雖然 OBV 突破，但如果後續價格遲遲不動（超過兩週），可能是主力資金套牢或改變計畫。'
          ],
          usageInStep: {
            role: 'Screening',
            description: '尋找潛力股。我會專門找「價格在箱型整理，但 OBV 已經突破」的股票。這種股票一旦發動，漲幅通常最大。'
          },
          coachNote: '最好的交易是在「沒人注意」的時候進場。OBV 先行突破就是告訴你：大戶已經進場了，你還在等什麼？'
        }
      }
    ]
  },
  {
    id: 'step-3',
    title: 'Step 3',
    subtitle: 'A/D 線',
    color: 'bg-stone-600',
    items: [
      {
        id: 's3-ad-line',
        title: 'A/D 線 (Accumulation/Distribution)',
        stepId: 'step-3',
        stepName: 'Step 3 | A/D 線',
        tags: ['Intraday', 'Buying Pressure'],
        content: {
          definition: 'A/D 線在看的是：這根 K 棒收盤時，是多方贏還是空方贏？它衡量「日內」的資金力道。',
          marketBehavior: '它在觀察主力是「拉高出貨」還是「壓低進貨」。\n如果收盤收在最高點附近，代表有人一路買到收盤（吸籌）。\n如果收盤收在最低點附近，代表有人一路賣到收盤（出貨）。',
          whenRising: [
            '收盤強勢：代表今天的成交量大部份是由買方貢獻的，且收盤意願強。',
            '底部吸籌：價格在區間震盪，但 A/D 線卻一路走高，代表主力在盤整區偷偷吃貨。'
          ],
          whenFalling: [
            '收盤弱勢：價格可能還沒跌，但 A/D 開始往下，代表每一天的收盤都收在相對低點，主力在撤退。',
            '出貨訊號：價格創新高，A/D 線卻創新低，這是比 OBV 更敏感的出貨訊號。'
          ],
          divergence: [
            'A/D 背離通常比 OBV 早發生。因為 OBV 只要收漲就全加，但 A/D 會看你「收在哪裡」。如果是長上影線的陽線，OBV 會漲，但 A/D 會跌（因為收在低點），這時候 A/D 才是對的。'
          ],
          combinations: { 
            indicators: ['Step 2 | OBV', 'Candlestick'], 
            reason: 'A/D 補足了 OBV 的盲點（長上影線/長下影線）。當 OBV 說漲，A/D 說跌，相信 A/D（因為它看穿了 K 棒結構）。' 
          },
          pitfalls: [
            '跳空缺口：A/D 線不考慮缺口，只看當日 High/Low/Close 關係。如果有巨大跳空但收盤收低，A/D 會大跌，可能忽略了跳空本身的強勢。'
          ],
          usageInStep: { 
            role: 'Filter', 
            description: '細節篩選器。在盤整區想要抓突破時，我會看 A/D 線是否已經「偷跑」往上。' 
          },
          coachNote: 'A/D 線是拿放大鏡看 K 棒內部的偵探。它不在乎今天的顏色，它在乎的是收盤時誰還站在戰場上。'
        }
      }
    ]
  },
  {
    id: 'step-4',
    title: 'Step 4',
    subtitle: 'CMF',
    color: 'bg-amber-700',
    items: [
      {
        id: 's4-cmf',
        title: 'CMF 蔡金資金流向 (Chaikin Money Flow)',
        stepId: 'step-4',
        stepName: 'Step 4 | CMF',
        tags: ['Trend Strength', 'Institutional Flow', 'Brake'],
        content: {
          definition: 'CMF 在看的是：一段時間內（通常 20 或 21 天），多空雙方的「持續性」與「平均力道」。它是 A/D 線的移動平均版。',
          marketBehavior: '它在過濾雜訊，尋找「機構法人的足跡」。散戶可以買一天，但很難連續 20 天都讓收盤收在相對高點。只有大資金做得到。',
          whenRising: [
            '翻正（> 0）：代表過去這段時間，平均而言，多方佔優勢，資金淨流入。',
            '強勢區（> 0.25）：代表極強的買盤進駐，趨勢確立。'
          ],
          whenFalling: [
            '翻負（< 0）：代表資金開始淨流出，空方控盤。',
            '弱勢區（< -0.25）：代表極強的拋壓，主力在倒貨。'
          ],
          divergence: [
            '價格創新高，CMF 卻在零軸附近徘徊甚至翻負：這是極度危險的訊號，代表這波上漲沒有資金支持，是「虛漲」。'
          ],
          combinations: { 
            indicators: ['Step 1 | 價量', 'Step 6 | MA'], 
            reason: 'CMF 是最好的「煞車」。當你想追高時，看一下 CMF。如果價格大漲但 CMF < 0，請把手綁起來，不要下單。' 
          },
          pitfalls: [
            '反應較慢：因為是移動平均，它不會在第一時間告訴你轉折。不要用 CMF 抓最高最低點。',
            '震盪盤失效：在無趨勢的盤整中，CMF 會在 0 軸上下反覆穿越，失去參考價值。'
          ],
          usageInStep: { 
            role: 'Braking', 
            description: '踩煞車工具。我不會單看 CMF 進場，但我會因為 CMF 不對勁而「取消」進場計畫。綠燈（價格）亮了，但警察（CMF）站在路口，還是別闖。' 
          },
          coachNote: 'CMF 是你的懷疑論朋友。當市場一片樂觀時，問問 CMF：「真的有錢在裡面嗎？」'
        }
      }
    ]
  },
  {
    id: 'step-5',
    title: 'Step 5',
    subtitle: 'RSI',
    color: 'bg-zen-red',
    items: [
      {
        id: 's5-rsi',
        title: 'RSI 相對強弱指標 (Relative Strength Index)',
        stepId: 'step-5',
        stepName: 'Step 5 | RSI',
        tags: ['Momentum', 'Speed', 'Divergence'],
        content: {
          definition: 'RSI 在看的是：價格變動的「速度」與「動能」。它不是看價格多高，而是看「漲得有多快」。',
          marketBehavior: '想像開車。RSI 是時速表。\nRSI > 70 代表油門踩到底（超買區？不，是強勢區！）。\nRSI < 30 代表急煞或倒車（超賣區？不，是弱勢區！）。',
          whenRising: [
            '進入 50 以上：多方控球，動能轉強。',
            '進入 70 以上（鈍化）：在強勢多頭趨勢中，RSI > 70 是常態，代表趨勢極強，千萬不要因為「超買」就去放空，車子正開得最快。'
          ],
          whenFalling: [
            '跌破 50：動能轉弱，空方取得優勢。',
            '跌破 30（鈍化）：在空頭趨勢中，代表下跌動能極強，這時候去抄底是接掉下來的刀子。'
          ],
          divergence: [
            '這是 RSI 真正的價值。',
            '頂部背離：價格創新高，RSI 卻沒有創新高（車速變慢了）。代表油門鬆了，雖然車還在往前滑，但隨時會停。',
            '底部背離：價格創新低，RSI 卻墊高（煞車沒那麼急了）。代表賣壓衰竭。'
          ],
          combinations: { 
            indicators: ['Step 1 | 價量行為'], 
            reason: 'RSI 必須搭配趨勢判斷。趨勢盤看鈍化（抱單），震盪盤看背離（轉折）。搞混會死很慘。' 
          },
          pitfalls: [
            '強勢趨勢中的「超買」誤區：新手常死在「RSI > 70 放空」。在主升段，RSI 可以掛在 80 很久，你會被軋上天。',
            '震盪盤：RSI 會頻繁在 30-70 來回，這時候可以用來做高拋低吸，但一旦趨勢出來要立刻停手。'
          ],
          usageInStep: { 
            role: 'Confirmation', 
            description: '確認動能狀態。進場前我會確認 RSI 是否 > 50（做多）。出場時我會看是否有背離訊號。' 
          },
          coachNote: 'RSI 是時速表。看到時速 200 公里（>70），不要跳車，也不要擋在車前面。等它慢下來（背離）再說。'
        }
      },
      {
        id: 's5-rsi-hidden-divergence',
        title: 'RSI 隱性背離 (Hidden Divergence)',
        stepId: 'step-5',
        stepName: 'Step 5 | RSI',
        tags: ['Trend Continuation', 'Entry', 'Secret Weapon'],
        content: {
          definition: '順勢交易的加油站。一般背離是抓「反轉」，隱性背離是抓「趨勢續抱」。',
          marketBehavior: '多頭回檔清洗浮額。價格拉回比較深（嚇甩轎），但動能指標（RSI）卻維持強勢（沒跌那麼深）。這代表雖然價格跌了，但多頭的「內功」還在。',
          whenRising: [
            '多頭隱性背離：價格創「更高的低點 (Higher Low)」，但 RSI 創「更低的低點 (Lower Low)」。這代表動能已經完全釋放（超賣），但價格卻沒跌破前低，是絕佳的「拉回買點」。'
          ],
          whenFalling: [
            '空頭隱性背離：價格創「更低的高點 (Lower High)」，但 RSI 創「更高的高點 (Higher High)」。這代表反彈動能已經用光（超買），但價格卻彈不上去，是絕佳的「反彈空點」。'
          ],
          divergence: [
            '注意：隱性背離發生在「趨勢中」，用來加入趨勢。一般背離發生在「趨勢末端」，用來逆勢操作。'
          ],
          combinations: {
            indicators: ['Step 6 | MA', 'Fibonacci'],
            reason: '當價格回測均線或 0.618 位置，同時出現隱性背離，這就是「聖杯級」的順勢進場點。'
          },
          pitfalls: [
            '判斷錯誤：新手常搞混一般背離和隱性背離。口訣：一般背離看高點（抓頭），隱性背離看低點（抓底）。'
          ],
          usageInStep: {
            role: 'Screening',
            description: '尋找上車機會。當強勢股回檔時，我不會猜底，我會找「隱性背離」。這告訴我調整結束，主力準備再次發動。'
          },
          coachNote: '一般背離讓你賣在最高點（很難），隱性背離讓你買在起漲點（很賺）。'
        }
      },
      {
        id: 's5-rsi-range-shift',
        title: 'RSI 多空區間易位 (Range Shift)',
        stepId: 'step-5',
        stepName: 'Step 5 | RSI',
        tags: ['Trend ID', 'Regime Change', 'Andrew Cardwell'],
        content: {
          definition: 'RSI 的活動範圍會隨趨勢改變。多頭市場 RSI 不容易跌破 40，空頭市場 RSI 不容易突破 60。',
          marketBehavior: '定義戰場。市場參與者在牛市中會急著在回檔時買進（支撐墊高），在熊市中會急著在反彈時賣出（壓力壓低）。',
          whenRising: [
            '牛市區間 (40-80)：在多頭趨勢中，RSI 回測 40-50 就是支撐買點。如果能衝到 80，代表多頭極強。'
          ],
          whenFalling: [
            '熊市區間 (20-60)：在空頭趨勢中，RSI 反彈到 55-65 就是壓力賣點。如果跌到 20，代表空頭極強。'
          ],
          divergence: [
            '區間破壞：當 RSI 在多頭市場跌破 40，代表趨勢可能轉空（Regime Change）。當 RSI 在空頭市場站穩 60，代表趨勢可能轉多。'
          ],
          combinations: {
            indicators: ['Step 6 | MA (200MA)'],
            reason: '用 200MA 判斷大趨勢，用 RSI 區間來微調進出場。200MA 之上，只看 40-80 區間。'
          },
          pitfalls: [
            '刻舟求劍：不要死守 30/70 法則。在強勁多頭中，RSI 跌到 30 可能已經是崩盤（轉空）而不是買點。'
          ],
          usageInStep: {
            role: 'Filter',
            description: '判斷市場屬性。我會看最近 RSI 的低點在哪裡。如果都在 40 附近就止跌，我就知道現在是牛市，只做多。'
          },
          coachNote: '不要問現在是不是超買超賣，要問現在是「誰的主場」。多頭主場守 40，空頭主場守 60。'
        }
      }
    ]
  },
  {
    id: 'step-6',
    title: 'Step 6',
    subtitle: 'MA (均線)',
    color: 'bg-emerald-800',
    items: [
      {
        id: 's6-ma-behavior',
        title: 'MA 移動平均線 (Moving Averages)',
        stepId: 'step-6',
        stepName: 'Step 6 | MA (均線)',
        tags: ['Trend', 'Psychology', 'Cost'],
        content: {
          definition: 'MA 在看的是：市場參與者的「平均持倉成本」與「心理狀態」。',
          marketBehavior: '均線是市場的「記憶」。\n價格在 MA 之上：平均每個人都賺錢，情緒是「安穩、惜售、加碼」。\n價格在 MA 之下：平均每個人都賠錢，情緒是「焦慮、想解套、停損」。\nMA 的斜率：代表市場的共識方向。',
          whenRising: [
            '均線向上 + 價格在線上：趨勢多頭。這時候回測均線是買點，因為賺錢的人不想賣，沒上車的人想上車（支撐）。',
            '均線發散（多頭排列）：短中長期均線都向上，代表所有週期的參與者都賺錢，這是最強的趨勢。'
          ],
          whenFalling: [
            '均線向下 + 價格在線下：趨勢空頭。這時候反彈到均線是賣點，因為賠錢的人急著解套（壓力）。',
            '均線糾結：成本趨於一致，市場正在等待方向。這是暴風雨前的寧靜。'
          ],
          divergence: [
            '乖離率過大：價格跑得離均線太遠（老人與狗）。賺太多的人想獲利了結，賠太多的人不想殺低。這時候容易發生「均值回歸」。'
          ],
          combinations: { 
            indicators: ['Step 1 | 突破量'], 
            reason: '均線糾結後的突破，必須帶量，才代表主力表態要脫離成本區。' 
          },
          pitfalls: [
            '盤整盤的「巴來巴去」：均線走平時，價格會反覆穿梭均線。這時候均線失效，不要依據均線做交易。',
            '落後指標：均線永遠是落後的。不要期待它賣在最高點，它的功能是讓你吃到魚身。'
          ],
          usageInStep: { 
            role: 'Filter', 
            description: '趨勢濾網。我只做與均線方向一致的交易。MA 向上只做多，MA 向下只做空。這是保護我不逆勢的最重要工具。' 
          },
          coachNote: '均線是你的防護罩。待在防護罩（趨勢）裡面，不要試圖去接掉下來的刀子，也不要用肉身擋火車。'
        }
      },
      {
        id: 's6-ma-bias',
        title: '均線乖離 (Bias / Mean Reversion)',
        stepId: 'step-6',
        stepName: 'Step 6 | MA (均線)',
        tags: ['Reversal', 'Risk', 'Gravity'],
        content: {
          definition: '地心引力。價格與均線之間的距離。距離越遠，拉回的力量越大。',
          marketBehavior: '獲利了結的誘惑。當乖離率過大（正乖離），代表持股的人都賺翻了，隨時有人想賣。當負乖離過大，代表大家殺紅眼了，隨時會有報復性反彈。',
          whenRising: [
            '正乖離過大：這不是買點，是賣點（或減碼點）。不要追在離均線很遠的地方。',
            '乖離收斂：價格橫盤等待均線跟上，這是強勢整理；價格主動下跌找均線，這是弱勢整理。'
          ],
          whenFalling: [
            '負乖離過大：不要在離均線很遠的下方追空，容易被「殺空反彈」軋到天上去。'
          ],
          divergence: ['N/A'],
          combinations: {
            indicators: ['Step 5 | RSI', 'Candlestick'],
            reason: '當正乖離過大 + RSI 背離 + 出現長陰線 (Red K)，這是勝率極高的短線回檔訊號。'
          },
          pitfalls: [
            '強勢股的鈍化：在超級飆股身上，價格可以長期維持大乖離（沿著 5MA 噴），這時候去空它會死得很慘。逆勢操作乖離要非常小心。'
          ],
          usageInStep: {
            role: 'Braking',
            description: '進場煞車。我想買一檔股票時，會先看乖離。如果離 20MA 太遠，我會強迫自己「等它回來」。寧可錯過，不可做錯。'
          },
          coachNote: '老人（均線）與狗（價格）。狗跑太遠，終究會跑回主人身邊。不要在狗跑最遠的時候去追牠。'
        }
      }
    ]
  },
  {
    id: 'step-7',
    title: 'Step 7',
    subtitle: 'ATR',
    color: 'bg-indigo-900',
    items: [
      {
        id: 's7-atr',
        title: 'ATR 真實波幅 (Average True Range)',
        stepId: 'step-7',
        stepName: 'Step 7 | ATR',
        tags: ['Risk', 'Volatility', 'Stop Loss'],
        content: {
          definition: 'ATR 在看的是：市場的「情緒波動」與「合理活動範圍」。它完全不告訴你方向，只告訴你「躁動程度」。',
          marketBehavior: 'ATR 是市場的「心跳」或「分貝計」。\nATR 高：市場情緒激動、恐慌或貪婪，K 棒很長，洗刷劇烈。\nATR 低：市場情緒平靜、觀望，K 棒很短。',
          whenRising: [
            '變盤前兆或趨勢加速：通常伴隨大成交量。如果是低檔爆量長陰線+ATR暴增，可能是恐慌趕底。',
            '風險增加：原本 10 點的波動變 50 點，你的停損距離必須拉大，部位必須縮小。'
          ],
          whenFalling: [
            '盤整或趨勢穩定：ATR 緩步下降，代表市場進入穩定的趨勢推升（驚驚漲）或死魚盤整。',
            '暴風雨前的寧靜：ATR 壓縮到極致時，往往是大行情的起點。'
          ],
          divergence: [
            '無方向性，無背離概念。但如果價格創新高，ATR 卻持續萎縮，代表多頭是在「冷靜」中推升，這是健康的（不易崩盤）。'
          ],
          combinations: { 
            indicators: ['Step 6 | MA'], 
            reason: '用 MA 決定方向，用 ATR 決定「距離」。停損要設在 2 倍或 3 倍 ATR 之外，避免被市場雜訊掃出場。' 
          },
          pitfalls: [
            '誤把 ATR 當動能：ATR 上升不代表要漲，可能代表要大跌（恐慌）。不要單看 ATR 做方向判斷。',
            '忽略部位控管：ATR 變大時，如果不縮小部位，同樣的停損距離會讓你賠更多錢。'
          ],
          usageInStep: { 
            role: 'RiskControl', 
            description: '風控核心。我用 ATR 來計算停損點位與部位大小（Position Sizing）。波動大，買少一點；波動小，買多一點。' 
          },
          coachNote: 'ATR 不會幫你賺更多錢，但它能救你一命。它是安全氣囊，根據車速（波動）調整充氣量。'
        }
      },
      {
        id: 's7-atr-squeeze',
        title: 'ATR 波動率擠壓 (The Squeeze)',
        stepId: 'step-7',
        stepName: 'Step 7 | ATR',
        tags: ['Volatility Squeeze', 'Big Move', 'Breakout'],
        content: {
          definition: '暴風雨前的寧靜。當 ATR 降到歷史低點，代表市場波動被壓縮到極致。能量正在蓄積。',
          marketBehavior: '彈簧效應。市場不可能永遠平靜。極度的平靜（低 ATR）通常是為了下一次的爆發（高 ATR）做準備。這時候多空雙方都在縮手觀望，一旦有一方突破，另一方會被迫大規模停損/追價，引發大行情。',
          whenRising: [
            '擠壓結束：ATR 從極低值開始向上勾頭，同時價格突破盤整區間。這是大行情的起跑槍。'
          ],
          whenFalling: [
            '進入擠壓：K 棒越來越小，波動越來越死魚。這時候不要無聊離場，反而要盯緊它，因為大機會快來了。'
          ],
          divergence: ['N/A'],
          combinations: {
            indicators: ['Bollinger Bands (布林通道)', 'Keltner Channels'],
            reason: '這是經典的 TTM Squeeze 策略。當布林通道擠進 Keltner 通道內，就是標準的擠壓訊號。'
          },
          pitfalls: [
            '假突破（雙巴）：在擠壓初期，價格可能會上下假突破掃停損。建議等待實體 K 棒明確站上區間邊界。'
          ],
          usageInStep: {
            role: 'Screening',
            description: '尋找爆發股。我不喜歡做盤整，但我喜歡找「即將結束盤整」的股票。ATR 擠壓是我最愛的篩選條件。'
          },
          coachNote: '最大的行情，總是誕生在最無聊的盤整之後。耐心等待 ATR 告訴你「波動回來了」。'
        }
      }
    ]
  },
];