import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { styled, keyframes } from '@stitches/react'
import { violet, purple, blackA } from '@radix-ui/colors'

const NavigationMenuRoot = styled(NavigationMenuPrimitive.Root, {
  border: '1px solid red',
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
})

const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  border: '2px solid orange',
  display: 'flex',
  gap: 50,
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: '100%',
})

const NavigationMenuItem = styled(NavigationMenuPrimitive.Item, {
  border: '2px yellow',
})

const NavigationMenuTrigger = styled(NavigationMenuPrimitive.Trigger, {
  border: '2px solid white',
})

const NavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  border: '2px solid purple',
  backgroundColor: 'purple',
})

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  border: '2px solid blue',
  dosplay: 'block',
})

const NavigationMenuViewport = styled(NavigationMenuPrimitive.Viewport, {
  backgroundColor: 'LightGray',
})

const Navigation = () => {
  return (
    <div>
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Product 2</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 3</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 4</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Product 5</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 6</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 7</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenuRoot>
    </div>
  )
}

export default Navigation
