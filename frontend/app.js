// ===== SCRIBE STUDY FRONTEND =====
// Calls backend API - users don't need API keys!

// ===== BIBLE STRUCTURE DATA (EMBEDDED) =====
// This data is now part of the app, eliminating loading errors.
const BIBLE_DATA = {
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
        {"name":ReadMe.md": "2John", "chapters": 1, "verses": [13]},
        {"name": "3 John", "abbr": "3John", "chapters": 1, "verses": [14]},
        {"name": "Jude", "abbr": "Jude", "chapters": 1, "verses": [25]},
        {"name": "Revelation", "abbr": "Rev", "chapters": 22, "verses": [20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21]}
      ]
    }
  }
};

// ===== CONFIGURATION =====
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'  // Local development
    : '/api';  // Production (same domain)

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
    isFetchingChapter: false,
    currentReaderMode: false,
    chapterObserver: null, // For the "smart" sticky header

    // Bible Structure (now populated immediately)
    bibleStructure: null,
    bookAliasMap: new Map()
};

// ===== MODULE DEFINITIONS =====
const ModuleDefinitions = {
    'languages': {
        name: 'Original Languages',
        modules: {
            'greek-hebrew': {
                name: 'Greek/Hebrew Lexicon',
                prompt: `Provide lexical analysis for key terms in {passage}:\n\n**For each significant word:**\n1.  **Original Language:** Hebrew/Greek word (with transliteration)\n2.  **Root Meaning:** Etymology and basic semantic range\n3.  **Usage Patterns:** How this word is used elsewhere in Scripture\n4.  **Theological Significance:** What this word contributes to biblical theology\n5.  **Context:** How the meaning functions specifically in this passage\n\nFocus on words that carry theological weight or cultural significance.`,
                icon: '📚'
            },
            'morphology': {
                name: 'Morphology',
                prompt: `Provide detailed morphological analysis of {passage}:\n\n**For each significant word:**\n-   Parse (part of speech, person, number, gender, tense, voice, mood, case)\n-   Root/lexical form\n-   Semantic range\n-   Usage in this context\n\n**Analysis should include:**\n-   Word-by-word breakdown of key terms\n-   Morphological patterns that affect meaning\n-   Comparative usage across Scripture\n-   Theological implications of specific forms`,
                icon: '📝'
            },
            'grammar-essentials': {
                name: 'Grammar Essentials',
                prompt: `Analyze the grammar of {passage} to help anyone understand how sentence structure reveals theological truth—accessible yet thorough.\n\LANGUAGE AUTO-DETECTION:\n**If passage is Old Testament:**\n- Display Hebrew text with transliteration\n- Analyze Hebrew grammatical features\n- Explain Hebrew word order, construct chains, verb stems\n- Note definiteness, pronominal suffixes, particles\n- Reference Hebrew syntax and style\n\n**If passage is New Testament:**\n- Display Greek text with transliteration\n- Analyze Greek grammatical features\n- Explain Greek cases, verb aspects, participles\n- Note article usage, prepositions, conjunctions\n- Reference Greek syntax and style\n\n'Focus on making complex grammar accessible while maintaining scholarly accuracy.`,
                icon: '📖'
            },
            'advanced-grammar': {
                name: 'Advanced Grammar',
                prompt: `Perform comprehensive syntactic analysis of {passage} combining scholarly precision with theological depth.\n\nLANGUAGE AUTO-DETECTION & SCHOLARLY TREATMENT:\n**If Old Testament:**\n- Display Hebrew text (pointed Masoretic)\n- Provide transliteration for accessibility\n- Analyze ALL Hebrew grammatical features:\n    - Verb stems (Qal, Niphal, Piel, Pual, Hithpael, Hophal, Hiphil)\n    - Verb conjugations (Perfect, Imperfect, Imperative, Infinitive, Participle)\n    - Noun patterns, construct chains, pronominal suffixes\n    - Particles, prepositions, conjunctions\n    - Word order and emphasis\n    - Poetic structures if applicable (parallelism, chiasm)\n\n**If New Testament:**\n- Display Greek text with transliteration\n- Analyze ALL Greek grammatical features:\n    - Verb aspects (aorist, present, perfect, imperfect)\n    - Voice (active, middle, passive)\n    - Mood (indicative, subjunctive, optative, imperative, infinitive, participle)\n    - Case system (nominative, genitive, dative, accusative, vocative)\n    - Article usage and semantic significance\n    - Participles and their functions\n    - Prepositions and compound verbs\n\nInclude detailed morphological analysis, clause structures, and syntactic relationships.`,
                icon: '🔬'
            },
            'verse-by-verse': {
                name: 'Verse-by-Verse Grammar',
                prompt: `Provide verse-by-verse grammatical analysis of {passage}:\n\n**For each verse:**\n1.  **Text:** Display original language with transliteration\n2.  **Clause Structure:** Identify main and subordinate clauses\n3.  **Grammatical Features:** Key morphological and syntactic elements\n4.  **Structural Relationships:** How clauses connect\n5.  **Meaning Impact:** How grammar affects interpretation\n\nMake technical analysis accessible while maintaining precision.`,
                icon: '📋'
            },
            'semantic-range': {
                name: 'Semantic Range',
                prompt: `Analyze the semantic range and contextual meaning of key terms in {passage}:\n\n**For each major term:**\n1.  **Full Semantic Range:** Complete spectrum of meanings\n2.  **Usage Categories:** How the term functions in different contexts\n3.  **Scripture Survey:** Key passages using this term\n4.  **Contextual Determination:** Why this specific meaning applies here\n5.  **Theological Trajectories:** How meaning develops across biblical corpus\n\nShow how word meanings shift based on context while maintaining core concepts.`,
                icon: '🎯'
            }
        }
    },
    'devotional': {
        name: 'Devotional',
        modules: {
            'spiritual-analysis': {
                name: 'Spiritual Analysis',
                prompt: `Provide a deep spiritual analysis of {passage} with focus on:\n\n* Core theological truths revealed\n* Personal heart impact and conviction\n* Christ-centered interpretation\n* Redemptive-historical context\n\nInclude:\n* Key spiritual insights that lead to worship\n* Personal application points\n* How this passage transforms believers\n* Connection to themes of divine sovereignty, faith, perseverance, and covenant faithfulness\n\nAvoid generic observations—focus on transformative truth that leads to worship and obedience.`,
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

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // This now runs instantly and safely
    initializeApp();
    loadNotes();
    checkAPIHealth();
});

function initializeApp() {
    // CRITICAL: Load and process Bible data *first*
    try {
        processBibleData();
        // Now that data is loaded, enable UI
        enableSearchUI();
    } catch (error) {
        console.error("CRITICAL ERROR: Could not process embedded Bible data.", error);
        showError("App could not load Bible data. Please reload.", true);
        return; // Stop initialization
    }
    
    // --- Setup UI elements ---
    const resultsMain = document.getElementById('resultsMain');
    
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

    // Action Buttons
    document.getElementById('runModuleBtn').addEventListener('click', runModuleAnalysis);
    document.getElementById('displayScriptureBtn').addEventListener('click', displayScripture);
    
    // Enter key
    document.getElementById('passageInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') runModuleAnalysis(); // Default to module analysis
    });

    // Sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);

    // Notes Panel
    document.getElementById('notesToggle').addEventListener('click', toggleNotes);
    document.getElementById('collapseBtn').addEventListener('click', () => setNotesSize('collapsed'));
    document.getElementById('normalBtn').addEventListener('click', () => setNotesSize('normal'));
    document.getElementById('mediumBtn').addEventListener('click', () => setNotesSize('medium'));
    document.getElementById('wideBtn').addEventListener('click', () => setNotesSize('wide'));
    
    // Notes Functionality
    document.getElementById('noteNameInput').addEventListener('input', debounce(saveCurrentNote, 500));
    document.getElementById('notesEditor').addEventListener('input', () => {
        debounce(saveCurrentNote, 500)();
        updateWordCount();
    });
    document.getElementById('newNoteBtn').addEventListener('click', createNewNote);
    document.getElementById('deleteBtn').addEventListener('click', deleteCurrentNote);
    // TODO: Add listeners for My Notes, Export, Copy

    // Infinite Scroll for Bible Reader
    resultsMain.addEventListener('scroll', scrollHandler);
    
    // Set initial state
    updateModuleDisplay();
    createNewNote(); // Start with a fresh note
}

/**
 * Processes the embedded BIBLE_DATA and populates AppState
 */
function processBibleData() {
    AppState.bibleStructure = {
        books: [],
        bookMap: new Map()
    };

    let bookIndex = 0;
    const processTestament = (testament) => {
        testament.books.forEach(book => {
            const bookData = {
                ...book,
                index: bookIndex,
                testament: testament === BIBLE_DATA.testament.old ? 'OT' : 'NT'
            };
            AppState.bibleStructure.books.push(bookData);
            AppState.bibleStructure.bookMap.set(book.name.toLowerCase(), bookData);
            AppState.bibleStructure.bookMap.set(book.abbr.toLowerCase(), bookData);
            
            // Handle numbered books like "1 Samuel"
            const match = book.name.match(/^(\d)\s(.+)/);
            if (match) {
                // Add "1sam"
                AppState.bibleStructure.bookMap.set(`${match[1]}${match[2].toLowerCase()}`, bookData);
                // Add "1 sa"
                AppState.bibleStructure.bookMap.set(`${match[1]} ${match[2].substring(0, 2).toLowerCase()}`, bookData);
            }

            bookIndex++;
        });
    };

    processTestament(BIBLE_DATA.testament.old);
    processTestament(BIBLE_DATA.testament.new);
}

/**
 * Enables the search UI after data is loaded
 */
function enableSearchUI() {
    document.getElementById('passageInput').disabled = false;
    document.getElementById('runModuleBtn').disabled = false;
    document.getElementById('displayScriptureBtn').disabled = false;
    document.getElementById('versionSelect').disabled = false;
    
    // Update status message to the "Ready" state
    const statusMessage = document.getElementById('statusMessage');
    const statusTitle = document.getElementById('statusTitle');
    const statusText = document.getElementById('statusText');
    const statusIcon = document.getElementById('statusIcon');
    
    statusTitle.textContent = "Ready to Study God's Word";
    statusText.innerHTML = `
        Enter your scripture passage above, then simply click a module tab. 
        Analysis generates automatically—streamlined for deep theological study.
    `;
    statusIcon.textContent = "✨";
    statusMessage.style.display = 'block'; // Ensure it's visible
}

// ===== API HEALTH CHECK =====
async function checkAPIHealth() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        
        if (data.status !== 'ok') {
            console.warn('⚠️ Backend API is reporting an issue:', data.message);
        }
    } catch (error) {
        console.error('Cannot connect to backend:', error);
        // Show a non-critical error, as the app might still work
        // We'll show a full error if an analysis fails
    }
}


// ===== NAVIGATION & UI =====

function switchCategory(category) {
    AppState.currentCategory = category;
    
    // Update UI
    document.querySelectorAll('.primary-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    document.querySelectorAll('.module-group').forEach(group => {
        group.classList.toggle('active', group.dataset.category === category);
    });

    // Set first module as active
    const firstModule = ModuleDefinitions[category].modules;
    const firstModuleKey = Object.keys(firstModule)[0];
    switchModule(firstModuleKey);

    // Update header
    document.getElementById('sidebarHeader').textContent = ModuleDefinitions[category].name;
}

function switchModule(module) {
    AppState.currentModule = module;
    
    document.querySelectorAll('.secondary-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.module === module);
    });

    updateModuleDisplay();

    // Auto-run analysis if a passage is present
    const passage = document.getElementById('passageInput').value.trim();
    if (passage && AppState.currentReaderMode === false) {
        runModuleAnalysis();
    }
}

function getModuleInfo(category, module) {
    if (ModuleDefinitions[category] && ModuleDefinitions[category].modules[module]) {
        return ModuleDefinitions[category].modules[module];
    }
    // Fallback if module doesn't exist (e.g., old category)
    const firstCategory = Object.keys(ModuleDefinitions)[0];
    const firstModule = Object.keys(ModuleDefinitions[firstCategory].modules)[0];
    AppState.currentCategory = firstCategory;
    AppState.currentModule = firstModule;
    return ModuleDefinitions[firstCategory].modules[firstModule];
}

function updateModuleDisplay() {
    const moduleInfo = getModuleInfo(AppState.currentCategory, AppState.currentModule);
    // This element no longer exists, so we don't need to do anything
    // document.getElementById('currentModuleName').textContent = moduleInfo.name;
    // document.getElementById('currentModuleIcon').textContent = moduleInfo.icon;
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const arrow = document.getElementById('sidebarArrow');
    sidebar.classList.toggle('collapsed');
    arrow.textContent = sidebar.classList.contains('collapsed') ? '▶' : '◀';
}

function toggleNotes() {
    const notesPanel = document.getElementById('notesPanel');
    const arrow = document.getElementById('notesArrow');
    notesPanel.classList.toggle('collapsed');
    arrow.textContent = notesPanel.classList.contains('collapsed') ? '◀' : '▶';
}

function setNotesSize(size) {
    const notesPanel = document.getElementById('notesPanel');
    const sizes = ['collapsed', 'normal', 'medium', 'wide'];
    sizes.forEach(s => notesPanel.classList.remove(s));
    
    if (size !== 'normal') {
        notesPanel.classList.add(size);
    }
    if (size === 'collapsed') {
        toggleNotes();
    }

    // Update active button
    document.getElementById('collapseBtn').classList.toggle('active', size === 'collapsed');
    document.getElementById('normalBtn').classList.toggle('active', size === 'normal');
    document.getElementById('mediumBtn').classList.toggle('active', size === 'medium');
    document.getElementById('wideBtn').classList.toggle('active', size === 'wide');
}


// ===== ANALYSIS & SCRIPTURE DISPLAY =====

/**
 * Main entry point for "Run Module Analysis" button
 */
function runModuleAnalysis() {
    const passage = document.getElementById('passageInput').value.trim();
    if (!passage) {
        showError("Please enter a scripture passage or general question.");
        return;
    }
    
    // Check if it's a general question
    const ref = parsePassageReference(passage);
    if (!ref) {
        runGeneralQuestion(passage);
        return;
    }
    
    // It's a passage, so run the selected module
    AppState.currentPassage = passage;
    AppState.currentReaderMode = false;
    
    const moduleInfo = getModuleInfo(AppState.currentCategory, AppState.currentModule);
    const prompt = moduleInfo.prompt.replace(/{passage}/g, passage);
    
    const request = {
        prompt: prompt,
        passage: passage,
        moduleName: moduleInfo.name,
        icon: moduleInfo.icon
    };
    
    runAnalysis(request, 'module');
}

/**
 * Main entry point for "Display Scripture Text" button
 */
function displayScripture() {
    const passage = document.getElementById('passageInput').value.trim();
    if (!passage) {
        showError("Please enter a scripture passage.");
        return;
    }
    
    const ref = parsePassageReference(passage);
    if (!ref) {
        showError("Could not understand that scripture reference. Please try 'John 3:16' or 'Romans 8'.");
        return;
    }

    // Store this as the *new* base reference
    AppState.currentBibleReference = ref;
    AppState.currentPassage = passage;
    AppState.currentReaderMode = true;

    // Fetch this chapter
    fetchAndDisplayChapter(ref, false);
}

/**
 * Handles general questions (not scripture references)
 */
function runGeneralQuestion(question) {
    AppState.currentPassage = question;
    AppState.currentReaderMode = false;

    const prompt = `As a helpful Bible study assistant, please provide a clear and concise answer to the following question: "${question}"\n\nAnswer based on general biblical knowledge.`;
    
    const request = {
        prompt: prompt,
        passage: question,
        moduleName: "General Question",
        icon: '❓'
    };
    
    runAnalysis(request, 'module');
}

/**
 * Fetches and displays a specific chapter, used by Bible Reader
 * @param {object} ref - The reference object {book, chapter, verse}
 * @param {boolean} prepend - Whether to add to top (true) or bottom (false)
 * @param {boolean} isScrollLoad - Is this an auto-load from scrolling?
 */
async function fetchAndDisplayChapter(ref, prepend = false, isScrollLoad = false) {
    const version = document.getElementById('versionSelect').value;
    const fullChapterRef = `${ref.book} ${ref.chapter}`;

    let versionPrompt;
    switch(version) {
        case 'WLC':
            versionPrompt = 'using the Hebrew Westminster Leningrad Codex (WLC)';
            break;
        case 'SBLGNT':
            versionPrompt = 'using the SBL Greek New Testament (SBLGNT)';
            break;
        case 'RVR1909':
            versionPrompt = 'using the Reina-Valera 1909 (RVR1909) Spanish translation';
            break;
        case 'WEB':
            versionPrompt = 'using the World English Bible (WEB)';
            break;
        default:
            versionPrompt = 'using the King James Version (KJV)';
    }

    const prompt = `Provide the full, complete text for the *entire chapter* of ${fullChapterRef}, ${versionPrompt}.
Do not add any commentary, just the scripture text.
Start with a single header like "## ${fullChapterRef}" and then provide the verses.
Format verses with numbers in brackets, like [1] [2] [3].`;

    const request = {
        prompt: prompt,
        passage: fullChapterRef,
        moduleName: fullChapterRef,
        icon: '📖'
    };
    
    // If it's the *first* load (not a scroll), set loading state
    if (!isScrollLoad) {
        setLoadingState(true);
    }

    try {
        const analysis = await callApi(request.prompt);
        
        // This is a "silent" append/prepend, no full display refresh
        const content = document.getElementById('analysisContent');
        const formatted = formatAnalysis(analysis);

        // Detach observer while manipulating DOM
        if (AppState.chapterObserver) AppState.chapterObserver.disconnect();

        // Create a new "chunk" for this chapter
        const chunk = createChapterChunk(formatted, ref.book, ref.chapter);
        
        if (prepend) {
            const firstChild = content.firstChild;
            content.prepend(chunk);
            if (firstChild) {
                // Restore scroll position so it doesn't jump
                const chunkHeight = chunk.offsetHeight;
                resultsMain.scrollTop = chunkHeight;
            }
        } else {
            content.appendChild(chunk);
        }

        // Re-attach observer to all chunks
        setupChapterObserver();
        
        // If it's the *first* load, do a full display update
        if (!isScrollLoad) {
            displayAnalysis(null, 'scripture', ref);
        }

    } catch (error) {
        console.error("Error fetching chapter:", error);
        if (!isScrollLoad) {
            showError(error.message);
        }
    } finally {
        if (!isScrollLoad) {
            setLoadingState(false);
        }
        AppState.isFetchingChapter = false;
        // Hide spinners
        document.getElementById('scrollLoaderTop').classList.remove('active');
        document.getElementById('scrollLoaderBottom').classList.remove('active');
    }
}


/**
 * The core API call function
 * @param {string} prompt - The full prompt to send to the backend
 * @returns {string} The analysis text
 */
async function callApi(prompt) {
    const response = await fetch(`${API_URL}/analyze`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Analysis failed');
    }

    const data = await response.json();
    return data.analysis;
}

/**
 * Main function to run any analysis and update the display
 * @param {object} request - The request object
 * @param {string} analysisType - 'module' or 'scripture'
 */
async function runAnalysis(request, analysisType) {
    setLoadingState(true);

    // Disconnect observer if we're running a new module analysis
    if (analysisType === 'module' && AppState.chapterObserver) {
        AppState.chapterObserver.disconnect();
        AppState.chapterObserver = null;
    }

    try {
        const analysis = await callApi(request.prompt);
        displayAnalysis(analysis, analysisType, request);
    } catch (error) {
        console.error('Analysis Error:', error);
        showError(error.message);
    } finally {
        setLoadingState(false);
    }
}

// ===== DISPLAY & FORMATTING =====

/**
 * Sets the UI to a loading or ready state
 * @param {boolean} isLoading - True to show loading, false to show ready
 */
function setLoadingState(isLoading) {
    const runModuleBtn = document.getElementById('runModuleBtn');
    const displayScriptureBtn = document.getElementById('displayScriptureBtn');
    const passageInput = document.getElementById('passageInput');
    const versionSelect = document.getElementById('versionSelect');
    
    // Main action buttons
    const buttons = [runModuleBtn, displayScriptureBtn];
    
    if (isLoading) {
        buttons.forEach(btn => btn && (btn.disabled = true));
        passageInput.disabled = true;
        versionSelect.disabled = true;

        // Show loading state
        document.getElementById('analysisDisplay').style.display = 'none';
        const status = document.getElementById('statusMessage');
        status.style.display = 'block';
        status.innerHTML = `
            <div class="status-icon">
                <div class="loading-dots">
                    <span>.</span><span>.</span><span>.</span>
                </div>
            </div>
            <div class="status-title">Analyzing...</div>
            <p class="status-text" id="statusText">
                Fetching insights for ${AppState.currentPassage}.
            </p>
        `;
    } else {
        // Restore buttons to ready state
        buttons.forEach(btn => btn && (btn.disabled = false));
        passageInput.disabled = false;
        versionSelect.disabled = false;
    }
}

/**
 * Displays the final analysis or scripture text
 * @param {string} analysis - The raw analysis text (can be null for scripture)
 * @param {string} analysisType - 'module' or 'scripture'
 * @param {object} data - The request object or reference object
 */
function displayAnalysis(analysis, analysisType, data) {
    const statusMessage = document.getElementById('statusMessage');
    const analysisDisplay = document.getElementById('analysisDisplay');
    const content = document.getElementById('analysisContent');
    const footer = document.getElementById('analysisFooter');
    
    // Header elements
    const moduleHeader = document.getElementById('analysisTitleDisplay');
    const readerHeader = document.getElementById('readerControlsDisplay');
    
    // Hide status, show display
    statusMessage.style.display = 'none';
    analysisDisplay.style.display = 'block';
    
    if (analysisType === 'scripture') {
        // --- BIBLE READER MODE ---
        AppState.currentReaderMode = true;
        moduleHeader.style.display = 'none';
        readerHeader.style.display = 'flex';
        
        const ref = AppState.currentBibleReference;
        document.getElementById('readerTitleDisplay').textContent = `${ref.book} ${ref.chapter}`;
        
        // If this is the *first* load, the content was already added
        // by fetchAndDisplayChapter. We just need to scroll to it.
        if (analysis === null) {
            // Find the verse anchor
            const verseEl = document.getElementById(`v${ref.book.replace(/\s/g, '_')}-${ref.chapter}-${ref.verse}`);
            if (verseEl) {
                // Scroll to the verse
                verseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Highlight it briefly
                verseEl.style.transition = 'background-color 0.5s';
                verseEl.style.backgroundColor = 'rgba(74, 93, 78, 0.2)';
                setTimeout(() => {
                    verseEl.style.backgroundColor = 'transparent';
                }, 2000);
            }
        }
        
        // Clear and hide footer
        footer.innerHTML = '';
        footer.style.display = 'none';

        // Disconnect old observer and set up the new one
        if (AppState.chapterObserver) AppState.chapterObserver.disconnect();
        setupChapterObserver();
        
    } else {
        // --- MODULE ANALYSIS MODE ---
        AppState.currentReaderMode = false;
        moduleHeader.style.display = 'flex';
        readerHeader.style.display = 'none';

        // Disconnect observer if it exists
        if (AppState.chapterObserver) {
            AppState.chapterObserver.disconnect();
            AppState.chapterObserver = null;
        }

        // Set header content
        document.getElementById('analysisIconDisplay').textContent = data.icon || '📖';
        document.getElementById('analysisPassageDisplay').textContent = data.passage;
        document.getElementById('analysisModuleDisplay').textContent = data.moduleName;
        
        // Format and display content
        const formatted = formatAnalysis(analysis);
        content.innerHTML = formatted;
        
        // Show footer (for versions, etc.)
        footer.style.display = 'block';
        footer.innerHTML = `
            <span style="color: var(--text-medium); font-size: 12px;">
                ⚡ Analysis complete.
            </span>
        `;
        
        // Scroll to top
        document.getElementById('resultsMain').scrollTop = 0;
    }
}

/**
 * Creates a standard "chunk" of HTML for a chapter
 * @param {string} htmlContent - The formatted HTML of the chapter
 * @param {string} book - The book name (e.g., "John")
 * @param {string} chapter - The chapter number (e.g., 1)
 * @returns {HTMLElement} A div element
 */
function createChapterChunk(htmlContent, book, chapter) {
    const chunk = document.createElement('div');
    chunk.className = 'chapter-chunk';
    chunk.dataset.book = book;
    chunk.dataset.chapter = chapter;
    chunk.innerHTML = htmlContent;
    return chunk;
}

/**
 * Sets up the IntersectionObserver to watch chapters
 */
function setupChapterObserver() {
    const readerTitle = document.getElementById('readerTitleDisplay');
    const resultsMain = document.getElementById('resultsMain');
    
    const observerOptions = {
        root: resultsMain,
        rootMargin: '0px 0px -85% 0px', // A "bar" at the top 15% of the pane
        threshold: 0.01 // Trigger as soon as it enters
    };

    AppState.chapterObserver = new IntersectionObserver((entries) => {
        // Find the top-most visible entry
        const topEntry = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top)[0];
        
        if (topEntry) {
            const book = topEntry.target.dataset.book;
            const chapter = topEntry.target.dataset.chapter;
            readerTitle.textContent = `${book} ${chapter}`;
            
            // Update AppState's idea of the "current" chapter
            AppState.currentBibleReference.book = book;
            AppState.currentBibleReference.chapter = parseInt(chapter, 10);
        }
    }, observerOptions);

    // Observe all existing chunks
    document.querySelectorAll('.chapter-chunk').forEach(chunk => {
        AppState.chapterObserver.observe(chunk);
    });
}


/**
 * Shows an error message in the main display
 * @param {string} message - The error message to show
 * @param {boolean} isCritical - If true, it's an app-breaking error
 */
function showError(message, isCritical = false) {
    const statusMessage = document.getElementById('statusMessage');
    const analysisDisplay = document.getElementById('analysisDisplay');
    
    // Hide analysis, show status
    analysisDisplay.style.display = 'none';
    statusMessage.style.display = 'block';
    
    statusMessage.innerHTML = `
        <div class="status-icon">⚠️</div>
        <div class="status-title" style="color: #d32f2f;">Error</div>
        <p class="status-text" id="statusText">
            ${message}
        </p>
        ${isCritical ? 
            '<p class="status-text" style="margin-top:10px;">Please reload the page.</p>' : 
            '<button class="action-btn" id="errorRetryBtn" style="margin-top: 20px;">Try Again</button>'}
    `;

    if (!isCritical) {
        // Re-enable UI
        setLoadingState(false);
        // Hook up the retry button
        document.getElementById('errorRetryBtn').addEventListener('click', () => {
            // Re-run the last appropriate action
            if (AppState.currentReaderMode) {
                displayScripture();
            } else {
                runModuleAnalysis();
            }
        });
    }
}

/**
 * Simple markdown-to-HTML formatter
 * @param {string} text - The raw text from the API
 * @returns {string} Formatted HTML
 */
function formatAnalysis(text) {
    if (!text) return '';

    return text
        // Handle verse numbers [1] [2]...
        .replace(/\[(\d+)\]/g, (match, g1) => {
            const ref = AppState.currentBibleReference;
            // Create a unique, scrollable ID for each verse
            const verseId = `v${ref.book ? ref.book.replace(/\s/g, '_') : 'ref'}-${ref.chapter || 1}-${g1}`;
            return `<strong class="verse-number" id="${verseId}">${match}</strong>`;
        })
        // Headers (## Header, ### Header)
        .replace(/^##\s(.+)$/gm, '<h2>$1</h2>')
        .replace(/^###\s(.+)$/gm, '<h3>$1</h3>')
        .replace(/^#\s(.+)$/gm, '<h1>$1</h1>')
        // Bold (**text**)
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic (*text*)
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Numbered lists (1. item, 2. item)
        .replace(/(\n\s*(\d+\.)\s.+)+/g, (match) => {
            const items = match.trim().split('\n').map(item => `<li>${item.replace(/^\s*\d+\.\s/, '')}</li>`).join('');
            return `<ol>${items}</ol>`;
        })
        // Bulleted lists (- item, * item)
        .replace(/(\n\s*([*-])\s.+)+/g, (match) => {
            const items = match.trim().split('\n').map(item => `<li>${item.replace(/^\s*[*-]\s/, '')}</li>`).join('');
            return `<ul>${items}</ul>`;
        })
        // Blockquotes (> text)
        .replace(/^>\s(.+)$/gm, '<blockquote>$1</blockquote>')
        // Paragraphs (split by newlines)
        .replace(/\n\n/g, '</p><p>')
        // Fix paragraphs that might not be wrapped
        .replace(/^(?!<h|<ul|<ol|<li|<blockquote|<p)(.+)/gm, '<p>$1</p>')
        // Clean up empty paragraphs
        .replace(/<p><\/p>/g, '')
        // Clean up paragraphs around lists
        .replace(/<p>(<(ul|ol)>)/g, '$1')
        .replace(/(<\/(ul|ol)><\/p>)/g, '$1');
}

// ===== BIBLE READER: INFINITE SCROLL =====

/**
 * Handles the scroll event on the main results pane
 */
function scrollHandler() {
    // Only run if we are in Bible Reader mode
    if (!AppState.currentReaderMode || AppState.isFetchingChapter) {
        return;
    }

    const resultsMain = document.getElementById('resultsMain');
    const { scrollTop, scrollHeight, clientHeight } = resultsMain;
    
    // Check for scroll to bottom
    // (scrollHeight - scrollTop) is (approx) clientHeight
    if (scrollHeight - scrollTop < clientHeight + 200) {
        // Near bottom, load next chapter
        loadAdjacentChapter(1); // 1 for next
    }
    
    // Check for scroll to top
    if (scrollTop < 200) {
        // Near top, load previous chapter
        loadAdjacentChapter(-1); // -1 for previous
    }
}

/**
 * Loads the next (direction=1) or previous (direction=-1) chapter
 */
function loadAdjacentChapter(direction) {
    if (AppState.isFetchingChapter) return; // Already fetching

    const ref = AppState.currentBibleReference;
    const currentBook = AppState.bibleStructure.bookMap.get(ref.book.toLowerCase());
    if (!currentBook) return; // Shouldn't happen

    let nextRef = {};
    
    if (direction === 1) { // NEXT chapter
        if (ref.chapter < currentBook.chapters) {
            // Next chapter in the same book
            nextRef = { book: ref.book, chapter: ref.chapter + 1, verse: 1 };
        } else {
            // Next book
            const nextBook = AppState.bibleStructure.books[currentBook.index + 1];
            if (nextBook) {
                nextRef = { book: nextBook.name, chapter: 1, verse: 1 };
            } else {
                return; // End of Bible
            }
        }
        document.getElementById('scrollLoaderBottom').classList.add('active');
        
    } else { // PREVIOUS chapter
        if (ref.chapter > 1) {
            // Previous chapter in the same book
            nextRef = { book: ref.book, chapter: ref.chapter - 1, verse: 1 };
        } else {
            // Previous book
            const prevBook = AppState.bibleStructure.books[currentBook.index - 1];
            if (prevBook) {
                nextRef = { book: prevBook.name, chapter: prevBook.chapters, verse: 1 };
            } else {
                return; // Start of Bible
            }
        }
        document.getElementById('scrollLoaderTop').classList.add('active');
    }

    // Check if chapter is already loaded
    const content = document.getElementById('analysisContent');
    const existingChunk = Array.from(content.children).find(chunk => 
        chunk.dataset.book === nextRef.book && chunk.dataset.chapter == nextRef.chapter
    );

    if (existingChunk) {
        // Already loaded, don't fetch
        document.getElementById('scrollLoaderTop').classList.remove('active');
        document.getElementById('scrollLoaderBottom').classList.remove('active');
        return;
    }
    
    // Not loaded, so fetch it
    AppState.isFetchingChapter = true;
    AppState.currentBibleReference = nextRef; // Update state
    fetchAndDisplayChapter(nextRef, (direction === -1), true);
}

// ===== SCRIPTURE PASSAGE PARSING =====

/**
 * Parses a string like "John 3:16" into a reference object
 * @param {string} passage - The input string
 * @returns {object|null} A reference object or null
 */
function parsePassageReference(passage) {
    if (!passage) return null;
    
    // Normalize: remove extra spaces, lowercase for matching
    const normalized = passage.trim().toLowerCase().replace(/\s+/g, ' ');

    // Regex to find book, chapter, and optional verse
    // Handles "1 John 3:16", "John 3:16", "John 3"
    const regex = /^(\d?\s?[a-z]+)\.?\s*(\d+)(?::(\d+))?.*$/;
    const match = normalized.match(regex);
    
    if (!match) return null;
    
    const bookInput = match[1];
    const chapter = parseInt(match[2], 10);
    const verse = match[3] ? parseInt(match[3], 10) : 1;
    
    // Find the canonical book name
    const bookData = AppState.bibleStructure.bookMap.get(bookInput);
    
    if (!bookData) {
        // Try partial match, e.g., "rom" for "Romans"
        const partialMatch = Array.from(AppState.bibleStructure.bookMap.keys())
            .find(key => key.startsWith(bookInput));
        if (partialMatch) {
            const bookDataPartial = AppState.bibleStructure.bookMap.get(partialMatch);
            if (bookDataPartial && chapter <= bookDataPartial.chapters) {
                return { book: bookDataPartial.name, chapter, verse };
            }
        }
        return null; // No book found
    }

    // Check if chapter is valid
    if (chapter > bookData.chapters) {
        return null; // Invalid chapter
    }
    
    return { book: bookData.name, chapter, verse };
}


// ===== NOTES PANEL (STUBBED - Needs Firestore) =====
// Using localStorage for now. DO NOT USE IN PRODUCTION.
// TODO: Refactor all 'notes' functions to use Firestore.

function loadNotes() {
    const saved = localStorage.getItem('scribeNotes');
    if (saved) {
        AppState.notes = JSON.parse(saved);
        updateNoteCount();
    }
}

function saveNotes() {
    localStorage.setItem('scribeNotes', JSON.stringify(AppState.notes));
    updateNoteCount();
}

function createNewNote() {
    const newId = `note_${new Date().getTime()}`;
    const newNote = {
        id: newId,
        title: "Untitled Note",
        content: "",
        created: new Date().toISOString(),
        modified: new Date().toISOString()
    };
    AppState.notes[newId] = newNote;
    AppState.currentNoteId = newId;
    
    loadNoteIntoEditor(newId);
    saveNotes();
}

function loadNoteIntoEditor(noteId) {
    const note = AppState.notes[noteId];
    if (!note) return;
    
    AppState.currentNoteId = noteId;
    document.getElementById('noteNameInput').value = note.title;
    document.getElementById('notesEditor').value = note.content;
    updateNoteMeta(note);
}

function saveCurrentNote() {
    if (!AppState.currentNoteId) return;
    
    const note = AppState.notes[AppState.currentNoteId];
    if (!note) return;
    
    note.title = document.getElementById('noteNameInput').value;
    note.content = document.getElementById('notesEditor').value;
    note.modified = new Date().toISOString();
    
    updateNoteMeta(note);
    setSaveStatus('Saving...');
    
    // Simulate save delay
    setTimeout(() => {
        saveNotes();
        setSaveStatus('All changes saved');
    }, 500);
}

function deleteCurrentNote() {
    if (!AppState.currentNoteId) return;
    
    // Simple confirm, replace with modal later
    if (confirm("Are you sure you want to delete this note?")) {
        delete AppState.notes[AppState.currentNoteId];
        saveNotes();
        
        // Load the first available note or create a new one
        const remainingIds = Object.keys(AppState.notes);
        if (remainingIds.length > 0) {
            loadNoteIntoEditor(remainingIds[0]);
        } else {
            createNewNote();
        }
    }
}

function updateWordCount() {
    const text = document.getElementById('notesEditor').value;
    const count = text.trim().split(/\s+/).filter(Boolean).length;
    document.getElementById('wordCount').textContent = `${count} words`;
}

function updateNoteMeta(note) {
    const modified = new Date(note.modified).toLocaleString();
    const text = document.getElementById('notesEditor').value;
    const count = text.trim().split(/\s+/).filter(Boolean).length;
    document.getElementById('noteMeta').textContent = `Last saved: ${modified} • ${count} words`;
}

function updateNoteCount() {
    const count = Object.keys(AppState.notes).length;
    document.getElementById('noteCount').textContent = count;
}

function setSaveStatus(status) {
    const statusText = document.getElementById('saveStatus');
    const dot = statusText.previousElementSibling;
    statusText.textContent = status;
    dot.style.background = status === 'Saving...' ? 'var(--moss)' : 'var(--pine)';
}

// ===== UTILITIES =====

/**
 * Debounce function to limit how often a function is called
 */
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context =
