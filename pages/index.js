import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { styled } from '@stitches/react'
import { violet, red, plum, pink } from '@radix-ui/colors'

const NavRoot = styled(NavigationMenu.Root, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100vw',
  position: 'fixed',
})

const NavList = styled(NavigationMenu.List, {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  margin: 0,
  width: '100%',
  backgroundColor: violet.violet1,
})

const NavItem = styled(NavigationMenu.Item, {})

const NavTrigger = styled(NavigationMenu.Trigger, {
  position: 'relative',
  padding: 30,
  display: 'flex',
  fontSize: '1.2rem',
  cursor: 'pointer',
  color: violet.violet12,
  backgroundColor: 'transparent',
  border: 0,
  '&[data-state=open]::after ': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 30,
    right: 50,
    backgroundColor: 'var(--navigation-color-primary)',
    height: 4,
    borderRadius: 2,
  },
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
  borderRadius: 50,
  padding: 4,
  color: violet.violet1,
  backgroundColor: 'var(--navigation-color-primary)',
})
const NavContent = styled(NavigationMenu.Content, {
  borderTop: `1px solid ${violet.violet5}`,
  width: '100%',
  gap: 100,
  padding: 50,
  display: 'grid',
  gridTemplate: 'auto / 1fr',
  justifyItems: 'center',
  '@media (min-width: 1200px)': {
    gridTemplate: 'auto / 1fr 1fr 1fr',
  },
})
const ContentList = styled('ul', {
  display: 'flex',
  padding: 0,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 25,
})
const UnderlineLink = styled(NavigationMenu.Link, {
  fontSize: '1rem',
  fontWeight: 500,
  borderBottom: `2px solid ${violet.violet7}`,
})
const Title = styled('h1', {
  fontWeight: 500,
  color: violet.violet12,
  margin: 0,
  variants: {
    size: {
      small: {
        fontSize: '1rem',
      },
      medium: {
        fontSize: '1.5rem',
      },
      large: {
        fontSize: '2.5rem',
      },
    },
  },
})
const Text = styled('p', {
  padding: 0,
  margin: 0,
  color: violet.violet12,
  fontSize: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
})
const NavLink = styled(NavigationMenu.Link, {
  display: 'flex',
  alignItems: 'center',
})
const ContentItemCardWrapper = styled('div', {
  display: 'grid',
  gap: 25,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})
const NavViewport = styled(NavigationMenu.Viewport, {
  backgroundColor: violet.violet1,
  boxShadow: `0 0 0 2px ${violet.violet5}`,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
})
const MenuItem = ({ value, title, children }) => {
  return (
    <NavItem value={value}>
      <NavTrigger
        onPointerMove={(event) => event.preventDefault()}
        onPointerLeave={(event) => event.preventDefault()}
      >
        {title}
        <StyledCaretDownIcon />
      </NavTrigger>
      <NavContent
        onPointerEnter={(event) => event.preventDefault()}
        onPointerLeave={(event) => event.preventDefault()}
      >
        {children}
      </NavContent>
    </NavItem>
  )
}
const MenuArticleCardImage = styled('div', {
  position: 'relative',
  '&::after': {
    content: '',
    position: 'absolute',
    backgroundColor: 'var(--navigation-color-primary)',
    width: '100%',
    height: '100%',
    top: 8,
    left: 0,
    zIndex: 0,
    borderRadius: 8,
    opacity: 0.5,
    transition: 'transform 0.2s ease',
  },
})
const MenuArticleCardLink = styled(NavigationMenu.Link, {
  display: 'block',
  [`&:hover ${MenuArticleCardImage}::after`]: {
    transform: 'translateX(-10px)',
  },
})
const MenuArticleCard = ({ children }) => {
  return (
    <MenuArticleCardLink href="#">
      <MenuArticleCardImage>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 90,
            borderRadius: 10,
            backgroundImage:
              'linear-gradient(330deg, var(--navigation-color-primary) 0%, var(--navigation-color-secondary) 100%)',
            zIndex: 1,
            borderRadius: 8,
          }}
        />
      </MenuArticleCardImage>
      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        <Title size="small" as="h4" css={{ marginTop: 4 }}>
          {children}
        </Title>
        <StyledArrowRightIcon css={{ flexShrink: 0 }} />
      </div>
    </MenuArticleCardLink>
  )
}
const colorMap = {
  articles: {
    primary: violet.violet9,
    secondary: plum.plum9,
  },
  resources: {
    primary: red.red9,
    secondary: pink.pink9,
  },
  products: {
    primary: 'yellow',
    secondary: 'red',
  },
  other: {
    primary: 'green',
    secondary: 'red',
  },
}
const Navigation = () => {
  const [value, setValue] = React.useState('')
  const colors = colorMap[value]
  return (
    <NavRoot
      css={{
        ['--navigation-color-primary']: colors?.primary,
        ['--navigation-color-secondary']: colors?.secondary,
      }}
      value={value}
      onValueChange={setValue}
    >
      <NavList>
        <MenuItem title="Articles" value="articles">
          <ContentList>
            <Title size="large" as="h2">
              Articles
            </Title>
            <Text>
              Here you can find <span>all articles</span>
            </Text>
            <NavLink href="#">
              View All
              <StyledArrowRightIcon />
            </NavLink>
          </ContentList>
          <ContentList>
            <Title size="medium" as="h3">
              Top Articles
            </Title>
            <ContentItemCardWrapper>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
            </ContentItemCardWrapper>
          </ContentList>
          <ContentList>
            <Title size="medium" as="h3">
              Trending
            </Title>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
          </ContentList>
        </MenuItem>
        <MenuItem value="resources" title="Resources">
          <ContentList>
            <Title size="large" as="h2">
              Resources
            </Title>
            <Text>
              We list all<span>resources here</span>
            </Text>
            <NavLink href="#">
              View All
              <StyledArrowRightIcon />
            </NavLink>
          </ContentList>
          <ContentList>
            <Title size="medium" as="h3">
              Top Resources
            </Title>
            <ContentItemCardWrapper>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
            </ContentItemCardWrapper>
          </ContentList>
          <ContentList>
            <Title size="medium" as="h3">
              Trending
            </Title>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
          </ContentList>
        </MenuItem>
        <MenuItem value="products" title="Products">
          <ContentList>
            <Title size="large" as="h2">
              Products
            </Title>
            <Text>
              Here you can find <span>all products</span>
            </Text>
            <NavLink href="#">
              View All
              <StyledArrowRightIcon />
            </NavLink>
          </ContentList>
          <ContentList>
            <Title size="medium" as="h3">
              Our Best Products
            </Title>
            <ContentItemCardWrapper>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
            </ContentItemCardWrapper>
          </ContentList>
          <ContentList>
            <Title size="medium" as="h3">
              Trending
            </Title>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
          </ContentList>
        </MenuItem>
        <MenuItem value="other" title="Other">
          <ContentList>
            <Title size="large" as="h2">
              Other
            </Title>
            <Text>
              Here you can find <span>everything else</span>
            </Text>
            <NavLink href="#">
              View All
              <StyledArrowRightIcon />
            </NavLink>
          </ContentList>
          <ContentList>
            <Title size="medium" as="h3">
              Top Articles
            </Title>
            <ContentItemCardWrapper>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
              <MenuArticleCard>This is an article</MenuArticleCard>
            </ContentItemCardWrapper>
          </ContentList>
          <ContentList>
            <Title size="medium" as="h3">
              Trending
            </Title>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
          </ContentList>
        </MenuItem>
      </NavList>
      <NavViewport />
    </NavRoot>
  )
}
export default Navigation
