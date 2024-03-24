import { it } from 'vitest';
import { describe } from 'vitest';
import { expect } from 'vitest';
import React from '../core/React';

describe('createElement', () => {
  it('props is null', () => {
    const el = React.createElement('div', null, 'hello');

    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "hello",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
        },
        "type": "div",
      }
    `);
  });

  it('should be an element with props', () => {
    const el = React.createElement('div', { id: 'id' }, 'there');
    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "there",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
          "id": "id",
        },
        "type": "div",
      }
    `);
  });
});
