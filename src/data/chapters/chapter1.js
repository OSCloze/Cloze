// Chapter 1: The Tea House
import { getImagePath } from '../../utils/pathHelpers';

export const chapter1 = {
    id: 1,
    title: "The Tea House",
    description: "Enter Lǎo Chá's tea shop and learn the basics of greeting and tea.",
    level: 1,
    image: "", // Empty for now - you can add manually later
    words: [101, 102], // 杯子, 热
    sentences: [
        // 1. Narrative: Entering the tea shop
        {
            id: 101,
            type: "narrative",
            level: 1,
            topic: "Narrative",
            sceneDetails: "You have just moved to a small, quiet city. The streets are unfamiliar, and everything feels new. You decide to explore and find yourself walking down a narrow lane. At the end of the street, you notice a warm glow coming from a small tea shop. The sign reads \"Lǎo Chá's Tea House\" in simple lettering. The door is open. You go in.",
            image: "", // Empty for now
        },
        // 2. Practice: Hello! This is tea.
        {
            id: 102,
            type: "practice",
            targetWordId: 16, // 茶 (from foundation)
            blankWordId: 16,
            level: 1,
            difficulty: 1,
            topic: "Introduction",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "An older man with kind eyes smiles at you from behind a worn wooden counter. He gestures to a small cup in front of him.",
            sentence: "你好！这是___。",
            answer: "茶",
            pinyin: "nǐ hǎo! zhè shì chá",
            nativeSentence: "Hello! This is tea.",
            explanation: "茶 means 'tea'. 这是 means 'this is'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "好", wordId: 12 },
                { text: "！", isPunctuation: true },
                { text: "这", wordId: 19 },
                { text: "是", wordId: 6 },
                { text: "茶", wordId: 16 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 3. Practice: That is water.
        {
            id: 103,
            type: "practice",
            targetWordId: 17, // 水 (from foundation)
            blankWordId: 17,
            level: 1,
            difficulty: 1,
            topic: "Introduction",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He points to a clear glass pot on the counter, filled with steaming hot water.",
            sentence: "那是___。",
            answer: "水",
            pinyin: "nà shì shuǐ",
            nativeSentence: "That is water.",
            explanation: "水 means 'water'. 那是 means 'that is'.",
            words: [
                { text: "那", wordId: 20 },
                { text: "是", wordId: 6 },
                { text: "水", wordId: 17 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 4. Practice: This is a cup.
        {
            id: 104,
            type: "practice",
            targetWordId: 101, // 杯子
            blankWordId: 101,
            level: 1,
            difficulty: 1,
            topic: "Objects",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He holds up a small, delicate ceramic cup, turning it gently in his hands.",
            sentence: "这是一个___。",
            answer: "杯子",
            pinyin: "zhè shì yī gè bēi zi",
            nativeSentence: "This is a cup.",
            explanation: "杯子 means 'cup'. 一个 is a measure word pair meaning 'one'.",
            words: [
                { text: "这", wordId: 19 },
                { text: "是", wordId: 6 },
                { text: "一", wordId: 18 },
                { text: "个", wordId: 35 },
                { text: "杯子", wordId: 101 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 5. Practice: Do you drink tea?
        {
            id: 105,
            type: "practice",
            targetWordId: 31, // 喝 (from foundation)
            blankWordId: 31,
            level: 1,
            difficulty: 1,
            topic: "Question",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He tilts his head slightly, asking with genuine curiosity.",
            sentence: "你___茶吗？",
            answer: "喝",
            pinyin: "nǐ hē chá ma",
            nativeSentence: "Do you drink tea?",
            explanation: "喝 means 'to drink'. Adding 吗 at the end makes it a question.",
            words: [
                { text: "你", wordId: 2 },
                { text: "喝", wordId: 31 },
                { text: "茶", wordId: 16 },
                { text: "吗", wordId: 21 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 6. Practice: This is hot tea.
        {
            id: 106,
            type: "practice",
            targetWordId: 102, // 热
            blankWordId: 102,
            level: 1,
            difficulty: 1,
            topic: "Description",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He pours the hot water into the cup over dark, curled tea leaves.",
            sentence: "这是___茶。",
            answer: "热",
            pinyin: "zhè shì rè chá",
            nativeSentence: "This is hot tea.",
            explanation: "热 means 'hot'. It comes before the noun it describes.",
            words: [
                { text: "这", wordId: 19 },
                { text: "是", wordId: 6 },
                { text: "热", wordId: 102 },
                { text: "茶", wordId: 16 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 7. Practice: The tea is very hot.
        {
            id: 107,
            type: "practice",
            targetWordId: 102, // 热
            blankWordId: 102,
            level: 1,
            difficulty: 1,
            topic: "Description",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He warns you gently, pushing the cup toward you but motioning for you to wait.",
            sentence: "茶很___。",
            answer: "热",
            pinyin: "chá hěn rè",
            nativeSentence: "The tea is very hot.",
            explanation: "很热 means 'very hot'. The pattern 很 + adjective is common.",
            words: [
                { text: "茶", wordId: 16 },
                { text: "很", wordId: 11 },
                { text: "热", wordId: 102 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 8. Practice: This is good tea.
        {
            id: 108,
            type: "practice",
            targetWordId: 16, // 茶 (from foundation)
            blankWordId: 16,
            level: 1,
            difficulty: 1,
            topic: "Opinion",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You take a careful sip and smile at the warm, smooth flavor.",
            sentence: "这是好___。",
            answer: "茶",
            pinyin: "zhè shì hǎo chá",
            nativeSentence: "This is good tea.",
            explanation: "好茶 means 'good tea'. 好 describes the tea positively.",
            words: [
                { text: "这", wordId: 19 },
                { text: "是", wordId: 6 },
                { text: "好", wordId: 12 },
                { text: "茶", wordId: 16 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 9. Narrative: Comfortable silence
        {
            id: 109,
            type: "narrative",
            level: 1,
            topic: "Narrative",
            sceneDetails: "The warmth of the tea spreads through you. Lao Cha watches you with quiet satisfaction, then leans forward slightly.",
            image: "", // Empty for now
        },
        // 10. Practice: What are you called?
        {
            id: 110,
            type: "practice",
            targetWordId: 33, // 叫 (from foundation)
            blankWordId: 33,
            level: 1,
            difficulty: 1,
            topic: "Question",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He asks with friendly interest, wanting to know you better.",
            sentence: "你___什么？",
            answer: "叫",
            pinyin: "nǐ jiào shén me",
            nativeSentence: "What are you called?",
            explanation: "叫 means 'to be called'. 你叫什么？ asks for someone's name.",
            words: [
                { text: "你", wordId: 2 },
                { text: "叫", wordId: 33 },
                { text: "什么", wordId: 44 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 11. Practice: What is your name?
        {
            id: 111,
            type: "practice",
            targetWordId: 41, // 名字 (from foundation)
            blankWordId: 41,
            level: 1,
            difficulty: 1,
            topic: "Question",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He repeats the question more formally, making sure you understand.",
            sentence: "你的___是什么？",
            answer: "名字",
            pinyin: "nǐ de míng zi shì shén me",
            nativeSentence: "What is your name?",
            explanation: "名字 means 'name'. 你的名字 is 'your name'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "的", wordId: 22 },
                { text: "名字", wordId: 41 },
                { text: "是", wordId: 6 },
                { text: "什么", wordId: 44 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 12. Practice: This name is good.
        {
            id: 112,
            type: "practice",
            targetWordId: 41, // 名字 (from foundation)
            blankWordId: 41,
            level: 1,
            difficulty: 1,
            topic: "Opinion",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He repeats your name aloud and nods approvingly.",
            sentence: "这___好。",
            answer: "名字",
            pinyin: "zhè míng zi hǎo",
            nativeSentence: "This name is good.",
            explanation: "这名字 means 'this name'. 好 describes it positively.",
            words: [
                { text: "这", wordId: 19 },
                { text: "名字", wordId: 41 },
                { text: "好", wordId: 12 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 13. Practice: I am called Lǎo Chá.
        {
            id: 113,
            type: "practice",
            targetWordId: null, // Proper noun
            blankWordId: null,
            level: 1,
            difficulty: 1,
            topic: "Introduction",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He places a hand on his chest and introduces himself properly.",
            sentence: "我是___。",
            answer: "老茶",
            pinyin: "wǒ shì Lǎo Chá",
            nativeSentence: "I am called Lǎo Chá.",
            explanation: "老茶 (Lǎo Chá) is the tea shop owner's name. 老 means 'old', 茶 means 'tea'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "是", wordId: 6 },
                { text: "老茶", isProperNoun: true },
                { text: "。", isPunctuation: true }
            ]
        },
        // 14. Practice: Hello Lao Cha
        {
            id: 114,
            type: "practice",
            targetWordId: null, // Compound of 你 + 好
            blankWordId: null,
            level: 1,
            difficulty: 1,
            topic: "Greeting",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You greet him back, feeling more at ease now.",
            sentence: "___，老茶。",
            answer: "你好",
            pinyin: "nǐ hǎo, Lǎo Chá",
            nativeSentence: "Hello Lao Cha.",
            explanation: "你好 is the standard greeting, meaning 'hello'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "好", wordId: 12 },
                { text: "，", isPunctuation: true },
                { text: "老茶", isProperNoun: true },
                { text: "。", isPunctuation: true }
            ]
        },
        // 15. Practice: Hello, my friend.
        {
            id: 115,
            type: "practice",
            targetWordId: 40, // 朋友 (from foundation)
            blankWordId: 40,
            level: 1,
            difficulty: 1,
            topic: "Greeting",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He smiles warmly, already treating you like an old acquaintance.",
            sentence: "你好，我的___。",
            answer: "朋友",
            pinyin: "nǐ hǎo, wǒ de péng you",
            nativeSentence: "Hello, my friend.",
            explanation: "朋友 means 'friend'. 我的 means 'my'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "好", wordId: 12 },
                { text: "，", isPunctuation: true },
                { text: "我", wordId: 1 },
                { text: "的", wordId: 22 },
                { text: "朋友", wordId: 40 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 16. Narrative: Zhang arrives (transition to Chapter 2)
        {
            id: 116,
            type: "narrative",
            level: 1,
            topic: "Narrative",
            sceneDetails: "The comfortable silence is broken by the creak of the door. A man enters, brushing dust from his sleeves. His hands are stained with paint—blues, greens, and earth tones. He carries a large canvas wrapped in cloth.",
            image: "", // Empty for now
        }
    ]
};