declare module '*?raw' {
  const content: string;
  export default content;
}
<<<<<<< HEAD
=======
declare module '*?url' {
  const content: string;
  export default content;
}
>>>>>>> a33bed2145f0bf6e26af696e5258746d84a4755d
declare module '*.html' {
  const content: string;
  export default content;
}
<<<<<<< HEAD
=======
declare module '*.md' {
  const content: string;
  export default content;
}
>>>>>>> a33bed2145f0bf6e26af696e5258746d84a4755d
declare module '*.css' {
  const content: unknown;
  export default content;
}
declare module '*.vue' {
  import { DefineComponent } from 'vue';
<<<<<<< HEAD
  const component: DefineComponent<{}, {}, any>;
=======
  const component: DefineComponent;
>>>>>>> a33bed2145f0bf6e26af696e5258746d84a4755d
  export default component;
}

declare const YAML: typeof import('yaml');

declare const z: typeof import('zod');
declare namespace z {
  export type infer<T> = import('zod').infer<T>;
  export type input<T> = import('zod').input<T>;
  export type output<T> = import('zod').output<T>;
}
