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
  justifyContent: 'space-evenly',
  width: '100%',
  margin: 0,
  listStyle: 'none',
  backgroundColor: gray.gray1,
})

const Logo = () => {
  return (
    <NavigationMenu.Link
      href="#"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: 35,
          height: 35,
          borderRadius: 50,
          backgroundImage:
            'linear-gradient(330deg, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
        }}
      ></div>
      <Title size="medium" as="h1">
        hackweek
      </Title>
    </NavigationMenu.Link>
  )
}

const TopNavLink = styled(NavigationMenu, {
  display: 'flex',
  position: 'relative',
  padding: 15,
  margin: 15,
  cursor: 'pointer',
  fontSize: '1.2rem',
  color: gray.gray12,
  '&:hover': {
    color: gray.gray11,
  },
})

const NavItems = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  margin: 0,
  listStyle: 'none',
})

const NavItem = ({ value, title, children }) => {
  return (
    <NavigationMenu.Item value={value}>
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
    </NavigationMenu.Item>
  )
}

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
  borderTop: `1px solid ${gray.gray7}`,
  width: '100%',
  display: 'grid',
  gridTemplate: 'auto / 1fr 1fr 1fr',
  padding: 50,
  justifyItems: 'center',
  gap: 100,
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
  fontSize: '1rem',
  fontWeight: 500,
  textDecoration: 'underline',
  '&:hover': {
    color: gray.gray11,
  },
})

const CardContainer = styled('div', {
  display: 'grid',
  gap: 25,
  gridTemplateColumns: 'repeat(3, 1fr)',
})

const Card = ({ children }) => {
  return (
    <CardLink href="#">
      <CardImage>
        <div
          style={{
            zIndex: 1,
            position: 'relative',
            width: 150,
            height: 90,
            borderRadius: 10,
            backgroundImage:
              'linear-gradient(330deg, var(--nav-color-primary) 0%, var(--nav-color-secondary) 100%)',
          }}
        />
      </CardImage>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 10,
          marginTop: 20,
        }}
      >
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
  [`&:hover ${CardImage}::after`]: {
    transform: 'translateX(-10px)',
  },
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
  tutorials: {
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
        <Logo />
        <NavItems>
          <NavItem title="Articles" value="articles">
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
                <Card>What is an article</Card>
                <Card>How to write a good article</Card>
                <Card>Article 101</Card>
                <Card>How to read an article</Card>
                <Card>Interesting article</Card>
              </CardContainer>
            </NavContentSection>

            <NavContentSection>
              <Title size="medium" as="h3">
                Trending
              </Title>
              <NavLink href="#">Interesting article</NavLink>
              <NavLink href="#">How to read an article</NavLink>
              <NavLink href="#">Article 101</NavLink>
              <NavLink href="#">How to write a good article</NavLink>
              <NavLink href="#">What is an article</NavLink>
            </NavContentSection>
          </NavItem>

          <NavItem value="resources" title="Resources">
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
                <Card>The best resource</Card>
                <Card>List of great resources</Card>
                <Card>Check out this resource</Card>
                <Card>Resource 101</Card>
                <Card>Another resource</Card>
              </CardContainer>
            </NavContentSection>

            <NavContentSection>
              <Title size="medium" as="h3">
                Trending
              </Title>
              <NavLink href="#">Another resource</NavLink>
              <NavLink href="#">Resource 101</NavLink>
              <NavLink href="#">Check out this resource</NavLink>
              <NavLink href="#">List of great resources</NavLink>
              <NavLink href="#">The best resource</NavLink>
            </NavContentSection>
          </NavItem>

          <NavItem value="products" title="Products">
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
                Top Products
              </Title>
              <CardContainer>
                <Card>Our top product</Card>
                <Card>How to create a product</Card>
                <Card>Creating product 101</Card>
                <Card>The best product</Card>
                <Card>Check out this product</Card>
              </CardContainer>
            </NavContentSection>

            <NavContentSection>
              <Title size="medium" as="h3">
                Trending
              </Title>
              <NavLink href="#">Check out this product</NavLink>
              <NavLink href="#">The best product</NavLink>
              <NavLink href="#">Creating product 101</NavLink>
              <NavLink href="#">How to create a product</NavLink>
              <NavLink href="#">Our top product</NavLink>
            </NavContentSection>
          </NavItem>

          <NavItem value="tutorials" title="Tutorials">
            <NavContentSection>
              <Title size="large" as="h2">
                Tutorials
              </Title>
              <Text>
                Here you can find <span>all tutorials</span>
              </Text>
              <NavLink href="#">
                View All
                <ArrowIcon type="plain" />
              </NavLink>
            </NavContentSection>

            <NavContentSection>
              <Title size="medium" as="h3">
                Top Tutorials
              </Title>
              <CardContainer>
                <Card>How to write a good story</Card>
                <Card>How to create a tutorial</Card>
                <Card>Learn how to write stories</Card>
                <Card>How to create a product</Card>
                <Card>Building a website 101</Card>
              </CardContainer>
            </NavContentSection>

            <NavContentSection>
              <Title size="medium" as="h3">
                Trending
              </Title>
              <NavLink href="#">Building a website 101</NavLink>
              <NavLink href="#">How to create a product</NavLink>
              <NavLink href="#">Learn how to write stories</NavLink>
              <NavLink href="#">How to create a tutorial</NavLink>
              <NavLink href="#">How to write a good story</NavLink>
            </NavContentSection>
          </NavItem>
        </NavItems>
        <TopNavLink href="#">About</TopNavLink>
        <TopNavLink href="#">Help</TopNavLink>
        <TopNavLink href="#">Login</TopNavLink>
      </NavList>
      <NavViewport />
    </NavRoot>
  )
}

export default Navigation
