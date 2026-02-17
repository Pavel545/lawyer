// components/StructuredData.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Services_data } from "../data/data_servises";

// Данные организации с двумя офисами
const organizationData = {
  name: "Проф-Экспертиза",
  url: "https://проф-экспертиза.рф",
  logo: "https://проф-экспертиза.рф/logo.png", // Убедитесь, что логотип существует
  telephone: "+7 916 539 93 90",
  email: "info@prof-expertiza.ru", // Добавьте ваш email
  
  // Основной офис (Москва)
  mainOffice: {
    name: "Центральный офис",
    address: {
      streetAddress: "пр-кт Мира, д. 102 к. 1, помещ. 3/7",
      addressLocality: "Москва",
      postalCode: "129626",
      addressCountry: "RU"
    },
    geo: {
      latitude: 55.7967, // Координаты Москвы (нужно уточнить для конкретного адреса)
      longitude: 37.6316
    }
  },
  
  // Дополнительный офис (Ульяновск)
  ulyanovskOffice: {
    name: "Доп. офис в Ульяновске",
    address: {
      streetAddress: "ул. Кирова, д.99",
      addressLocality: "Ульяновск",
      addressRegion: "Ульяновская область",
      postalCode: "432063",
      addressCountry: "RU"
    },
    geo: {
      latitude: 54.3172,
      longitude: 48.4038
    }
  },
  
  openingHours: "пн-пт с 10:00 до 20:00, Без выходных",
  
  sameAs: [
    "https://vk.com/prof_expertiza",
    "https://t.me/prof_expertiza"
  ],
  priceRange: "₽₽"
};

export function StructuredData({ type, data }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  // Organization Schema (с двумя офисами)
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${organizationData.url}/#organization`,
    "name": organizationData.name,
    "url": organizationData.url,
    "logo": {
      "@type": "ImageObject",
      "url": organizationData.logo
    },
    "address": [
      {
        "@type": "PostalAddress",
        "name": organizationData.mainOffice.name,
        "streetAddress": organizationData.mainOffice.address.streetAddress,
        "addressLocality": organizationData.mainOffice.address.addressLocality,
        "postalCode": organizationData.mainOffice.address.postalCode,
        "addressCountry": organizationData.mainOffice.address.addressCountry
      },
      {
        "@type": "PostalAddress",
        "name": organizationData.ulyanovskOffice.name,
        "streetAddress": organizationData.ulyanovskOffice.address.streetAddress,
        "addressLocality": organizationData.ulyanovskOffice.address.addressLocality,
        "addressRegion": organizationData.ulyanovskOffice.address.addressRegion,
        "postalCode": organizationData.ulyanovskOffice.address.postalCode,
        "addressCountry": organizationData.ulyanovskOffice.address.addressCountry
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": organizationData.telephone,
        "contactType": "customer service",
        "availableLanguage": ["Russian"],
        "areaServed": ["RU", "Москва", "Ульяновская область"]
      }
    ],
    "sameAs": organizationData.sameAs
  });

  // LocalBusiness Schema (основной офис в Москве)
  const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${organizationData.url}/#localbusiness`,
    "name": `${organizationData.name} (Центральный офис)`,
    "image": organizationData.logo,
    "url": organizationData.url,
    "telephone": organizationData.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": organizationData.mainOffice.address.streetAddress,
      "addressLocality": organizationData.mainOffice.address.addressLocality,
      "postalCode": organizationData.mainOffice.address.postalCode,
      "addressCountry": organizationData.mainOffice.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": organizationData.mainOffice.geo.latitude,
      "longitude": organizationData.mainOffice.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": organizationData.priceRange,
    "areaServed": [
      {
        "@type": "City",
        "name": "Москва"
      },
      {
        "@type": "State",
        "name": "Ульяновская область"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Приволжский федеральный округ"
      }
    ]
  });

  // BreadcrumbList Schema
  const getBreadcrumbSchema = () => {
    const breadcrumbs = [
      { name: "Главная", url: organizationData.url, position: 1 }
    ];

    let currentPath = "";
    pathnames.forEach((segment, index) => {
      currentPath += `/${segment}`;
      let name = segment;
      
      if (segment === "uslugi") name = "Услуги";
      else if (segment === "kontacts") name = "Контакты";
      else if (segment === "compani") name = "О компании";
      else if (segment === "privacy") name = "Политика конфиденциальности";
      else if (Services_data[segment]) name = Services_data[segment].name;
      
      breadcrumbs.push({
        name: name,
        url: `${organizationData.url}${currentPath}`,
        position: index + 2
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map(crumb => ({
        "@type": "ListItem",
        "position": crumb.position,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  };

  // Service Schema (для страниц услуг)
  const getServiceSchema = (serviceKey) => {
    const service = Services_data[serviceKey];
    if (!service) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${organizationData.url}/uslugi/${serviceKey}#service`,
      "name": service.name,
      "description": service.meta?.description || `Профессиональная ${service.rod} в Москве и Ульяновске`,
      "provider": {
        "@type": "Organization",
        "@id": `${organizationData.url}/#organization`
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Москва"
        },
        {
          "@type": "City",
          "name": "Ульяновск"
        },
        {
          "@type": "State",
          "name": "Ульяновская область"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Приволжский федеральный округ"
        }
      ],
      "serviceType": service.name,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "RUB",
          "price": service.tab?.[0]?.items?.[1]?.cost?.replace(/[^0-9]/g, "") || "1500"
        }
      },
      "hasOfferCatalog": service.tab ? {
        "@type": "OfferCatalog",
        "name": "Прайс-лист",
        "itemListElement": service.tab[0]?.items?.map((item, idx) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": item.name
          },
          "price": item.cost.replace(/[^0-9]/g, "") || "0",
          "priceCurrency": "RUB"
        })) || []
      } : undefined
    };
  };

  // FAQPage Schema
  const getFAQSchema = (faqs) => {
    if (!faqs || !faqs.length) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Выбор схемы в зависимости от типа
  const getSchema = () => {
    switch (type) {
      case "organization":
        return getOrganizationSchema();
      case "localbusiness":
        return getLocalBusinessSchema();
      case "breadcrumb":
        return getBreadcrumbSchema();
      case "service":
        if (pathnames[0] === "uslugi" && pathnames[1]) {
          return getServiceSchema(pathnames[1]);
        }
        return null;
      case "faq":
        return getFAQSchema(data?.faqs);
      default:
        return null;
    }
  };

  const schema = getSchema();
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}