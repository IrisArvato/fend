import { handleSubmit } from '../client/js/formHandler'


describe('Should exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});
