import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import { type LoaderFunction } from 'react-router-dom';
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from '../utils';

const url = '/products';

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<ProductsResponse>(url, {
    params,
  });

  return { ...response.data, params };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
export default Products;
