import { Box, Heading, List, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

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
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Levetica
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <Link to="News">Actualités</Link>
              <Link to="Help">Aide</Link>
              <Link to="About">À propos</Link>
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Découvrir
            </Heading>
            <List lineHeight="2">
            <Link to="IDE">IDE</Link>
            <Link to="OS">OS</Link>
            <Link to="Git">Git</Link>
            <Link to="Code">Services d'apprentissage du code</Link>
            <Link to="Docs">Générateurs de documentation</Link>
            <Link to="Pack">Gestionnaire de paquets</Link>
            <Link to="Issues">Systèmes de suivi des problèmes</Link>
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Programmer
            </Heading>
            <List lineHeight="2">
            <Link to="Languages">Langages de programmation</Link>
            <Link to="Web">Outils de développement Web</Link>
            <Link to="JS">Outils de développement JavaScript</Link>
            <Link to="Mobile">Outils de développement Mobile</Link>
            <Link to="Games">Outils de développement de jeux</Link>
            <Link to="CSS">Cadres CSS</Link>
            <Link to="Database">Gestionnaire de bases de données</Link>
            </List>
          </Box>
            <List lineHeight="2">
            <Link to="Conditions">Conditions</Link>
            <Link to="Privacy">Vie privée</Link>
            <Link to="Maps">Plan du site</Link>
              <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="levetica" data-color="#000000" data-emoji=""  data-font="Poppins" data-text="Buy me a coffee" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>
            </List>
          </Box>
        <Text color="gray.600" fontSize="0.875rem" pl="0.5rem">
           2024 Levetica -  Tout droits réservés - v.1.0.56
        </Text>
    </Box>
  );
};

export default FooterEnd;