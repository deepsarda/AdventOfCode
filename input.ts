import * as fs from 'fs';
import { daynumber } from './constants';

export const file = fs.readFileSync("./input"+daynumber+".txt").toString();

