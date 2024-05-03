import React from 'react';
import { Button } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import CodeIcon from '@mui/icons-material/Code';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { isMarkActive, toggleMark } from './utils';
import { useSlate } from 'slate-react';



const MarkButton = ({ format, icon }) => {
    let IconComponent;
    const editor = useSlate();
    switch (icon) {
        case 'format_bold':
        IconComponent = FormatBoldIcon;
        break;
        case 'format_italic':
        IconComponent = FormatItalicIcon;
        break;
        case 'format_underlined':
        IconComponent = FormatUnderlinedIcon;
        break;
        case 'code':
        IconComponent = CodeIcon;
        break;
        // Add cases for other icons as needed
        default:
        return null;
    }

    return (
        <Button
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
            >
        <IconComponent />
        </Button>
    );
    };

    const BlockButton = ({ format, icon }) => {
    let IconComponent;
    const editor = useSlate();
    switch (icon) {
        case 'looks_one':
        IconComponent = LooksOneIcon;
        break;
        case 'looks_two':
        IconComponent = LooksTwoIcon;
        break;
        case 'format_quote':
        IconComponent = FormatQuoteIcon;
        break;
        case 'format_list_numbered':
        IconComponent = FormatListNumberedIcon;
        break;
        case 'format_list_bulleted':
        IconComponent = FormatListBulletedIcon;
        break;
        case 'format_align_left':
        IconComponent = FormatAlignLeftIcon;
        break;
        case 'format_align_center':
        IconComponent = FormatAlignCenterIcon;
        break;
        case 'format_align_right':
        IconComponent = FormatAlignRightIcon;
        break;
        case 'format_align_justify':
        IconComponent = FormatAlignJustifyIcon;
        break;
        // Add cases for other icons as needed
        default:
        return null;
    }

    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={(event) => {
            event.preventDefault();
            toggleMark(editor, format);
            }}
        >
        <IconComponent />
        </Button>
    );
};

export { MarkButton, BlockButton };