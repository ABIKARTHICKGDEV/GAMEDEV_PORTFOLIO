import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const videos = [
  "../public/Project_Assets/Bro's_Jump/gameplay.mp4",
  "../public/Project_Assets/Bro's_Jump/Bro's_jump_Hover_video.mp4",
  "../public/Project_Assets/Chargecollector/Gameplay.mp4",
  "../public/Project_Assets/Chargecollector/Gameplay_hover_vid.mp4",
];

for (const rel of videos) {
  const videoPath = join(__dirname, rel);
  try {
    const buf = readFileSync(videoPath);
    let audioFound = false;
    for (let i = 0; i < buf.length - 4; i++) {
      if (buf[i] === 115 && buf[i+1] === 111 && buf[i+2] === 117 && buf[i+3] === 110) {
        audioFound = true; break;
      }
    }
    let aacFound = false;
    for (let i = 0; i < buf.length - 4; i++) {
      if (buf[i] === 109 && buf[i+1] === 112 && buf[i+2] === 52 && buf[i+3] === 97) {
        aacFound = true; break;
      }
    }
    console.log(`\nFile: ${rel}`);
    console.log(`  Size: ${buf.length} bytes`);
    console.log(`  Has audio ('soun'): ${audioFound ? '✅ YES' : '❌ NO'}`);
    console.log(`  Has AAC ('mp4a'): ${aacFound ? '✅ YES' : '❌ NO'}`);
  } catch(e) {
    console.log(`\nFile: ${rel} - ERROR: ${e.message}`);
  }
}
