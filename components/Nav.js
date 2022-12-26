import Link from 'next/link'

export default function Nav() {
  return (
    <header className="border-b sticky top-0 bg-stone-600">
        <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
            <Link href="/" passHref className='cursor-pointer'>
              <span className='text-lg pt-1 font-blod'></span>
              Shopify + Next.js
            </Link>
            <a className='text-md font-bold cursor-pointer'>
              Cart
            </a>
        </div>
    </header>
  )
}
