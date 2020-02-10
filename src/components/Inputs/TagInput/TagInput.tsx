import React, { useEffect } from 'react';
import './TagInput.scss';

const constructHTMLElement = (type: string, className?: string, innerHtml?: string): HTMLElement => {
  const element = document.createElement(type);
  if (className) applyClassName(element, className);
  if (innerHtml) applyInnerHTML(element, innerHtml);
  return element;
};

const applyClassName = (node: HTMLElement, className: string) => node.classList.add(className);
const applyInnerHTML = (node: HTMLElement, innerHTML: string) => (node.innerHTML = innerHTML);

export interface TagInputProps {
  /* ID for the element */
  id?: string;
  /* Tag background color */
  tagBgColor?: string;
  /* Tag font color */
  color?: string;
  /* Tag font size */
  fontSize?: number;
  /* Input width */
  width?: number;
  /* Tag right and left padding */
  tagRLPadding?: number;
  /* Tag top and bottom padding */
  tagTBPadding?: number;
  /* Tag font family  */
  fontFamily?: string;
}

const TagInput = (props: TagInputProps) => {
  const {
    id,
    tagBgColor = '#F0F6F9',
    color = '#1f0d39',
    fontSize = 0.8,
    width = 20,
    tagRLPadding = 0.6,
    tagTBPadding = 0.5,
    fontFamily = "'Source Code Pro', monospace",
  } = props;

  const focusInput = () => document.getElementById('tag-input').focus();

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    document.getElementById('tag-wrapper').removeChild(e.target.parentNode);
  };

  const createNewTag = (content: string): any => {
    const tag = constructHTMLElement('div', 'tag');
    const tagContent = constructHTMLElement('span', null, content);
    const tagDeleteButton = constructHTMLElement('span', 'tag-delete-button', 'x');
    tagDeleteButton.addEventListener('click', (e: React.MouseEvent<HTMLElement>) => handleDelete(e));
    tag.appendChild(tagContent);
    tag.appendChild(tagDeleteButton);
    return tag;
  };

  const appendNewTag = () => {
    const tagWrapper = document.getElementById('tag-wrapper');
    const tagInput = document.getElementById('tag-input');
    const lastChild = tagWrapper.lastChild;
    const newTag = createNewTag(lastChild.innerHTML);
    tagWrapper.appendChild(newTag);
    tagWrapper.appendChild(lastChild);
    tagInput.innerHTML = '';
  };

  const handleOnInput = (e: any) => {
    if (e.which === 13) {
      e.preventDefault();
      appendNewTag();
      focusInput();
    }
  };

  useEffect(() => {
    document.getElementById('tag-input').addEventListener('keypress', (e: React.KeyboardEvent) => handleOnInput(e));
  }, []);

  useEffect(() => {
    document.getElementById('tag-wrapper').addEventListener('click', focusInput);
  }, []);

  const tagInputStyles = { maxWidth: `${width - 2}rem` };
  const tagWrapperStyles = { fontSize: `${fontSize}rem`, color, width: `${width}rem`, fontFamily };
  document.documentElement.style.setProperty('--tagBgColor', tagBgColor);
  document.documentElement.style.setProperty('--tagPadding', `${tagTBPadding}rem ${tagRLPadding}rem`);

  return (
    <div id={id} className="TagInput">
      <div id="tag-wrapper" className="tag-input-wrapper" style={tagWrapperStyles}>
        <div id="tag-input" contentEditable="true" style={tagInputStyles} />
      </div>
    </div>
  );
};

export default TagInput;
