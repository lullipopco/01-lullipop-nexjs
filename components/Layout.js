import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
        <main>
            { children }
        </main>
    </div>
  )
}
