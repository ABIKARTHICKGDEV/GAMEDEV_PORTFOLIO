import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Play, Pause, Github, ArrowRight, Trophy, Volume2, VolumeX, Linkedin } from "lucide-react";
import { asset } from "@/lib/asset";
import { portfolio } from "@/data/portfolio";

export function FeaturedSpotlight() {
  const project =
    portfolio.projects.find((p) => p.id === portfolio.featuredProjectId) ??
    portfolio.projects[0]!;
  const isGameJam = project.tags.includes("game-jam");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const mediaVideo = project.media?.video;
  const mediaHoverVideo = project.media?.hoverVideo;
  const mediaGif = project.media?.gif;
  const mediaPoster =
    project.media?.banner ?? project.media?.screenshot ?? project.media?.gif;
  const linkedInHref =
    project.links.linkedin && project.links.linkedin !== "ABC"
      ? project.links.linkedin
      : portfolio.profile.linkedin;

  useEffect(() => {
    setIsPlaying(false);
    setIsHovering(false);
    setIsVideoActive(false);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
    }
  }, [project.id]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, project.id]);

  const handleVideoToggle = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isVideoActive) {
      setIsVideoActive(true);
      setIsPlaying(true);
      try {
        await video.play();
      } catch (error) {
        console.warn("Video play prevented by browser", error);
        setIsPlaying(false);
      }
      return;
    }

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    if (video.ended) {
      video.currentTime = 0;
    }

    try {
      await video.play();
      setIsPlaying(true);
    } catch (error) {
      console.warn("Video play prevented by browser", error);
    }
  };

  const shouldShowPreviewMedia = !isVideoActive || !isPlaying;
  const shouldShowHoverMedia = isHovering && !isPlaying && Boolean(mediaHoverVideo || mediaGif);

  return (
    <section id="featured" className="mx-auto mt-6 max-w-7xl scroll-mt-20 px-4 sm:px-6">
      <div className="mb-5">
        <div className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
          Featured
        </div>
        <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
          Featured Project
        </h2>
      </div>


      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="card-lift overflow-hidden rounded-sm border border-white/8 bg-[#2B2E35] shadow-lg shadow-black/40"
      >
        <div className="grid lg:grid-cols-[7fr_3fr]">
          {/* Cover */}
          <div
            className="group relative aspect-[16/9] overflow-hidden border-b border-white/5 lg:border-b-0 lg:border-r"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="cover-img absolute inset-0 bg-gradient-to-br from-[#32353D] via-[#2B2E35] to-[#1B1B1F]" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            {mediaVideo ? (
              <>
                <video
                  ref={videoRef}
                  src={asset(mediaVideo)}
                  poster={mediaPoster ? asset(mediaPoster) : undefined}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"
                    }`}
                  playsInline
                  muted={isMuted}
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />
                {shouldShowPreviewMedia ? (
                  <>
                    {mediaPoster ? (
                      <img
                        src={asset(mediaPoster)}
                        alt={project.title}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${shouldShowHoverMedia ? "opacity-0" : "opacity-100"
                          }`}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : null}
                    {mediaHoverVideo ? (
                      <video
                        src={asset(mediaHoverVideo)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 pointer-events-none ${shouldShowHoverMedia ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    ) : mediaGif ? (
                      <img
                        src={asset(mediaGif)}
                        alt={`${project.title} preview`}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 pointer-events-none ${shouldShowHoverMedia ? "opacity-100" : "opacity-0"
                          }`}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : null}
                  </>
                ) : null}
              </>
            ) : mediaPoster ? (
              <img
                src={asset(mediaPoster)}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : project.media?.gif ? (
              <img
                src={asset(project.media.gif)}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <div>
                  <div className="font-display text-2xl font-extrabold text-foreground/20">
                    {project.title}
                  </div>
                </div>
              </div>
            )}
            {mediaVideo ? (
              <>
                <button
                  type="button"
                  onClick={handleVideoToggle}
                  className={`absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30 ${isPlaying ? "opacity-0" : "opacity-100"
                    }`}
                  aria-label={isPlaying ? "Pause featured video" : "Play featured video"}
                >
                  <div className="text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/20 backdrop-blur transition group-hover:scale-110 sm:h-20 sm:w-20">
                      {isPlaying ? (
                        <Pause className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
                      ) : (
                        <Play className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
                      )}
                    </div>
                    <div className="mt-3 font-display text-xl font-extrabold tracking-tight text-foreground/80 sm:mt-4 sm:text-3xl lg:text-4xl">
                      {project.title}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                      {project.metrics.engine} · {project.metrics.platform}
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsMuted((value) => !value);
                  }}
                  className="absolute bottom-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/60 text-foreground backdrop-blur transition hover:bg-black/80"
                  aria-label={isMuted ? "Unmute featured video" : "Mute featured video"}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </>
            ) : null}
            {isGameJam ? (
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-sm border border-amber-400/40 bg-amber-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-200">
                <Trophy className="h-3 w-3" /> Game Jam
              </div>
            ) : null}
          </div>

          {/* Info */}
          <div className="flex flex-col p-4 sm:p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {project.category}
            </div>
            <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl lg:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <dl className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
              <KV k="Engine" v={project.metrics.engine} />
              <KV k="Platform" v={project.metrics.platform} />
              <KV k="Language" v={project.metrics.language} />
              <KV k="Dev Time" v={project.metrics.devTime} />
              <KV k="Status" v={project.metrics.status} />
              <KV k="Team" v={project.metrics.teamSize} />
            </dl>

            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-2">
                {project.links.itch ? (
                  <a
                    href={project.links.itch}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-steam inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                  >
                    <Play className="h-3.5 w-3.5" /> Play Now
                  </a>
                ) : null}
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost-steam inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                ) : null}
                <a
                  href={linkedInHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost-steam inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <Link
                  to={`/projects/${project.id}`}
                  className="btn-ghost-steam inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                >
                  Case Study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-sm border border-white/5 bg-[#32353D]/40 px-2.5 py-1.5">
      <dt className="text-[9px] uppercase tracking-widest text-muted-foreground">
        {k}
      </dt>
      <dd className="mt-0.5 font-display text-xs font-semibold text-foreground">
        {v}
      </dd>
    </div>
  );
}
