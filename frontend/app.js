// ===== SCRIBE STUDY FRONTEND =====
// Calls backend API - users don't need API keys!

// ===== CONFIGURATION =====
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'  // Local development
    : '/api';  // Production (same domain)

// ===== NEW: EMBEDDED BIBLE STRUCTURE =====
// This data is now bundled with the app, eliminating loading errors.
const BIBLE_STRUCTURE_DATA = {
    "testament": {
        "old": {
            "books": [
                {"name": "Genesis", "abbr": "Gen", "chapters": 50, "verses": [31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26]},
                {"name": "Exodus", "abbr": "Exod", "chapters": 40, "verses": [22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38]},
                {"name": "Leviticus", "abbr": "Lev", "chapters": 27, "verses": [17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34]},
                {"name": "Numbers", "abbr": "Num", "chapters": 36, "verses": [54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13]},
                {"name": "Deuteronomy", "abbr": "Deut", "chapters": 34, "verses": [46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12]},
                {"name": "Joshua", "abbr": "Josh", "chapters": 24, "verses": [18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33]},
                {"name": "Judges", "abbr": "Judg", "chapters": 21, "verses": [36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25]},
                {"name": "Ruth", "abbr": "Ruth", "chapters": 4, "verses": [22,23,18,22]},
                {"name": "1 Samuel", "abbr": "1Sam", "chapters": 31, "verses": [28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13]},
                {"name": "2 Samuel", "abbr": "2Sam", "chapters": 24, "verses": [27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25]},
                {"name": "1 Kings", "abbr": "1Kgs", "chapters": 22, "verses": [53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53]},
                {"name": "2 Kings", "abbr": "2Kgs", "chapters": 25, "verses": [18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,20,21,26,20,37,20,30]},
                {"name": "1 Chronicles", "abbr": "1Chr", "chapters": 29, "verses": [54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30]},
                {"name": "2 Chronicles", "abbr": "2Chr", "chapters": 36, "verses": [17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23]},
                {"name": "Ezra", "abbr": "Ezra", "chapters": 10, "verses": [11,70,13,24,17,22,28,36,15,44]},
                {"name": "Nehemiah", "abbr": "Neh", "chapters": 13, "verses": [11,20,32,23,19,19,73,18,38,39,36,47,31]},
                {"name": "Esther", "abbr": "Esth", "chapters": 10, "verses": [22,23,15,17,14,14,10,17,32,3]},
                {"name": "Job", "abbr": "Job", "chapters": 42, "verses": [22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17]},
                {"name": "Psalms", "abbr": "Ps", "chapters": 150, "verses": [6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6]},
                {"name": "Proverbs", "abbr": "Prov", "chapters": 31, "verses": [33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31]},
                {"name": "Ecclesiastes", "abbr": "Eccl", "chapters": 12, "verses": [18,26,22,16,20,12,29,17,18,20,10,14]},
                {"name": "Song of Solomon", "abbr": "Song", "chapters": 8, "verses": [17,17,11,16,16,13,13,14]},
                {"name": "Isaiah", "abbr": "Isa", "chapters": 66, "verses": [31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24]},
                {"name": "Jeremiah", "abbr": "Jer", "chapters": 52, "verses": [19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34]},
                {"name": "Lamentations", "abbr": "Lam", "chapters": 5, "verses": [22,22,66,22,22]},
                {"name": "Ezekiel", "abbr": "Ezek", "chapters": 48, "verses": [28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35]},
                {"name": "Daniel", "abbr": "Dan", "chapters": 12, "verses": [21,49,30,37,31,28,28,27,27,21,45,13]},
                {"name": "Hosea", "abbr": "Hos", "chapters": 14, "verses": [11,23,5,19,15,11,16,14,17,15,12,14,16,9]},
                {"name": "Joel", "abbr": "Joel", "chapters": 3, "verses": [20,32,21]},
                {"name": "Amos", "abbr": "Amos", "chapters": 9, "verses": [15,16,15,13,27,14,17,14,15]},
                {"name": "Obadiah", "abbr": "Obad", "chapters": 1, "verses": [21]},
                {"name": "Jonah", "abbr": "Jonah", "chapters": 4, "verses": [17,10,10,11]},
                {"name": "Micah", "abbr": "Mic", "chapters": 7, "verses": [16,13,12,13,15,16,20]},
                {"name": "Nahum", "abbr": "Nah", "chapters": 3, "verses": [15,13,19]},
                {"name": "Habakkuk", "abbr": "Hab", "chapters": 3, "verses": [17,20,19]},
                {"name": "Zephaniah", "abbr": "Zeph", "chapters": 3, "verses": [18,15,20]},
                {"name": "Haggai", "abbr": "Hag", "chapters": 2, "verses": [15,23]},
                {"name": "Zechariah", "abbr": "Zech", "chapters": 14, "verses": [21,13,10,14,11,15,14,23,17,12,17,14,9,21]},
                {"name": "Malachi", "abbr": "Mal", "chapters": 4, "verses": [14,17,18,6]}
            ]
        },
        "new": {
            "books": [
                {"name": "Matthew", "abbr": "Matt", "chapters": 28, "verses": [25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20]},
                {"name": "Mark", "abbr": "Mark", "chapters": 16, "verses": [45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20]},
                {"name": "Luke", "abbr": "Luke", "chapters": 24, "verses": [80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53]},
                {"name": "John", "abbr": "John", "chapters": 21, "verses": [51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25]},
                {"name": "Acts", "abbr": "Acts", "chapters": 28, "verses": [26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31]},
                {"name": "Romans", "abbr": "Rom", "chapters": 16, "verses": [32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27]},
                {"name": "1 Corinthians", "abbr": "1Cor", "chapters": 16, "verses": [31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24]},
                {"name": "2 Corinthians", "abbr": "2Cor", "chapters": 13, "verses": [24,17,18,18,21,18,16,24,15,18,33,21,14]},
                {"name": "Galatians", "abbr": "Gal", "chapters": 6, "verses": [24,21,29,31,26,18]},
                {"name": "Ephesians", "abbr": "Eph", "chapters": 6, "verses": [23,22,21,32,33,24]},
                {"name": "Philippians", "abbr": "Phil", "chapters": 4, "verses": [30,30,21,23]},
                {"name": "Colossians", "abbr": "Col", "chapters": 4, "verses": [29,23,25,18]},
                {"name": "1 Thessalonians", "abbr": "1Thess", "chapters": 5, "verses": [10,20,13,18,28]},
                {"name": "2 Thessalonians", "abbr": "2Thess", "chapters": 3, "verses": [12,17,18]},
                {"name": "1 Timothy", "abbr": "1Tim", "chapters": 6, "verses": [20,15,16,16,25,21]},
                {"name": "2 Timothy", "abbr": "2Tim", "chapters": 4, "verses": [18,26,17,22]},
                {"name": "Titus", "abbr": "Titus", "chapters": 3, "verses": [16,15,15]},
                {"name": "Philemon", "abbr": "Phlm", "chapters": 1, "verses": [25]},
                {"name": "Hebrews", "abbr": "Heb", "chapters": 13, "verses": [14,18,19,16,14,20,28,13,28,39,40,29,25]},
                {"name": "James", "abbr": "Jas", "chapters": 5, "verses": [27,26,18,17,20]},
                {"name": "1 Peter", "abbr": "1Pet", "chapters": 5, "verses": [25,25,22,19,14]},
                {"name": "2 Peter", "abbr": "2Pet", "chapters": 3, "verses": [21,22,18]},
                {"name": "1 John", "abbr": "1John", "chapters": 5, "verses": [10,29,24,21,21]},
                {"name": "2 John", "abbr": "2John", "chapters": 1, "verses": [13]},
                {"name": "3 John", "abbr": "3John", "chapters": 1, "verses": [14]},
                {"name": "Jude", "abbr": "Jude", "chapters": 1, "verses": [25]},
                {"name": "Revelation", "abbr": "Rev", "chapters": 22, "verses": [20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21]}
            ]
        }
    }
};

// ===== APPLICATION STATE =====
const AppState = {
    currentCategory: 'devotional',
    currentModule: 'spiritual-analysis',
    currentPassage: '',
    currentNoteId: null,
    notes: {},
    analysisVersions: {},
    currentVersionIndex: {},
    
    // Bible Reader State
    currentBibleReference: { book: '', chapter: null, verse: null },
    isFetchingChapter: false, // Prevents multiple fetches
    currentReaderMode: false,  // Is the Bible reader active?
    
    // Bible Structure "Brain" - NOW POPULATED IMMEDIATELY
    bibleStructure: BIBLE_STRUCTURE_DATA.testament.old.books.concat(BIBLE_STRUCTURE_DATA.testament.new.books),
    bookNameMap: new Map() // For quick lookups (e.g., "Gen" -> "Genesis")
};

// ===== MODULE DEFINITIONS =====
const ModuleDefinitions = {
    'languages': {
        name: 'Original Languages',
        modules: {
            'greek-hebrew': {
                name: 'Greek/Hebrew Lexicon',
                prompt: `Provide lexical analysis for key terms in {passage}:

**For each significant word:**
1. **Original Language:** Hebrew/Greek word (with transliteration)
2. **Root Meaning:** Etymology and basic semantic range
3. **Usage Patterns:** How this word is used elsewhere in Scripture
4. **Theological Significance:** What this word contributes to biblical theology
5. **Context:** How the meaning functions specifically in this passage

Focus on words that carry theological weight or cultural significance.`,
                icon: '📚'
            },
            'morphology': {
                name: 'Morphology',
                prompt: `Provide detailed morphological analysis of {passage}:

**For each significant word:**
- Parse (part of speech, person, number, gender, tense, voice, mood, case)
- Root/lexical form
- Semantic range
- Usage in this context

**Analysis should include:**
- Word-by-word breakdown of key terms
- Morphological patterns that affect meaning
- Comparative usage across Scripture
- Theological implications of specific forms`,
                icon: '📝'
            },
            'grammar-essentials': {
                name: 'Grammar Essentials',
                prompt: `Analyze the grammar of {passage} to help anyone understand how sentence structure reveals theological truth—accessible yet thorough.

LANGUAGE AUTO-DETECTION:
**If passage is Old Testament:**
- Display Hebrew text with transliteration
- Analyze Hebrew grammatical features
- Explain Hebrew word order, construct chains, verb stems
- Note definiteness, pronominal suffixes, particles
- Reference Hebrew syntax and style

**If passage is New Testament:**
- Display Greek text with transliteration
- Analyze Greek grammatical features
- Explain Greek cases, verb aspects, participles
- Note article usage, prepositions, conjunctions
- Reference Greek syntax and style

'Focus on making complex grammar accessible while maintaining scholarly accuracy.`,
                icon: '📖'
            },
            'advanced-grammar': {
                name: 'Advanced Grammar',
                prompt: `Perform comprehensive syntactic analysis of {passage} combining scholarly precision with theological depth.

LANGUAGE AUTO-DETECTION & SCHOLARLY TREATMENT:
**If Old Testament:**
- Display Hebrew text (pointed Masoretic)
- Provide transliteration for accessibility
- Analyze ALL Hebrew grammatical features:
    - Verb stems (Qal, Niphal, Piel, Pual, Hithpael, Hophal, Hiphil)
    - Verb conjugations (Perfect, Imperfect, Imperative, Infinitive, Participle)
    - Noun patterns, construct chains, pronominal suffixes
    - Particles, prepositions, conjunctions
    - Word order and emphasis
    - Poetic structures if applicable (parallelism, chiasm)

**If New Testament:**
- Display Greek text with transliteration
- Analyze ALL Greek grammatical features:
    - Verb aspects (aorist, present, perfect, imperfect)
    - Voice (active, middle, passive)
    - Mood (indicative, subjunctive, optative, imperative, infinitive, participle)
    - Case system (nominative, genitive, dative, accusative, vocative)
    - Article usage and semantic significance
    - Participles and their functions
    - Prepositions and compound verbs

Include detailed morphological analysis, clause structures, and syntactic relationships.`,
                icon: '🔬'
            },
            'verse-by-verse': {
                name: 'Verse-by-Verse Grammar',
                prompt: `Provide verse-by-verse grammatical analysis of {passage}:

**For each verse:**
1. **Text:** Display original language with transliteration
2. **Clause Structure:** Identify main and subordinate clauses
3. **Grammatical Features:** Key morphological and syntactic elements
4. **Structural Relationships:** How clauses connect
5. **Meaning Impact:** How grammar affects interpretation

Make technical analysis accessible while maintaining precision.`,
                icon: '📋'
            },
            'semantic-range': {
                name: 'Semantic Range',
                prompt: `Explore the semantic range of key terms in {passage}...`,
                icon: '🌈'
            }
        }
    },
    'devotional': {
        name: 'Devotional',
        modules: {
            'spiritual-analysis': {
                name: 'Spiritual Analysis',
                prompt: `Provide a deep spiritual analysis of {passage} with focus on:

* Core theological truths revealed
* Personal heart impact and conviction
* Christ-centered interpretation
* Redemptive-historical context

Include:
* Key spiritual insights that lead to worship
* Personal application points
* How this passage transforms believers
* Connection to themes of divine sovereignty, faith, perseverance, and covenant faithfulness

Avoid generic observations—focus on transformative truth that leads to worship and obedience.`,
                icon: '📖'
            },
            'devotional-reflection': {
                name: 'Devotional Reflection',
                prompt: `Create a devotional reflection on {passage} suitable for personal meditation...`,
                icon: '🙏'
            },
            'discipleship': {
                name: 'Discipleship Application',
                prompt: `Analyze {passage} for discipleship and spiritual growth applications...`,
                icon: '🌱'
            },
            'redemptive-focus': {
                name: 'Redemptive Focus',
                prompt: `Analyze {passage} through the lens of redemptive exposition...`,
                icon: '✝️'
            },
            'life-application': {
                name: 'Life Application',
                prompt: `Provide practical life applications from {passage}...`,
                icon: '🎯'
            }
        }
    },
    'text-analysis': {
        name: 'Text Analysis',
        modules: {
            'passage-overview': {
                name: 'Passage Overview',
                prompt: `Provide a comprehensive overview of {passage}...`,
                icon: '📋'
            },
            'structural-analysis': {
                name: 'Structural Analysis',
                prompt: `Analyze the literary structure of {passage}...`,
                icon: '🏗️'
            },
            'literary-devices': {
                name: 'Literary Devices',
                prompt: `Identify literary devices in {passage}...`,
                icon: '✍️'
            },
            'discourse-analysis': {
                name: 'Discourse Analysis',
                prompt: `Analyze the discourse structure of {passage}...`,
                icon: '💬'
            },
            'semantic-outline': {
                name: 'Semantic Outline',
                prompt: `Generate a semantic outline of {passage}...`,
                icon: '📊'
            },
            'key-words': {
                name: 'Key Words',
                prompt: `Identify and analyze key words in {passage}...`,
                icon: '🔑'
            }
        }
    },
    'context': {
        name: 'Context & Background',
        modules: {
            'historical-cultural': {
                name: 'Historical-Cultural',
                prompt: `Provide historical and cultural context for {passage}...`,
                icon: '🏛️'
            },
            'geographical': {
                name: 'Geographical Context',
                prompt: `Explain the geographical context of {passage}...`,
                icon: '🗺️'
            },
            'theological-context': {
                name: 'Theological Context',
                prompt: `Analyze the theological context of {passage}...`,
                icon: '⛪'
            },
            'cross-references': {
                name: 'Cross-References',
                prompt: `Identify cross-references to {passage}...`,
                icon: '🔗'
            },
            'literary-context': {
                name: 'Literary Context',
                prompt: `Analyze how {passage} fits within its book...`,
                icon: '📖'
            }
        }
    },
    'jewish': {
        name: 'Jewish Background',
        modules: {
            'second-temple': {
                name: 'Second Temple Period',
                prompt: `Analyze {passage} in light of Second Temple literature...`,
                icon: '🕍'
            },
            'rabbinic': {
                name: 'Rabbinic Literature',
                prompt: `Examine connections to Rabbinic literature...`,
                icon: '📜'
            },
            'dead-sea-scrolls': {
                name: 'Dead Sea Scrolls',
                prompt: `Explore connections to Dead Sea Scrolls...`,
                icon: '📰'
            },
            'pseudepigrapha': {
                name: 'Pseudepigrapha',
                prompt: `Analyze in light of Pseudepigraphal writings...`,
                icon: '📕'
            }
        }
    },
    'teaching': {
        name: 'Teaching & Preaching',
        modules: {
            'sermon-outline': {
                name: 'Sermon Outline',
                prompt: `Create a sermon outline for {passage}...`,
                icon: '📋'
            },
            'lesson-plan': {
                name: 'Lesson Plan',
                prompt: `Develop a lesson plan for {passage}...`,
                icon: '📝'
            },
            'discussion-questions': {
                name: 'Discussion Questions',
                prompt: `Generate discussion questions for {passage}...`,
                icon: '❓'
            },
            'illustrations': {
                name: 'Illustrations',
                prompt: `Suggest illustrations for {passage}...`,
                icon: '💡'
            },
            'teaching-points': {
                name: 'Teaching Points',
                prompt: `Extract key teaching points from {passage}...`,
                icon: '🎯'
            }
        }
    }
};

// ===== DOM ELEMENTS =====
// Lazily loaded in initializeApp to ensure they exist
let passageInput, runModuleBtn, displayScriptureBtn, versionSelect,
    sidebar, sidebarHeader, sidebarArrow,
    notesPanel, notesArrow, notesEditor, noteNameInput,
    saveStatus, wordCount, noteCount, noteMeta,
    analysisDisplay, statusMessage;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Select core elements
    passageInput = document.getElementById('passageInput');
    runModuleBtn = document.getElementById('runModuleBtn');
    displayScriptureBtn = document.getElementById('displayScriptureBtn');
    versionSelect = document.getElementById('versionSelect');
    sidebar = document.getElementById('sidebar');
    sidebarHeader = document.getElementById('sidebarHeader');
    sidebarArrow = document.getElementById('sidebarArrow');
    notesPanel = document.getElementById('notesPanel');
    notesArrow = document.getElementById('notesArrow');
    notesEditor = document.getElementById('notesEditor');
    noteNameInput = document.getElementById('noteNameInput');
    saveStatus = document.getElementById('saveStatus');
    wordCount = document.getElementById('wordCount');
    noteCount = document.getElementById('noteCount');
    noteMeta = document.getElementById('noteMeta');
    analysisDisplay = document.getElementById('analysisDisplay');
    statusMessage = document.getElementById('statusMessage');

    // NEW: Process Bible structure immediately
    AppState.bibleStructure.forEach((book, index) => {
        const bookData = { ...book, index };
        AppState.bookNameMap.set(book.name.toLowerCase(), bookData);
        AppState.bookNameMap.set(book.abbr.toLowerCase(), bookData); // Use abbr as an alias
    });
    console.log('Bible structure loaded and processed.');

    // Initialize app
    initializeApp();
    loadNotes();
    checkAPIHealth();
    // loadBibleStructure(); // <-- REMOVED: No longer need to fetch
});

function initializeApp() {
    // Primary tabs
    document.querySelectorAll('.primary-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            switchCategory(category);
        });
    });

    // Secondary tabs (modules)
    document.querySelectorAll('.secondary-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const module = e.target.dataset.module;
            switchModule(module);
        });
    });

    // Main action buttons
    runModuleBtn.addEventListener('click', generateModuleAnalysis);
    displayScriptureBtn.addEventListener('click', displayScripture);
    
    // Enter key in search
    passageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            // If user hits enter, default to module analysis
            generateModuleAnalysis();
        }
    });

    // Sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);

    // Notes panel toggle
    document.getElementById('notesToggle').addEventListener('click', toggleNotes);
    
    // Note panel size controls
    document.getElementById('collapseBtn').addEventListener('click', () => setNotesPanelSize('collapsed'));
    document.getElementById('normalBtn').addEventListener('click', () => setNotesPanelSize('normal'));
    document.getElementById('mediumBtn').addEventListener('click', () => setNotesPanelSize('medium'));
    document.getElementById('wideBtn').addEventListener('click', () => setNotesPanelSize('wide'));

    // Note functionality
    document.getElementById('newNoteBtn').addEventListener('click', createNewNote);
    document.getElementById('myNotesBtn').addEventListener('click', showNotesList); // Function to be created
    document.getElementById('deleteBtn').addEventListener('click', deleteCurrentNote);

    // Note saving (autosave)
    notesEditor.addEventListener('input', updateNoteState);
    noteNameInput.addEventListener('input', updateNoteState);

    // Set initial active button
    setNotesPanelSize('normal');
}

// ===== API & DATA LOADING =====

// REMOVED loadBibleStructure() function. It's no longer needed.

async function checkAPIHealth() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        
        if (!data.hasApiKey) {
            console.warn('⚠️ Backend API key not configured');
        } else {
            console.log('Backend API connection successful.');
        }
    } catch (error) {
        console.error('Cannot connect to backend:', error);
        showError('Cannot connect to server. Make sure backend is running.');
    }
}

// ===== MAIN ANALYSIS / DATA FETCHING =====

function generateModuleAnalysis() {
    const passage = passageInput.value.trim();
    if (!passage) {
        showError('Please enter a scripture passage or question.');
        return;
    }
    
    AppState.currentPassage = passage;
    AppState.currentReaderMode = false; // We are in module mode

    const moduleInfo = getModuleInfo(AppState.currentCategory, AppState.currentModule);
    
    let prompt;
    const ref = parsePassageReference(passage);
    
    if (ref) {
        // Looks like a passage
        prompt = moduleInfo.prompt.replace('{passage}', passage);
    } else {
        // Looks like a general question
        prompt = `Treating "${passage}" as a general theological question, please provide a detailed answer.`;
    }
    
    const analysisKey = `${passage}-${AppState.currentCategory}-${AppState.currentModule}`;

    runAnalysis({
        type: 'module',
        prompt: prompt,
        analysisKey: analysisKey,
        passage: passage,
        moduleName: moduleInfo.name,
        icon: moduleInfo.icon
    });
}

function displayScripture() {
    const passage = passageInput.value.trim();
    if (!passage) {
        showError('Please enter a scripture passage.');
        return;
    }

    AppState.currentPassage = passage;
    AppState.currentReaderMode = true; // We are in reader mode
    
    const ref = parsePassageReference(passage);
    if (!ref) {
        showError("Invalid passage reference. Please use a format like 'John 3:16' or 'Romans 8'.");
        return;
    }
    
    AppState.currentBibleReference = ref; // Store the *standardized* reference
    
    const version = versionSelect.value;
    const prompt = getScripturePrompt(ref.book, ref.chapter, version);
    const analysisKey = `${ref.book} ${ref.chapter}-${version}`;
    
    runAnalysis({
        type: 'scripture',
        prompt: prompt,
        analysisKey: analysisKey,
        passage: passage, // Keep original user passage for display
        version: version,
        ref: ref
    });
}

/**
 * Generates the correct prompt for fetching scripture
 */
function getScripturePrompt(book, chapter, version) {
    let versionPrompt = `using the ${version} version`;
    if (version === 'WLC') {
        versionPrompt = "using the Hebrew Westminster Leningrad Codex (WLC). Include Hebrew text.";
    } else if (version === 'SBLGNT') {
        versionPrompt = "using the SBL Greek New Testament (SBLGNT). Include Greek text.";
    }
    // Added Reina-Valera 1909 logic
    else if (version === 'Reina-Valera 1909') {
        versionPrompt = "using the Reina-Valera 1909 (Spanish) version. Include Spanish text.";
    }
    
    return `Provide the full text for the *entire chapter* of ${book} ${chapter}, ${versionPrompt}. Format each verse as [VerseNumber] The text of the verse.`;
}

/**
 * The core function to call the backend API and handle responses
 */
async function runAnalysis(options) {
    // --- 1. Set Loading State ---
    if (AppState.isFetchingChapter) return; // Prevent loop
    
    analysisDisplay.removeEventListener('scroll', scrollHandler);

    if (options.type === 'scroll-top' || options.type === 'scroll-bottom') {
        AppState.isFetchingChapter = true;
        showScrollLoader(options.type === 'scroll-top' ? 'top' : 'bottom');
    } else {
        setLoadingState(true);
        // Do not clear versions if they exist
        if (!AppState.analysisVersions[options.analysisKey]) {
            AppState.analysisVersions[options.analysisKey] = [];
            AppState.currentVersionIndex[options.analysisKey] = 0;
        }
    }

    // --- 2. Make API Call ---
    try {
        const response = await fetch(`${API_URL}/analyze`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: options.prompt,
                passage: options.passage,
                moduleName: options.moduleName || options.version
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Analysis failed');
        }

        const data = await response.json();
        const analysis = data.analysis;
        
        // --- 3. Store and Display Results ---
        if (options.type !== 'scroll-top' && options.type !== 'scroll-bottom') {
            AppState.analysisVersions[options.analysisKey] = [analysis]; // Store the new analysis
            AppState.currentVersionIndex[options.analysisKey] = 0; // Reset to version 1
        }

        displayAnalysis(analysis, options);

    } catch (error) {
        console.error('Analysis Error:', error);
        showError(error.message);
        
        if (options.type === 'scroll-top' || options.type === 'scroll-bottom') {
            AppState.isFetchingChapter = false;
        }
    } finally {
        // --- 4. Reset Loading State ---
        if (options.type === 'scroll-top' || options.type === 'scroll-bottom') {
            setTimeout(() => {
                analysisDisplay.addEventListener('scroll', scrollHandler);
                AppState.isFetchingChapter = false;
            }, 100); // Short delay for DOM to settle
            hideScrollLoader(options.type === 'scroll-top' ? 'top' : 'bottom');
        } else {
            setLoadingState(false);
        }
    }
}

// ===== DISPLAY & UI FUNCTIONS =====

/**
 * Handles the "infinite scroll" behavior for the Bible Reader
 */
function scrollHandler() {
    if (AppState.isFetchingChapter || !AppState.currentReaderMode || !AppState.bibleStructure) {
        return; // Do nothing if fetching, not in reader mode, or brain not loaded
    }

    const { scrollTop, scrollHeight, clientHeight } = analysisDisplay;
    const currentRef = AppState.currentBibleReference;
    const version = versionSelect.value;

    // --- Check if scrolled to the top ---
    if (scrollTop < 50) { // 50px buffer
        const newRef = getPreviousChapter(currentRef);
        
        if (newRef) {
            // AppState.currentBibleReference = newRef; // Update state AFTER fetch
            const prompt = getScripturePrompt(newRef.book, newRef.chapter, version);
            
            runAnalysis({
                type: 'scroll-top',
                prompt: prompt,
                passage: `${newRef.book} ${newRef.chapter}`,
                version: version,
                ref: newRef
            });
        }
    }
    
    // --- Check if scrolled to the bottom ---
    if (scrollHeight - scrollTop - clientHeight < 50) { // 50px buffer
        const newRef = getNextChapter(currentRef);

        if (newRef) {
            // AppState.currentBibleReference = newRef; // Update state AFTER fetch
            const prompt = getScripturePrompt(newRef.book, newRef.chapter, version);
            
            runAnalysis({
                type: 'scroll-bottom',
                prompt: prompt,
                passage: `${newRef.book} ${newRef.chapter}`,
                version: version,
                ref: newRef
            });
        }
    }
}

function setLoadingState(isLoading) {
    if (isLoading) {
        statusMessage.classList.remove('hidden');
        analysisDisplay.classList.remove('visible');
        
        statusMessage.innerHTML = `
            <div class="status-icon">
                <div class="loading-dots">
                    <span>.</span><span>.</span><span>.</span>
                </div>
            </div>
            <div class="status-title">Analyzing...</div>
        `;
    } else {
        statusMessage.classList.add('hidden');
        analysisDisplay.classList.add('visible');
    }
    
    runModuleBtn.disabled = isLoading;
    displayScriptureBtn.disabled = isLoading;
}

function displayAnalysis(content, options) {
    let formatted = formatMarkdown(content);
    
    // --- Handle Scroll-Stitching ---
    if (options.type === 'scroll-top') {
        const oldScrollHeight = analysisDisplay.scrollHeight;
        const oldScrollTop = analysisDisplay.scrollTop;
        
        // Add a small divider
        const divider = `<hr class="chapter-divider" data-book="${options.ref.book}" data-chapter="${options.ref.chapter}">`;
        analysisDisplay.innerHTML = divider + formatted + analysisDisplay.innerHTML;
        
        // Maintain scroll position
        analysisDisplay.scrollTop = oldScrollTop + (analysisDisplay.scrollHeight - oldScrollHeight);
        
        // Update the sticky header to the top-most chapter
        const readerTitle = document.getElementById('readerChapterDisplay');
        if (readerTitle) {
            readerTitle.textContent = `${options.ref.book} ${options.ref.chapter}`;
        }
        // Update state *after* successful stitch
        AppState.currentBibleReference = options.ref;
        
    } else if (options.type === 'scroll-bottom') {
        // Add a small divider
        const divider = `<hr class="chapter-divider" data-book="${options.ref.book}" data-chapter="${options.ref.chapter}">`;
        analysisDisplay.innerHTML += divider + formatted;
        
        // Update state *after* successful stitch
        AppState.currentBibleReference = options.ref;

    } else {
        // This is a new, fresh load
        analysisDisplay.innerHTML = '';
        
        // --- Build Header ---
        const header = document.createElement('div');
        header.className = 'analysis-header';
        
        if (options.type === 'module') {
            AppState.currentReaderMode = false;
            const template = document.getElementById('analysisHeaderTemplate');
            header.innerHTML = template.innerHTML;
            header.querySelector('#analysisPassageDisplay').textContent = options.passage;
            header.querySelector('#analysisModuleDisplay').textContent = options.moduleName;
            header.querySelector('#analysisIconDisplay').textContent = options.icon || '🔬';
            header.querySelector('#regenerateBtn').onclick = generateModuleAnalysis; // Re-hook
            
            analysisDisplay.removeEventListener('scroll', scrollHandler);

        } else if (options.type === 'scripture') {
            AppState.currentReaderMode = true;
            const template = document.getElementById('readerHeaderTemplate');
            header.innerHTML = template.innerHTML;
            header.querySelector('#readerChapterDisplay').textContent = `${options.ref.book} ${options.ref.chapter}`;
            
            // Attach scroll listener
            analysisDisplay.addEventListener('scroll', scrollHandler);
        }
        
        analysisDisplay.appendChild(header);
        
        // --- Build Content Body ---
        const contentDiv = document.createElement('div');
        contentDiv.className = 'analysis-content';
        contentDiv.innerHTML = formatted;
        analysisDisplay.appendChild(contentDiv);
        
        // --- Build Footer (for modules only) ---
        if (options.type === 'module') {
            const footer = document.createElement('div');
            footer.className = 'analysis-footer';
            const template = document.getElementById('versionControlsTemplate');
            footer.innerHTML = template.innerHTML;
            analysisDisplay.appendChild(footer);
        }

        // --- Scroll to Top (or to verse) ---
        analysisDisplay.scrollTop = 0;
    }

    statusMessage.classList.add('hidden');
    analysisDisplay.classList.add('visible');
}

/**
 * Shows an error message in the main display
 * @param {string} message
 * @param {boolean} [isWarning=false] - If true, shows a yellow warning instead of red error
 */
function showError(message, isWarning = false) {
    statusMessage.innerHTML = `
        <div class="status-icon">${isWarning ? '⚠️' : '🚫'}</div>
        <div class="status-title">${isWarning ? 'Warning' : 'Error'}</div>
        <p class="status-text" style="color: ${isWarning ? '#a1830a' : '#d32f2f'};">${message}</p>
    `;
    statusMessage.classList.remove('hidden');
    analysisDisplay.classList.remove('visible');
    
    runModuleBtn.disabled = false;
    displayScriptureBtn.disabled = false;
}

function formatMarkdown(text) {
    if (!text) return '';

    // Simple markdown to HTML
    return text
        .replace(/</g, '&lt;') // Sanitize HTML
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.+?)\*/g, '<em>$1</em>')     // Italic
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')     // H1
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')   // H2
        .replace(/^### (.+)$/gm, '<h3>$1</h3>') // H3
        .replace(/\[(\d+:\d+)\]/g, '<strong>$1</strong>') // Verse numbers (e.g., [1:23])
        .replace(/\[(\d+)\]/g, '<strong>$1</strong>') // Verse numbers (e.g., [23])
        .replace(/^- (.*$)/gm, '<ul><li>$1</li></ul>') // Bullets
        .replace(/^\* (.*$)/gm, '<ul><li>$1</li></ul>') // Bullets
        .replace(/^(\d+)\. (.*$)/gm, '<ol><li>$2</li></ol>') // Numbered lists
        .replace(/<\/ul>\n<ul>/g, '') // Combine adjacent bullet lists
        .replace(/<\/ol>\n<ol>/g, '') // Combine adjacent numbered lists
        .replace(/\n/g, '<br />') // Newlines
        .replace(/<br \/>\s*<br \/>/g, '</p><p>') // Paragraphs
        .replace(/<br \/><h1>/g, '<h1>')
        .replace(/<br \/><h2>/g, '<h2>')
        .replace(/<br \/><h3>/g, '<h3>')
        .replace(/<br \/><ul>/g, '<ul>')
        .replace(/<br \/><ol>/g, '<ol>');
}


function showScrollLoader(position) {
    let loader = analysisDisplay.querySelector(`.scroll-loader-${position}`);
    if (!loader) {
        const template = document.getElementById('scrollLoaderTemplate');
        loader = template.content.cloneNode(true).firstElementChild;
        loader.classList.add(`scroll-loader-${position}`);
        
        if (position === 'top') {
            analysisDisplay.prepend(loader);
        } else {
            analysisDisplay.appendChild(loader);
        }
    }
    loader.style.display = 'block';
}

function hideScrollLoader(position) {
    let loader = analysisDisplay.querySelector(`.scroll-loader-${position}`);
    if (loader) {
        loader.style.display = 'none';
    }
}


// ===== NAVIGATION & UI STATE =====

function switchCategory(category) {
    AppState.currentCategory = category;
    
    document.querySelectorAll('.primary-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    document.querySelectorAll('.module-group').forEach(group => {
        group.classList.toggle('active', group.dataset.category === category);
    });

    const firstModule = ModuleDefinitions[category].modules;
    const firstModuleKey = Object.keys(firstModule)[0];
    switchModule(firstModuleKey);

    sidebarHeader.textContent = ModuleDefinitions[category].name;
}

function switchModule(module) {
    AppState.currentModule = module;
    
    document.querySelectorAll('.secondary-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.module === module);
    });
}

function getModuleInfo(category, module) {
    return ModuleDefinitions[category].modules[module];
}

function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
    sidebarArrow.textContent = sidebar.classList.contains('collapsed') ? '▶' : '◀';
}

function toggleNotes() {
    notesPanel.classList.toggle('collapsed');
    notesArrow.textContent = notesPanel.classList.contains('collapsed') ? '◀' : '▶';
}

function setNotesPanelSize(size) {
    notesPanel.classList.remove('collapsed', 'medium', 'wide');
    
    document.getElementById('collapseBtn').classList.remove('active');
    document.getElementById('normalBtn').classList.remove('active');
    document.getElementById('mediumBtn').classList.remove('active');
    document.getElementById('wideBtn').classList.remove('active');

    if (size === 'collapsed') {
        notesPanel.classList.add('collapsed');
        document.getElementById('collapseBtn').classList.add('active');
    } else if (size === 'medium') {
        notesPanel.classList.add('medium');
        document.getElementById('mediumBtn').classList.add('active');
    } else if (size === 'wide') {
        notesPanel.classList.add('wide');
        document.getElementById('wideBtn').classList.add('active');
    } else {
        document.getElementById('normalBtn').classList.add('active');
    }
    
    notesArrow.textContent = size === 'collapsed' ? '◀' : '▶';
}

// ===== BIBLE STRUCTURE UTILITIES =====

/**
 * Gets the standardized book data from any alias
 * @param {string} bookName
 * @returns {object | null} Book data
 */
function getBookData(bookName) {
    if (!bookName || !AppState.bookNameMap) return null;
    return AppState.bookNameMap.get(bookName.toLowerCase().trim());
}

/**
 * Parses a passage string into a standardized reference object
 * @param {string} passageStr
 * @returns {object | null}
 */
function parsePassageReference(passageStr) {
    if (!passageStr) return null;
    
    // Regex to capture book, chapter, and optional verse
    // Handles "1 John", "John", "1John"
    const regex = /^([1-3]?\s?[A-Za-z]+)\s*(\d+)(?:[:\.](\d+))?.*$/;
    const match = passageStr.match(regex);
    
    if (match) {
        const bookData = getBookData(match[1]);
        if (!bookData) {
            // Can't find this book in our structure
            return null;
        }
        
        return {
            book: bookData.name, // Use the *standardized* name
            chapter: parseInt(match[2], 10),
            verse: match[3] ? parseInt(match[3], 10) : null
        };
    }
    
    return null; // Invalid format
}

/**
 * Gets the reference for the next chapter
 * @param {object} ref - { book, chapter, verse }
 * @returns {object | null}
 */
function getNextChapter(ref) {
    if (!AppState.bibleStructure) return null;
    
    const bookData = getBookData(ref.book);
    if (!bookData) return null;

    if (ref.chapter < bookData.chapters) {
        // Next chapter in the same book
        return { ...ref, chapter: ref.chapter + 1 };
    } else {
        // Go to next book
        const nextBookData = AppState.bibleStructure[bookData.index + 1];
        if (nextBookData) {
            return { book: nextBookData.name, chapter: 1, verse: null };
        }
    }
    return null; // End of Bible
}

/**
 * Gets the reference for the previous chapter
 * @param {object} ref - { book, chapter, verse }
 * @returns {object | null}
 */
function getPreviousChapter(ref) {
    if (!AppState.bibleStructure) return null;
    
    const bookData = getBookData(ref.book);
    if (!bookData) return null;

    if (ref.chapter > 1) {
        // Previous chapter in the same book
        return { ...ref, chapter: ref.chapter - 1 };
    } else {
        // Go to previous book
        const prevBookData = AppState.bibleStructure[bookData.index - 1];
        if (prevBookData) {
            return { book: prevBookData.name, chapter: prevBookData.chapters, verse: null };
        }
    }
    return null; // Start of Bible
}

// ===== NOTES (localStorage) =====

let saveTimeout = null;
function updateNoteState() {
    const content = notesEditor.value;
    const title = noteNameInput.value;
    
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    wordCount.textContent = `${words} words`;
    
    if (AppState.currentNoteId) {
        noteMeta.textContent = `Editing • ${words} words`;
    } else {
        noteMeta.textContent = `New note • ${words} words`;
    }

    if (saveTimeout) clearTimeout(saveTimeout);
    saveStatus.textContent = 'Saving...';
    
    saveTimeout = setTimeout(() => {
        saveCurrentNote();
        saveStatus.textContent = 'Saved';
    }, 1000);
}

function saveCurrentNote() {
    const title = noteNameInput.value || 'Untitled Note';
    const content = notesEditor.value;
    
    if (!AppState.currentNoteId) {
        if (!content && title === 'Untitled Note') return; // Don't save empty new notes
        AppState.currentNoteId = `note_${new Date().getTime()}`;
    }
    
    AppState.notes[AppState.currentNoteId] = {
        id: AppState.currentNoteId,
        title: title,
        content: content,
        lastModified: new Date().toISOString()
    };
    
    saveNotesToStorage();
    updateNoteList();
}

function loadNotes() {
    const saved = localStorage.getItem('scribeNotes');
    if (saved) {
        AppState.notes = JSON.parse(saved);
    } else {
        AppState.notes = {};
    }
    updateNoteList();
    createNewNote(); // Start with a blank note
}

function saveNotesToStorage() {
    localStorage.setItem('scribeNotes', JSON.stringify(AppState.notes));
}

function createNewNote() {
    saveCurrentNote(); // Save any pending changes
    
    AppState.currentNoteId = null;
    noteNameInput.value = '';
    notesEditor.value = '';
    updateNoteState();
    noteNameInput.focus();
}

function loadNote(noteId) {
    if (!AppState.notes[noteId]) return;
    
    saveCurrentNote(); // Save any pending changes
    
    const note = AppState.notes[noteId];
    AppState.currentNoteId = noteId;
    noteNameInput.value = note.title;
    notesEditor.value = note.content;
    updateNoteState();
}

function deleteCurrentNote() {
    if (AppState.currentNoteId) {
        delete AppState.notes[AppState.currentNoteId];
        saveNotesToStorage();
        updateNoteList();
        createNewNote(); // Load a blank note
    }
}

function updateNoteList() {
    const count = Object.keys(AppState.notes).length;
    noteCount.textContent = count;
}

function showNotesList() {
    // This is a stub for building the modal
    alert('Showing all notes (modal not yet built)');
}
