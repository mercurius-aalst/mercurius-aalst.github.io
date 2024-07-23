import { Helmet as ReactHelmet } from "react-helmet";

type Props = {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}

const baseProps: Props = {
  title: 'Mercurius Aalst',
  description: 'Mercurius is dé studentenclub bij uitstek voor de studenten aan de HOGENT stadscampus Aalst. Bij ons voel je je meteen thuis door onze familiale, vriendschappelijke sfeer. Het doel van onze club is namelijk studenten uit allerlei verschillende richtingen samenbrengen in tal van studentikoze activiteiten en een hechte vriendengroep vormen.',
  type: 'website',
  image: '/assets/images/ogImage.png'
}

const Helmet = (props: Props) => {
  const filledProps = {
    title: props.title ?? baseProps.title as string,
    description: props.description ?? baseProps.description as string,
    type: props.type ?? baseProps.type as string,
    image: props.image ?? baseProps.image as string,
  }
  return (
    <ReactHelmet>
      <title>{filledProps.title}</title>
      <meta name="description" content={filledProps.description} />
      <meta name="og:type" content={filledProps.type} />
      <meta name="og:description" content={filledProps.description} />
      <meta name="og:image" content={filledProps.image} />
    </ReactHelmet>
  );
}

export default Helmet;