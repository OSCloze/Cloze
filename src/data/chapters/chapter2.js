// Chapter 2: The Painter's Story (Introduction)
import { getImagePath } from '../../utils/pathHelpers';

export const chapter2 = {
    id: 2,
    title: "Lǎo Chá",
    description: "Making friends with the shopkeeper",
    level: 1,
    image: "", // Empty for now – you can add manually later
    words: [201, 202, 203], // 叫, 名字, 朋友 (from level2.js)
    sentences: [
        // 1. Narrative: Lǎo Chá prepares to introduce himself
        {
            id: 201,
            type: "narrative",
            level: 1,
            topic: "Narrative",
            sceneDetails: "After a moment, Lǎo Chá sets down his cup and sits up a little straighter. It's time to properly introduce himself.",
            image: "",
        },
        // 2. Practice: I am called Lǎo Chá.
        {
            id: 202,
            type: "practice",
            targetWordId: 201, // 叫
            blankWordId: 201,
            level: 1,
            difficulty: 1,
            topic: "Identity",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "",
            sceneDetails: "He repeats his full name slowly so you can remember it.",
            sentence: "我 ___ Lǎo Chá。",
            answer: "叫",
            pinyin: "wǒ jiào Lǎo Chá",
            nativeSentence: "I am called Lǎo Chá.",
            explanation: "叫 means 'to be called' or 'to be named'. Use it to introduce your name.",
            words: [
                { text: "我", wordId: 1 },
                { text: "叫", wordId: 201 },
                { text: "Lǎo", isPunctuation: false, isProperNoun: true },
                { text: "Chá", isPunctuation: false, isProperNoun: true },
                { text: "。", isPunctuation: true }
            ]
        },
        // 3. Practice: What are you called?
        {
            id: 203,
            type: "practice",
            targetWordId: 201, // 叫
            blankWordId: 201,
            level: 1,
            difficulty: 1,
            topic: "Identity",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "",
            sceneDetails: "He then gestures toward you with an open palm, asking for your name in return.",
            sentence: "你 ___ 什么？",
            answer: "叫",
            pinyin: "nǐ jiào shénme",
            nativeSentence: "What are you called?",
            explanation: "什么 means 'what'. The pattern 你叫什么？ is the standard way to ask someone's name.",
            words: [
                { text: "你", wordId: 2 },
                { text: "叫", wordId: 201 },
                { text: "什", wordId: 19 },
                { text: "么", wordId: 20 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 4. Practice: What is your name?
        {
            id: 204,
            type: "practice",
            targetWordId: 202, // 名字
            blankWordId: 202,
            level: 1,
            difficulty: 1,
            topic: "Identity",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "",
            sceneDetails: "Seeing your hesitation, he rephrases the question more politely.",
            sentence: "你的 ___ 是什么？",
            answer: "名字",
            pinyin: "nǐ de míngzi shì shénme",
            nativeSentence: "What is your name?",
            explanation: "名字 means 'name'. 你的 means 'your'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "的", wordId: 3 },
                { text: "名字", wordId: 202 },
                { text: "是", wordId: 12 },
                { text: "什", wordId: 19 },
                { text: "么", wordId: 20 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 5. Practice: This name is good.
        {
            id: 205,
            type: "practice",
            targetWordId: 202, // 名字
            blankWordId: 202,
            level: 1,
            difficulty: 1,
            topic: "Identity",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "",
            sceneDetails: "You tell him your name. He repeats it carefully, then nods approvingly.",
            sentence: "这 ___ 好。",
            answer: "名字",
            pinyin: "zhè míngzi hǎo",
            nativeSentence: "This name is good.",
            explanation: "This sentence pattern uses 这 (this) + noun + adjective to describe something.",
            words: [
                { text: "这", wordId: 7 },
                { text: "名字", wordId: 202 },
                { text: "好", wordId: 21 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 6. Narrative: Zhang enters
        {
            id: 206,
            type: "narrative",
            level: 1,
            topic: "Narrative",
            sceneDetails: "Just as you're getting comfortable, the front door swings open. A man about Lǎo Chá's age walks in, carrying a rolled-up canvas under his arm. He has kind eyes and flour on his sleeve.",
            image: "",
        },
        // 7. Practice: Hello, my friend.
        {
            id: 207,
            type: "practice",
            targetWordId: 203, // 朋友
            blankWordId: 203,
            level: 1,
            difficulty: 1,
            topic: "Greeting",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "",
            sceneDetails: "Lǎo Chá lights up and waves him over.",
            sentence: "你好， ___ ！",
            answer: "朋友",
            pinyin: "nǐ hǎo, péngyou",
            nativeSentence: "Hello, my friend.",
            explanation: "朋友 means 'friend'. It's a warm way to address someone you know.",
            words: [
                { text: "你", wordId: 2 },
                { text: "好", wordId: 21 },
                { text: "，", isPunctuation: true },
                { text: "朋友", wordId: 203 },
                { text: "！", isPunctuation: true }
            ]
        },
        // 8. Narrative: Zhang settles in
        {
            id: 208,
            type: "narrative",
            level: 1,
            topic: "Narrative",
            sceneDetails: "The man—Zhāng—settles into the seat next to you with the easy familiarity of a longtime regular. Lǎo Chá immediately begins preparing another cup.",
            image: "",
        }
    ]
};