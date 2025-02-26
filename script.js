require.config({ paths: { 'vs': 'https://andorraeditor.pages.dev/library/andorra/min/vs' } });
require(['vs/editor/editor.main'], function () {
    andorra.editor.defineTheme('WebHTML', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'comment', foreground: '58a74a' },
            { token: 'comment.doc', foreground: '58a74a' },
            { token: 'tag', foreground: '579dd7' },
            { token: 'variable', foreground: '2e95d3' },
            { token: 'variable.predefined', foreground: '2e95d3' },
            { token: 'variable.parameter', foreground: '00a67d' },
            { token: 'constant', foreground: '00a67d' },
            { token: 'number', foreground: 'df3079' },
            { token: 'number.hex', foreground: 'df3079' },
            { token: 'regexp', foreground: 'df3079' },
            { token: 'annotation', foreground: '0d0d0d' },
            { token: 'type', foreground: 'f22c3d' },
            { token: 'delimiter', foreground: 'ffffff' },
            { token: 'delimiter.html', foreground: 'ffffff' },
            { token: 'delimiter.xml', foreground: '868686' },
            { token: 'tag.id.pug', foreground: 'df3079' },
            { token: 'tag.class.pug', foreground: 'df3079' },
            { token: 'meta.scss', foreground: 'e9950c' },
            { token: 'meta.tag', foreground: '000000' },
            { token: 'metatag', foreground: 'f22c3d' },
            { token: 'metatag.content.html', foreground: '2e95d3' },
            { token: 'metatag.html', foreground: '868686' },
            { token: 'metatag.xml', foreground: '868686' },
            { token: 'metatag.php', foreground: '868686' },
            { token: 'key', foreground: '2e95d3' },
            { token: 'string.key.json', foreground: '2e95d3' },
            { token: 'string.value.json', foreground: 'df3079' },
            { token: 'attribute.name', foreground: 'df3079' },
            { token: 'attribute.value', foreground: '00a67d' },
            { token: 'attribute.value.number.css', foreground: 'df3079' },
            { token: 'attribute.value.unit.css', foreground: 'df3079' },
            { token: 'attribute.value.hex.css', foreground: 'df3079' },
            { token: 'string', foreground: '00a67d' },
            { token: 'string.sql', foreground: 'f22c3d' },
            { token: 'keyword', foreground: '2e95d3' },
            { token: 'keyword.flow', foreground: 'df3079' },
            { token: 'keyword.json', foreground: 'df3079' },
            { token: 'keyword.flow.scss', foreground: '2e95d3' },
            { token: 'operator.scss', foreground: '868686' },
            { token: 'operator.sql', foreground: 'df3079' },
            { token: 'operator.swift', foreground: '868686' },
            { token: 'predefined.sql', foreground: '2e95d3' },
        ],
        colors: {
            'editorCursor.foreground': '#9e9e9e',
            'editor.background': '#0d0d0d',
            'editor.foreground': '#ffffff',
            'editorBracketHighlight.foreground1': '#ffffff',
            'editorBracketHighlight.foreground2': '#ffffff',
            'editorBracketHighlight.foreground3': '#ffffff',
            'editorBracketHighlight.foreground4': '#ffffff',
            'editorBracketHighlight.foreground5': '#ffffff',
            'editorBracketHighlight.foreground6': '#ffffff',
            'editor.inactiveSelection': '#2f2f2f',
            'editor.indentGuide1': '#2f2f2f',
            'editor.activeIndentGuide1': '#2d2d2d',
            'editor.selectionHighlight': '#93c9ff',
            'editor.lineHighlightBackground': '#1f1f1f',
            'editorLineNumber.foreground': '#5d5d5d',
            'editor.selectionBackground': '#303030',
            'editorActiveLineNumber.foreground': '#c1c1c1',
        }
    });

    var editor = andorra.editor.create(document.getElementById('editor'), {
        value: `<!-- Snippet (c) 2025 Aurorasoft. All Rights Reserved. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://webhtml.pages.dev/icon.png" type="image/x-icon">
    <title>My Webpage</title>
    <style>
        body {
            font-family: sans-serif;
        }
    </style>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my webpage text.</p>
</body>
</html>`,
        language: 'html',
        theme: 'WebHTML',
        automaticLayout: true,
        fontSize: 16,
        fontFamily: `'Laurentia Code', 'Sevolt Emoji Color', monospace`,
        scrollBeyondLastLine: true,
        minimap: { enabled: true },
        lineNumbers: 'on',
        wordWrap: 'off',
        suggestOnTriggerCharacters: true,
        quickSuggestions: { other: true, comments: true, strings: true },
        parameterHints: { enabled: true },
        acceptSuggestionOnEnter: 'on',
        tabCompletion: 'on',
        cursorSmoothCaretAnimation: 'on',
        snippetSuggestions: 'bottom',
        autoClosingComments: 'always',
        matchBrackets: 'always',
        multiCursorModifier: 'alt',
        multiCursorPaste: 'full',
        showFoldingControls: 'mouseover',
        suggestSelection: 'first',
        unusualLineTerminators: 'prompt',
        cursorStyle: 'line',
        autoSurround: 'brackets',
        colorDecoratorActivatedOn: 'clickAndHover',
        cursorSurroundingLinesStyle: 'default',
        experimentalWhitespaceRendering: 'font',
        foldingStrategy: 'indentation',
        multiCursorLimit: 1000,
        occurrencesHighlight: 'singleFile',
        peekWidgetDefaultFocus: 'editor',
        renderLineHighlight: 'gutter',
        renderWhitespace: 'selection',
        wordBreak: 'normal',
        wrappingStrategy: 'advanced',
    });

    andorra.languages.registerCompletionItemProvider('html', {
        provideCompletionItems: function (model, position) {
            var suggestions = [
                {
                    label: 'a',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<a href="$1">$2</a>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Anchor tag'
                },
                {
                    label: 'area',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<area shape="$1" coords="$2" href="$3" alt="$4" title="$5">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Area element for image maps'
                },
                {
                    label: 'article',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<article>$1</article>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Article content'
                },
                {
                    label: 'aside',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<aside>$1</aside>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Side content'
                },
                {
                    label: 'audio',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<audio controls><source src="$1" type="audio/mpeg">Your browser does not support the audio element.</audio>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Audio element'
                },
                {
                    label: 'b',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<b>$1</b>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Bold text'
                },
                {
                    label: 'base',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<base href="$1">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Specifies a base URL for relative URLs'
                },
                {
                    label: 'bdi',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<bdi>$1</bdi>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Bi-directional isolation'
                },
                {
                    label: 'bdo',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<bdo dir="$1">$2</bdo>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Bi-directional override'
                },
                {
                    label: 'blockquote',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<blockquote>$1</blockquote>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Block quotation'
                },
                {
                    label: 'body',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<body>$1</body>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Body of the document'
                },
                {
                    label: 'br',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<br>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Line break'
                },
                {
                    label: 'button',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<button>$1</button>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Button element'
                },
                {
                    label: 'canvas',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<canvas id="$1" width="$2" height="$3">$4</canvas>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Canvas element for drawing graphics'
                },
                {
                    label: 'caption',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<caption>$1</caption>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table caption'
                },
                {
                    label: 'cite',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<cite>$1</cite>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Citation'
                },
                {
                    label: 'code',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<code>$1</code>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inline code'
                },
                {
                    label: 'col',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<col span="$1" style="$2">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Column properties for a table'
                },
                {
                    label: 'colgroup',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<colgroup>$1</colgroup>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Group of one or more columns in a table'
                },
                {
                    label: 'data',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<data value="$1">$2</data>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Links a content with a value'
                },
                {
                    label: 'datalist',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<datalist id="$1">$2</datalist>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'List of options for input elements'
                },
                {
                    label: 'dd',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dd>$1</dd>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Description of a term in a description list'
                },
                {
                    label: 'default',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<!-- Snippet (c) 2025 Aurorasoft. All Rights Reserved. -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>$1</title>\n    <link rel="shortcut icon" href="$2" type="image/x-icon">\n    <style>\n        $3\n    </style>\n</head>\n<body>\n    $4\n</body>\n</html>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'WebHTML default snippet'
                },
                {
                    label: 'del',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<del>$1</del>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Deleted text'
                },
                {
                    label: 'details',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<details>$1</details>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Details disclosure widget'
                },
                {
                    label: 'dfn',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dfn>$1</dfn>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Definition'
                },
                {
                    label: 'dialog',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dialog>$1</dialog>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Dialog box'
                },
                {
                    label: 'div',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<div>$1</div>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Generic container'
                },
                {
                    label: 'dl',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dl>$1</dl>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Description list'
                },
                {
                    label: 'dt',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dt>$1</dt>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Term in a description list'
                },
                {
                    label: 'em',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<em>$1</em>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Emphasized text'
                },
                {
                    label: 'embed',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<embed src="$1" type="$2" width="$3" height="$4">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Embedded content'
                },
                {
                    label: 'fieldset',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<fieldset>$1</fieldset>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Group related form controls'
                },
                {
                    label: 'figcaption',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<figcaption>$1</figcaption>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Figure caption'
                },
                {
                    label: 'figure',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<figure>$1</figure>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Figure element'
                },
                {
                    label: 'footer',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<footer>$1</footer>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Footer content'
                },
                {
                    label: 'form',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<form action="$1" method="$2">$3</form>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Form element'
                },
                {
                    label: 'h1',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h1>$1</h1>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 1'
                },
                {
                    label: 'h2',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h2>$1</h2>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 2'
                },
                {
                    label: 'h3',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h3>$1</h3>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 3'
                },
                {
                    label: 'h4',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h4>$1</h4>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 4'
                },
                {
                    label: 'h5',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h5>$1</h5>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 5'
                },
                {
                    label: 'h6',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h6>$1</h6>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 6'
                },
                {
                    label: 'header',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<header>$1</header>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header section'
                },
                {
                    label: 'hr',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<hr>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Horizontal rule'
                },
                {
                    label: 'html',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<html lang="en">$1</html>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML root element'
                },
                {
                    label: 'i',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<i>$1</i>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Italic text'
                },
                {
                    label: 'iframe',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<iframe src="$1" width="$2" height="$3"></iframe>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inline frame'
                },
                {
                    label: 'img',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<img src="$1" alt="$2">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Image tag'
                },
                {
                    label: 'input',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<input type="$1" name="$2" placeholder="$3">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Input element'
                },
                {
                    label: 'ins',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<ins>$1</ins>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inserted text'
                },
                {
                    label: 'kbd',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<kbd>$1</kbd>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Keyboard input'
                },
                {
                    label: 'label',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<label for="$1">$2</label>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Label for form controls'
                },
                {
                    label: 'legend',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<legend>$1</legend>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Form legend'
                },
                {
                    label: 'li',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<li>$1</li>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'List item'
                },
                {
                    label: 'link',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<link rel="stylesheet" href="$1">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Link to external resources (CSS, etc.)'
                },
                {
                    label: 'link:icon',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<link rel="shortcut icon" href="$1" type="image/x-icon">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Link to external resources (CSS, etc.)'
                },
                {
                    label: 'main',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<main>$1</main>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Main content section'
                },
                {
                    label: 'map',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<map name="$1">$2</map>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Image map'
                },
                {
                    label: 'mark',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<mark>$1</mark>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Highlighted text'
                },
                {
                    label: 'meta',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<meta name="$1" content="$2">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Metadata about the document'
                },
                {
                    label: 'meter',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<meter value="$1" min="$2" max="$3" low="$4" high="$5" optimum="$6">$7</meter>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Gauge control'
                },
                {
                    label: 'nav',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<nav>$1</nav>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Navigation links'
                },
                {
                    label: 'noscript',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<noscript>$1</noscript>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Content for browsers with JavaScript disabled'
                },
                {
                    label: 'object',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<object data="$1" type="$2" width="$3" height="$4">$5</object>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Embedded object'
                },
                {
                    label: 'ol',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<ol>$1</ol>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Ordered list'
                },
                {
                    label: 'optgroup',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<optgroup label="$1">$2</optgroup>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Group of options within a select dropdown'
                },
                {
                    label: 'option',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<option value="$1">$2</option>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Option element inside a select dropdown'
                },
                {
                    label: 'output',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<output for="$1" name="$2">$3</output>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Result of a calculation or user action'
                },
                {
                    label: 'p',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<p>$1</p>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Paragraph'
                },
                {
                    label: 'picture',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<picture><source srcset="$1" type="image/webp"><img src="$2" alt="$3"></picture>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Responsive images'
                },
                {
                    label: 'pre',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<pre>$1</pre>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Preformatted text'
                },
                {
                    label: 'progress',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<progress value="$1" max="$2">$3</progress>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Progress bar'
                },
                {
                    label: 'q',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<q>$1</q>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inline quotation'
                },
                {
                    label: 'rp',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<rp>$1</rp>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Ruby parenthesis for ruby annotations'
                },
                {
                    label: 'rt',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<rt>$1</rt>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Ruby text for ruby annotations'
                },
                {
                    label: 'ruby',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<ruby>$1<rt>$2</rt></ruby>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Ruby annotation'
                },
                {
                    label: 's',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<s>$1</s>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Strikethrough text'
                },
                {
                    label: 'script',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<script>$1</script>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Script tags'
                },
                {
                    label: 'script:src',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<script src="$1"></script>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Script tags'
                },
                {
                    label: 'section',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<section>$1</section>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Section of content'
                },
                {
                    label: 'select',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<select name="$1" id="$2">$3</select>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Select dropdown menu'
                },
                {
                    label: 'small',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<small>$1</small>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Smaller text'
                },
                {
                    label: 'source',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<source src="$1" type="$2">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Source for media elements'
                },
                {
                    label: 'span',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<span>$1</span>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inline container'
                },
                {
                    label: 'strong',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<strong>$1</strong>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Strong emphasis'
                },
                {
                    label: 'style',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<style>$1</style>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Internal CSS style'
                },
                {
                    label: 'sub',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<sub>$1</sub>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Subscript text'
                },
                {
                    label: 'summary',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<summary>$1</summary>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Summary of details'
                },
                {
                    label: 'sup',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<sup>$1</sup>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Superscript text'
                },
                {
                    label: 'table',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<table>$1</table>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table element'
                },
                {
                    label: 'tbody',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<tbody>$1</tbody>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table body'
                },
                {
                    label: 'td',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<td>$1</td>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table data cell'
                },
                {
                    label: 'template',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<template>$1</template>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Template content'
                },
                {
                    label: 'textarea',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<textarea rows="$1" cols="$2">$3</textarea>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Multiline input field'
                },
                {
                    label: 'tfoot',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<tfoot>$1</tfoot>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table footer'
                },
                {
                    label: 'th',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<th>$1</th>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table header cell'
                },
                {
                    label: 'thead',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<thead>$1</thead>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table header section'
                },
                {
                    label: 'time',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<time datetime="$1">$2</time>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Time element'
                },
                {
                    label: 'title',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<title>$1</title>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Title of the document'
                },
                {
                    label: 'tr',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<tr>$1</tr>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table row'
                },
                {
                    label: 'track',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<track src="$1" kind="subtitles" srclang="$2" label="$3">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Text track for media elements'
                },
                {
                    label: 'u',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<u>$1</u>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Underlined text'
                },
                {
                    label: 'ul',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<ul>$1</ul>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Unordered list'
                },
                {
                    label: 'var',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<var>$1</var>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Variable name'
                },
                {
                    label: 'video',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<video controls><source src="$1" type="video/mp4">Your browser does not support the video element.</video>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Video element'
                },
                {
                    label: 'wbr',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<wbr>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Word break opportunity'
                }                
            ];
            return { suggestions: suggestions };
        }
    });

    editor.onDidChangeModelContent(() => {
        const html = editor.getValue();
        preview.srcdoc = html;
    });

    updatePreview();

    const font = new FontFace('Consolium', 'url(https://webhtml.pages.dev/consoli.ttf)');

    font.load().then(() => {
        document.fonts.add(font);
        andorra.editor.remeasureFonts();
    }).catch((error) => {
        console.error('Error loading custom font:', error);
    });

    function openFile() {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = 'text/html';
        input.onchange = function(event) {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function() {
                editor.setValue(reader.result);
                document.title = file.name + ' - Aurorasoft WebHTML';
                updatePreview();
            };
            reader.readAsText(file);
        };
        input.click();
    }

    function saveFile() {
        var content = editor.getValue();
        var blob = new Blob([content], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        var currentDate = new Date().toISOString().slice(0, 19).replace(/[-T:/]/g, '');
        var fileName = 'WebHTML_' + currentDate + '.html';
        a.download = fileName;
        document.title = fileName + ' - Aurorasoft WebHTML';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        isModified = false;
    }

    function saveDump() {
        var content = editor.getValue();
        var blob = new Blob([content], { type: 'text/' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        var currentDate = new Date().toISOString().slice(0, 19).replace(/[-T:/]/g, '');
        var fileName = 'WebHTML_' + currentDate + '.dt';
        a.download = fileName;
        document.title = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        isModified = false;
    }

    document.getElementById('openButton').addEventListener('click', openFile);
    document.getElementById('saveButton').addEventListener('click', saveFile);
    document.getElementById('saveDump').addEventListener('click', saveDump);

    var isModified = false;

    editor.onDidChangeModelContent(function() {
        isModified = true;
        var fileName = document.title;
        if (!fileName.endsWith('*')) {
            fileName += "*";
        }
        document.title = fileName;
        updatePreview();
    });

    function updatePreview() {
        var preview = document.getElementById('preview');
        preview.srcdoc = editor.getValue();
    }

    window.addEventListener('beforeunload', function(e) {
        if (isModified) {
            var confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
            e.returnValue = confirmationMessage;
            return confirmationMessage;
        }
    });

    document.getElementById('lineWrapSelect').addEventListener('change', function() {
        var value = this.value;
        editor.updateOptions({ wordWrap: value });
    });

    document.getElementById('minimapSelect').addEventListener('change', function() {
        var value = this.value;
        editor.updateOptions({ minimap: { enabled: value === 'on' } });
    });

    window.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            saveFile();
        } else if (event.ctrlKey && event.key === 'o') {
            event.preventDefault();
            openFile();
        } else if (event.altKey && event.key === 'm') {
            event.preventDefault();
            var minimapEnabled = editor.getOption(andorra.editor.EditorOption.minimap).enabled;
            editor.updateOptions({ minimap: { enabled: !minimapEnabled } });
            document.getElementById('minimapSelect').value = minimapEnabled ? 'off' : 'on';
        } else if (event.altKey && event.key === 'z') {
            event.preventDefault();
            var wordWrapEnabled = editor.getOption(andorra.editor.EditorOption.wordWrap) === 'on';
            editor.updateOptions({ wordWrap: wordWrapEnabled ? 'off' : 'on' });
            document.getElementById('lineWrapSelect').value = wordWrapEnabled ? 'off' : 'on';
        }
    });

    // New function to open preview in a new tab
    document.getElementById('previewInNewTab').addEventListener('click', function() {
        var newTab = window.open();
        var content = editor.getValue();
        newTab.document.open();
        newTab.document.write(content);
        newTab.document.close();
    });

    document.getElementById('help').addEventListener('click', function() {
        window.open("https://www.google.com")
    });

    var divider = document.getElementById('divider');
    var editorContainer = document.getElementById('editor-container');
    var editorElement = document.getElementById('editor');
    var isResizing = false;

    divider.addEventListener('mousedown', function(e) {
        isResizing = true;
        document.body.style.cursor = 'ew-resize';
    });

    document.addEventListener('mousemove', function(e) {
        if (isResizing) {
            var offsetRight = editorContainer.clientWidth - (e.clientX - editorContainer.offsetLeft);
            var editorWidth = editorContainer.clientWidth - offsetRight;
            editorWidth = Math.max(editorWidth, 100);
            editorElement.style.width = editorWidth + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = 'default';
        }
    });
});