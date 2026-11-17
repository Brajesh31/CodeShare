import Link from 'next/link'
import { Button } from '@mantine/core'
import { Code, Users, Bot, Mic, ArrowRight, Github } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2" aria-label="CodeShare home">
              <Code size={24} className="text-blue-600" />
              <span className="font-bold text-xl">CodeShare</span>
            </Link>
            <div className="flex items-center gap-4">
              <a href="#prototype" className="text-gray-600 hover:text-gray-900">
                Prototype
              </a>
              <a
                href="https://github.com/Brajesh31/CodeShare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeShare on GitHub"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={20} />
              </a>
              <Link href="/editor">
                <Button size="sm" rightSection={<ArrowRight size={15} />}>Open editor</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-wide uppercase text-blue-700 mb-4">
                Collaborative coding workspace prototype
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Explore a shared coding workspace.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Try a local code editor, sample team chat, and a preview of an AI chat panel.
                This prototype runs in your browser tab. It does not synchronize sessions or
                connect to an AI provider yet.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/editor">
                  <Button size="lg" rightSection={<ArrowRight size={16} />}>Try the local editor</Button>
                </Link>
                <a href="#prototype">
                  <Button size="lg" variant="light">Explore the prototype</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="prototype" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What you can explore today
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The interface demonstrates the shape of a collaborative development tool.
                The connected services are not implemented in this version.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Local code editor</h3>
                <p className="text-gray-600">
                  Edit sample code in the current browser tab and switch the displayed language label.
                  Changes are not shared with other visitors.
                </p>
              </article>
              <article className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sample team chat</h3>
                <p className="text-gray-600">
                  Explore a local chat interface with example messages. Messages remain in React
                  state and are cleared when the page is reloaded.
                </p>
              </article>
              <article className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI chat preview</h3>
                <p className="text-gray-600">
                  See the interaction flow with a fixed demo response. No model, API key, or
                  server-side AI integration is connected.
                </p>
              </article>
              <article className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Mic size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Voice collaboration concept</h3>
                <p className="text-gray-600">
                  Voice is a future product idea only. There is no microphone permission flow,
                  audio transport, or voice service in the repository.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore the local workspace
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Open the editor route to inspect the current UI prototype and its local interactions.
              </p>
              <Link href="/editor">
                <Button size="lg" rightSection={<ArrowRight size={16} />}>Launch CodeShare</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <Code size={20} className="text-gray-400" />
            <span className="text-gray-600">CodeShare</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 CodeShare · Open-source prototype</p>
          <a href="https://github.com/Brajesh31/CodeShare" className="text-sm text-gray-600 hover:text-gray-900">
            View source on GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
