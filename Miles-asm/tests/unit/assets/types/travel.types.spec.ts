import {expectTypeOf, test} from 'vitest';
import type {TravelRow} from '~/assets/types/travel';

test('TravelRow work properly', () => {
  expectTypeOf(travelRow).not.toBeFunction();
  expectTypeOf(travelRow).toEqualTypeOf(travelRow);
});

// Fixstures
const travelRow: TravelRow = {
  id: 2,
  name: 'foo', 
  startDate: '01/01/2024', 
  endDate: '02/01/2024',  
  price: 500,
  image: 'bar.jpg',
  description: 'Lorem Ipsum',
  rating: 2
};