// Chapter 3: Zhang
import { getImagePath } from '../../utils/pathHelpers';

export const chapter3 = {
    id: 3,
    title: "Zhang",
    description: "Meet a new friend and share a moment of happiness.",
    level: 3,
    image: getImagePath("/images/chapter3/main.png"),
    words: [301, 302, 303], // happy, together, meet
    sentences: [
        // 1. Narrative: Zhang's attention
        {
            id: 301,
            type: "narrative",
            level: 3,
            topic: "Narrative",
            sceneDetails: "Zhāng sets his canvas against the table and turns his attention to you. His smile is warm but curious.",
            image: getImagePath("/images/chapter3/zhang_smiles.png"),
        },
        // 2. Practice: This is Zhang. He is a friend.
        {
            id: 302,
            type: "practice",
            targetWordId: 203, // 朋友 (from level2)
            blankWordId: 203,
            level: 3,
            difficulty: 1,
            topic: "Introduction",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.png"),
            image: getImagePath("/images/chapter3/laocha_gestures.png"),
            sceneDetails: "Lǎo Chá gestures to the man who just sat down next to you.",
            sentence: "这是Zhāng。他是 ___ 。",
            answer: "朋友",
            pinyin: "zhè shì Zhāng. tā shì péng you",
            nativeSentence: "This is Zhang. He is a friend.",
            explanation: "朋友 means 'friend'.",
            words: [
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "Zhāng", isPunctuation: false },
                { text: "。", isPunctuation: true },
                { text: "他", wordId: 3 },
                { text: "是", wordId: 12 },
                { text: "朋友", wordId: 203 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 3. Practice: Hello, what is your name?
        {
            id: 303,
            type: "practice",
            targetWordId: 202, // 名字 (from level2)
            blankWordId: 202,
            level: 3,
            difficulty: 1,
            topic: "Greeting",
            speaker: "Zhāng",
            speakerImage: getImagePath("/images/speakers/zhang.png"),
            image: getImagePath("/images/chapter3/zhang_hello.png"),
            sceneDetails: "Zhāng turns to you with a warm smile, eager to get to know you.",
            sentence: "你好，你叫什么 ___ ？",
            answer: "名字",
            pinyin: "nǐ hǎo, nǐ jiào shén me míng zi",
            nativeSentence: "Hello, what is your name?",
            explanation: "名字 means 'name'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "好", wordId: 21 },
                { text: "，", isPunctuation: true },
                { text: "你", wordId: 2 },
                { text: "叫", wordId: 201 },
                { text: "什么", wordId: 20 },
                { text: "名字", wordId: 202 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 5. Practice: You are very happy!
        {
            id: 305,
            type: "practice",
            targetWordId: 301, // 高兴
            blankWordId: 301,
            level: 3,
            difficulty: 1,
            topic: "Emotion",
            speaker: "Zhāng",
            speakerImage: getImagePath("/images/speakers/zhang.png"),
            image: getImagePath("/images/chapter3/zhang_happy.png"),
            sceneDetails: "Zhāng smiles warmly at you across the table.",
            sentence: "你 ___ 高兴！",
            answer: "很",
            pinyin: "nǐ hěn gāo xìng",
            nativeSentence: "You are very happy!",
            explanation: "很 is used before adjectives. 高兴 means 'happy'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "很", wordId: 17 },
                { text: "高兴", wordId: 301 },
                { text: "！", isPunctuation: true }
            ]
        },
        // 6. Practice: I am also happy.
        {
            id: 306,
            type: "practice",
            targetWordId: 301, // 高兴
            blankWordId: 301,
            level: 3,
            difficulty: 2,
            topic: "Emotion",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.png"),
            image: getImagePath("/images/chapter3/player_also.png"),
            sceneDetails: "You smile back, feeling welcome in their company.",
            sentence: "我 ___ 高兴。",
            answer: "也",
            pinyin: "wǒ yě gāo xìng",
            nativeSentence: "I am also happy.",
            explanation: "也 means 'also'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "也", wordId: 15 },
                { text: "高兴", wordId: 301 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 7. Practice: We drink tea together.
        {
            id: 307,
            type: "practice",
            targetWordId: 302, // 一起
            blankWordId: 302,
            level: 3,
            difficulty: 2,
            topic: "Activity",
            speaker: "Zhāng",
            speakerImage: getImagePath("/images/speakers/zhang.png"),
            image: getImagePath("/images/chapter3/zhang_raise.png"),
            sceneDetails: "Zhāng raises his cup toward you, inviting you to join.",
            sentence: "我们 ___ 喝茶。",
            answer: "一起",
            pinyin: "wǒ men yī qǐ hē chá",
            nativeSentence: "We drink tea together.",
            explanation: "一起 means 'together'.",
            words: [
                { text: "我们", wordId: 6 }, // 们 is plural suffix, but we need "我们" as a word? Actually "我们" is 我+们, we don't have a combined word. We'll split into 我 and 们.
                { text: "我", wordId: 1 },
                { text: "们", wordId: 6 },
                { text: "一起", wordId: 302 },
                { text: "喝", wordId: 104 },
                { text: "茶", wordId: 101 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 8. Practice: We all drink tea.
        {
            id: 308,
            type: "practice",
            targetWordId: 104, // 喝
            blankWordId: 104,
            level: 3,
            difficulty: 2,
            topic: "Activity",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.png"),
            image: getImagePath("/images/chapter3/laocha_pour.png"),
            sceneDetails: "Lǎo Chá pours more tea for everyone at the table.",
            sentence: "我们都 ___ 茶。",
            answer: "喝",
            pinyin: "wǒ men dōu hē chá",
            nativeSentence: "We all drink tea.",
            explanation: "都 means 'all'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "们", wordId: 6 },
                { text: "都", wordId: 19 },
                { text: "喝", wordId: 104 },
                { text: "茶", wordId: 101 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 9. Practice: Very happy to meet you.
        {
            id: 309,
            type: "practice",
            targetWordId: 303, // 认识
            blankWordId: 303,
            level: 3,
            difficulty: 2,
            topic: "Greeting",
            speaker: "Zhāng",
            speakerImage: getImagePath("/images/speakers/zhang.png"),
            image: getImagePath("/images/chapter3/zhang_nod.png"),
            sceneDetails: "Zhāng nods at you politely as new friends do.",
            sentence: "很高 ___ 你。",
            answer: "认识",
            pinyin: "hěn gāo xìng rèn shi nǐ",
            nativeSentence: "Very happy to meet you.",
            explanation: "认识 means 'to meet' or 'to know'. 很高兴认识你 is a common phrase when meeting someone.",
            words: [
                { text: "很", wordId: 17 },
                { text: "高兴", wordId: 301 },
                { text: "认识", wordId: 303 },
                { text: "你", wordId: 2 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 10. Practice: I am also very happy to meet you.
        {
            id: 310,
            type: "practice",
            targetWordId: 303, // 认识
            blankWordId: 303,
            level: 3,
            difficulty: 3,
            topic: "Greeting",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.png"),
            image: getImagePath("/images/chapter3/player_meet.png"),
            sceneDetails: "You respond warmly, happy to have made a new friend.",
            sentence: "我 ___ 很高兴认识你。",
            answer: "也",
            pinyin: "wǒ yě hěn gāo xìng rèn shi nǐ",
            nativeSentence: "I am also very happy to meet you.",
            explanation: "也 means 'also'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "也", wordId: 15 },
                { text: "很", wordId: 17 },
                { text: "高兴", wordId: 301 },
                { text: "认识", wordId: 303 },
                { text: "你", wordId: 2 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 11. Narrative: Three together
        {
            id: 311,
            type: "narrative",
            level: 3,
            topic: "Narrative",
            sceneDetails: "The three of you sit together, tea warming your hands. Zhāng seems comfortable here, like this shop is a second home. You notice him glance at his canvas occasionally, as if deciding whether to show you what's inside.",
            image: getImagePath("/images/chapter3/three_together.png"),
        }
    ]
};