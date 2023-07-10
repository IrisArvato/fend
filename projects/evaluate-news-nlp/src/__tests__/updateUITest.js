import { updateUI } from '../client/js/updateUI'

describe('Should exist' , () => {
    test('It should return true', async () => {
        expect(updateUI).toBeDefined();
    });
});

describe('Should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof updateUI).toBe("function");
    });
});
