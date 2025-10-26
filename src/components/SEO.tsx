import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "CyberTech Experts - Job-Ready Cybersecurity Training & Career Upskilling",
  description = "Transform your career with job-ready cybersecurity training. Master ethical hacking, SOC operations, and penetration testing. OSCP, CEH, Security+ preparation with hands-on labs and expert mentorship.",
  keywords = "cybersecurity training, job ready course, career change, upskilling programs, SOC analyst training, ethical hacking, OSCP preparation, CEH certification, penetration testing, hands-on labs, cybersecurity career",
  image = "/cybertechexperts-logo.png",
  url = "https://cybertechexperts.org",
  type = "website",
  structuredData,
}) => {
  const siteUrl = "https://cybertechexperts.org";
  const fullUrl = url.startsWith("http") ? url : `${siteUrl}${url}`;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
