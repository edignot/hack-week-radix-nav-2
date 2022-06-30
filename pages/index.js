import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDownIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { styled } from '@stitches/react'
import {
  violet,
  plum,
  gray,
  blue,
  purple,
  cyan,
  indigo,
  crimson,
} from '@radix-ui/colors'

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
  width: '100%',
  margin: 0,
  listStyle: 'none',
  backgroundColor: gray.gray1,
})

const NavItemContainer = ({ value, title, children }) => {
  return (
    <NavItem value={value}>
      <NavTrigger
        onPointerMove={(event) => event.preventDefault()}
        onPointerLeave={(event) => event.preventDefault()}
      >
        {title}
        <CaretIcon />
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

const NavItem = styled(NavigationMenu.Item, {})

const NavTrigger = styled(NavigationMenu.Trigger, {
  display: 'flex',
  position: 'relative',
  padding: 30,
  border: 0,
  cursor: 'pointer',
  fontSize: '1.2rem',
  color: gray.gray12,
  backgroundColor: 'transparent',
  '&[data-state=open]::after ': {
    position: 'absolute',
    content: '',
    height: 5,
    bottom: 0,
    left: 30,
    right: 50,
    borderRadius: 10,
    backgroundColor: 'var(--nav-color-primary)',
  },
})

const CaretIcon = styled(CaretDownIcon, {
  width: '1.5rem',
  height: '1.5rem',
  color: gray.gray12,
  '[data-state=open] &': {
    transform: 'rotate(-180deg)',
    color: gray.gray7,
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform .25s ease',
  },
})

const ArrowIcon = styled(ArrowRightIcon, {
  flexShrink: 0,
  width: '1.5rem',
  height: '1.5rem',
  padding: 3,
  borderRadius: 50,
  color: gray.gray1,
  backgroundColor: 'var(--nav-color-primary)',
  variants: {
    type: {
      plain: {
        color: gray.gray12,
        backgroundColor: 'transparent',
      },
    },
  },
})

const NavContent = styled(NavigationMenu.Content, {
  borderTop: `1px solid ${gray.gray5}`,
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

const NavContentSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
})

const Title = styled('h1', {
  margin: 0,
  fontWeight: 500,
  color: gray.gray12,
  variants: {
    size: {
      small: {
        fontSize: '1rem',
        marginTop: 2,
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
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  margin: 0,
  fontSize: '1.2rem',
  color: gray.gray12,
})

const NavLink = styled(NavigationMenu.Link, {
  display: 'flex',
  alignItems: 'center',
})

const CardContainer = styled('div', {
  display: 'grid',
  gap: 25,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

const Card = ({ children }) => {
  return (
    <CardLink href="#">
      <CardImage>
        <div
          style={{
            zIndex: 1,
            position: 'relative',
            width: '100%',
            height: 90,
            borderRadius: 10,
            backgroundImage:
              'linear-gradient(330deg, var(--nav-color-primary) 0%, var(--nav-color-secondary) 100%)',
          }}
        />
      </CardImage>
      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        <Title size="small" as="h4">
          {children}
        </Title>
        <ArrowIcon />
      </div>
    </CardLink>
  )
}

const CardImage = styled('div', {
  position: 'relative',
  '&::after': {
    position: 'absolute',
    content: '',
    width: '100%',
    height: '100%',
    top: 8,
    left: 0,
    zIndex: 0,
    borderRadius: 10,
    opacity: 0.25,
    backgroundColor: 'var(--nav-color-primary)',
    transition: 'transform 0.25s ease',
  },
})

const CardLink = styled(NavigationMenu.Link, {
  display: 'block',
  [`&:hover ${CardImage}::after`]: {
    transform: 'translateX(-10px)',
  },
})

const UnderlineLink = styled(NavigationMenu.Link, {
  fontSize: '1rem',
  fontWeight: 500,
  textDecoration: 'underline',
})

const colorMap = {
  articles: {
    primary: blue.blue11,
    secondary: violet.violet11,
  },
  resources: {
    primary: crimson.crimson11,
    secondary: plum.plum11,
  },
  products: {
    primary: purple.purple11,
    secondary: indigo.indigo11,
  },
  other: {
    primary: cyan.cyan11,
    secondary: indigo.indigo11,
  },
}

const NavViewport = styled(NavigationMenu.Viewport, {
  backgroundColor: gray.gray1,
  boxShadow: `0 0 0 5px ${gray.gray7}`,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
})

const Navigation = () => {
  const [value, setValue] = React.useState('')
  const colors = colorMap[value]

  return (
    <NavRoot
      css={{
        ['--nav-color-primary']: colors?.primary,
        ['--nav-color-secondary']: colors?.secondary,
      }}
      value={value}
      onValueChange={setValue}
    >
      <NavList>
        <NavItemContainer title="Articles" value="articles">
          <NavContentSection>
            <Title size="large" as="h2">
              Articles
            </Title>
            <Text>
              Here you can find <span>all articles</span>
            </Text>
            <NavLink href="#">
              View All
              <ArrowIcon type="plain" />
            </NavLink>
          </NavContentSection>

          <NavContentSection>
            <Title size="medium" as="h3">
              Top Articles
            </Title>
            <CardContainer>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
            </CardContainer>
          </NavContentSection>

          <NavContentSection>
            <Title size="medium" as="h3">
              Trending
            </Title>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
          </NavContentSection>
        </NavItemContainer>

        <NavItemContainer value="resources" title="Resources">
          <NavContentSection>
            <Title size="large" as="h2">
              Resources
            </Title>
            <Text>
              We list all<span>resources here</span>
            </Text>
            <NavLink href="#">
              View All
              <ArrowIcon type="plain" />
            </NavLink>
          </NavContentSection>

          <NavContentSection>
            <Title size="medium" as="h3">
              Top Resources
            </Title>
            <CardContainer>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
            </CardContainer>
          </NavContentSection>

          <NavContentSection>
            <Title size="medium" as="h3">
              Trending
            </Title>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
          </NavContentSection>
        </NavItemContainer>

        <NavItemContainer value="products" title="Products">
          <NavContentSection>
            <Title size="large" as="h2">
              Products
            </Title>
            <Text>
              Here you can find <span>all products</span>
            </Text>
            <NavLink href="#">
              View All
              <ArrowIcon type="plain" />
            </NavLink>
          </NavContentSection>

          <NavContentSection>
            <Title size="medium" as="h3">
              Our Best Products
            </Title>
            <CardContainer>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
            </CardContainer>
          </NavContentSection>

          <NavContentSection>
            <Title size="medium" as="h3">
              Trending
            </Title>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
          </NavContentSection>
        </NavItemContainer>

        <NavItemContainer value="other" title="Other">
          <NavContentSection>
            <Title size="large" as="h2">
              Other
            </Title>
            <Text>
              Here you can find <span>everything else</span>
            </Text>
            <NavLink href="#">
              View All
              <ArrowIcon type="plain" />
            </NavLink>
          </NavContentSection>

          <NavContentSection>
            <Title size="medium" as="h3">
              Top Articles
            </Title>
            <CardContainer>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
              <Card>This is an article</Card>
            </CardContainer>
          </NavContentSection>

          <NavContentSection>
            <Title size="medium" as="h3">
              Trending
            </Title>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
            <UnderlineLink href="#">This one is trending</UnderlineLink>
          </NavContentSection>
        </NavItemContainer>
      </NavList>
      <NavViewport />
    </NavRoot>
  )
}

export default Navigation
