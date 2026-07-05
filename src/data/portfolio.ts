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
    linkedin: string;
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
  resume: "/resume-gameplay.pdf",
  resumeVariants: {
    unity: "/resume-unity.pdf",
    unreal: "/resume-unreal.pdf",
    gameplay: "/resume-gameplay.pdf",
    software: "/resume-software.pdf",
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
      // featured: true,
      description:
        "A fast-paced 3D endless runner created for SCORE SPACE JAM #33. Dodge obstacles, collect charges, and rack up a high score as difficulty ramps.",
      
      tags: ["unity", "3d", "game-jam"],
      tech: ["Unity", "C#", "Git", "Blender"],
      features: [
        "Procedural obstacle spawning",
        "Score-based difficulty scaling",
        "Object-pooled obstacles & collectibles",
        "Juicy SFX + camera shake",
      ],
      projectImpact: {
        problem: "Create an endless runner with increasing difficulty in 72 hours.",
        solution:
          "Implemented procedural obstacle spawning and score-based progression with pooled GameObjects.",
      },
      metrics: {
        type: "3D Endless Runner",
        platform: "PC / WebGL",
        engine: "Unity",
        language: "C#",
        teamSize: "Solo",
        devTime: "72 Hours",
        status: "Completed",
      },
      challenges: [
        {
          challenge: "Infinite obstacle generation without GC spikes.",
          solution: "Object pooling system with pre-warmed obstacle pools.",
        },
        {
          challenge: "Keeping difficulty fair as speed scales..",
          solution: "Score-driven spawner weights & cooldown windows.",
        },
      ],
      learnings: [
        "Object Pooling",
        "State Machines",
        "Physics Systems",
        "UI Architecture",
        "Git Workflow",
      ],
      gallery: { gameplay: [], development: [], editor: [] },
      links: {
        itch: "https://ABIKARTHICKGDEV.itch.io/charge-collector",
        github: "https://github.com/ABIKARTHICKGDEV",
        linkedin: "ABC",
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
    {
      id: "flappy-bird",
      title: "Flappy Bird Clone",
      category: "2D Arcade",
      description:
        "A faithful Flappy Bird clone in Unity — pipe spawning, scoring, and game-over flow. Built to study tight arcade loops.",
      tags: ["unity", "2d"],
      tech: ["Unity", "C#", "Git"],
      features: ["Procedural pipe spawning", "Score tracking & high score", "Restart flow"],
      projectImpact: {
        problem: "Recreate Flappy Bird's tight one-button feel.",
        solution:
          "Calibrated jump impulse + pipe spacing so the difficulty curve matches the original.",
      },
      metrics: {
        type: "2D Arcade",
        platform: "PC / WebGL",
        engine: "Unity",
        language: "C#",
        teamSize: "Solo",
        devTime: "1 Week",
        status: "Completed",
      },
      challenges: [
        {
          challenge: "Pipe spacing felt inconsistent at higher speeds.",
          solution: "Time-based spawner with fixed horizontal gap calculation.",
        },
      ],
      learnings: ["Gamefeel Tuning", "Scoring Systems", "Scene Flow"],
      gallery: { gameplay: [], development: [], editor: [] },
     links: {
    itch: "https://abikarthick.itch.io/bros-jump",
    github: "https://github.com/ABIKARTHICKGDEV/Bros-Jump-Unity",
    linkedin: "https://www.linkedin.com/posts/abikarthick_unity-unity3d-gamedevelopment-ugcPost-7477652910747774976-o44n/"
  },  
    },
    {
      id: "pong",
      title: "Pong Clone",
      category: "2D Arcade",
      description:
        "Classic Pong built from scratch in Unity. Local 2-player, paddle physics, and a clean scoring HUD.",
      tags: ["unity", "2d"],
      tech: ["Unity", "C#", "Git"],
      features: ["Two-player local", "Angle-based paddle reflection", "Score HUD"],
      projectImpact: {
        problem: "Build a foundational arcade game from zero.",
        solution: "Implemented paddle reflection math and a deterministic ball reset routine.",
      },
      metrics: {
        type: "2D Arcade",
        platform: "PC",
        engine: "Unity",
        language: "C#",
        teamSize: "Solo",
        devTime: "3 Days",
        status: "Completed",
      },
      challenges: [
        {
          challenge: "Ball reflection felt random.",
          solution: "Mapped contact point to outgoing angle for predictable bounces.",
        },
      ],
      learnings: ["2D Physics", "Input Handling", "UI Basics"],
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
    // TODO: add media (preview/gif/video) and links (github/demo) as systems ship.
    {
      id: "wall-jump",
      title: "Wall Jump",
      engine: "Unity",
      category: "Movement System",
      difficulty: "Intermediate",
      engineVersion: "Unity 2024.3",
      description:
        "Kinematic wall detection with coyote-time and variable jump impulse for responsive platforming.",
      purpose:
        "Create a polished wall-jump mechanic that rewards timing and retains player momentum while supporting level traversal.",
      usedIn: "Platforming traversal, vertical navigation, and momentum-based combat arenas.",
      benefit:
        "A reliable wall jump adds depth to movement and enables more expressive level design without compromising control.",
      experience:
        "Feels responsive and consistent, with a satisfying jump arc and immediate recovery after impact.",
      media: { preview: "/bg/mechanics.jpg" },
      flow:
        "Detect wall contact\nEnable wall jump window\nApply jump impulse\nTransition to air state\nBlend animation and camera",
      architecture: "PlayerController → WallDetection → JumpImpulse → StateMachine → Camera",
      breakdown: [
        "Wall contact and surface normals",
        "Coyote time and input buffering",
        "Variable jump height and impulse",
        "Momentum conservation and air control",
        "Animation blending and feedback",
      ],
      steps: [
        "Confirm valid wall surface",
        "Open a wall-jump buffer window",
        "Apply targeted impulse away from surface",
        "Switch to airborne movement state",
        "Allow directional control in mid-air",
      ],
      challenges: [
        {
          challenge: "Preventing repeated wall jump exploitation",
          solution:
            "Added a cooldown and grounded reset condition so players can’t chain wall jumps indefinitely."
        },
        {
          challenge: "Maintaining animation feel during rapid input",
          solution:
            "Used a blend tree with dynamic root motion and matched velocity to keep transitions smooth."
        },
      ],
    },
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
      id: "object-pooling",
      title: "Object Pooling",
      engine: "Unity",
      description: "Pre-warmed pools to eliminate GC spikes during heavy spawn loads.",
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
      id: "turn-based-grid",
      title: "Turn Based Grid System",
      engine: "Unity",
      description: "Tile grid with pathfinding, action points, and turn queue.",
      media: {},
    },
    {
      id: "procedural-generation",
      title: "Procedural Generation",
      engine: "Unity",
      description: "Seeded room/level generation with constraint-based layout rules.",
      media: {},
    },
    {
      id: "input-system",
      title: "Input System",
      engine: "Unity",
      description: "Unity Input System bindings with rebinding UI and device switching.",
      media: {},
    },
    {
      id: "animation-controller",
      title: "Animation Controller",
      engine: "Unreal Engine",
      description: "Animation Blueprint with state machines, blend spaces, and root motion.",
      media: {},
    },
  ],
};
