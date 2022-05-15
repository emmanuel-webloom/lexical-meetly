import type {InputEvents} from './shared/useEditorEvents';
import type {LexicalEditor} from 'lexical';
import useEditorEvents from './shared/useEditorEvents';
export default function useLexicalEditorEvents(
  events: InputEvents,
  editor: LexicalEditor,
): void {
  useEditorEvents(events, editor);
}