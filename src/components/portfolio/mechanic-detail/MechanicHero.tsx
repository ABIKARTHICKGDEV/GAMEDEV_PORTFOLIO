import React, { useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { Github, Play, Pause, BookOpen, Code2, Linkedin, Volume2, VolumeX } from "lucide-react";
import { GameplayMechanic } from "@/data/portfolio";

export default function MechanicHero({ mechanic }: { mechanic: GameplayMechanic }) {
  const media = mechanic.media?.video ? mechanic.media.video : mechanic.media?.preview ?? mechanic.media?.gif;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      setIsMuted(nextMuted);
      videoRef.current.muted = nextMuted;
      videoRef.current.volume = 1.0;
      if (!nextMuted && videoRef.current.paused) {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.warn("Play on unmute failed", err);
        }
      }
    }
  };

  const togglePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          videoRef.current.muted = isMuted;
          videoRef.current.volume = 1.0;
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.warn("Play failed, retrying muted", err);
          try {
            videoRef.current.muted = true;
            setIsMuted(true);
            await videoRef.current.play();
            setIsPlaying(true);
          } catch (e) {
            setIsPlaying(false);
          }
        }
      }
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 -z-10">
        {mechanic.media?.video ? (
          <>
            <video
              ref={videoRef}
              src={asset(mechanic.media.video)}
              className="h-full w-full object-cover"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/60 text-foreground backdrop-blur transition hover:bg-black/80 hover:text-primary"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/60 text-foreground backdrop-blur transition hover:bg-black/80 hover:text-primary"
                aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
              >
                {isMuted ? <VolumeX className="h-4 w-4 text-muted-foreground" /> : <Volume2 className="h-4 w-4 text-primary" />}
              </button>
            </div>
          </>
        ) : media ? (
          <img src={asset(media)} alt={mechanic.title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-96 w-full bg-gradient-to-b from-[#2b2e35] to-[#141417]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary">
            {mechanic.engine} {mechanic.category ? `· ${mechanic.category}` : ""}
          </div>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-tight">
            {mechanic.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{mechanic.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {mechanic.links?.github ? (
              <a
                href={mechanic.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex items-center gap-2 px-4 py-2"
              >
                <Github className="h-4 w-4" /> View Source
              </a>
            ) : null}
            {mechanic.links?.demo ? (
              <a
                href={mechanic.links.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-steam inline-flex items-center gap-2 px-4 py-2"
              >
                <Play className="h-4 w-4" /> Live Demo
              </a>
            ) : null}
            {mechanic.articleUrl ? (
              <a
                href={mechanic.articleUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex items-center gap-2 px-4 py-2"
              >
                <Linkedin className="h-4 w-4 text-[#0A66C2]" /> LinkedIn Devlog
              </a>
            ) : null}
            {mechanic.docsUrl ? (
              <a
                href={mechanic.docsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex items-center gap-2 px-4 py-2"
              >
                <BookOpen className="h-4 w-4" /> Documentation
              </a>
            ) : null}
            {mechanic.sourceUrl ? (
              <a
                href={mechanic.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-steam inline-flex items-center gap-2 px-4 py-2"
              >
                <Code2 className="h-4 w-4" /> Source
              </a>
            ) : null}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {mechanic.difficulty ? (
              <div className="rounded-sm border border-white/8 bg-[#32353D]/40 px-3 py-2">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Difficulty</div>
                <div className="font-semibold">{mechanic.difficulty}</div>
              </div>
            ) : null}
            {mechanic.engineVersion ? (
              <div className="rounded-sm border border-white/8 bg-[#32353D]/40 px-3 py-2">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Engine Version</div>
                <div className="font-semibold">{mechanic.engineVersion}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
