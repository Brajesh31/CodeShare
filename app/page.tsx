import React from 'react'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import { Button } from '@mantine/core'
import { Code, Users, Bot, Mic, ArrowRight, Github } from 'lucide-react'
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Code size={24} className="text-blue-600" />
              <span className="font-bold text-xl">CodeCollab</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={20} />
              </a>
              <Link href="/editor">
                <Button size="sm">Launch Editor</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Collaborative Coding Made Simple
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Code together in real-time, chat with AI, and communicate
              seamlessly with your team. The future of collaborative development
              is here.
            </p>
            <div className="flex justify-center gap-4">
              {/* <Link to="/editor">
                <Button size="lg" rightSection={<ArrowRight size={16} />}>
                  Start Coding
                </Button>
              </Link> */}
              <a href="#features">
                <Button size="lg" variant="light">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Code Together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for modern development teams, CodeCollab combines the best
              tools for collaborative coding.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-time Collaboration
              </h3>
              <p className="text-gray-600">
                Code together in real-time with your team. See changes as they
                happen and collaborate seamlessly.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Bot size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-gray-600">
                Get intelligent code suggestions and answers to your questions
                with our built-in AI assistant.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mic size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice Chat</h3>
              <p className="text-gray-600">
                Coming soon: Communicate with your team using voice chat while
                coding together.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Collaborating?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already using CodeCollab to
              build better software together.
            </p>
            {/* <Link to="/editor">
              <Button size="lg">Launch Editor</Button>
            </Link> */}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Code size={20} className="text-gray-400" />
              <span className="text-gray-600">CodeCollab</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 CodeCollab. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default LandingPage
