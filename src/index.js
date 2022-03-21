import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyPolyfills, defineCustomElements } from 'h8k-components/loader';

const treeDirectory = [
  {
    name: "root",
    isFolder: true,
    childFiles: [
      {
        name: "AUT",
        isFolder: true,
        childFiles: [
          {
            name: "Learning Task 1.docs",
            isFolder: false
          },
          {
            name: "Applied HCI",
            isFolder: true,
            childFiles: [
              {
                name: "example_10.pdf",
                isFolder: false,
              },
              {
                name: "slides",
                isFolder: true,
                childFiles: [
                  {
                    name: "slides1.ppt",
                    isFolder: false,
                  },
                  {
                    name: "slides2.ppt",
                    isFolder: false,
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "bkim.jpeg",
        isFolder: false
      }
    ]
  }

]

ReactDOM.render(<App treeDirectory={treeDirectory} />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
})
