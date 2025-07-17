import React, { useEffect, useState } from 'react';
import { Box, Text, Select, Loader } from '@mantine/core';
interface EditorProps {
  darkMode: boolean;
}
const Editor: React.FC<EditorProps> = ({
  darkMode
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(`// Welcome to CodeCollab
// Start typing to collaborate in real-time
function greet(name) {
  return \`Hello, \${name}! Welcome to our collaborative editor.\`;
}
console.log(greet("Developer"));
`);
  useEffect(() => {
    // Simulate loading the editor
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  // This would be where we'd connect to WebSockets
  useEffect(() => {
    // Simulating WebSocket connection
    console.log('Connecting to WebSocket server...');
    return () => {
      console.log('Disconnecting from WebSocket server...');
    };
  }, []);
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // In a real implementation, we would send this change to the WebSocket server
  };
  return <div className="flex flex-col h-full">
      <div className={`flex justify-between items-center p-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <Text size="sm" fw={500}>
          main.js
        </Text>
        <Select size="xs" value={language} onChange={value => setLanguage(value || 'javascript')} data={[{
        value: 'javascript',
        label: 'JavaScript'
      }, {
        value: 'typescript',
        label: 'TypeScript'
      }, {
        value: 'html',
        label: 'HTML'
      }, {
        value: 'css',
        label: 'CSS'
      }]} style={{
        width: 130
      }} />
      </div>
      <div className="flex-1 overflow-auto">
        {isLoading ? <div className="h-full flex items-center justify-center">
            <Loader size="md" />
            <Text ml="md">Loading editor...</Text>
          </div> : <pre className={`p-4 h-full font-mono text-sm leading-relaxed outline-none ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`} contentEditable suppressContentEditableWarning onInput={e => handleCodeChange(e.currentTarget.textContent || '')}>
            {code}
          </pre>}
      </div>
      <div className={`flex justify-between items-center text-xs p-2 border-t ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
        <div>Line 1, Column 1</div>
        <div>Spaces: 2</div>
        <div>UTF-8</div>
        <div>Collaborative Editing: On</div>
      </div>
    </div>;
};
export default Editor;