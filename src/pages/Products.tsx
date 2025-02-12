import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import { type LoaderFunction } from 'react-router-dom';
import { customFetch, type ProductsResponse } from '../utils';

const url = '/products';

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);

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
