import Link from "next/link"
import Image from "next/image"


import { Button } from "@/components/ui/button"
import './globals.css'

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#1e1e1e] text-white py-4 px-6 md:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <StarIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Star Wars</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Movies
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Characters
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12 text-white text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to the Galaxy</h1>
            <p className="text-lg md:text-xl">Explore the epic saga of Star Wars</p>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#ffd700] text-[#1e1e1e] px-6 py-3 font-medium hover:bg-[#e6c200] transition-colors"
                prefetch={false}
              >
                View Movies
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#ffd700] text-[#ffd700] px-6 py-3 font-medium hover:bg-[#ffd700] hover:text-[#1e1e1e] transition-colors"
                prefetch={false}
              >
                View Characters
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">The Movies</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Explore the iconic Star Wars films and their stories.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="#" className="bg-[#1e1e1e] rounded-lg overflow-hidden group" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Episode IV Poster"
                      width={300}
                      height={450}
                      className="w-full h-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Episode IV</h3>
                      <p className="text-sm text-muted-foreground">A New Hope</p>
                    </div>
                  </Link>
                  <Link href="#" className="bg-[#1e1e1e] rounded-lg overflow-hidden group" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Episode V Poster"
                      width={300}
                      height={450}
                      className="w-full h-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Episode V</h3>
                      <p className="text-sm text-muted-foreground">The Empire Strikes Back</p>
                    </div>
                  </Link>
                  <Link href="#" className="bg-[#1e1e1e] rounded-lg overflow-hidden group" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Episode VI Poster"
                      width={300}
                      height={450}
                      className="w-full h-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Episode VI</h3>
                      <p className="text-sm text-muted-foreground">Return of the Jedi</p>
                    </div>
                  </Link>
                  <Link href="#" className="bg-[#1e1e1e] rounded-lg overflow-hidden group" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Episode I Poster"
                      width={300}
                      height={450}
                      className="w-full h-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Episode I</h3>
                      <p className="text-sm text-muted-foreground">The Phantom Menace</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">The Characters</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Discover the iconic characters that make up the Star Wars universe.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="#" className="bg-[#1e1e1e] rounded-lg overflow-hidden group" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Luke Skywalker"
                      width={300}
                      height={450}
                      className="w-full h-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Luke Skywalker</h3>
                      <p className="text-sm text-muted-foreground">Jedi Knight</p>
                    </div>
                  </Link>
                  <Link href="#" className="bg-[#1e1e1e] rounded-lg overflow-hidden group" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Darth Vader"
                      width={300}
                      height={450}
                      className="w-full h-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Darth Vader</h3>
                      <p className="text-sm text-muted-foreground">Sith Lord</p>
                    </div>
                  </Link>
                  <Link href="#" className="bg-[#1e1e1e] rounded-lg overflow-hidden group" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Princess Leia"
                      width={300}
                      height={450}
                      className="w-full h-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Princess Leia</h3>
                      <p className="text-sm text-muted-foreground">Rebel Leader</p>
                    </div>
                  </Link>
                  <Link href="#" className="bg-[#1e1e1e] rounded-lg overflow-hidden group" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Han Solo"
                      width={300}
                      height={450}
                      className="w-full h-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Han Solo</h3>
                      <p className="text-sm text-muted-foreground">Smuggler</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1e1e1e] text-white py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <StarIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Star Wars</span>
          </div>
          <nav className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Movies
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Characters
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}