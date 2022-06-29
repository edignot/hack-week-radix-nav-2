import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { styled, keyframes } from '@stitches/react'
import { violet } from '@radix-ui/colors'

const NavigationMenuRoot = styled(NavigationMenuPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
})

const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  display: 'flex',
  gap: 50,
  justifyContent: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 15,
  width: '100%',
  backgroundColor: violet.violet1,
})

const NavigationMenuItem = styled(NavigationMenuPrimitive.Item, {
  border: '2px yellow',
})

const NavigationMenuTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  padding: 10,
  display: 'flex',
  fontSize: '1.2rem',
  color: violet.violet12,
})

const StyledCaretDownIcon = styled(CaretDownIcon, {
  width: '1.5rem',
  height: '1.5rem',
  color: violet.violet12,
  '[data-state=open] &': {
    transform: 'rotate(-180deg)',
    color: violet.violet7,
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

const NavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  borderTop: `1px solid ${violet.violet5}`,
  border: '2px solid red',
  padding: '50px',
})

const ContentList = styled('ul', {
  border: '2px solid yellow',
})

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  display: 'block',
  margin: 'auto',
})

const NavigationMenuViewport = styled(NavigationMenuPrimitive.Viewport, {
  backgroundColor: violet.violet1,
})

const Navigation = () => {
  return (
    <div>
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Product <StyledCaretDownIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>
              Developers Product <StyledCaretDownIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Product 2</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 3</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 4</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Company Product <StyledCaretDownIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Product 5</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 6</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 7</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenuRoot>
    </div>
  )
}

export default Navigation
