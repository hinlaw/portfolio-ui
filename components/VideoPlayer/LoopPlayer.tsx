import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    url: string;
    width?: string | number;
    height?: string | number;
    className?: string;
    playing?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsinline?: boolean;
    controls?: boolean;
    light?: boolean;
    pip?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    url,
    width = '100%',
    height = '100%',
    className = '',
    playing = true,
    loop = true,
    muted = true,
    playsinline = true,
    controls = false,
    light = false,
    pip = false,
}) => {
    return (
        <div className={className}>
            <ReactPlayer
                url={url}
                width={width}
                height={height}
                playing={playing}
                loop={loop}
                muted={muted}
                playsinline={playsinline}
                controls={controls}
                light={light}
                pip={pip}
                config={{
                    file: {
                        attributes: {
                            style: { borderRadius: 'inherit' }
                        }
                    }
                }}
            />
        </div>
    );
};

export default VideoPlayer;