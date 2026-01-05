import Link from "next/link"
import Image from "next/image"
function header() {
  return (
    <div>
     <header className="header">
          <nav>
            <div className="logo"><Link href="/"><Image src="/logo.png" alt="Logo" width={100} height={50}></Image></Link>
            </div>
          </nav>
          <div className="nav Links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </header>
    </div>
  )
}

export default header
