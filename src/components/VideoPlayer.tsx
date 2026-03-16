import { PlayCircle } from "lucide-react";

interface VideoPlayerProps {
  url: string;
  title: string;
}

export function VideoPlayer({ url, title }: VideoPlayerProps) {
  const isDirectVideo = url.match(/\.(mp4|webm|ogg)(\?|$)/i);

  return (
    <div className="relative w-full aspect-video bg-foreground/5 rounded-xl overflow-hidden border">
      {url ? (
        isDirectVideo ? (
          <video
            src={url}
            title={title}
            className="absolute inset-0 w-full h-full"
            controls
            controlsList="nodownload"
            playsInline
          />
        ) : (
          <iframe
            src={url}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
          <PlayCircle className="w-16 h-16 mb-3 opacity-40" />
          <p className="text-sm font-medium">Video placeholder</p>
          <p className="text-xs">Replace with training video URL</p>
        </div>
      )}
    </div>
  );
}
