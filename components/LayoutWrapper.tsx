import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Typewriter from 'typewriter-effect'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SectionContainer from './SectionContainer'
interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter()

  const getPath = () => {
    const rgx = router.pathname.match(/[a-z A-Z 0-9 -]+/)
    return !rgx ? '' : rgx[0]
  }

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between text-xl font-semibold text-primary-color dark:text-primary-color-dark dark:text-primary-color-dark">
                {`~/`}{' '}
                <Typewriter
                  options={{
                    strings: [getPath()],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 hover:text-primary-color dark:text-gray-100 hover:dark:text-primary-color-dark sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
