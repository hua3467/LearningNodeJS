var request = require('request');

describe('calc', ()=>{
    it('shoule multiply 2 and 2', () => {
        expect(2*2).toBe(4);
    });
});

describe('get messages', () => {
    it('should return 200 ok', () => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it('should return a list that is not empty', () => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(res.body.length).toBeGreaterThan(0);
            done();
        });
    });
});