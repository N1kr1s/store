import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Button type='submit' className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className='flex '>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Submitting...
        </span>
      ) : (
        text
      )}
    </Button>
  );
};
export default SubmitBtn;
