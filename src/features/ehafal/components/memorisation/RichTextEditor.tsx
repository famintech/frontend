import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { styled } from '@mui/material/styles';

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
    }
});

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <EditorContainer>
            <EditorContent editor={editor} />
        </EditorContainer>
    );
};