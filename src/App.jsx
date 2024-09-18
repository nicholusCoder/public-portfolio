import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Message from './pages/Message'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import './styles/App.css'

export default function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Message message='Hello World' />
      <Skills />
      <Message message='Know more about me' />
      <Projects />
      <Message message='With a passion I code with a smile' />
    </main>
  )
}
