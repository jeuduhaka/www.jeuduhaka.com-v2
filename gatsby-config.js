module.exports = {
  siteMetadata: {
    title: `Jeu du Haka`,
    description: `Avec le Jeu du Haka, transformez votre énergie négative en énergie positive en deux temps (le CORPS et l'ESPRIT), trois mouvements (AVOIR, FAIRE, ÊTRE)`,
    author: `Florent Roques`,
    siteUrl: `https://www.jeuduhaka.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }
  ],
}
