import { Card, CardContent } from '@/components/ui/card';
import { formatAsDollars, ProductsResponse } from '@/utils';
import { Link, useLoaderData } from 'react-router-dom';

const productImages = [
  { name: 'Lamp', src: '/lamp.jpg' },
  { name: 'coffeeTable', src: '/coffee_table.jpg' },
  { name: 'Bed', src: '/bed.jpg' },
];

const ProductsGrid = () => {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {products.map((product, idx) => {
        const { title, price } = product.attributes;
        const dollarsAmount = formatAsDollars(price);
        const image = productImages[idx].src;
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
