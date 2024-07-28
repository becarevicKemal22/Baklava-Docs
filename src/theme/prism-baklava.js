Prism.languages.baklava = Prism.languages.extend("clike", {
    comment: {
        pattern: /\/\/.*/,
        greedy: true,
    },
    string: {
        pattern: /"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/,
        greedy: true,
    },
    keyword:
        /\b(?:konst|var|funkcija|vrati|za|dok|ako|inače|istina|neistina|null|ispiši)\b/,
    boolean: /\b(?:istina|neistina)\b/,
    null: /\bnull\b/,
    number: /\b\d+(?:\.\d+)?\b/,
    operator: /[-+*/%=<>!]=?|&&|\|\||\+\+|--/,
    punctuation: /[{}[\];(),.:]/,
    function: {
        pattern: /\b[A-Za-z_]\w*(?=\s*\()/,
        greedy: true,
    },
    parameter: {
        pattern: /\b[A-Za-z_]\w*(?=\s*,|\s*\))/,
        greedy: true,
    },
});
