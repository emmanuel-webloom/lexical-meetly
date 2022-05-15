'use strict';

const common = {
  modulePathIgnorePatterns: ['/npm'],
};

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/lexical/src/core/**/*.js',
    '<rootDir>/packages/lexical/src/extensions/**/*.js',
    '<rootDir>/packages/lexical-react/src/**/*.ts',
  ],
  coverageReporters: ['json', 'text'],
  projects: [
    {
      ...common,
      displayName: 'unit',
      globals: {
        IS_REACT_ACT_ENVIRONMENT: true,
        __DEV__: true,
        'ts-jest': {
          tsconfig: 'tsconfig.test.json',
        },
      },
      moduleNameMapper: {
        '^./dist/(.+)': './src/$1',
        '^@lexical/clipboard$':
          '<rootDir>/packages/lexical-clipboard/src/index.ts',
        '^@lexical/code$': '<rootDir>/packages/lexical-code/src/index.ts',
        '^@lexical/dragon$': '<rootDir>/packages/lexical-dragon/src/index.ts',
        '^@lexical/file$': '<rootDir>/packages/lexical-file/src/index.ts',
        '^@lexical/hashtag$': '<rootDir>/packages/lexical-hashtag/src/index.ts',
        '^@lexical/headless$':
          '<rootDir>/packages/lexical-headless/src/index.ts',
        '^@lexical/history$': '<rootDir>/packages/lexical-history/src/index.ts',
        '^@lexical/link$': '<rootDir>/packages/lexical-link/src/index.js',
        '^@lexical/list$': '<rootDir>/packages/lexical-list/src/index.js',
        '^@lexical/mark$': '<rootDir>/packages/lexical-mark/src/index.js',
        '^@lexical/offset$': '<rootDir>/packages/lexical-offset/src/index.js',
        '^@lexical/overflow$':
          '<rootDir>/packages/lexical-overflow/src/index.js',
        '^@lexical/plain-text$':
          '<rootDir>/packages/lexical-plain-text/src/index.ts',
        '^@lexical/react/DEPRECATED_useLexicalRichText$':
          '<rootDir>/packages/lexical-react/src/DEPRECATED_useLexicalRichText.ts',
        '^@lexical/react/LexicalAutoLinkPlugin$':
          '<rootDir>/packages/lexical-react/src/LexicalAutoLinkPlugin.ts',
        '^@lexical/react/LexicalAutoScrollPlugin$':
          '<rootDir>/packages/lexical-react/src/LexicalAutoScrollPlugin.ts',
        '^@lexical/react/LexicalCheckListPlugin$':
          '<rootDir>/packages/lexical-react/src/LexicalCheckListPlugin.ts',
        '^@lexical/react/LexicalCollaborationPlugin$':
          '<rootDir>/packages/lexical-react/src/LexicalCollaborationPlugin.ts',
        '^@lexical/react/LexicalComposerContext$':
          '<rootDir>/packages/lexical-react/src/LexicalComposerContext.ts',
        '^@lexical/react/LexicalContentEditable$':
          '<rootDir>/packages/lexical-react/src/LexicalContentEditable.tsx',
        '^@lexical/react/LexicalLinkPlugin$':
          '<rootDir>/packages/lexical-react/src/LexicalLinkPlugin.ts',
        '^@lexical/react/LexicalListPlugin$':
          '<rootDir>/packages/lexical-react/src/LexicalListPlugin.ts',
        '^@lexical/react/LexicalPlainTextPlugin$':
          '<rootDir>/packages/lexical-react/src/LexicalPlainTextPlugin.ts',
        '^@lexical/react/LexicalTablePlugin$':
          '<rootDir>/packages/lexical-react/src/LexicalTablePlugin.ts',
        '^@lexical/react/useLexicalCanShowPlaceholder$':
          '<rootDir>/packages/lexical-react/src/useLexicalCanShowPlaceholder.ts',
        '^@lexical/react/useLexicalDecorators$':
          '<rootDir>/packages/lexical-react/src/useLexicalDecorators.ts',
        '^@lexical/react/useLexicalEditor$':
          '<rootDir>/packages/lexical-react/src/useLexicalEditor.ts',
        '^@lexical/rich-text$':
          '<rootDir>/packages/lexical-rich-text/src/index.ts',
        '^@lexical/selection$':
          '<rootDir>/packages/lexical-selection/src/index.js',
        '^@lexical/table$': '<rootDir>/packages/lexical-table/src/index.js',
        '^@lexical/text$': '<rootDir>/packages/lexical-text/src/index.js',
        '^@lexical/utils$': '<rootDir>/packages/lexical-utils/src/index.js',
        '^@lexical/yjs$': '<rootDir>/packages/lexical-yjs/src/index.js',
        '^lexical$': '<rootDir>/packages/lexical/src/index.js',
        '^shared-ts/canUseDOM$':
          '<rootDir>/packages/shared-ts/src/canUseDOM.ts',
        '^shared-ts/environment$':
          '<rootDir>/packages/shared-ts/src/environment.ts',
        '^shared-ts/getDOMSelection$':
          '<rootDir>/packages/shared-ts/src/getDOMSelection.ts',
        '^shared-ts/invariant$':
          '<rootDir>/packages/shared-ts/src/invariant.ts',
        '^shared-ts/simpleDiffWithCursor$':
          '<rootDir>/packages/shared-ts/src/simpleDiffWithCursor.ts',
        '^shared-ts/useLayoutEffect$':
          '<rootDir>/packages/shared-ts/src/useLayoutEffect.ts',
        '^shared/canUseDOM$': '<rootDir>/packages/shared/src/canUseDOM.js',
        '^shared/environment$': '<rootDir>/packages/shared/src/environment.js',
        '^shared/getDOMSelection$':
          '<rootDir>/packages/shared/src/getDOMSelection.js',
        '^shared/invariant$': '<rootDir>/packages/shared/src/invariant.js',
        '^shared/simpleDiffWithCursor$':
          '<rootDir>/packages/shared/src/simpleDiffWithCursor.js',
        '^shared/useLayoutEffect$':
          '<rootDir>/packages/shared/src/useLayoutEffect.js',
        formatProdErrorMessage:
          '<rootDir>/scripts/error-codes/formatProdErrorMessage.js',
      },
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testMatch: ['**/__tests__/unit/**/*.test{.ts,.tsx,.js,.jsx}'],
      transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx$': 'ts-jest',
      },
    },
    {
      ...common,
      displayName: 'e2e',
      testMatch: [
        '**/__tests__/e2e/**/*.js',
        '**/__tests__/regression/**/*.js',
      ],
    },
  ],
};
