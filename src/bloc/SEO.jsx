import { Helmet } from "react-helmet-async";

export function SEO({ title, description, keywords, image }) {
  const siteTitle = title ? `${title} | Название вашего сайта` : 'Название вашего сайта';
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={siteTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}