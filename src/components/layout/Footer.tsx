import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-gray-400 md:flex-row md:px-10">
        <p>&copy; {new Date().getFullYear()} Nick Kazmer</p>
        <nav className="flex gap-8">
          <Link to="/work" className="text-gray-400 hover:text-gray-900 no-underline">
            Work
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-gray-900 no-underline">
            About
          </Link>
          <a
            href="https://linkedin.com/in/nkazmer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 no-underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nicholas.a.kazmer@gmail.com"
            className="text-gray-400 hover:text-gray-900 no-underline"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  )
}
