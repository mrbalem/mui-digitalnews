import * as React from "react";
import { Helmet } from "react-helmet-async";

export interface SeoProps {
  /**
   * @description espeficia el titulo de la pagina
   */
  title: string;
  /**
   * @description especifica la descripción de la pagina
   */
  description: string;
  /**
   * @description especifica los keywords de la pagina para SEO
   */
  keywords?: string;
  children: React.ReactChild;
}

/**
 *  @version 1.0.0
 *  @author Rony - Mrvalem
 *  @description Template de las páginas, preparada para SEO.
 */

const Seo: React.SFC<SeoProps> = (props) => {
  const { children, title, description, keywords } = props;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <div>{children}</div>
    </>
  );
};

export default Seo;
