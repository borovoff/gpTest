import {PrettyErrorPipe} from './pretty-error.pipe';

describe('PrettyErrorPipe', () => {
    it('create an instance', () => {
        const pipe = new PrettyErrorPipe();
        expect(pipe).toBeTruthy();
    });
});
