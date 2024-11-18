import { IconButton, Tooltip } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useFullscreen } from '@/hooks/use-fullscreen';

export function FullscreenButton() {
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  return (
    <Tooltip title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
      <IconButton
        onClick={toggleFullscreen}
        sx={{
          position: 'fixed',
          right: 16,
          top: 16,
          zIndex: (theme) => theme.zIndex.drawer + 2,
          color: 'primary.main',
          backgroundColor: 'rgba(10, 14, 23, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(10, 14, 23, 0.9)',
          }
        }}
      >
        {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </Tooltip>
  );
}