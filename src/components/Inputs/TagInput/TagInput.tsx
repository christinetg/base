import React, { useEffect } from 'react';
import './TagInput.scss';

export interface TagInputProps {
  /** ID for the element */
  id?: string;
}

const TagInput = (props: TagInputProps) => {
  const focusInput = () => document.getElementById('input-div').focus();

  const appendTag = () => {
    const tagWrapper = document.getElementById('tag-wrapper');
    const tagInput = document.getElementById('input-div');
    const lastChild = tagWrapper.lastChild;
    const tag = createTag(lastChild.innerHTML);
    tagWrapper.appendChild(tag);
    tagWrapper.appendChild(lastChild);
    tagInput.innerHTML = '';
    focusInput();
  };

  const handleOnInput = (e: any) => {
    if (e.which === 13) {
      e.preventDefault();
      appendTag();
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    document.getElementById('tag-wrapper').removeChild(e.target.parentNode);
    focusInput();
  };

  useEffect(
    () =>
      document.getElementById('input-div').addEventListener('keypress', (e: React.KeyboardEvent) => handleOnInput(e)),
    [],
  );

  useEffect(() => {
    document.getElementById('tag-wrapper').addEventListener('click', () => focusInput());
  }, []);

  const createTag = (content: string): HTMLElement => {
    const tag = constructHTMLElement('div', 'tag');
    const tagContent = constructHTMLElement('span', null, content);
    const tagDeleteButton = constructHTMLElement('span', 'delete-button', 'x');
    tagDeleteButton.addEventListener('click', (e: React.MouseEvent<HTMLElement>) => handleDelete(e));
    tag.appendChild(tagContent);
    tag.appendChild(tagDeleteButton);
    return tag;
  };

  return (
    <div className="TagInput">
      <div id="tag-wrapper" className="tag-input-wrapper">
        <div id="input-div" contentEditable="true" />
      </div>
    </div>
  );
};

export default TagInput;

const constructHTMLElement = (type: string, className?: string, innerHtml?: string): HTMLElement => {
  const element = document.createElement(type);
  if (className) applyClassName(element, className);
  if (innerHtml) applyInnerHTML(element, innerHtml);
  return element;
};

const applyClassName = (node: HTMLElement, className: string) => node.classList.add(className);
const applyInnerHTML = (node: HTMLElement, innerHTML: string) => (node.innerHTML = innerHTML);
