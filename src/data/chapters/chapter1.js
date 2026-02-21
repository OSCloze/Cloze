// Chapter 1: The Tea House
import { getImagePath } from '../../utils/pathHelpers';

export const chapter1 = {
    id: 1,
    title: "The Tea House",
    description: "Visit an old tea shop and meet the owner, Lǎo Chá.",
    level: 1,
    image: "", // Empty for now - you can add manually later
    words: [101, 102, 103, 104, 105], // tea, water, cup, drink, hot
    sentences: [
        // 1. Narrative: Entering the tea house
        {
            id: 101,
            type: "narrative",
            level: 1,
            topic: "Narrative",
            sceneDetails: "You push open the creaky wooden door. An old man behind the counter looks up and smiles. Steam rises from a kettle nearby. The warm, earthy smell of tea fills the air.",
            image: "", // Empty for now
        },
        // 2. Practice: Hello! This is tea.
        {
            id: 102,
            type: "practice",
            targetWordId: 101, // 茶
            blankWordId: 101,
            level: 1,
            difficulty: 1,
            topic: "Beverage",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He gestures to the pot in front of him.",
            sentence: "你好！这是 ___ 。",
            answer: "茶",
            pinyin: "nǐ hǎo! zhè shì chá",
            nativeSentence: "Hello! This is tea.",
            explanation: "This sentence introduces 茶 (tea). 你好 means 'hello', and 这是 means 'this is'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "好", wordId: 21 },
                { text: "！", isPunctuation: true },
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "茶", wordId: 101 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 3. Practice: That is water.
        {
            id: 103,
            type: "practice",
            targetWordId: 102, // 水
            blankWordId: 102,
            level: 1,
            difficulty: 1,
            topic: "Beverage",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He points to the kettle on the counter, where water is bubbling gently.",
            sentence: "那是 ___ 。",
            answer: "水",
            pinyin: "nà shì shuǐ",
            nativeSentence: "That is water.",
            explanation: "那是 means 'that is' and is used for objects further away. 水 is water.",
            words: [
                { text: "那", wordId: 8 },
                { text: "是", wordId: 12 },
                { text: "水", wordId: 102 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 4. Practice: This is a cup.
        {
            id: 104,
            type: "practice",
            targetWordId: 103, // 杯子
            blankWordId: 103,
            level: 1,
            difficulty: 1,
            topic: "Tableware",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He holds up an empty ceramic cup, turning it gently in his hands so you can see it from all angles.",
            sentence: "这是一个 ___ 。",
            answer: "杯子",
            pinyin: "zhè shì yī gè bēi zi",
            nativeSentence: "This is a cup.",
            explanation: "The pattern 这是一个... introduces an object with the measure word 个. 杯子 means cup.",
            words: [
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "一", wordId: 22 },
                { text: "个", wordId: 23 },
                { text: "杯子", wordId: 103 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 5. Practice: Do you drink tea?
        {
            id: 105,
            type: "practice",
            targetWordId: 104, // 喝
            blankWordId: 104,
            level: 1,
            difficulty: 1,
            topic: "Action",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "He pours steaming water into a teapot, then looks at you expectantly, tilting his head toward the cup.",
            sentence: "你 ___ 茶吗？",
            answer: "喝",
            pinyin: "nǐ hē chá ma",
            nativeSentence: "Do you drink tea?",
            explanation: "喝 is the verb 'to drink'. The pattern 你...吗？ forms a yes/no question.",
            words: [
                { text: "你", wordId: 2 },
                { text: "喝", wordId: 104 },
                { text: "茶", wordId: 101 },
                { text: "吗", wordId: 18 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 6. Practice: This is hot tea.
        {
            id: 106,
            type: "practice",
            targetWordId: 105, // 热
            blankWordId: 105,
            level: 1,
            difficulty: 1,
            topic: "Temperature",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "Steam curls from the freshly poured tea. He slides a cup toward you across the worn wooden counter.",
            sentence: "这是 ___ 茶。",
            answer: "热",
            pinyin: "zhè shì rè chá",
            nativeSentence: "This is hot tea.",
            explanation: "热 is an adjective meaning 'hot'. In Chinese, adjectives directly modify nouns.",
            words: [
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "热", wordId: 105 },
                { text: "茶", wordId: 101 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 7. Practice: The tea is very hot.
        {
            id: 107,
            type: "practice",
            targetWordId: 105, // 热
            blankWordId: 105,
            level: 1,
            difficulty: 2,
            topic: "Temperature",
            speaker: "Lǎo Chá",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "You wrap your hands around the warm cup and take a careful sip. He watches, waiting for your reaction.",
            sentence: "茶很 ___ 。",
            answer: "热",
            pinyin: "chá hěn rè",
            nativeSentence: "The tea is very hot.",
            explanation: "The pattern 很 + adjective is the standard way to describe things. 很 softens the adjective.",
            words: [
                { text: "茶", wordId: 101 },
                { text: "很", wordId: 17 },
                { text: "热", wordId: 105 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 8. Practice: This is good tea.
        {
            id: 108,
            type: "practice",
            targetWordId: 101, // 茶
            blankWordId: 101,
            level: 1,
            difficulty: 3,
            topic: "Beverage",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You nod in appreciation, enjoying the warmth and flavor. A small smile crosses his face.",
            sentence: "这是好 ___ 。",
            answer: "茶",
            pinyin: "zhè shì hǎo chá",
            nativeSentence: "This is good tea.",
            explanation: "好 means 'good'. 好茶 means 'good tea'.",
            words: [
                { text: "这", wordId: 7 },
                { text: "是", wordId: 12 },
                { text: "好", wordId: 21 },
                { text: "茶", wordId: 101 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 9. Narrative: Comfortable silence
        {
            id: 109,
            type: "narrative",
            level: 1,
            topic: "Narrative",
            sceneDetails: "You sit in comfortable silence for a moment, the warmth of the tea spreading through your chest. Lǎo Chá seems to be studying you, as if deciding something.",
            image: "", // Empty for now
        }
    ]
};