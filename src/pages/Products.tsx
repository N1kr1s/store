import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import { type LoaderFunction } from 'react-router-dom';
import { customFetch, type ProductsResponse } from '../utils';

const url = '/products';

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponse> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<ProductsResponse>(url, { params });

  console.log(response);
  return { ...response.data };
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
