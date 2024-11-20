import { Editor } from '@tiptap/react';
import {
    FormatBold,
    FormatItalic,
    FormatUnderlined,
    FormatListBulleted,
    FormatListNumbered,
    FormatQuote,
    FormatAlignLeft,
    FormatAlignCenter,
    FormatAlignRight,
    Title,
    Code
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { IconButton, Tooltip } from '@mui/material';

const ToolbarContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
    padding: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
});

const StyledIconButton = styled(IconButton)({
    color: 'rgba(255, 255, 255, 0.7)',
    padding: '4px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&.active': {
        color: '#00F5FF',
        backgroundColor: 'rgba(0, 245, 255, 0.1)',
    }
});

interface EditorToolbarProps {
    editor: Editor | null;
}

export const EditorToolbar = ({ editor }: EditorToolbarProps) => {
    if (!editor) return null;

    return (
        <ToolbarContainer>
            <Tooltip title="Heading">
                <StyledIconButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading') ? 'active' : ''}
                >
                    <Title />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Bold">
                <StyledIconButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'active' : ''}
                >
                    <FormatBold />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Italic">
                <StyledIconButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'active' : ''}
                >
                    <FormatItalic />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Underline">
                <StyledIconButton
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive('underline') ? 'active' : ''}
                >
                    <FormatUnderlined />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Bullet List">
                <StyledIconButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'active' : ''}
                >
                    <FormatListBulleted />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Numbered List">
                <StyledIconButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'active' : ''}
                >
                    <FormatListNumbered />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Blockquote">
                <StyledIconButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'active' : ''}
                >
                    <FormatQuote />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Code">
                <StyledIconButton
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={editor.isActive('code') ? 'active' : ''}
                >
                    <Code />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Align Left">
                <StyledIconButton
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({ textAlign: 'left' }) ? 'active' : ''}
                >
                    <FormatAlignLeft />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Align Center">
                <StyledIconButton
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({ textAlign: 'center' }) ? 'active' : ''}
                >
                    <FormatAlignCenter />
                </StyledIconButton>
            </Tooltip>

            <Tooltip title="Align Right">
                <StyledIconButton
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({ textAlign: 'right' }) ? 'active' : ''}
                >
                    <FormatAlignRight />
                </StyledIconButton>
            </Tooltip>
        </ToolbarContainer>
    );
};