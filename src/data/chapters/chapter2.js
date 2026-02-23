// Chapter 2: The Painter
import { getImagePath } from '../../utils/pathHelpers';

export const chapter2 = {
    id: 2,
    title: "The Painter",
    description: "Meet Zhang, a painter, and discover the story behind his art.",
    level: 2,
    image: "", // Empty for now - you can add manually later
    words: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211], // 张, 一起, 认识, 漂亮, 每天, 得, 眼睛, 笑, 觉得, 爱, 这里
    sentences: [
        // 1. Practice: This is Zhang. He is a friend.
        {
            id: 201,
            type: "practice",
            targetWordId: 201, // 张
            blankWordId: 201,
            level: 2,
            difficulty: 1,
            topic: "Introduction",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "Lao Cha gestures warmly toward the newcomer.",
            sentence: "这是___。他是朋友。",
            answer: "张",
            pinyin: "zhè shì Zhāng. tā shì péng you",
            nativeSentence: "This is Zhang. He is a friend.",
            explanation: "张 (Zhāng) is a common Chinese surname. Here it's the painter's name.",
            words: [
                { text: "这", wordId: 20 },
                { text: "是", wordId: 7 },
                { text: "张", wordId: 201 },
                { text: "。", isPunctuation: true },
                { text: "他", wordId: 3 },
                { text: "是", wordId: 7 },
                { text: "朋友", wordId: 41 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 2. Practice: Hello, I am Zhang.
        {
            id: 202,
            type: "practice",
            targetWordId: 7, // 是 (from foundation)
            blankWordId: 7,
            level: 2,
            difficulty: 1,
            topic: "Introduction",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "The man nods at you politely, setting his painting down carefully.",
            sentence: "你好，我___张。",
            answer: "是",
            pinyin: "nǐ hǎo, wǒ shì Zhāng",
            nativeSentence: "Hello, I am Zhang.",
            explanation: "我是 means 'I am'. This is how you introduce yourself.",
            words: [
                { text: "你好", wordId: 103 },
                { text: "，", isPunctuation: true },
                { text: "我", wordId: 1 },
                { text: "是", wordId: 7 },
                { text: "张", wordId: 201 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 3. Practice: You are very happy!
        {
            id: 203,
            type: "practice",
            targetWordId: 44, // 高兴 (from foundation)
            blankWordId: 44,
            level: 2,
            difficulty: 1,
            topic: "Emotion",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "He notices your relaxed expression and smiles.",
            sentence: "你很___！",
            answer: "高兴",
            pinyin: "nǐ hěn gāo xìng",
            nativeSentence: "You are very happy!",
            explanation: "高兴 means 'happy'. 很 + adjective is the pattern for describing feelings.",
            words: [
                { text: "你", wordId: 2 },
                { text: "很", wordId: 12 },
                { text: "高兴", wordId: 44 },
                { text: "！", isPunctuation: true }
            ]
        },
        // 4. Practice: I am also happy.
        {
            id: 204,
            type: "practice",
            targetWordId: 10, // 也 (from foundation)
            blankWordId: 10,
            level: 2,
            difficulty: 1,
            topic: "Emotion",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "He sits down, looking pleased to be here.",
            sentence: "我___很高兴。",
            answer: "也",
            pinyin: "wǒ yě hěn gāo xìng",
            nativeSentence: "I am also happy.",
            explanation: "也 means 'also' or 'too'. It comes after the subject.",
            words: [
                { text: "我", wordId: 1 },
                { text: "也", wordId: 10 },
                { text: "很", wordId: 12 },
                { text: "高兴", wordId: 44 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 5. Practice: We drink tea together.
        {
            id: 205,
            type: "practice",
            targetWordId: 202, // 一起
            blankWordId: 202,
            level: 2,
            difficulty: 1,
            topic: "Activity",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "He glances at the cup in your hand, then at Lao Cha.",
            sentence: "我们一起喝茶。",
            answer: "一起",
            pinyin: "wǒ men yī qǐ hē chá",
            nativeSentence: "We drink tea together.",
            explanation: "一起 means 'together'. It comes before the verb.",
            words: [
                { text: "我", wordId: 1 },
                { text: "们", wordId: 6 },
                { text: "一起", wordId: 202 },
                { text: "喝", wordId: 32 },
                { text: "茶", wordId: 17 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 6. Practice: We all drink tea.
        {
            id: 206,
            type: "practice",
            targetWordId: 35, // 都 (from foundation)
            blankWordId: 35,
            level: 2,
            difficulty: 1,
            topic: "Activity",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "Lao Cha nods and pours Zhang a cup as well.",
            sentence: "我们都喝茶。",
            answer: "都",
            pinyin: "wǒ men dōu hē chá",
            nativeSentence: "We all drink tea.",
            explanation: "都 means 'all'. It comes before the verb.",
            words: [
                { text: "我", wordId: 1 },
                { text: "们", wordId: 6 },
                { text: "都", wordId: 35 },
                { text: "喝", wordId: 32 },
                { text: "茶", wordId: 17 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 7. Practice: Very happy to meet you.
        {
            id: 207,
            type: "practice",
            targetWordId: 203, // 认识
            blankWordId: 203,
            level: 2,
            difficulty: 1,
            topic: "Greeting",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "Zhang raises his cup to you in a friendly gesture.",
            sentence: "很高兴___你。",
            answer: "认识",
            pinyin: "hěn gāo xìng rèn shi nǐ",
            nativeSentence: "Very happy to meet you.",
            explanation: "认识 means 'to meet'. 很高兴认识你 is a common phrase when meeting someone.",
            words: [
                { text: "很", wordId: 12 },
                { text: "高兴", wordId: 44 },
                { text: "认识", wordId: 203 },
                { text: "你", wordId: 2 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 8. Practice: I am also very happy to meet you.
        {
            id: 208,
            type: "practice",
            targetWordId: 10, // 也 (from foundation)
            blankWordId: 10,
            level: 2,
            difficulty: 1,
            topic: "Greeting",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You raise your cup back, feeling welcomed.",
            sentence: "我___很高兴认识你。",
            answer: "也",
            pinyin: "wǒ yě hěn gāo xìng rèn shi nǐ",
            nativeSentence: "I am also very happy to meet you.",
            explanation: "也 adds 'also' to the common phrase.",
            words: [
                { text: "我", wordId: 1 },
                { text: "也", wordId: 10 },
                { text: "很", wordId: 12 },
                { text: "高兴", wordId: 44 },
                { text: "认识", wordId: 203 },
                { text: "你", wordId: 2 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 9. Narrative: Noticing the paintings
        {
            id: 209,
            type: "narrative",
            level: 2,
            topic: "Narrative",
            sceneDetails: "You notice the paintings on the walls for the first time—mountains, rivers, birds. All of them are beautiful. Zhang sees you looking.",
            image: "", // Empty for now
        },
        // 10. Practice: Look at this!
        {
            id: 210,
            type: "practice",
            targetWordId: 38, // 看 (from foundation)
            blankWordId: 38,
            level: 2,
            difficulty: 1,
            topic: "Action",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "Lao Cha points to a large painting of a mountain behind the counter.",
            sentence: "___这个！",
            answer: "看",
            pinyin: "kàn zhè ge",
            nativeSentence: "Look at this!",
            explanation: "看 means 'to look'. This is a command form.",
            words: [
                { text: "看", wordId: 38 },
                { text: "这", wordId: 20 },
                { text: "个", wordId: 36 },
                { text: "！", isPunctuation: true }
            ]
        },
        // 11. Practice: Very beautiful.
        {
            id: 211,
            type: "practice",
            targetWordId: 204, // 漂亮
            blankWordId: 204,
            level: 2,
            difficulty: 1,
            topic: "Description",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You admire the detail in the brushstrokes.",
            sentence: "很___。",
            answer: "漂亮",
            pinyin: "hěn piào liang",
            nativeSentence: "Very beautiful.",
            explanation: "漂亮 means 'beautiful'. 很 + adjective is the standard pattern.",
            words: [
                { text: "很", wordId: 12 },
                { text: "漂亮", wordId: 204 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 12. Practice: That is my painting. (FIXED - 画 is ID 43)
        {
            id: 212,
            type: "practice",
            targetWordId: 43, // 画 (from foundation)
            blankWordId: 43,
            level: 2,
            difficulty: 1,
            topic: "Art",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "Zhang says modestly, but there's pride in his voice.",
            sentence: "那是我的___。",
            answer: "画",
            pinyin: "nà shì wǒ de huà",
            nativeSentence: "That is my painting.",
            explanation: "画 means 'painting'. 我的画 means 'my painting'.",
            words: [
                { text: "那", wordId: 21 },
                { text: "是", wordId: 7 },
                { text: "我", wordId: 1 },
                { text: "的", wordId: 23 },
                { text: "画", wordId: 43 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 13. Practice: Do you like painting?
        {
            id: 213,
            type: "practice",
            targetWordId: 40, // 喜欢 (from foundation)
            blankWordId: 40,
            level: 2,
            difficulty: 1,
            topic: "Question",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "He asks, genuinely curious about your taste.",
            sentence: "你___画吗？",
            answer: "喜欢",
            pinyin: "nǐ xǐ huān huà ma",
            nativeSentence: "Do you like painting?",
            explanation: "喜欢 means 'to like'. 你喜欢画吗？ asks if you like painting.",
            words: [
                { text: "你", wordId: 2 },
                { text: "喜欢", wordId: 40 },
                { text: "画", wordId: 43 },
                { text: "吗", wordId: 22 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 14. Practice: I paint everyday.
        {
            id: 214,
            type: "practice",
            targetWordId: 205, // 每天
            blankWordId: 205,
            level: 2,
            difficulty: 1,
            topic: "Habit",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "He gestures to his paint-stained hands as proof.",
            sentence: "我___画画。",
            answer: "每天",
            pinyin: "wǒ měi tiān huà huà",
            nativeSentence: "I paint everyday.",
            explanation: "每天 means 'everyday'. 画画 means 'to paint' (verb).",
            words: [
                { text: "我", wordId: 1 },
                { text: "每天", wordId: 205 },
                { text: "画", wordId: 43 },
                { text: "画", wordId: 43 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 15. Practice: These are all my paintings.
        {
            id: 215,
            type: "practice",
            targetWordId: 43, // 画 (from foundation)
            blankWordId: 43,
            level: 2,
            difficulty: 1,
            topic: "Art",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "He waves his hand around the room at the many works on display.",
            sentence: "这都是我的___。",
            answer: "画",
            pinyin: "zhè dōu shì wǒ de huà",
            nativeSentence: "These are all my paintings.",
            explanation: "这都是 means 'these are all'. 我的画 means 'my paintings'.",
            words: [
                { text: "这", wordId: 20 },
                { text: "都", wordId: 35 },
                { text: "是", wordId: 7 },
                { text: "我", wordId: 1 },
                { text: "的", wordId: 23 },
                { text: "画", wordId: 43 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 16. Practice: He paints very well.
        {
            id: 216,
            type: "practice",
            targetWordId: 13, // 好 (from foundation)
            blankWordId: 13,
            level: 2,
            difficulty: 2,
            topic: "Skill",
            speaker: "Lao Cha",
            speakerImage: getImagePath("/images/speakers/laocha.webp"),
            image: "", // Empty for now
            sceneDetails: "Lao Cha nods at Zhang with respect.",
            sentence: "他画得很___。",
            answer: "好",
            pinyin: "tā huà de hěn hǎo",
            nativeSentence: "He paints very well.",
            explanation: "得 links the verb to the complement. 画得很好 means 'paints well'.",
            words: [
                { text: "他", wordId: 3 },
                { text: "画", wordId: 43 },
                { text: "得", wordId: 206 },
                { text: "很", wordId: 12 },
                { text: "好", wordId: 13 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 17. Practice: Do you like to paint?
        {
            id: 217,
            type: "practice",
            targetWordId: 43, // 画 (from foundation)
            blankWordId: 43,
            level: 2,
            difficulty: 1,
            topic: "Question",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "Zhang turns back to you, interested.",
            sentence: "你喜欢___吗？",
            answer: "画",
            pinyin: "nǐ xǐ huān huà ma",
            nativeSentence: "Do you like to paint?",
            explanation: "喜欢画 means 'like to paint'. Here 画 is a verb.",
            words: [
                { text: "你", wordId: 2 },
                { text: "喜欢", wordId: 40 },
                { text: "画", wordId: 43 },
                { text: "吗", wordId: 22 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 18. Practice: I like looking at paintings.
        {
            id: 218,
            type: "practice",
            targetWordId: 38, // 看 (from foundation)
            blankWordId: 38,
            level: 2,
            difficulty: 1,
            topic: "Activity",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You admit, feeling less talented but no less appreciative.",
            sentence: "我喜欢___画。",
            answer: "看",
            pinyin: "wǒ xǐ huān kàn huà",
            nativeSentence: "I like looking at paintings.",
            explanation: "看画 means 'look at paintings'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "喜欢", wordId: 40 },
                { text: "看", wordId: 38 },
                { text: "画", wordId: 43 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 19. Practice: Come look at this one.
        {
            id: 219,
            type: "practice",
            targetWordId: 38, // 看 (from foundation)
            blankWordId: 38,
            level: 2,
            difficulty: 1,
            topic: "Action",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "Zhang stands and gestures for you to follow him to the painting he brought.",
            sentence: "来___这个。",
            answer: "看",
            pinyin: "lái kàn zhè ge",
            nativeSentence: "Come look at this one.",
            explanation: "来看 means 'come look'.",
            words: [
                { text: "来", wordId: 25 },
                { text: "看", wordId: 38 },
                { text: "这", wordId: 20 },
                { text: "个", wordId: 36 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 20. Narrative: Unwrapping the painting
        {
            id: 220,
            type: "narrative",
            level: 2,
            topic: "Narrative",
            sceneDetails: "Zhang carefully unwraps the canvas. The painting beneath is of a young woman. Her eyes are kind, her smile gentle. But there's something unfinished about it—or maybe it's finished, and he just can't let go.",
            image: "", // Empty for now
        },
        // 21. Practice: What do you think?
        {
            id: 221,
            type: "practice",
            targetWordId: 209, // 觉得
            blankWordId: 209,
            level: 2,
            difficulty: 2,
            topic: "Question",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "He watches your face carefully, looking for your honest reaction.",
            sentence: "你___怎么样？",
            answer: "觉得",
            pinyin: "nǐ jué de zěn me yàng",
            nativeSentence: "What do you think?",
            explanation: "觉得 means 'to think' or 'to feel'. 怎么样 asks 'how is it?'.",
            words: [
                { text: "你", wordId: 2 },
                { text: "觉得", wordId: 209 },
                { text: "怎么样", wordId: 48 }, // 怎么 is ID 48, but 怎么样 is a compound
                { text: "？", isPunctuation: true }
            ]
        },
        // 22. Practice: I like this painting.
        {
            id: 222,
            type: "practice",
            targetWordId: 40, // 喜欢 (from foundation)
            blankWordId: 40,
            level: 2,
            difficulty: 1,
            topic: "Opinion",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You study the image, taking in every detail.",
            sentence: "我___这个画。",
            answer: "喜欢",
            pinyin: "wǒ xǐ huān zhè ge huà",
            nativeSentence: "I like this painting.",
            explanation: "喜欢 means 'to like'. 这个画 means 'this painting'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "喜欢", wordId: 40 },
                { text: "这", wordId: 20 },
                { text: "个", wordId: 36 },
                { text: "画", wordId: 43 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 23. Practice: Who is she?
        {
            id: 223,
            type: "practice",
            targetWordId: 46, // 谁 (from foundation)
            blankWordId: 46,
            level: 2,
            difficulty: 1,
            topic: "Question",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You sense this is someone important to him.",
            sentence: "她是谁？",
            answer: "谁",
            pinyin: "tā shì shéi",
            nativeSentence: "Who is she?",
            explanation: "谁 means 'who'. 她是谁？ asks 'Who is she?'.",
            words: [
                { text: "她", wordId: 4 },
                { text: "是", wordId: 7 },
                { text: "谁", wordId: 46 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 24. Practice: She is the person I love.
        {
            id: 224,
            type: "practice",
            targetWordId: 210, // 爱
            blankWordId: 210,
            level: 2,
            difficulty: 2,
            topic: "Emotion",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "Zhang speaks quietly, his eyes fixed on the painting.",
            sentence: "她是我___的人。",
            answer: "爱",
            pinyin: "tā shì wǒ ài de rén",
            nativeSentence: "She is the person I love.",
            explanation: "爱 means 'to love'. 我爱的人 means 'the person I love'.",
            words: [
                { text: "她", wordId: 4 },
                { text: "是", wordId: 7 },
                { text: "我", wordId: 1 },
                { text: "爱", wordId: 210 },
                { text: "的", wordId: 23 },
                { text: "人", wordId: 16 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 25. Practice: I think about her every day.
        {
            id: 225,
            type: "practice",
            targetWordId: 39, // 想 (from foundation)
            blankWordId: 39,
            level: 2,
            difficulty: 1,
            topic: "Thought",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "He stares at the painting, lost in memory.",
            sentence: "我每天都___她。",
            answer: "想",
            pinyin: "wǒ měi tiān dōu xiǎng tā",
            nativeSentence: "I think about her every day.",
            explanation: "想 means 'to think about' or 'to miss'. 每天都 means 'every day'.",
            words: [
                { text: "我", wordId: 1 },
                { text: "每天", wordId: 205 },
                { text: "都", wordId: 35 },
                { text: "想", wordId: 39 },
                { text: "她", wordId: 4 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 26. Practice: Her eyes are very beautiful.
        {
            id: 226,
            type: "practice",
            targetWordId: 207, // 眼睛
            blankWordId: 207,
            level: 2,
            difficulty: 1,
            topic: "Description",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "You're drawn to the detail in her gaze.",
            sentence: "她的___很漂亮。",
            answer: "眼睛",
            pinyin: "tā de yǎn jing hěn piào liang",
            nativeSentence: "Her eyes are very beautiful.",
            explanation: "眼睛 means 'eyes'. 她的眼睛 means 'her eyes'.",
            words: [
                { text: "她", wordId: 4 },
                { text: "的", wordId: 23 },
                { text: "眼睛", wordId: 207 },
                { text: "很", wordId: 12 },
                { text: "漂亮", wordId: 204 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 27. Practice: She likes to smile.
        {
            id: 227,
            type: "practice",
            targetWordId: 208, // 笑
            blankWordId: 208,
            level: 2,
            difficulty: 1,
            topic: "Action",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "You notice the subtle curve of her lips in the painting.",
            sentence: "她喜欢___。",
            answer: "笑",
            pinyin: "tā xǐ huān xiào",
            nativeSentence: "She likes to smile.",
            explanation: "笑 means 'to smile' or 'to laugh'. 喜欢笑 means 'likes to smile'.",
            words: [
                { text: "她", wordId: 4 },
                { text: "喜欢", wordId: 40 },
                { text: "笑", wordId: 208 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 28. Practice: I think this painting is beautiful.
        {
            id: 228,
            type: "practice",
            targetWordId: 209, // 觉得
            blankWordId: 209,
            level: 2,
            difficulty: 1,
            topic: "Opinion",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You choose your words carefully, wanting to honor his feelings.",
            sentence: "我___这个画很漂亮。",
            answer: "觉得",
            pinyin: "wǒ jué de zhè ge huà hěn piào liang",
            nativeSentence: "I think this painting is beautiful.",
            explanation: "觉得 means 'to think'. This expresses your opinion.",
            words: [
                { text: "我", wordId: 1 },
                { text: "觉得", wordId: 209 },
                { text: "这", wordId: 20 },
                { text: "个", wordId: 36 },
                { text: "画", wordId: 43 },
                { text: "很", wordId: 12 },
                { text: "漂亮", wordId: 204 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 29. Practice: Where is she?
        {
            id: 229,
            type: "practice",
            targetWordId: 47, // 哪里 (from foundation)
            blankWordId: 47,
            level: 2,
            difficulty: 1,
            topic: "Question",
            speaker: "Player",
            speakerImage: getImagePath("/images/speakers/player.webp"),
            image: "", // Empty for now
            sceneDetails: "You ask gently, though you're not sure you should.",
            sentence: "她在___？",
            answer: "哪里",
            pinyin: "tā zài nǎ lǐ",
            nativeSentence: "Where is she?",
            explanation: "哪里 means 'where'. 她在哪里？ asks 'Where is she?'.",
            words: [
                { text: "她", wordId: 4 },
                { text: "在", wordId: 8 },
                { text: "哪里", wordId: 47 },
                { text: "？", isPunctuation: true }
            ]
        },
        // 30. Practice: She is not here.
        {
            id: 230,
            type: "practice",
            targetWordId: 211, // 这里
            blankWordId: 211,
            level: 2,
            difficulty: 1,
            topic: "Location",
            speaker: "Zhang",
            speakerImage: getImagePath("/images/speakers/zhang.webp"),
            image: "", // Empty for now
            sceneDetails: "His voice grows quiet. The weight settles between you.",
            sentence: "她不在___。",
            answer: "这里",
            pinyin: "tā bù zài zhè lǐ",
            nativeSentence: "She is not here.",
            explanation: "这里 means 'here'. 不在这里 means 'is not here'.",
            words: [
                { text: "她", wordId: 4 },
                { text: "不", wordId: 11 },
                { text: "在", wordId: 8 },
                { text: "这里", wordId: 211 },
                { text: "。", isPunctuation: true }
            ]
        },
        // 31. Narrative: Silence before Chapter 3
        {
            id: 231,
            type: "narrative",
            level: 2,
            topic: "Narrative",
            sceneDetails: "The shop falls silent. Even the kettle seems to hush. Before anyone can speak, the kitchen door bursts open.",
            image: "", // Empty for now
        }
    ]
};