import React, { useEffect } from 'react';
import './TagInput.scss';

export interface TagInputProps {
  /** ID for the element */
  id?: string;
}

const TagInput = (props: TagInputProps) => {
  const focusInput = () => document.getElementById('tag-input').focus();

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    document.getElementById('tag-wrapper').removeChild(e.target.parentNode);
    focusInput();
  };

  const createTag = (content: string): HTMLElement => {
    const tag = constructHTMLElement('div', 'tag');
    const tagContent = constructHTMLElement('span', null, content);
    const tagDeleteButton = constructHTMLElement('span', 'tag-delete-button', 'x');
    tagDeleteButton.addEventListener('click', (e: React.MouseEvent<HTMLElement>) => handleDelete(e));
    tag.appendChild(tagContent);
    tag.appendChild(tagDeleteButton);
    return tag;
  };

  const appendTag = () => {
    const tagWrapper = document.getElementById('tag-wrapper');
    const tagInput = document.getElementById('tag-input');
    const lastChild = tagWrapper.lastChild;
    const tag = createTag(lastChild.innerHTML);
    tagWrapper.appendChild(tag);
    tagWrapper.appendChild(lastChild);
    tagInput.innerHTML = '';
  };

  const handleOnInput = (e: any) => {
    if (e.which === 13) {
      e.preventDefault();
      appendTag();
      focusInput();
    }
  };

  useEffect(
    () =>
      document.getElementById('tag-input').addEventListener('keypress', (e: React.KeyboardEvent) => handleOnInput(e)),
    [],
  );

  useEffect(() => {
    document.getElementById('tag-wrapper').addEventListener('click', () => focusInput());
  }, []);

  return (
    <div className="TagInput">
      <div id="tag-wrapper" className="tag-input-wrapper">
        <div id="tag-input" contentEditable="true" />
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
