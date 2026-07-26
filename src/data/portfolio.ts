// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the portfolio. One identity: Gameplay Programmer.
// Add a project, resume variant, or a skill = single push.
// ─────────────────────────────────────────────────────────────────────────────

export interface ProjectMetrics {
  type: string;
  platform: string;
  engine: string;
  language: string;
  teamSize: string;
  devTime: string;
  status: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
  tags: string[]; // drives filter bar: unity, unreal, 2d, 3d, game-jam, in-development
  tech: string[];
  features: string[];
  /** Per-feature cards shown in Gameplay Overview: title + individual description + optional thumbnail */
  gameplay?: { title: string; description: string; image?: string }[];
  /** System cards shown in Gameplay Systems section */
  systems?: { title: string; description: string }[];
  /** Module names listed in Technical Architecture section */
  architectureModules?: string[];
  projectImpact: { problem: string; solution: string };
  metrics: ProjectMetrics;
  challenges: { challenge: string; solution: string }[];
  learnings: string[];
  gallery: {
    gameplay: string[];
    development: string[];
    editor: string[];
    flowDiagram?: string;
  };
  links: {
    itch?: string;
    itchEmbedUrl?: string;
    github?: string;
    linkedin: string | null;
    details?: string;
  };
  media?: ProjectMedia;
}

export interface ProjectMedia {
  banner?: string;
  screenshot?: string;
  hoverVideo?: string;
  gif?: string;
  video?: string;
  engineIcon?: string;
}

export interface GameplayMechanic {
  id: string;
  title: string;
  engine: "Unity" | "Unreal Engine";
  description: string;
  media: { preview?: string; hoverVideo?: string; gif?: string; video?: string };
  links?: { github?: string; demo?: string };
  // Optional, future-proof fields — rendered only when present:
  difficulty?: string;
  engineVersion?: string;
  category?: string;
  docsUrl?: string;
  articleUrl?: string;
  sourceUrl?: string;
  preview?: string;
  gallery?: {
    gameplay?: string[];
    development?: string[];
    editor?: string[];
  };
  diagram?: string;
  architecture?: string;
  flow?: string;
  breakdown?: string[];
  steps?: string[];
  challenges?: { challenge: string; solution: string }[];
  purpose?: string;
  usedIn?: string;
  benefit?: string;
  experience?: string;
  features?: string[];
  technologies?: string[];
  learnings?: string[];
}


export interface SkillGroup {
  id: string;
  title: string;
  icon: string; // lucide icon name
  items: { name: string }[];
}

export interface PortfolioConfig {
  profile: {
    name: string;
    tagline: string;
    email: string;
    linkedin: string;
    github: string;
    photo: string;
    location: string;
    availability: string;
  };
  /** The single resume surfaced everywhere in the UI. */
  resume: string;
  /** Internal-only resume variants kept for future use. NOT referenced by any component. */
  resumeVariants: {
    unity: string;
    unreal: string;
    gameplay: string;
    software: string;
  };
  hero: {
    defaultHeadline: string;
    defaultSubheadline: string;
    description: string;
  };
  highlights: { icon: string; label: string }[];
  quickView: {
    experience: string;
    projects: string;
    gameJams: string;
    primaryEngine: string;
    languages: string[];
    location: string;
    availability: string;
  };
  stats: { label: string; value: string; suffix?: string }[];
  featuredProjectId: string;
  currentlyBuilding: {
    title: string;
    subtitle: string;
    description: string;
    status: string;
    progress: number;
  };
  projectFilters: { id: string; label: string }[];
  projects: Project[];
  showcase: {
    gifs: { src: string; caption: string }[];
    videos: { src: string; poster?: string; caption: string }[];
    screenshots: { src: string; caption: string }[];
  };
  skillGroups: SkillGroup[];
  learningJourney: { title: string; description: string; icon: string }[];
  process: { label: string; icon: string; description: string }[];
  timeline: { year: string; title: string; description: string }[];
  github: { username: string };
  about: { bio: string; education: { degree: string; school: string; detail?: string }[] };
  gameplayMechanics: GameplayMechanic[];
  
}

export const portfolio: PortfolioConfig = {
  profile: {
    name: "Abikarthick G",
    tagline: "Gameplay Programmer · Unity · Unreal Engine",
    email: "Abikarthick.gdev@gmail.com",
    linkedin: "https://www.linkedin.com/in/abikarthick",
    github: "https://github.com/ABIKARTHICKGDEV",
    photo: "https://github.com/ABIKARTHICKGDEV.png",
    location: "Tamil Nadu, India",
    availability: "Open to Internship & Entry-Level Opportunities",
  },
  resume: "Resumes/Abikarthick_resume_unity.pdf",
  resumeVariants: {
    unity: "Resumes/Abikarthick_resume_unity.pdf",
    unreal: "Resumes/Abikarthick_resume_unreal.pdf",
    gameplay: "Resumes/Abikarthick_resume_unity.pdf",
    software: "Resumes/Abikarthick_resume_unreal.pdf",
  },
  hero: {
    defaultHeadline: "Gameplay Programmer",
    defaultSubheadline:
      "Building polished gameplay systems and interactive experiences using Unity and Unreal Engine.",
    description:
      "Gameplay programming, physics, AI, game feel, systems design, and technical problem solving — building games that feel right from prototype to release.",
  },
  highlights: [
    { icon: "Gamepad2", label: "3+ Games Developed" },
    { icon: "Trophy", label: "Game Jam Participant" },
    { icon: "Zap", label: "Unity & Unreal Engine" },
    { icon: "Construction", label: "Currently Building StarStuff" },
  ],
  quickView: {
    experience: "1.5+ Years",
    projects: "4+",
    gameJams: "1",
    primaryEngine: "Unity",
    languages: ["C#", "C++", "Java"],
    location: "Tamil Nadu, India",
    availability: "Open to Internship & Entry-Level Opportunities",
  },
  stats: [
    { label: "Completed Games", value: "4", suffix: "+" },
    { label: "Years with Unity", value: "1.5", suffix: "+" },
    { label: "Game Jams", value: "1" },
    { label: "GitHub Contributions", value: "100", suffix: "+" },
  ],
  featuredProjectId: "bros-jump",
  currentlyBuilding: {
    title: "StarStuff",
    subtitle: "2.5D Twin-Stick Shooter",
    description:
      "An original sci-fi twin-stick shooter built in Unreal Engine 5. Featuring spherical planet gameplay, enemy AI, weapon systems, and arcade-inspired combat.",
    status: "Active Development",
    progress: 35,
  },
  projectFilters: [
    { id: "all", label: "All" },
    { id: "unity", label: "Unity" },
    { id: "unreal", label: "Unreal Engine" },
    { id: "in-development", label: "In Development" },
    { id: "game-jam", label: "Game Jam" },
  ],
  projects: [
    {
  id: "bros-jump",
  title: "Bro's Jump",
  category: "2D Puzzle Platformer",
  description:
    "A cooperative 2D puzzle platformer built in Unity 6 where two characters with unique movement abilities work together to overcome obstacles and complete handcrafted levels.",

  //featured: true,

  tags: [
    "unity",
    "2d",
    "platformer"
  ],

  tech: [
    "Unity 6",
    "C#",
    "Tilemap",
    "Animation",
    "Physics 2D",
    "WebGL",
    "Git"
  ],

  features: [
    "Two unique playable characters",
    "Responsive movement controller",
    "Puzzle-focused level progression",
    "Physics-based interactions",
    "Checkpoint & respawn system",
    "Optimized WebGL build",
    "CrazyGames SDK Integration"
  ],

  gameplay: [
    {
      title: "Two Unique Playable Characters",
      description:
        "Control two distinct characters with different movement abilities. Players must combine their unique mechanics to solve puzzles, unlock paths, and complete each level through teamwork.",
      image: "Project_Assets/Bro's_Jump/cover.png",
    },
    {
      title: "Responsive Movement Controller",
      description:
        "Built a smooth and responsive custom movement system featuring precise jumping, wall interactions, collision handling, and polished controls for an enjoyable platforming experience.",
      image: "Project_Assets/Bro's_Jump/screenshot1.png",
    },
    {
      title: "Puzzle-Focused Level Progression",
      description:
        "Designed handcrafted levels that gradually introduce new mechanics and require players to think strategically, encouraging experimentation and cooperative problem-solving.",
      image: "Project_Assets/Bro's_Jump/screenshot2.png",
    },
    {
      title: "Physics-Based Interactions",
      description:
        "Implemented Unity's 2D physics system using Rigidbody2D, colliders, and Physics Materials to create natural movement, interactive objects, and engaging environmental puzzles.",
      image: "Project_Assets/Bro's_Jump/screenshot1.png",
    },
    {
      title: "Checkpoint & Respawn System",
      description:
        "Created a checkpoint system that saves player progress and respawns both characters at the latest activated checkpoint, reducing frustration while maintaining gameplay flow.",
      image: "Project_Assets/Bro's_Jump/screenshot2.png",
    },
    {
      title: "Optimized WebGL Build",
      description:
        "Optimized assets, project settings, and performance for WebGL deployment, ensuring smooth gameplay and fast loading directly in desktop and mobile web browsers.",
      image: "Project_Assets/Bro's_Jump/cover.png",
    },
    {
      title: "CrazyGames SDK Integration",
      description:
        "Integrated the CrazyGames SDK to support platform features such as game initialization, browser compatibility, and deployment readiness for online publishing.",
      image: "Project_Assets/Bro's_Jump/screenshot1.png",
    },
  ],

  projectImpact: {
    problem:
      "Design a cooperative puzzle platformer where players solve challenges using different character abilities.",

    solution:
      "Built reusable gameplay systems including movement, checkpoints, triggers, puzzle mechanics, animation systems, and WebGL deployment with CrazyGames SDK support."
  },

  metrics: {
    type: "2D Puzzle Platformer",
    platform: "WebGL",
    engine: "Unity 6",
    language: "C#",
    teamSize: "Solo",
    devTime: "Personal Project",
    status: "Released"
  },

  challenges: [
    {
      challenge:
        "Designing two characters with completely different movement mechanics.",

      solution:
        "Created independent movement systems while maintaining consistent controls and game feel."
    },

    {
      challenge:
        "Building reliable puzzle interactions.",

      solution:
        "Implemented modular trigger systems, doors, switches, moving platforms, and checkpoints."
    },

    {
      challenge:
        "Optimizing for browser gameplay.",

      solution:
        "Reduced build size, optimized assets, and integrated the CrazyGames SDK."
    }
  ],

  learnings: [
    "Gameplay Programming",
    "Unity Physics",
    "Animation",
    "Level Design",
    "Puzzle Design",
    "Game Feel",
    "WebGL Optimization"
  ],

  gallery: {
    gameplay: [
        "Project_Assets/Bro's_Jump/gameplay.mp4",
        "Project_Assets/Bro's_Jump/screenshot1.png",
        "Project_Assets/Bro's_Jump/screenshot2.png"
    ],
    development: [],
    editor: []
},

  links: {
    itch: "https://abikarthick.itch.io/bros-jump",
    github: "https://github.com/ABIKARTHICKGDEV/Bros-Jump-Unity",
    linkedin: "https://www.linkedin.com/posts/abikarthick_unity-unity3d-gamedevelopment-ugcPost-7477652910747774976-o44n/"
  },  

  media: {
  banner: "Project_Assets/Bro's_Jump/cover.png",
  hoverVideo: "Project_Assets/Bro's_Jump/Bro's_jump_Hover_video.mp4",
  video: "Project_Assets/Bro's_Jump/gameplay.mp4",
  screenshot: "Project_Assets/Bro's_Jump/screenshot1.png",
},
},
    {
      id: "charge-collector",
      title: "Charge Collector",
      category: "3D Endless Runner",
      description:
        "Charge Collector is a 3D endless runner developed in Unity 6 for my first Game Jam, ScoreSpace Jam #33 (2025). Players dodge traffic, collect energy charges, and survive as long as possible using three-lane movement, responsive jumping, and mobile swipe controls. The project was later revisited and polished with improved gameplay systems, UI, and WebGL support as part of my professional game development portfolio.",

      tags: ["unity", "3d", "game-jam"],
      tech: [
        "Unity 6.3 LTS",
        "C#",
        "Universal Render Pipeline (URP)",
        "Unity Input System",
        "Unity UI",
        "Animator",
        "Rigidbody Physics",
        "WebGL",
      ],
      features: [
        "Three-Lane Movement",
        "Endless Runner Gameplay",
        "Portrait Mobile UI",
        "Mobile Swipe Controls",
        "Keyboard Controls",
        "Variable Jump Height",
        "Coyote Time",
        "Jump Buffer",
        "Charge Collection System",
        "Score System",
        "Enemy Chase Mechanic",
        "Pause Menu",
        "Game Over Screen",
        "WebGL Build",
        "Responsive UI",
      ],
      gameplay: [
        {
          title: "Three-Lane Movement",
          description:
            "Switch between three lanes to avoid vehicles and collect energy charges while maintaining continuous forward movement.",
          image: "Project_Assets/Chargecollector/Gameplay.png",
        },
        {
          title: "Endless Runner Gameplay",
          description:
            "Run endlessly through a cyberpunk-inspired city, surviving as long as possible while your score increases over time.",
          image: "Project_Assets/Chargecollector/Screenshot_1.png",
        },
        {
          title: "Portrait Mobile UI",
          description:
            "Designed specifically for portrait orientation, providing a clean and intuitive interface across desktop and mobile browsers.",
          image: "Project_Assets/Chargecollector/Mainmenu.png",
        },
        {
          title: "Mobile Swipe Controls",
          description:
            "Supports swipe gestures for lane switching and jumping, making gameplay comfortable on touch devices.",
          image: "Project_Assets/Chargecollector/Mainmenu.png",
        },
        {
          title: "Keyboard Controls",
          description:
            "Desktop players can control the character using keyboard input for smooth and responsive movement.",
          image: "Project_Assets/Chargecollector/Screenshot_2.png",
        },
        {
          title: "Variable Jump Height",
          description:
            "Jump height changes depending on how long the jump button is held, allowing precise obstacle navigation.",
          image: "Project_Assets/Chargecollector/Gameplay.png",
        },
        {
          title: "Coyote Time",
          description:
            "Provides a short grace period after leaving the ground, making jumps feel more forgiving and responsive.",
          image: "Project_Assets/Chargecollector/Screenshot_1.png",
        },
        {
          title: "Jump Buffer",
          description:
            "Stores jump input just before landing so the player automatically jumps on touchdown.",
          image: "Project_Assets/Chargecollector/Screenshot_2.png",
        },
        {
          title: "Charge Collection System",
          description:
            "Collect energy charges scattered throughout the level to increase your collected charge count and overall score.",
          image: "Project_Assets/Chargecollector/Screenshot_1.png",
        },
        {
          title: "Score System",
          description:
            "Distance travelled and collected charges contribute to the player's final score.",
          image: "Project_Assets/Chargecollector/Gameover.png",
        },
        {
          title: "Enemy Chase Mechanic",
          description:
            "An enemy continuously pursues the player, increasing tension and encouraging constant movement.",
          image: "Project_Assets/Chargecollector/Gameplay.png",
        },
        {
          title: "Pause Menu",
          description:
            "Pause gameplay at any time with options to resume, restart, or quit the game.",
          image: "Project_Assets/Chargecollector/Screenshot_2.png",
        },
        {
          title: "Game Over Screen",
          description:
            "Displays the player's final score and collected charges with quick options to retry the run.",
          image: "Project_Assets/Chargecollector/Gameover.png",
        },
        {
          title: "WebGL Build",
          description:
            "Optimized for browser play and deployed using Unity WebGL with responsive portrait support.",
          image: "Project_Assets/Chargecollector/Screenshot_1.png",
        },
        {
          title: "Responsive UI",
          description:
            "All interface elements automatically scale for different portrait resolutions while maintaining consistent layout.",
          image: "Project_Assets/Chargecollector/Mainmenu.png",
        },
      ],
      systems: [
        {
          title: "Player Movement",
          description: "Lane switching, jumping, coyote time, and jump buffering systems.",
        },
        {
          title: "Input System",
          description: "Keyboard controls for desktop and swipe controls for mobile devices.",
        },
        {
          title: "Gameplay Manager",
          description:
            "Handles score calculation, charge collection, pause state, and game over flow.",
        },
        {
          title: "UI System",
          description:
            "Responsive portrait UI including HUD, menus, score display, and pause/game over screens.",
        },
        {
          title: "Audio Manager",
          description: "Controls background music, sound effects, and mute/unmute functionality.",
        },
        {
          title: "Environment System",
          description:
            "Procedural obstacle spawning and endless road progression to create continuous gameplay.",
        },
      ],
      architectureModules: [
        "Player Controller",
        "Swipe Input",
        "Lane Movement",
        "Jump System",
        "Game Manager",
        "UI Manager",
        "Audio Manager",
        "Charge Collection",
        "Enemy Controller",
        "Environment Spawner",
        "Scene Manager",
      ],
      projectImpact: {
        problem:
          "Build a complete and polished 3D endless runner during a 72-hour game jam, supporting both keyboard and mobile swipe controls with responsive gameplay feel.",
        solution:
          "Designed modular gameplay systems including a lane-switching controller, variable jump with coyote time & jump buffering, a charge collection system, enemy chase AI, and a full UI flow — all deployed as a WebGL build playable in portrait orientation on itch.io.",
      },
      metrics: {
        type: "Game Jam Project",
        platform: "WebGL / Mobile Browser",
        engine: "Unity 6",
        language: "C#",
        teamSize: "Solo",
        devTime: "3 Days (Jam) + Polish",
        status: "Completed",
      },
      challenges: [
        {
          challenge: "Designing a polished portrait UI for WebGL.",
          solution:
            "Used Unity's Canvas Scaler with reference resolution and tested across portrait viewports to keep the HUD consistent on different screen sizes.",
        },
        {
          challenge: "Supporting both keyboard and mobile swipe controls in the same build.",
          solution:
            "Implemented a dual-input system — Unity's Input System for keyboard and a custom SwipeDetector script for touch — both feeding into the same LaneController.",
        },
        {
          challenge: "Fine-tuning jump responsiveness with coyote time and jump buffering.",
          solution:
            "Added a coyote time window so players can jump shortly after walking off a ledge, and a jump buffer so queued inputs register correctly for a snappy, forgiving feel.",
        },
        {
          challenge: "Optimizing assets for browser performance.",
          solution:
            "Compressed textures, reduced polygon counts, and configured WebGL build settings for fast load times suitable for itch.io embedding.",
        },
        {
          challenge: "Configuring itch.io portrait embedding correctly.",
          solution:
            "Set custom iframe dimensions in the itch.io project page to match the portrait WebGL canvas, ensuring the game fits the embed frame without scroll or distortion.",
        },
      ],
      learnings: [
        "Game Jam Development",
        "Rapid Prototyping",
        "WebGL Deployment",
        "Responsive UI Design",
        "Mobile Touch Input",
        "Gameplay Feel & Responsiveness",
        "Project Organization",
        "GitHub Documentation",
        "Browser Build Optimization",
      ],
      gallery: {
        gameplay: [
          "Project_Assets/Chargecollector/Gameplay.mp4",
          "Project_Assets/Chargecollector/Mainmenu.png",
          "Project_Assets/Chargecollector/Gameplay.png",
          "Project_Assets/Chargecollector/Gameover.png",
          "Project_Assets/Chargecollector/Screenshot_1.png",
          "Project_Assets/Chargecollector/Screenshot_2.png",
        ],
        development: [],
        editor: [],
      },
      links: {
        itch: "https://abikarthick.itch.io/charge-collector",
        github: "https://github.com/ABIKARTHICKGDEV/Charge-collector",
        linkedin:
          "https://www.linkedin.com/posts/abikarthick_unity-unity3d-gamedevelopment-ugcPost-7486828784998883330-lSx_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSOB30BmmB1CU-K0qKbTzBatWHrXxYbp5U",
      },
      media: {
        banner: "Project_Assets/Chargecollector/Banner.png",
        screenshot: "Project_Assets/Chargecollector/Gameplay.png",
        hoverVideo: "Project_Assets/Chargecollector/Gameplay_hover_vid.mp4",
        video: "Project_Assets/Chargecollector/Gameplay.mp4",
      },
    },
    {
      id: "pong",
      title: "Pong Clone",
      category: "Game Project",
      description:
        "A recreation of the classic Pong arcade game developed in Unity as one of my early game development projects. Originally created on 12 December 2024 and later reworked to improve the code structure, gameplay experience, and mobile support. The project features AI-controlled opponents, score management, audio systems, keyboard controls, and smooth drag controls for Android and mobile browsers.",
      tags: ["unity", "2d"],
      tech: [
        "Unity 6",
        "C#",
        "Rigidbody2D",
        "Unity Physics 2D",
        "TextMeshPro",
        "Unity Scene Management",
      ],
      features: [
        "Classic Pong gameplay",
        "Player vs AI",
        "Ball physics",
        "Collision detection",
        "Score management",
        "Win/Lose system",
        "Background music",
        "Sound effects",
        "Keyboard controls",
        "Android drag controls",
        "Mobile browser support",
      ],
      gameplay: [
        {
          title: "Classic Pong Gameplay",
          description:
            "A faithful recreation of the original Pong experience — two paddles, one ball, and a race to the target score. Simple controls and immediate fun make it an ideal first project for learning core game loop design.",
          image: "Project_Assets/Pongclone/Gameplay1.png",
        },
        {
          title: "Player vs AI",
          description:
            "Compete against an AI-controlled opponent that tracks and reacts to the ball's position. The AI paddle logic provides a consistent challenge while remaining beatable, balancing difficulty for casual play.",
          image: "Project_Assets/Pongclone/Gameplay2.png",
        },
        {
          title: "Ball Physics",
          description:
            "The ball uses Unity's Rigidbody2D for physics-based movement and collision handling. Speed and angle are carefully tuned to keep gameplay fair, responsive, and engaging throughout each match.",
          image: "Project_Assets/Pongclone/Gameplay1.png",
        },
        {
          title: "Score Management & Win/Lose System",
          description:
            "A complete score tracking system awards points when the ball passes the opponent's side. The game monitors win and lose conditions, transitioning to an end screen when the target score is reached.",
          image: "Project_Assets/Pongclone/WinMenu.png",
        },
        {
          title: "Background Music & Sound Effects",
          description:
            "An audio manager handles background music and sound effects for ball hits, scoring events, and game state transitions — creating a more immersive and polished arcade atmosphere.",
          image: "Project_Assets/Pongclone/Gameplay2.png",
        },
        {
          title: "Keyboard Controls",
          description:
            "Desktop players control the paddle using the Up and Down Arrow keys, providing precise and responsive movement that feels natural for classic Pong gameplay.",
          image: "Project_Assets/Pongclone/Gameplay1.png",
        },
        {
          title: "Android Drag Controls",
          description:
            "A custom drag input system was built for Android and mobile browser players, allowing smooth paddle movement via touch and drag — making the game fully playable on touchscreen devices.",
          image: "Project_Assets/Pongclone/Gameplay2.png",
        },
      ],
      systems: [
        {
          title: "Ball Physics",
          description:
            "Handles Rigidbody2D-based ball movement, collision reflection, and speed management throughout gameplay.",
        },
        {
          title: "Paddle Controller",
          description:
            "Controls player paddle movement using keyboard input with smooth, bounded vertical movement.",
        },
        {
          title: "AI Paddle Logic",
          description:
            "Tracks ball position and moves the AI paddle to intercept, providing a consistent and responsive opponent.",
        },
        {
          title: "Score Manager",
          description:
            "Tracks scores for both the player and AI, updates the HUD in real time, and evaluates win and lose conditions.",
        },
        {
          title: "Scene Management",
          description:
            "Handles transitions between the main menu, gameplay, and win/lose screens using Unity Scene Manager.",
        },
        {
          title: "Audio Manager",
          description:
            "Controls background music, ball hit sounds, score sounds, and game state audio transitions.",
        },
        {
          title: "Drag Input System",
          description:
            "A custom touch input system enabling smooth paddle dragging for Android and mobile browser players.",
        },
        {
          title: "Game State Management",
          description:
            "Manages game flow including start, pause, win, and lose states, ensuring clean transitions across the entire gameplay loop.",
        },
      ],
      architectureModules: [
        "Player Controller",
        "Drag Input",
        "Ball Controller",
        "AI Controller",
        "Score Manager",
        "Music Manager",
        "Level Manager",
      ],
      projectImpact: {
        problem:
          "Recreate the classic Pong arcade game with AI opponent support, cross-platform input (keyboard and touch drag), and a complete game loop including scoring, audio, and win/lose states.",
        solution:
          "Built all core Pong systems in Unity 6 using C#: a Rigidbody2D ball controller, AI paddle logic, a score manager with win/lose conditions, an audio manager for music and SFX, keyboard controls for desktop, and a custom drag input system for Android and mobile browser play.",
      },
      metrics: {
        type: "Game Project",
        platform: "Windows / WebGL / Android",
        engine: "Unity 6",
        language: "C#",
        teamSize: "Solo",
        devTime: "Personal Learning Project",
        status: "Completed",
      },
      challenges: [
        {
          challenge: "Implementing responsive AI paddle movement.",
          solution:
            "Tracked the ball's Y position each frame and moved the AI paddle towards it at a controlled speed, providing a challenge without making it unbeatable.",
        },
        {
          challenge: "Balancing ball speed and gameplay difficulty.",
          solution:
            "Tuned Rigidbody2D velocity and added speed scaling after each successful hit to progressively increase challenge while keeping gameplay fair.",
        },
        {
          challenge: "Creating smooth drag controls for Android and WebGL mobile browsers.",
          solution:
            "Built a custom DragInput script using Unity's touch input API that maps touch delta to paddle movement, providing an intuitive and responsive drag experience on both Android and mobile browsers.",
        },
        {
          challenge: "Refactoring an older Unity project using improved coding practices.",
          solution:
            "Reorganised scripts into clearly separated responsibilities — Ball, DragInput, LevelManager, MusicManager, PlayerController, and ScoreManager — improving readability, maintainability, and reusability.",
        },
      ],
      learnings: [
        "Unity 2D Gameplay Programming",
        "Collision and Physics Handling",
        "Game State Management",
        "Mobile Touch Input Implementation",
        "Code Refactoring and Project Organization",
        "Building Projects for Multiple Platforms",
      ],
      gallery: {
        gameplay: [
          "Project_Assets/Pongclone/Gameplay.mp4",
          "Project_Assets/Pongclone/Gameplay1.png",
          "Project_Assets/Pongclone/Gameplay2.png",
          "Project_Assets/Pongclone/WinMenu.png",
        ],
        development: [],
        editor: [],
      },
      links: {
        itch: "https://abikarthick.itch.io/pong",
        github: "https://github.com/ABIKARTHICKGDEV/Pong-clone",
        linkedin:
          "https://www.linkedin.com/posts/abikarthick_unity-unity3d-gamedevelopment-ugcPost-7487058370764513280-D8Ie/",
      },
      media: {
        banner: "Project_Assets/Pongclone/Logo.png",
        screenshot: "Project_Assets/Pongclone/Gameplay1.png",
        hoverVideo: "Project_Assets/Pongclone/Gameplay_hover.mp4",
        video: "Project_Assets/Pongclone/Gameplay.mp4",
      },
    },
    {
      id: "flappy-bird",
      title: "Flappy Bird Clone",
      category: "2D Arcade",
      description:
        "A recreation of the classic Flappy Bird built in Unity. Originally created on 26 May 2024 as my very first game development project, this game introduced me to Unity, C#, 2D physics, collision detection, procedural obstacle spawning, UI management, and gameplay programming. Although simple, it represents the foundation of my journey as a game developer.",
      tags: ["unity", "2d"],
      tech: ["Unity 2022 LTS", "C#", "Unity Physics 2D", "TextMesh Pro"],
      features: [
        "Classic Flappy Bird gameplay",
        "Physics-based bird movement",
        "Infinite procedural pipe generation",
        "Score tracking system",
        "Collision detection",
        "Game Over state",
        "Restart functionality",
        "Infinite scrolling background",
        "Responsive UI",
        "WebGL playable build",
      ],
      gameplay: [
        {
          title: "Physics-Based Bird Movement",
          description:
            "The bird is controlled entirely through Unity's Rigidbody2D. Each tap or Space press applies an upward impulse force, while gravity pulls the bird downward continuously — recreating the tight, responsive feel of the original Flappy Bird.",
          image: "Project_Assets/Flappy Bird/GamePlay_1.png",
        },
        {
          title: "Infinite Procedural Pipe Generation",
          description:
            "Pipes are spawned procedurally at randomised vertical positions and destroyed once off-screen. A dedicated Pipe Generator script controls spawn timing and horizontal gap distance to maintain consistent difficulty throughout the run.",
          image: "Project_Assets/Flappy Bird/GamePlay_2.png",
        },
        {
          title: "Score Tracking System",
          description:
            "A Score Manager awards one point every time the bird successfully passes through a pipe gap. The current score is updated in real time via TextMesh Pro and displayed on the Game Over screen at the end of each run.",
          image: "Project_Assets/Flappy Bird/GamePlay_3.png",
        },
        {
          title: "Collision Detection & Game Over State",
          description:
            "OnCollisionEnter2D handles all collision events — hitting a pipe or the ground immediately triggers the Game Over state, stops gameplay, and presents the player with their final score and a restart option.",
          image: "Project_Assets/Flappy Bird/GamePlay_4.png",
        },
        {
          title: "Infinite Scrolling Background",
          description:
            "The background scrolls continuously at a fixed speed, giving the illusion of infinite forward movement. The scrolling is driven by a lightweight script that offsets the sprite renderer's tiling texture every frame.",
          image: "Project_Assets/Flappy Bird/GamePlay_1.png",
        },
        {
          title: "Restart & Scene Transition",
          description:
            "On Game Over, a restart button reloads the active scene using Unity's Scene Manager, resetting all game state cleanly. This gave me my first hands-on experience with scene lifecycle management in Unity.",
          image: "Project_Assets/Flappy Bird/GamePlay_2.png",
        },
        {
          title: "WebGL Playable Build",
          description:
            "The game is deployed as a WebGL build on itch.io, making it playable directly in the browser without any installation. The build was optimised for fast load times and smooth performance in a web context.",
          image: "Project_Assets/Flappy Bird/GamePlay_3.png",
        },
      ],
      systems: [
        {
          title: "Bird Controller",
          description: "Handles Rigidbody2D input, applies jump impulse on tap/Space, and clamps rotation to reflect velocity direction.",
        },
        {
          title: "Pipe Generator",
          description: "Spawns pipe pairs at timed intervals with randomised vertical offsets and destroys them once they leave the viewport.",
        },
        {
          title: "Pipe Movement",
          description: "Moves all active pipes leftward at a constant speed, creating the illusion of forward flight.",
        },
        {
          title: "Background Scrolling",
          description: "Offsets the background texture continuously to simulate an infinitely scrolling environment.",
        },
        {
          title: "Score Manager",
          description: "Detects when the bird passes a pipe trigger zone, increments the score, and updates the TextMesh Pro HUD in real time.",
        },
        {
          title: "Collision Detection",
          description: "Uses OnCollisionEnter2D and OnTriggerEnter2D events to detect pipe hits, ground contact, and score zone passes.",
        },
        {
          title: "UI Manager",
          description: "Manages HUD visibility, Game Over screen display, final score presentation, and button interactions.",
        },
        {
          title: "Scene Transition",
          description: "Handles scene reload on restart using Unity's SceneManager, resetting all gameplay state cleanly.",
        },
      ],
      architectureModules: [
        "Bird Controller",
        "Pipe Generator",
        "Pipe Movement",
        "Background",
        "Score Detection",
        "UI Manager",
        "Scene Transition",
      ],
      projectImpact: {
        problem:
          "Build a complete, functional arcade game from scratch as a first Unity project — covering physics, procedural spawning, collision detection, scoring, and UI flow.",
        solution:
          "Implemented all core Flappy Bird systems using Unity 2022 LTS and C#: a Rigidbody2D bird controller, procedural pipe spawning, an infinite scrolling background, a score manager, collision-driven game states, and a WebGL-ready build deployed on itch.io.",
      },
      metrics: {
        type: "2D Arcade",
        platform: "Windows / WebGL",
        engine: "Unity 2022 LTS",
        language: "C#",
        teamSize: "Solo",
        devTime: "1 Week",
        status: "Completed",
      },
      challenges: [
        {
          challenge: "Learning Unity for the first time with no prior experience.",
          solution:
            "Studied Unity's documentation and tutorials, then applied each concept directly — starting with GameObjects, components, and the Inspector before moving to scripts and physics.",
        },
        {
          challenge: "Understanding Rigidbody2D physics for jump feel.",
          solution:
            "Experimented with different gravity scales and impulse values until the jump arc felt tight and responsive, matching the original Flappy Bird rhythm.",
        },
        {
          challenge: "Creating endless obstacle generation without performance issues.",
          solution:
            "Implemented a timed spawner that instantiates pipe pairs off-screen and destroys them after they leave the viewport, keeping the scene clean at all times.",
        },
        {
          challenge: "Implementing collision-based game state transitions.",
          solution:
            "Used OnCollisionEnter2D and OnTriggerEnter2D to detect hits and score events, then called the UI Manager to switch states and show the Game Over screen cleanly.",
        },
        {
          challenge: "Building a complete gameplay loop as a first project.",
          solution:
            "Broke the project into isolated scripts — bird, pipes, background, score, and UI — keeping each responsibility separate and manageable for a beginner.",
        },
      ],
      learnings: [
        "Unity Project Structure",
        "Component-Based Architecture",
        "Rigidbody2D Mechanics",
        "Procedural Spawning",
        "UI Implementation",
        "Scene Management",
        "Gameplay Programming Fundamentals",
        "Writing Maintainable C# Scripts",
      ],
      gallery: {
        gameplay: [
          "Project_Assets/Flappy Bird/GamePlay_1.png",
          "Project_Assets/Flappy Bird/GamePlay_2.png",
          "Project_Assets/Flappy Bird/GamePlay_3.png",
          "Project_Assets/Flappy Bird/GamePlay_4.png",
        ],
        development: [],
        editor: [],
      },
      links: {
        itch: "https://abikarthick.itch.io/flappy-bird",
        github: "https://github.com/ABIKARTHICKGDEV/Unity-FlappyBird-Clone",
        linkedin: null,
      },
      media: {
        banner: "Project_Assets/Flappy Bird/Logo.png",
        screenshot: "Project_Assets/Flappy Bird/GamePlay_1.png",
        hoverVideo: "Project_Assets/Flappy Bird/GamePlay_hover.mp4",
        video: "Project_Assets/Flappy Bird/GamePlay.mp4",
      },
    },
    {
      id: "starstuff",
      title: "StarStuff",
      category: "3D Twin-Stick Shooter",
      description:
        "An original sci-fi twin-stick shooter built in Unreal Engine 5. Featuring spherical planet gameplay, enemy AI, weapon systems, and arcade-inspired combat.",
      tags: ["Unreal", "3d", "in-development"],
      tech: ["Unreal", "C++", "Blueprint", "Diversion"],
      features: [
        "Custom 2D physics interactions",
        "Hand-crafted puzzle levels",
        "Modular gameplay systems",
        "Iterative playtesting loop",
      ],
      projectImpact: {
        problem: "Design an original puzzle platformer that teaches mechanics without text.",
        solution:
          "Built modular physics primitives the player learns through play, with level layout driving discovery.",
      },
      metrics: {
        type: "2D Puzzle Platformer",
        platform: "PC",
        engine: "Unity",
        language: "C#",
        teamSize: "Solo",
        devTime: "Ongoing",
        status: "In Development",
      },
      challenges: [
        {
          challenge: "Reliable 2D physics behaviour across framerates.",
          solution: "FixedUpdate-driven physics step with interpolated visuals.",
        },
      ],
      learnings: ["Custom Physics", "Level Design", "Iterative Playtesting"],
      gallery: { gameplay: [], development: [], editor: [] },
     links: {
    itch: "https://abikarthick.itch.io/bros-jump",
    github: "https://github.com/ABIKARTHICKGDEV/Bros-Jump-Unity",
    linkedin: "https://www.linkedin.com/posts/abikarthick_unity-unity3d-gamedevelopment-ugcPost-7477652910747774976-o44n/"
  },  
      
    },
  ],
  showcase: {
    gifs: [],
    videos: [],
    screenshots: [],
  },
  skillGroups: [
    {
      id: "game-engines",
      title: "Game Engines",
      icon: "Gamepad2",
      items: [{ name: "Unity" }, { name: "Unreal Engine" }],
    },
    {
      id: "programming-languages",
      title: "Programming Languages",
      icon: "Code2",
      items: [
        { name: "C#" },
        { name: "C++" },
        { name: "Java" },
        { name: "OOP" },
        { name: "Data Structures" },
      ],
    },
    {
      id: "gameplay-programming",
      title: "Gameplay Programming",
      icon: "Cpu",
      items: [
        { name: "Gameplay Systems" },
        { name: "Physics" },
        { name: "State Machines" },
        { name: "AI Behaviors" },
        { name: "Game Feel" },
        { name: "2D & 3D" },
      ],
    },
    {
      id: "tools",
      title: "Tools",
      icon: "Wrench",
      items: [
        { name: "Git" },
        { name: "Diversion" },
        { name: "UVCS" },
        { name: "Blender" },
        { name: "Visual Studio" },
        { name: "Rider" },
      ],
    },
    {
      id: "problem-solving",
      title: "Problem Solving",
      icon: "Lightbulb",
      items: [
        { name: "Algorithms" },
        { name: "Debugging" },
        { name: "Optimization" },
        { name: "Systems Thinking" },
      ],
    },
  ],
  learningJourney: [
    {
      title: "Unity Learn",
      description: "Self-paced Unity learning across gameplay, UI, and physics.",
      icon: "BookOpen",
    },
    {
      title: "Game Jam",
      description: "Shipped Charge Collector in 72 hours for SCORE SPACE JAM #33.",
      icon: "Trophy",
    },
    {
      title: "Self Learning",
      description: "Studying gameplay programming patterns and engine internals.",
      icon: "Brain",
    },
    {
      title: "Continuous Development",
      description: "Building StarStuff while expanding into Unreal Engine 5 & C++.",
      icon: "Rocket",
    },
  ],
  process: [
    { label: "Concept", icon: "Lightbulb", description: "Idea & pillars" },
    { label: "Design", icon: "PenTool", description: "Mechanics & flow" },
    { label: "Prototype", icon: "Boxes", description: "Greybox & feel" },
    { label: "Develop", icon: "Code2", description: "Systems & content" },
    { label: "Test", icon: "Bug", description: "Iterate from feedback" },
    { label: "Polish", icon: "Sparkles", description: "Juice & performance" },
    { label: "Release", icon: "Rocket", description: "Ship it" },
  ],
  timeline: [
    {
      year: "2024",
      title: "Started Unity Journey",
      description: "Built first 2D games — Pong and Flappy Bird clones.",
    },
    {
      year: "2025",
      title: "First Game Jam",
      description: "Shipped Charge Collector in 72 hours for SCORE SPACE JAM #33.",
    },
    {
      year: "2026",
      title: "Building StarStuff",
      description: "Original 2D physics puzzle platformer in active development.",
    },
  ],
  github: { username: "ABIKARTHICKGDEV" },
  about: {
    bio: "I'm Abikarthick G — a Gameplay Programmer building games in Unity and currently expanding into Unreal Engine 5 with C++. My focus is on gameplay architecture, physics, AI behaviors, optimization, and the small details that make systems feel responsive. Unity is where I learned to ship — from prototype to playable build — and Unreal is the next step in the same continuous path: applying the same engineering principles to a larger toolset.",
    education: [
      {
        degree: "Advanced Diploma in Game Design and Development",
        school: "Monolith Research and Training Labs Pvt Ltd.",
      },
      {
        degree: "B.Tech Information Technology",
        school: "Mailam Engineering College",
        detail: "CGPA: 8.1",
      },
    ],
  },
  // ── Gameplay mechanics carousel (data-driven; add more by appending) ───────
  gameplayMechanics: [
    {
      id: "third-person-shooting",
      title: "🎮 Third-Person Shooting System",
      engine: "Unity",
      category: "Gameplay System",
      difficulty: "Intermediate",
      engineVersion: "Unity 6",
      description:
        "Built a Third-Person Projectile Shooting System in Unity 6 as a gameplay programming prototype to explore core third-person shooter mechanics. This project focuses on implementing aiming, projectile physics, raycast-based target detection, character rotation, and hit effects while integrating with Unity Starter Assets and Cinemachine.",
      purpose:
        "This prototype was built as part of my Gameplay Programming Devlog series to strengthen my understanding of third-person shooter mechanics by implementing the core gameplay systems from scratch and integrating them with Unity's Starter Assets.",
      usedIn: "Gameplay programming devlogs, Unity Starter Assets shooter controller, and prototype templates.",
      benefit:
        "Hands-on experience implementing over-the-shoulder cameras, clean gameplay architecture, and rigidbody projectile collision dynamics.",
      experience:
        "Delivers responsive character aiming, camera shoulder swapping, smooth zoom transitions, and dynamic impact particles.",
      media: {
        preview: "GamePlay_Machnics/Thirdperson_shooter/cover.png",
        hoverVideo: "GamePlay_Machnics/Thirdperson_shooter/Gameplay_loop.mp4",
        video: "GamePlay_Machnics/Thirdperson_shooter/Gameplay.mp4",
      },
      links: {
        github: "https://github.com/ABIKARTHICKGDEV/Third-Person-Shooting-System",
      },
      articleUrl:
        "https://www.linkedin.com/posts/abikarthick_i-recently-built-a-third-person-projectile-activity-7477078553465880577-Mdzu",
      features: [
        "Cinemachine Aim Camera",
        "Rigidbody-based Projectile Shooting",
        "Screen-Center Raycasting",
        "Character Rotation Towards Aim Direction",
        "Different Hit Effects for Targets and Environment",
        "Smooth Aim Transition",
        "Unity Starter Assets Integration",
      ],
      technologies: [
        "Unity 6",
        "C#",
        "Cinemachine",
        "Unity Starter Assets",
        "Rigidbody Physics",
        "Physics Raycasting",
      ],
      learnings: [
        "Third-Person Camera Systems",
        "Gameplay Programming",
        "Projectile Physics",
        "Raycasting",
        "Collision Detection",
        "Unity Input System",
        "Character Rotation",
        "Clean Gameplay Architecture",
      ],
      gallery: {
        gameplay: ["GamePlay_Machnics/Thirdperson_shooter/cover.png"],
        development: [
          "GamePlay_Machnics/Thirdperson_shooter/code1.png",
          "GamePlay_Machnics/Thirdperson_shooter/code2.png",
        ],
      },
      flow:
        "Receive input for aiming / shooting\nTransition camera to over-the-shoulder view\nRaycast from screen center to find target point\nRotate character toward aiming direction\nSpawn projectile and apply rigidbody force\nTrigger hit effects on impact",
      architecture:
        "PlayerController → ThirdPersonShooterController → ProjectileGun → RigidbodyProjectile → CinemachineVirtualCamera",
      breakdown: [
        "Cinemachine Aim Camera",
        "Screen-Center Raycasting",
        "Projectile Physics (Rigidbody)",
        "Character Aim Rotation",
        "Dynamic Hit Effect Spawning",
      ],
      steps: [
        "Set up Cinemachine virtual cameras (Follow & Aim)",
        "Read input via Unity Input System (Aim & Shoot)",
        "Implement Screen-Center Raycast target detection",
        "Configure Rigidbody projectile prefab with forward force",
        "Code smooth character rotation to match screen center",
        "Instantiate hit particles based on target tags (Target vs Env)",
      ],
      challenges: [
        {
          challenge: "Screen-Center Raycast alignment when player is close to walls",
          solution:
            "Implemented a minimum range check and offset the raycast start position forward from the character's camera viewport to prevent raycasts from clipping through near geometry.",
        },
        {
          challenge: "Smooth transition between follow camera and aim camera views",
          solution:
            "Used Cinemachine camera blending with custom damping values and dynamically updated the player's mouse sensitivity dynamically when aiming is active.",
        },
      ],
    },
    {
      id: "angry-birds-slingshot",
      title: "Angry Birds Slingshot Mechanics",
      engine: "Unity",
      category: "Gameplay Mechanics",
      difficulty: "Intermediate",
      engineVersion: "Unity 6",
      description:
        "A recreation of the core Angry Birds slingshot mechanic built in Unity 6 using C#. This project demonstrates mouse drag controls, constrained aiming, dynamic LineRenderer slingshot bands, physics-based launching, and Cinemachine camera follow while focusing on gameplay programming fundamentals.",
      purpose:
        "Recreate the core slingshot mechanics of Angry Birds to demonstrate screen space to world space conversion, constrained dragging, dynamic bands rendering, and physics-based launches in Unity.",
      usedIn: "Slingshot-style games, physics-based projectile launchers, and trajectory aiming systems.",
      benefit:
        "Provides a highly polished, tactile, and intuitive dragging feel with dynamic visual cues that map directly to physics-based results.",
      experience:
        "Delivers fluid drag feedback, circular boundary constraints, responsive rubber bands stretching, realistic trajectory launching, and smooth Cinemachine camera follow.",
      media: {
        preview: "GamePlay_Machnics/Angry_bird_Slingshot/cover.png",
        hoverVideo: "GamePlay_Machnics/Angry_bird_Slingshot/gameplay.mp4",
        video: "GamePlay_Machnics/Angry_bird_Slingshot/gameplay.mp4",
      },
      links: {
        github: "https://github.com/ABIKARTHICKGDEV/Angry-Birds-Slingshot-Mechanics-Unity-6-",
      },
      articleUrl:
        "https://www.linkedin.com/posts/abikarthick_unity-unity3d-unity6-ugcPost-7479609923450871808-xddi/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSOB30BmmB1CU-K0qKbTzBatWHrXxYbp5U",
      features: [
        "🖱️ Mouse Drag & Drop Controls",
        "🎯 Follow Mouse System",
        "📏 Limited Drag Distance",
        "⭕ Circular Drag Boundary",
        "🕸️ Dynamic Slingshot Bands",
        "🚀 Physics-Based Launch",
        "🎥 Cinemachine Camera Follow",
        "🧱 Modular Gameplay Architecture",
      ],
      technologies: [
        "Unity 6",
        "C#",
        "Unity Input System",
        "Rigidbody2D",
        "LineRenderer",
        "Cinemachine",
      ],
      learnings: [
        "Screen Space to World Space conversion",
        "Unity Input System",
        "Vector Mathematics",
        "Rigidbody2D Physics",
        "ForceMode2D.Impulse",
        "Dynamic LineRenderer updates",
        "Camera tracking using Cinemachine",
        "Modular gameplay scripting",
      ],
      gallery: {
        gameplay: [
          "GamePlay_Machnics/Angry_bird_Slingshot/cover.png",
          "GamePlay_Machnics/Angry_bird_Slingshot/gameplayscreenshot1.png",
          "GamePlay_Machnics/Angry_bird_Slingshot/gameplayscreenshot2.png",
        ],
        development: [
          "GamePlay_Machnics/Angry_bird_Slingshot/code_01.png",
          "GamePlay_Machnics/Angry_bird_Slingshot/code_02.png",
          "GamePlay_Machnics/Angry_bird_Slingshot/code_03.png",
          "GamePlay_Machnics/Angry_bird_Slingshot/code_04.png",
        ],
      },
      flow:
        "Detect mouse down on projectile\nConvert mouse screen position to world coordinates\nClamp drag position within circular boundary\nUpdate dynamic LineRenderer slingshot bands\nApply physical impulse on mouse release\nTrigger Cinemachine camera target follow",
      architecture:
        "InputSystem → SlingshotHandler → TrajectoryPredictor → SlingshotBandsRenderer → Rigidbody2DProjectile → CinemachineVirtualCamera",
      breakdown: [
        "Screen Space to World Space conversion",
        "Vector distance clamping (Circular Boundary)",
        "Dynamic LineRenderer vertex updates",
        "Rigidbody2D impulse launching",
        "Cinemachine camera target tracking",
      ],
      steps: [
        "Create slingshot center anchor and drag boundary circle",
        "Implement mouse drag interactions on projectile collider",
        "Clamp drag vector length to maximum allowed distance",
        "Set LineRenderer positions dynamically based on projectile coordinates",
        "On drag release, disable LineRenderer and add ForceMode2D.Impulse",
        "Configure Cinemachine follow target to trace the launched projectile",
      ],
      challenges: [
        {
          challenge: "Constraining projectile drag to a perfect circle around the anchor",
          solution:
            "Calculated the offset vector from anchor to mouse position, checked magnitude, and normalized/scaled it by the maximum distance if it exceeded the limit.",
        },
        {
          challenge: "Keeping slingshot bands attached correctly as the projectile moves",
          solution:
            "Created left/right band anchor points and updated the LineRenderer start/end points to point dynamically between those anchors and the projectile's transform position in real time.",
        },
      ],
    },
    {
      id: "basketball-shooter",
      title: "Basketball Shooter",
      engine: "Unity",
      category: "Gameplay Mechanics",
      difficulty: "Intermediate",
      engineVersion: "Unity 6",
      description:
        "A basketball shooting mechanic built in Unity 6 — content coming soon.",
      purpose: "Explore arc-based projectile trajectories and basket detection in Unity.",
      usedIn: "Sports games, trajectory aiming systems, and physics-based gameplay prototypes.",
      benefit: "Demonstrates parabolic trajectory calculation, physics-based ball launching, and rim collision detection.",
      experience: "Satisfying arc launch with precise basket entry detection — content details coming soon.",
      media: {},
      features: [
        "Arc-based ball trajectory",
        "Physics-based launching",
        "Basket detection",
        "Score system",
      ],
      technologies: [
        "Unity 6",
        "C#",
        "Rigidbody Physics",
        "Physics Raycasting",
      ],
      learnings: [
        "Parabolic Trajectory Math",
        "Physics-Based Launching",
        "Collision Detection",
        "Score Systems",
      ],
    },
    {
      id: "enemy-ai",
      title: "Enemy AI",
      engine: "Unity",
      description: "Behavior-tree driven NPCs with perception, patrol, and combat states.",
      media: {},
    },
    {
      id: "dialogue-system",
      title: "Dialogue System",
      engine: "Unity",
      description: "Branching dialogue with conditions, variables, and typewriter UI.",
      media: {},
    },
    {
      id: "inventory-system",
      title: "Inventory System",
      engine: "Unity",
      description: "Grid-based inventory with stacking, drag-and-drop, and ScriptableObject items.",
      media: {},
    },
    {
      id: "camera-controller",
      title: "Camera Controller",
      engine: "Unity",
      description: "Cinemachine-style follow with damping, look-ahead, and collision avoidance.",
      media: {},
    },
    {
      id: "save-system",
      title: "Save System",
      engine: "Unity",
      description: "JSON-based save/load with versioning and slot management.",
      media: {},
    },
    {
      id: "state-machine",
      title: "State Machine",
      engine: "Unity",
      description: "Generic FSM with typed transitions for player, AI, and UI flows.",
      media: {},
    },
    {
      id: "procedural-generation",
      title: "Procedural Generation",
      engine: "Unity",
      description: "Seeded room/level generation with constraint-based layout rules.",
      media: {},
    },
  ],
};
