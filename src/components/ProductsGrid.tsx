import { Card, CardContent } from '@/components/ui/card';
import { productImages } from '@/lib/productImages';
import { formatAsDollars, ProductsResponse } from '@/utils';
import { Link, useLoaderData } from 'react-router-dom';

const ProductsGrid = () => {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {products.map((product) => {
        const { title, price } = product.attributes;
        const dollarsAmount = formatAsDollars(price);
        const image = productImages.find((img) => img.id === product.id)?.src;

        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className='p-4'>
                <img
                  src={image}
                  alt={title}
                  className='rounded-md h-64 md:h-48 w-full object-cover'
                />
                <div className='mt-4 text-center'>
                  <h2 className='text-xl font-semibold capitalize'>{title}</h2>
                  <p className='text-primary font-light mt-2'>
                    {dollarsAmount}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
