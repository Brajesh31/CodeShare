import React, { useState } from 'react';
import { AppShell, Burger, Group, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MessageSquare, Users, Code, Settings, Moon, Sun } from 'lucide-react';
import Editor from './Editor';
import ChatPanel from './ChatPanel';
import UserPresence from './UserPresence';
const EditorApp: React.FC = () => {
  const [opened, {
    toggle
  }] = useDisclosure();
  const [chatOpened, setChatOpened] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('editor');
  const toggleChat = () => setChatOpened(!chatOpened);
  const toggleTheme = () => setDarkMode(!darkMode);
  return <div className={`w-full h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* ... existing editor app code ... */}
      <header className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} px-4 py-2`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Burger opened={opened} onClick={toggle} size="sm" />
            <Text size="lg" fw={700}>
              CodeCollab
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="subtle" onClick={toggleTheme} className="px-2">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <UserPresence />
          </div>
        </div>
      </header>
      {/* ... rest of the existing editor app code ... */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${opened ? 'w-64' : 'w-16'} flex flex-col border-r transition-all ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200'}`}>
          {/* ... existing sidebar code ... */}
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Editor darkMode={darkMode} />
        </div>
        {/* Chat Panel */}
        <div className={`border-l transition-all ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${chatOpened ? 'w-80' : 'w-0'}`}>
          {chatOpened && <ChatPanel darkMode={darkMode} />}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className={`border-t px-4 py-2 flex justify-between items-center ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-2">
          <div className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            Connected
          </div>
          <div className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            3 users online
          </div>
        </div>
        <Button variant={chatOpened ? 'filled' : 'light'} onClick={toggleChat} leftSection={<MessageSquare size={16} />} size="sm">
          {chatOpened ? 'Hide Chat' : 'Show Chat'}
        </Button>
      </div>
    </div>;
};
export default EditorApp;