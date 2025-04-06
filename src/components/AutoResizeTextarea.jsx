import React, { useState, useRef, useEffect } from 'react';

const AutoResizeTextarea = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      style={{
        width: '100%',
        overflow: 'hidden',
        resize: 'none',
      }}
    />
  );
};

export default AutoResizeTextarea;
