const api = require('./index');

describe('api', () => {
    describe('createApplicant', () => {
        it('should fetch from api/applicants/add', async () => {
            const mockSuccessResponse = {};
            const mockJsonPromise = Promise.resolve(mockSuccessResponse);
            const mockFetchPromise = Promise.resolve({
                json: () => mockJsonPromise,
            });
            jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);

            const result = await api.createApplicant({}, 'mytoken');
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch.mock.calls[0][0]).toEqual('http://test/applicants/add');
            expect(global.fetch.mock.calls[0][1]).toMatchSnapshot();
            expect(result).toEqual(mockSuccessResponse);
        });
    });
});
