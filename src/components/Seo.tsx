import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Alex As A Service';
const BASE_URL = 'https://alexasaservice.com';

interface SeoProps {
  /** Page-level title — will be formatted as "Page | Site Name" (home page gets just Site Name) */
  title?: string;
  description: string;
  /** Path portion of the URL, e.g. "/" or "/about" */
  canonical: string;
  ogType?: 'website' | 'article';
}

export default function Seo({ title, description, canonical, ogType = 'website' }: SeoProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
