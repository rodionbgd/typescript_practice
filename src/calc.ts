// Задача состоит в том что написать калькулято для натуральных чисел, но только на типах!
// Ниже приведена заготовка
// Хочется поддержки сложения и вычитания, если хочется еще челленджа, то деление и умножение
// Из-за ограничений глубины вычислений поддержать все натуральные числа не получится, это нормально

type Length<T extends any[]> = T extends { length: infer L } ? L : never;
type BuildTuple<L, T extends any[] = []> = T extends { length: L }
  ? T
  : BuildTuple<L, [...T, any]>;

type FIXME<A, B> = Length<[...BuildTuple<A>, ...BuildTuple<B>]>;

type Equals<A, B> = A extends B ? (B extends A ? "success" : never) : never;

type Add<A, B> = FIXME<A, B>;

export type OnePlusOneTest = Equals<Add<1, 1>, 2>;
export type ThreePlusTwoTest = Equals<Add<3, 2>, 5>;
