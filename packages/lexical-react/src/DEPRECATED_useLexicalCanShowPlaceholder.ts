import type {LexicalEditor} from 'lexical';
import useCanShowPlaceholder from './shared/useCanShowPlaceholder';
export default function useLexicalCanShowPlaceholder(
  editor: LexicalEditor,
): boolean {
  return useCanShowPlaceholder(editor);
}