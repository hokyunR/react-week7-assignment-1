import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  // postReview,
} from './api';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';
import RESTAURANT from '../../fixtures/restaurant';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(REGIONS);
    });

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual(REGIONS);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(CATEGORIES);
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(RESTAURANTS);
    });

    it('returns restaurants', async () => {
      const restaurants = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(restaurants).toEqual(RESTAURANTS);
    });
  });

  describe('fetchRestaurant', () => {
    beforeEach(() => {
      mockFetch(RESTAURANT);
    });

    it('returns restaurants', async () => {
      const restaurant = await fetchRestaurant({ restaurantId: 1 });

      expect(restaurant).toEqual(RESTAURANT);
    });
  });

  describe('postLogin', () => {
    beforeEach(() => {
      mockFetch({ accessToken: 'ACCESS_TOKEN' });
    });

    it('returns accessToken', async () => {
      const accessToken = await postLogin({
        email: 'tester@example.com',
        assword: 'test',
      });

      expect(accessToken).toEqual('ACCESS_TOKEN');
    });
  });

  // THINK: postReview 도 테스트해야하나?
  // 반환 값이 없음.. 반환 값을 state 값으로 보고 테스트해야하나?
  // describe('postReview', () => {
  //   beforeEach(() => {
  //     mockFetch({ accessToken: 'ACCESS_TOKEN' });
  //   });

  //   it('returns none?', async () => {
  //     await postReview({
  //       accessToken: 'ACCESS_TOKEN',
  //       restaurantId: '1',
  //       score: '5',
  //       description: 'GYU TEST',
  //     });
  //   });
  // });
});
