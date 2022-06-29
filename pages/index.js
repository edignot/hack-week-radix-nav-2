import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { CaretDownIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { styled, keyframes } from '@stitches/react'
import { violet } from '@radix-ui/colors'

const NavigationMenuRoot = styled(NavigationMenuPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  justifyContent: 'center',
  position: 'fixed',
})

const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  display: 'flex',
  gap: 50,
  justifyContent: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 10,
  width: '100%',
  backgroundColor: violet.violet1,
})

const NavigationMenuItem = styled(NavigationMenuPrimitive.Item, {})

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

// MAIN NAV DROPDOWN GRID/FLEX CONTAINER
const NavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  borderTop: `1px solid ${violet.violet5}`,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'wrap',
  gap: 100,
  padding: 50,
})

const ContentList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  variants: {
    type: {
      contentDescription: {
        alignItems: 'flex-start',
        gap: 25,
      },
      popularContent: {
        border: '2px solid orange',
      },
      otherContent: {
        border: '2px solid yellow',
      },
    },
  },
})

const Text = styled('p', {
  padding: 0,
  margin: 0,
  color: violet.violet12,
  variants: {
    type: {
      navItemHeader: {
        fontSize: '2rem',
        fontWeight: 500,
      },
      navItemDescription: {
        display: 'flex',
        flexDirection: 'column',
      },
      navItemLink: {
        fontSize: '2rem',
      },
    },
  },
})

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  display: 'flex',
  alignItems: 'center',
})

const NavigationMenuViewport = styled(NavigationMenuPrimitive.Viewport, {
  backgroundColor: violet.violet1,
  boxShadow: `0 0 0 2px ${violet.violet5}`,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
})

const Navigation = () => {
  return (
    <NavigationMenuRoot value="item1">
      <NavigationMenuList>
        <NavigationMenuItem value="item1">
          <NavigationMenuTrigger>
            Articles
            <StyledCaretDownIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList type="contentDescription">
              <Text type="navItemHeader">Articles</Text>
              <Text type="navItemDescription">
                Here you can find <span>all articles</span>
              </Text>
              <NavigationMenuLink href="#">
                View All
                <ArrowRightIcon />
              </NavigationMenuLink>
            </ContentList>
            <ContentList type="popularContent">
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
            </ContentList>
            <ContentList type="otherContent">
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="#">Product 1</NavigationMenuLink>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Resources
            <StyledCaretDownIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Product 2</NavigationMenuLink>
            <NavigationMenuLink href="#">Product 3</NavigationMenuLink>
            <NavigationMenuLink href="#">Product 4</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Product <StyledCaretDownIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Product 5</NavigationMenuLink>
            <NavigationMenuLink href="#">Product 6</NavigationMenuLink>
            <NavigationMenuLink href="#">Product 7</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Company <StyledCaretDownIcon />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Product 5</NavigationMenuLink>
            <NavigationMenuLink href="#">Product 6</NavigationMenuLink>
            <NavigationMenuLink href="#">Product 7</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport />
    </NavigationMenuRoot>
  )
}

export default Navigation
