import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const students = JSON.parse(
  fs.readFileSync(join(__dirname, 'students.json'), 'utf8'));
export default students;
