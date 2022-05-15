import type {LexicalEditor} from 'lexical';
import {registerMarkdownShortcuts, TRANSFORMERS} from '@lexical/markdown';
import {useEffect} from 'react';
export default function useLexicalAutoFormatter(editor: LexicalEditor): void {
  useEffect(() => {
    return registerMarkdownShortcuts(editor, TRANSFORMERS);
  }, [editor]);
}