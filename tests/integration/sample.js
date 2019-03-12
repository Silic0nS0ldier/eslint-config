/**
 * A test function.
 * @param {string} param A string
 */
export function test(param)
{
    const theThing = "foo";

    return `${theThing} - ${param}`;
}

/**
 * A test class.
 */
export class Foo
{
    constructor()
    {
        this.thing = test("bar");
    }
}
