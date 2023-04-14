import React, { useState } from 'react';
import Footerportion from './Footerportion';

const HtmlToReactConverter = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const [reactOutput, setReactOutput] = useState('');

  const convertHtmlToReact = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const jsx = nodeToJSX(doc.body, '    ');

    const outputCode =
`import React from 'react';

const MyComponent = () => {
  return (
${jsx}
  );
};

export default MyComponent;`;

    return outputCode;
  };

  const nodeToJSX = (node, indent = '') => {
    const childNodes = Array.from(node.childNodes);
  
    if (childNodes.length === 0) {
      return '';
    }
  
    return childNodes
      .map((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          return indent + child.textContent.replace(/[{}<>]/g, (match) => `{'${match === '<' ? '&lt;' : match === '>' ? '&gt;' : match}'}`).trim();
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          const tagName = child.tagName.toLowerCase();
          const attributes = Array.from(child.attributes)
            .map((attr) => {
              const attrName = attr.name === 'class' ? 'className' : attr.name;
              return `${attrName}="${attr.value}"`;
            })
            .join(' ');
          const children = nodeToJSX(child, indent + '  ');
  
          return (
            `${indent}<${tagName}${attributes ? ' ' + attributes : ''}>` +
            (children ? `\n${children}\n${indent}` : '') +
            `</${tagName}>`
          );
        } else {
          return '';
        }
      })
      .filter(Boolean)
      .join('\n');
  };
  

  const handleConvertClick = () => {
    setReactOutput(convertHtmlToReact(htmlInput));
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">HTML to React Converter</h1>
        <h1 className="text-md font-semibold text-center text-blue-500 mb-8">(Open Source Porject)</h1>
        <div className="relative px-4 py-10 bg-white shadow-md sm:rounded-3xl sm:p-10">
          <div className="mb-6">
            <label htmlFor="html-input" className="block text-sm font-medium text-gray-700">
              Enter HTML code:
            </label>
            <textarea
              id="html-input"
              rows="10"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={handleConvertClick}
            className="w-full mb-6 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Convert to React
          </button>
        
          <div>
          <label htmlFor="react-output" className="block text-sm font-medium text-gray-700">
              React code:
            </label>
            <textarea
              id="react-output"
              rows="10"
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
              value={reactOutput}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <Footerportion/>
    </>
  );
};

export default HtmlToReactConverter;
