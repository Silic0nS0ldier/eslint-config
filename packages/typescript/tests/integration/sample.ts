/**
 * A test function.
 * @param {string} param A string
 */
export function test(param: string): string
{
    const theThing = "foo";

    return `${theThing} - ${param}`;
}

/**
 * A test class.
 */
export class Foo
{
    thing: string;

    constructor()
    {
        this.thing = test("bar");
    }
}
