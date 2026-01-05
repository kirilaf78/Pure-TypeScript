type IsString<T> = T extends string ? true : false;

type A = IsString<"value">;
type B = IsString<44>;

// =============================

type FilterStrings<T> = T extends string ? T : never;

type MixedTypes = "a" | 1 | "b" | 2 | "c" | 3;

type StringsOnly = FilterStrings<MixedTypes>;

// ===============================

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function getString(): string {
  return "Hello World!";
}

function getNumver(): number {
  return 77;
}

type StringReturnType = ReturnTypeOf<typeof getString>;
type NumberReturnType = ReturnTypeOf<typeof getNumver>;

// // Представь сложную функцию, которая возвращает объект с кучей данных
// async function createTestUser() {
//     return {
//         id: 1,
//         token: 'abc-123',
//         profile: {
//             name: 'Kiryl',
//             roles: ['admin', 'editor']
//         }
//     };
// }

// // Вытягиваем тип результата выполнения этой функции
// type TestUser = ReturnTypeOf<typeof createTestUser>;
// // Теперь TestUser — это Promise<{ id: number; token: string; ... }>

// // Можем использовать этот тип в тестах
// let globalUser: TestUser;

// async function setup() {
//     globalUser = await createTestUser();
//     console.log(globalUser.profile.name); // TS будет давать подсказки!
// }
