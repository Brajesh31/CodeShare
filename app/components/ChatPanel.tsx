import React, { useEffect, useState, useRef } from 'react';
import { Tabs, TextInput, Button, Avatar, Text, ScrollArea } from '@mantine/core';
import { Send, Bot, Users } from 'lucide-react';
interface ChatPanelProps {
  darkMode: boolean;
}
interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
  isAi?: boolean;
}
const ChatPanel: React.FC<ChatPanelProps> = ({
  darkMode
}) => {
  const [activeTab, setActiveTab] = useState<string | null>('team');
  const [message, setMessage] = useState('');
  const [teamMessages, setTeamMessages] = useState<Message[]>([{
    id: 1,
    sender: 'John Doe',
    content: 'Hey everyone, I just pushed some changes to the navigation component.',
    timestamp: new Date(Date.now() - 3600000)
  }, {
    id: 2,
    sender: 'Jane Smith',
    content: "Great! I'll review it shortly.",
    timestamp: new Date(Date.now() - 1800000)
  }, {
    id: 3,
    sender: 'You',
    content: "I'm working on the authentication flow right now.",
    timestamp: new Date(Date.now() - 900000)
  }]);
  const [aiMessages, setAiMessages] = useState<Message[]>([{
    id: 1,
    sender: 'AI Assistant',
    content: "Hello! I'm your AI coding assistant. How can I help you today?",
    timestamp: new Date(Date.now() - 60000),
    isAi: true
  }]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [teamMessages, aiMessages]);
  const handleSendMessage = () => {
    if (!message.trim()) return;
    const newMessage: Message = {
      id: Date.now(),
      sender: 'You',
      content: message,
      timestamp: new Date()
    };
    if (activeTab === 'team') {
      setTeamMessages([...teamMessages, newMessage]);
      // In a real app, we would send this to the WebSocket server
    } else if (activeTab === 'ai') {
      setAiMessages([...aiMessages, newMessage]);
      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: Date.now() + 1,
          sender: 'AI Assistant',
          content: "I'll help you with that. Could you provide more details about what you're trying to accomplish?",
          timestamp: new Date(),
          isAi: true
        };
        setAiMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
    setMessage('');
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const renderMessages = (messages: Message[]) => {
    return messages.map(msg => <div key={msg.id} className={`mb-4 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block max-w-[80%] ${msg.sender === 'You' ? 'ml-auto' : 'mr-auto'}`}>
          <div className="flex items-center gap-2 mb-1">
            {msg.sender !== 'You' && <Avatar size="sm" radius="xl" src={msg.isAi ? null : `https://i.pravatar.cc/150?u=${msg.sender}`}>
                {msg.isAi && <Bot size={14} />}
              </Avatar>}
            <Text size="xs" c="dimmed">
              {msg.sender}
            </Text>
            <Text size="xs" c="dimmed">
              {msg.timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
            </Text>
          </div>
          <div className={`p-3 rounded-lg ${msg.sender === 'You' ? darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-900' : darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <Text size="sm">{msg.content}</Text>
          </div>
        </div>
      </div>);
  };
  return <div className="flex flex-col h-full">
      <Tabs value={activeTab} onChange={setActiveTab} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <Tabs.List grow>
          <Tabs.Tab value="team" leftSection={<Users size={16} />}>
            Team
          </Tabs.Tab>
          <Tabs.Tab value="ai" leftSection={<Bot size={16} />}>
            AI Assistant
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <ScrollArea className="flex-1 p-4" viewportRef={scrollAreaRef}>
        {activeTab === 'team' ? renderMessages(teamMessages) : renderMessages(aiMessages)}
      </ScrollArea>
      <div className={`p-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex gap-2">
          <TextInput placeholder={activeTab === 'team' ? 'Message your team...' : 'Ask the AI assistant...'} value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleKeyDown} className="flex-1" size="sm" />
          <Button size="sm" onClick={handleSendMessage}>
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>;
};
export default ChatPanel;