import { default as Head } from 'next/head';

const loadingFieldset = `
    @keyframes loading {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 100% 100%;
        }
    }

    fieldset[disabled=""] {
        opacity: 0.75;
    }

    fieldset::before {
        height: 1rem;
        content: '';
        display: block;
        background: linear-gradient(to right, #C564DB 0%, #002B54 50%, #C564DB 100%);
        margin: 0 0 1rem;
    }

    fieldset[aria-busy="true"]::before {
        background-size: 50% auto;
        animation: 0.5s loading linear infinite;
    }
`;

export const Meta: React.SFC<{}> = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Silly Shield</title>
        <style>
          {loadingFieldset}
        </style>
    </Head>
);
