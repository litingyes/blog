import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { PenIcon } from '@/components/icons/pen'
import { GithubIcon } from '@/components/icons/github'
import SwitchTheme from '@/components/switchTheme'

export function LayoutHeader() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/" color="foreground">
          <PenIcon className="w-8 h-8" />
          <span className="font-bold ml-2">Liting's Blog</span>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/notes" color="foreground" underline="hover">笔记</Link>
        </NavbarItem>
        <NavbarItem className="h-6">
          <Link href="https://github.com/litingyes/blog.git" color="foreground" isExternal>
            <GithubIcon className="w-6 h-6" />
          </Link>
        </NavbarItem>
        <NavbarItem className="h-6">
          <SwitchTheme />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export function LayoutFooter() {
  return (
    <footer>
    </footer>
  )
}
