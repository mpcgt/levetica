import { Box, Heading, Flex, List, ListItem, Link, Text } from '@chakra-ui/react';

const FooterEnd = () => {
  return (
    <Box
      as="footer"
      bg="gray.300"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Levetica
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="Actualités" isTag={true} tagText="New" />
              <LinkItem text="Aide" isTag={true} tagText="New" />
              <LinkItem text="À propos" isTag={true} tagText="New" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Découvrir
            </Heading>
            <List lineHeight="2">
              <LinkItem text="IDE" isTag={true} tagText="New" />
              <LinkItem text="OS" isTag={true} tagText="New" />
              <LinkItem text="Git" isTag={true} tagText="New" />
              <LinkItem text="Services d'apprentissage du code" isTag={true} tagText="New" />
              <LinkItem text="Générateurs de documentation" isTag={true} tagText="New" />
              <LinkItem text="Gestionnaire de paquets" isTag={true} tagText="New" />
              <LinkItem text="Systèmes de suivi des problèmes" isTag={true} tagText="New" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Programmer
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Langages de programmation" isTag={true} tagText="New" />
              <LinkItem text="Outils de développement Web" isTag={true} tagText="New" />
              <LinkItem text="Outils de développement JavaScript" isTag={true} tagText="New" />
              <LinkItem text="Outils de développement Mobile" isTag={true} tagText="New" />
              <LinkItem text="Outils de développement de jeux" isTag={true} tagText="New" />
              <LinkItem text="Cadres CSS" isTag={true} tagText="New" />
              <LinkItem text="Gestionnaire de bases de données" isTag={true} tagText="New" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Flex justifyContent="start" mb="0.5rem" alignItems="baseline">
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '2rem', height: '2rem' }}
                  fill="#000"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Navigate to Facebook"
                  focusable="false"
                >
                  <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '2rem', height: '2rem' }}
                  fill="#000"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Navigate to GitHub"
                  focusable="false"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '2rem', height: '2rem' }}
                  fill="#000"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Navigate to Gmail"
                  focusable="false"
                >
                  <path
                    d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </Flex>
            <List lineHeight="2">
              <LinkItem text="Conditions" />
              <LinkItem text="Vie privée" />
              <LinkItem text="Plan du site" />
              <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="levetica" data-color="#000000" data-emoji=""  data-font="Poppins" data-text="Buy me a coffee" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>
            </List>
          </Box>
        </Flex>
      </Box>
      <Flex maxW="64rem" mx="auto" alignItems="center" px={10}>
        <svg
          fill="#000"
          style={{ width: '1.25rem', height: '1.25rem' }}
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M 142.5,42.5 C 162.486,40.8863 180.153,46.3863 195.5,59C 201.282,64.9904 204.782,72.157 206,80.5C 207.467,87.7685 208.467,95.1019 209,102.5C 210.873,135.138 211.873,167.804 212,200.5C 212.667,335.167 212.667,469.833 212,604.5C 211.876,634.865 210.876,665.198 209,695.5C 208.568,708.684 205.234,721.017 199,732.5C 182.088,752.297 160.921,758.797 135.5,752C 124.261,749.429 115.094,743.595 108,734.5C 103.667,728.167 99.3333,721.833 95,715.5C 95.2928,501.834 95.9594,288.168 97,74.5C 101.867,69.9677 106.367,65.1344 110.5,60C 119.662,51.2552 130.329,45.4219 142.5,42.5 Z M 425.5,637.5 C 501.515,637.288 577.515,638.122 653.5,640C 681.476,642.641 697.976,657.808 703,685.5C 703.906,696.559 703.573,707.559 702,718.5C 699.411,724.016 696.078,729.016 692,733.5C 685.5,740 679,746.5 672.5,753C 584.833,753.667 497.167,753.667 409.5,753C 370.363,756.861 347.863,739.361 342,700.5C 340.223,688.941 342.556,678.274 349,668.5C 367.041,640.483 392.541,630.15 425.5,637.5 Z"/>
        </svg>
        <Text color="gray.600" fontSize="0.875rem" pl="0.5rem">
           2024 Levetica -  Tout droits réservés - v.1.0.26
        </Text>
      </Flex>
    </Box>
  );
};

type LinkItemProps = {
  text?: string;
  isTag?: boolean;
  tagText?: string;
};

const LinkItem = ({ text, isTag = false, tagText }: LinkItemProps) => {
  return (
    <ListItem display="flex">
      <Link
        fontWeight="600"
        href="#"
        color="rgba(113, 128, 150, 1)"
        _hover={{ color: 'green.600' }}
      >
        {text}
      </Link>
      {isTag && (
        <Text
          as="span"
          bg="#000"
          px="0.25rem"
          display="inline-flex"
          alignItems="center"
          color="#fff"
          height="1.25rem"
          borderRadius="0.25rem"
          ml="0.25rem"
          mt="0.25rem"
          fontSize="0.75rem"
        >
          {tagText}
        </Text>
      )}
    </ListItem>
  );
};

export default FooterEnd;