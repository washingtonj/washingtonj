import Link from 'next/link'

export default function NotFound () {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="text-center">
        <h2 className="text-xl font-bold text-light-primary dark:text-dark-primary">404</h2>
        <h4 className="text-lg">this page could not be found.</h4>
        <span className="text-xs uppercase italic">
          <Link href="/">Go to Home</Link>
        </span>
      </span>
    </div>
  )
}
