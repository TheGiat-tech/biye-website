export type Language = 'en' | 'he';

export interface Translation {
  header: {
    logo: string;
    menu: {
      home: string;
      about: string;
      solution: string;
      investors: string;
      contact: string;
      langToggle: string;
    };
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    button: string;
  };
  about: {
    title: string;
    text: string;
  };
  problem: {
    title: string;
    text: string;
  };
  solution: {
    title: string;
    points: string[];
  };
  vision: {
    title: string;
    text: string;
  };
  investors: {
    title: string;
    text: string;
    subtitle: string;
    reasons: string[];
    cta: string;
  };
  media: {
    title: string;
    text: string;
  };
  contact: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    button: string;
    info: {
      title: string;
      email: string;
      address: string;
    };
  };
  footer: {
    company: {
      title: string;
      about: string;
      links: Array<{ label: string; href: string }>;
    };
    legal: {
      title: string;
      links: Array<{ label: string; href: string }>;
    };
    connect: {
      title: string;
      email: string;
    };
    copyright: string;
  };
  privacyPolicy: {
    title: string;
    lastUpdated: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  termsOfUse: {
    title: string;
    lastUpdated: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
}
