/**
 * Short UID Generator (Command Line Tool)
 *
 * This program generates URL-friendly ( a-z A-Z 0-9 and - _ ) unique ID.
 *
 * DO NOT USE IT WITH CRYPTOGRAPHICAL PURPOSE!
 *
 * Usage:
 *   node gen-sid [worker_id]
 *   @param {int: 0-16} worker_id  When multiple servers involved, assign unique Worker ID to each server.
 */

'use strict';

const CHARS_PREFIX  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const CHARS_POSTFIX = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const WORKER_ID     = Math.round(process.argv[2]);

let shortid  = require('shortid');
let workerID = 0;
let prefix   = null;
let postfix  = null;

if (Number.isNaN(WORKER_ID) || WORKER_ID < 0 || WORKER_ID > 16)
{
  workerID = 0;
}
else
{
  workerID = WORKER_ID;
}

prefix  = CHARS_PREFIX[rand( 0, CHARS_PREFIX.length-1)];
postfix = CHARS_POSTFIX[rand(0, CHARS_POSTFIX.length-1)];
shortid.worker(workerID);
console.log( prefix + shortid.generate() + postfix );

// Function Definitions

function rand(min, max)
{
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
