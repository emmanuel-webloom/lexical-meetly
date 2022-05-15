import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {useEffect} from 'react';
export default function LexicalAutoFocusPlugin(): null {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.focus();
  }, [editor]);
  return null;
}