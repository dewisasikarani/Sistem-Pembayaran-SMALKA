import { Helmet } from "react-helmet-async";

const Seo = ({ description, lang = "en", meta = [], title }) => {
  const metaDescription =
    description ||
    "Akses dan cari tahu informasi sistem pembayaran seluruh siswa di SMA Muhammadiyah Al - Kautsar PK Kartasura";
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={
        title
          ? `${title} | Sistem Pembayaran SMALKA`
          : `Sistem Pembayaran SMALKA`
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "Dewi Sasika Rani",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
