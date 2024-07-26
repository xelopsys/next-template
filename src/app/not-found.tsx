import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <Image
        src="/404.png"
        alt="not found"
        width={100}
        height={100}
        className="w-20 h-20 dark:invert"
      />
      <h1 className="text-lg font-semibold text-center px-5">
        Unfortunately, page is not found please return home.
      </h1>
      <Link href="/" className="text-muted-foreground text-sm underline">
        Return Home
      </Link>
    </div>
  )
}
