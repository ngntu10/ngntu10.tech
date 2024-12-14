export const SITE_METADATA = {
  title: `Nguyen Tu's blog – stories, insights, and ideas`,
  author: 'Nguyen Tu',
  headerTitle: `Nguyen Tu's dev blog`,
  description:
    'A personal space on the cloud where I document my programming journey, sharing lessons, insights, and resources for fellow developers.',
  language: 'en-us',
  codeForces: 'bumer1005',
  leetcode: 'ngntu10',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.ngntu10.tech',
  siteRepo: 'https://github.com/ngntu10/ngntu10.tech',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/ngntu102.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'phamnguyentu04@gmail.com',
  github: 'https://github.com/ngntu10',
  x: 'https://x.com/bumer1005',
  facebook: 'https://facebook.com/phamnguyentu04',
  youtube: 'https://www.youtube.com/@phamnguyentu4342',
  linkedin: 'https://www.linkedin.com/in/ngntu10',
  threads: 'https://www.threads.net/ngntu10',
  instagram: 'https://www.instagram.com/ngntu10',
  locale: 'en-US',
  stickyNav: true,
  goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/179720035-leo-huynh',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://analytics.ngntu10.tech/share/c9ErglxqzY5CQJ8g/ngntu10.tech',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/ngntu10.tech',
    paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/hta218',
  },
}
