type IsString<T> = T extends string ? true : false;

type A = IsString<"value">;
type B = IsString<44>;

// =============================

type FilterStrings<T> = T extends string ? T : never;

type MixedTypes = "a" | 1 | "b" | 2 | "c" | 3;

type StringsOnly = FilterStrings<MixedTypes>;
