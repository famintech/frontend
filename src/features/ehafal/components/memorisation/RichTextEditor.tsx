import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { styled } from '@mui/material/styles';
import { EditorToolbar } from './RichTextEditorToolbar';

const EditorContainer = styled('div')({
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    color: '#fff',
    
    '.ProseMirror': {
        padding: '8px 12px',
        minHeight: '150px',
        outline: 'none',
        
        '&:focus': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
        
        'p': {
            margin: '0 0 0.5em 0',
        },
        
        'ul, ol': {
            padding: '0 1rem',
        },

        'blockquote': {
            borderLeft: '3px solid rgba(255, 255, 255, 0.2)',
            paddingLeft: '1rem',
            color: 'rgba(255, 255, 255, 0.7)',
        },

        'code': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '0.2em 0.4em',
            borderRadius: '3px',
        },

        'h2': {
            fontSize: '1.5em',
            margin: '1em 0 0.5em',
        }
    }
});

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <EditorContainer>
            <EditorToolbar editor={editor} />
            <EditorContent editor={editor} />
        </EditorContainer>
    );
};