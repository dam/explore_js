/// <reference path="../../typings/tsd.d.ts" />
'use strict';
import * as net from 'net';

const ldj = require('./ldj.js');

interface Message {
  type: string
  file: string
  timestamp?: number
}

let netClient = net.connect({ port: 5444 });
let ldjClient = ldj.connect(netClient);

ldjClient.on('message', (message: Message) => {	
  if(message.type === 'watching') {
    console.log(`Now watching ${message.file}`);  
  }
  else if (message.type === 'changed') {
    let date = new Date(message.timestamp);
    console.log(`File ${message.file} changed at ${date}`);
  }
  else {
    throw Error(`Unrecognized message type ${message.type}`);
  }
});