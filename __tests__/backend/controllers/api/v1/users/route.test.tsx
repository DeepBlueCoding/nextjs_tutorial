import { GET as getUsers } from '@/controllers/api/v1/users/route'

describe('/api/users', () => {
  test('GET returns an array of users', async () => {
    const response = await getUsers();

    const json = await response.json();
    expect(response.status).toEqual(200);
    expect(json).toEqual({
      message: [
        { userId: 1, firstName: 'John', lastName: 'Doe' },
        { userId: 2, firstName: 'Jane', lastName: 'Doe' }
      ]
    });
  })
});
