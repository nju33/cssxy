export type CssxyObject = {[P in keyof CSSStyleDeclaration]?: any};

export const cssxy = (original: CssxyObject = {} as any) => {
  return new Proxy<CssxyObject>(original, {
    get: (target, prop) => {
      if (!Reflect.has(target, prop)) {
        throw new Error(`${prop as any} is an unset property access`);
      }

      return () => Reflect.get(target, prop);
    },
    set: (target, prop, value) => {
      return Reflect.set(target, prop, value);
    }
  });
};
