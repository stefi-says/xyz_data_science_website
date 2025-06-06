declare module 'react-ga4' {
  interface EventArgs {
    category?: string;
    action?: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
    transport?: 'beacon' | 'xhr' | 'image';
    [key: string]: any;
  }

  interface PageViewArgs {
    page?: string;
    title?: string;
    location?: string;
    [key: string]: any;
  }

  interface GAOptions {
    debug?: boolean;
    gaOptions?: any;
    titleCase?: boolean;
    gaAddress?: string;
    testMode?: boolean;
    gtagOptions?: any;
  }

  interface ReactGA {
    initialize: (trackingId: string | string[], options?: GAOptions) => void;
    set: (fieldsObject: any) => void;
    send: (fieldsObject: { hitType: string } & PageViewArgs) => void;
    pageview: (path: string, fields?: string[], callback?: () => void) => void;
    event: (args: EventArgs) => void;
    ga: (...args: any[]) => void;
    gtag: (...args: any[]) => void;
    outboundLink: (args: any, hitCallback: () => void) => void;
  }

  const ReactGA: ReactGA;
  export default ReactGA;
} 