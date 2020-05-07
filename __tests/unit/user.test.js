const bcrypt = require('bcryptjs');

const factory = require('../factories');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => await truncate());

    it('should encrypt user password', async () => {
        const user = await factory.create('User', {
            password: '123123'
        });
        
        expect(await bcrypt.compare('123123', user.password_hash)).toBeTruthy();
    });
});
