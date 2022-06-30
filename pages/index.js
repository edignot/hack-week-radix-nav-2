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

const StyledArrowRightIcon = styled(ArrowRightIcon, {
  width: 25,
  height: 25,
  padding: 4,
  variants: {
    type: {
      withBackground: {
        borderRadius: 50,
        backgroundColor: violet.violet9,
        color: violet.violet1,
        boxShadow: `0 0 0 2px ${violet.violet5}`,
      },
      withoutBackground: {
        color: violet.violet12,
      },
    },
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
  padding: 0,
  variants: {
    type: {
      contentDescription: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 25,
      },
      popularContent: {
        display: 'grid',
        gap: 25,
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@media (min-width: 768px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
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
        fontSize: '1rem',
        fontWeight: 500,
      },
    },
  },
})

const ContentItemCard = styled('div', {
  width: 150,
  height: 150,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  // justifyContent: 'space-between',
})

const ContentItemImage = styled('div', {
  width: '100%',
  height: '65%',
  borderRadius: 10,
  backgroundImage:
    'linear-gradient(330deg, hsl(272,53%,20%) 0%, hsl(226,68%,56%) 100%)',
  variants: {
    color: {
      red: {
        backgroundImage:
          'linear-gradient(330deg, rgb(195, 60, 60) 0%, rgb(219, 92, 67) 100%)',
      },
      purple: {
        backgroundImage:
          'linear-gradient(330deg, rgb(114, 60, 195) 0%, rgb(186, 67, 219) 100%)',
      },
      orange: {
        backgroundImage:
          'linear-gradient(330deg, rgb(195, 179, 60) 0%, rgb(219, 67, 67) 100%)',
      },
    },
  },
})

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  display: 'flex',
  alignItems: 'center',
})

const NavigationLinkTextIconWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

const NavigationMenuViewport = styled(NavigationMenuPrimitive.Viewport, {
  backgroundColor: violet.violet1,
  boxShadow: `0 0 0 2px ${violet.violet5}`,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  // Add background image
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
                <StyledArrowRightIcon type="withoutBackground" />
              </NavigationMenuLink>
            </ContentList>
            <ContentList type="popularContent">
              <NavigationMenuLink href="#">
                <ContentItemCard>
                  <ContentItemImage color="blue" />
                  <NavigationLinkTextIconWrapper>
                    <Text type="navItemLink">This is an article</Text>
                    <StyledArrowRightIcon type="withBackground" />
                  </NavigationLinkTextIconWrapper>
                </ContentItemCard>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <ContentItemCard>
                  <ContentItemImage color="blue" />
                  <NavigationLinkTextIconWrapper>
                    <Text type="navItemLink">Here is another one</Text>
                    <StyledArrowRightIcon type="withBackground" />
                  </NavigationLinkTextIconWrapper>
                </ContentItemCard>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <ContentItemCard>
                  <ContentItemImage color="blue" />
                  <NavigationLinkTextIconWrapper>
                    <Text type="navItemLink">One more article</Text>
                    <StyledArrowRightIcon type="withBackground" />
                  </NavigationLinkTextIconWrapper>
                </ContentItemCard>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <ContentItemCard>
                  <ContentItemImage color="blue" />
                  <NavigationLinkTextIconWrapper>
                    <Text type="navItemLink">How to write article</Text>
                    <StyledArrowRightIcon type="withBackground" />
                  </NavigationLinkTextIconWrapper>
                </ContentItemCard>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <ContentItemCard>
                  <ContentItemImage color="blue" />
                  <NavigationLinkTextIconWrapper>
                    <Text type="navItemLink">The final article here</Text>
                    <StyledArrowRightIcon type="withBackground" />
                  </NavigationLinkTextIconWrapper>
                </ContentItemCard>
              </NavigationMenuLink>
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

// fix icon size
