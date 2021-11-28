// Есть общая функция omit которая удаляет поле из объекта и возвращает его без этого поля

type FIXME<T extends Record<any, any>, K extends keyof T> = Omit<T, K>;

export const omit = <T extends Record<any, any>, K extends keyof T>(
  obj: T,
  keyToOmit: K
): FIXME<T, K> => {
  const { [keyToOmit]: _, ...withoutKey } = obj;
  return withoutKey;
};
