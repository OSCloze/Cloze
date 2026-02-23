// Chapter 3: The Cook's Memory
import { getImagePath } from '../../utils/pathHelpers';

export const chapter3 = {
    id: 3,
    title: "The Cook's Memory",
    description: "Meet Li Wei, the cook, and share a moment of joy through food.",
    level: 3,
    image: "", // Empty for now - you can add manually later
    words: [301, 302, 303], // 想起来, 开心, 李伟
    sentences: [
        // 1. Narrative: Li Wei bursts in
        {
            id: 301,
            type: "narrative",
            level: 3,
            topic: "Narrative",
            sceneDetails: "The shop falls silent. Even the kettle seems to hush. Before anyone can speak, the kitchen door bursts open.",
            image: "", // Empty for now
        },
        // 2. Practice: I remembered!
        {
            id: 302,
            type: "practice",
            targetWordId: 301, // 想起来
            blankWordId: 301,
            level: 3,
            difficulty: 2,
            topic: "Exclamation",
            speaker: "Li Wei",
            speakerImage: getImagePath("/images/speakers/liwei.webp"),
            image: "", // Empty for now
            sceneDetails: "A man in a chef's coat runs in, his face bright with excitement. He's holding a small, worn notebook.",
            sentence: "我___了！",
            answer: "想起来",
            pinyin: "wǒ xiǎng qǐ lái le",
            nativeSentence: "I remembered!",
            explanation: "想起来 means 'to remember' or 'to recall'. 了 indicates a change or completion.",
            words: [
                { text: "我", wordId: 1 },
                { text: "想起来", wordId: 301 },
                { text: "了", wordId: 24 },
                { text: "！", isPunctuation: true }
            ]
        },
        // 3. Practice: Eat this!
        {
            id: 303,
            type: "practice",
            targetWordId: 37, // 吃 (from foundation)
            blankWordId: 37,
            level: 3,
            difficulty: 1,
            topic: "Offer",
            speaker: "Li Wei",
            speakerImage: getImagePath("/images/speakers/liwei.webp"),
            image: "", // Empty for now
            sceneDetails: "He places a small bowl in front of you. Steam rises from it, carrying a rich, delicious smell.",
            sentence: "___这个！",
            answer: "吃",
            pinyin: "chī zhè ge",
            nativeSentence: "Eat this!",
            explanation: "吃 means 'to eat'. This is a friendly command to try the food.",
            words: [
                { text: "吃", wordId: 37 },
                { text: "这", wordId: 20 },
                { text: "个", wordId: 36 },
                { text: "！", isPunctuation: true }
            ]
        },
        // 4. Practice: Do you like it?
        {
            id: 304,
            type: "practice",
            targetWordId: 40, // 喜欢 (from foundation)
            blankWordId: 40,
            level: 3,
            difficulty: 1,
            topic: "Question",
            speaker: "Li Wei",
            speakerImage: getImagePath("/images/speakers/liwei.webp"),
            image: "", // Empty for now
            sceneDetails: "He watches you with hopeful eyes, practically bouncing on his heels.",
            sentence: "你___它吗？",
            answer: "喜欢",
            pinyin: "nǐ xǐ huān tā ma",
            nativeSentence: "Do you like it?",
            explanation: "喜欢 means 'to like'. 它 means 'it' (referring to the food).",
            words: [
                { text: "你", wordId: 2 },
                { text: "喜欢", wordId: 40 },
                { text: "它", wordId: 5 },
                { text: "吗", wordId: 22 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 5. Practice: I like it.
        {
            id: 305,
            type: "practice",
            targetWordId: 40, // 喜欢 (from foundation)
            blankWordId: 40,
            level: 3,
            difficulty: 1,
            topic: "Response",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You take a bite and your eyes widen. It's amazing.",
            sentence: "我___它。",
            answer: "喜欢",
            pinyin: "wǒ xǐ huān tā",
            nativeSentence: "I like it.",
            explanation: "我喜欢它 means 'I like it'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "喜欢", wordId: 40 },
                { text: "它", wordId: 5 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 6. Practice: Today I am very happy!
        {
            id: 306,
            type: "practice",
            targetWordId: 302, // 开心
            blankWordId: 302,
            level: 3,
            difficulty: 1,
            topic: "Emotion",
            speaker: "Li Wei",
            speakerImage: getImagePath("/images/speakers/liwei.webp"),
            image: "", // Empty for now
            sceneDetails: "He pumps his fist in the air triumphantly.",
            sentence: "今天我很___！",
            answer: "开心",
            pinyin: "jīn tiān wǒ hěn kāi xīn",
            nativeSentence: "Today I am very happy!",
            explanation: "开心 means 'happy' or 'joyful'. It's similar to 高兴 but often used for momentary happiness.",
            words: [
                { text: "今天", wordId: 51 },
                { text: "我", wordId: 1 },
                { text: "很", wordId: 12 },
                { text: "开心", wordId: 302 },
                { text: "！", isPunctuation: true }
            ]
        },
        // 7. Practice: This is very good!
        {
            id: 307,
            type: "practice",
            targetWordId: 20, // 这 (from foundation)
            blankWordId: 20,
            level: 3,
            difficulty: 1,
            topic: "Opinion",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "Lao Cha tastes it too and nods with approval.",
            sentence: "___很好！",
            answer: "这",
            pinyin: "zhè hěn hǎo",
            nativeSentence: "This is very good!",
            explanation: "这 means 'this'. 很好 means 'very good'.",
            words: [
                { text: "这", wordId: 20 },
                { text: "很", wordId: 12 },
                { text: "好", wordId: 13 },
                { text: "！", isPunctuation: true }
            ]
        },
        // 8. Practice: I also like it!
        {
            id: 308,
            type: "practice",
            targetWordId: 10, // 也 (from foundation)
            blankWordId: 10,
            level: 3,
            difficulty: 1,
            topic: "Opinion",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "Zhang takes a bite and his sad expression lifts, just for a moment.",
            sentence: "我___喜欢它。",
            answer: "也",
            pinyin: "wǒ yě xǐ huān tā",
            nativeSentence: "I also like it.",
            explanation: "也 means 'also'. 我也喜欢它 means 'I also like it'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "也", wordId: 10 },
                { text: "喜欢", wordId: 40 },
                { text: "它", wordId: 5 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 9. Narrative: A moment of connection
        {
            id: 309,
            type: "narrative",
            level: 3,
            topic: "Narrative",
            sceneDetails: "Li Wei explains that he lost his recipe book years ago. Today, he finally remembered one of the dishes. Everyone eats together, and for a little while, the tea shop feels like home.",
            image: "", // Empty for now
        }
    ]
};