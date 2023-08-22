export const portfolioContents = {
  general: {
    title: 'Portfolio',
    desc: 'My past works range from small, full-stack personal projects to contributions to larger open-source projects. I enjoy, and am good at learning new concepts and trying them out in my projects. All projects below were planned and implemented by myself in whole or in part.',
  },
  sigmate: {
    title: 'Sigmate',
    subtitle: 'A wiki platform for the NFT community',
    easy: {
      h: 'Information in One Place',
      front: 'From real-time marketplace data to user-committed wiki content.',
      back: '',
    },
    reliable: {
      h: 'Cross-Checked and Scam-Free Content',
      front:
        'Both users and moderators can "verify", or "flag" any piece of information shared within the platform. The results, along with any changelogs to the content, are instantly shared to all users, allowing for easy distinction between true and sound facts, from fradulent/misleading fake news.',
      back: '',
    },
    valuation: {
      h: 'Integrated Asset Valuation',
      front:
        'Assets valuated based on both on/off-chain data, including utilities, funding, social hype, and more.',
      back: '',
    },
  },
  poolink: {
    title: 'Poolink',
    subtitle: 'Save, share and explore links',
  },
  yrems: {
    title: 'YREMS',
    subtitle: 'Event participant management system',
  },
};

export type PortfolioContents = typeof portfolioContents;
