import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import useList from './shared/useList';
export default function ListPlugin(): null {
  const [editor] = useLexicalComposerContext();
  useList(editor);
  return null;
}