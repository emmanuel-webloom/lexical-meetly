/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {WebsocketProvider} from 'y-websocket';
import {Doc} from 'yjs';

// const url = new URL(window.location.href);
// const params = new URLSearchParams(url.search);
const WEBSOCKET_ENDPOINT = 'ws://localhost:8080/';
const WEBSOCKET_SLUG = 'notes/shared';
// const WEBSOCKET_ID = params.get('collabId') || '11';

// parent dom -> child doc
export function createWebsocketProvider(
  id: string,
  yjsDocMap: Map<string, Doc>,
): WebsocketProvider {
  let doc = yjsDocMap.get(id);

  if (doc === undefined) {
    doc = new Doc();
    yjsDocMap.set(id, doc);
  } else {
    doc.load();
  }

  const wsProvider = new WebsocketProvider(
    WEBSOCKET_ENDPOINT,
    WEBSOCKET_SLUG + '/' + id + '/',
    doc,
    {
      connect: false,
    },
  );
  wsProvider.connect();

  return wsProvider;
}
